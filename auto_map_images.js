/**
 * auto_map_images.js
 * 
 * Run this AFTER you've dropped new AI-generated images into:
 *   frontend/assets/food/items/
 * 
 * It will automatically scan the folder and update foods.js
 * to point each matching food item to its local image.
 * 
 * Usage: node auto_map_images.js
 */

const fs = require('fs');
const path = require('path');

const ASSETS_PATH = path.join(__dirname, 'frontend', 'assets', 'food', 'items');
const FOODS_FILE  = path.join(__dirname, 'frontend', 'js', 'data', 'foods.js');
const CSV_FILE    = path.join(__dirname, 'ai_image_prompts.csv');

// ── Step 1: read the CSV mapping (id -> filename) ────────────────────
function readCsvMapping() {
    const lines = fs.readFileSync(CSV_FILE, 'utf8').split('\n').slice(1); // skip header
    const map = {}; // id -> filename
    for (const line of lines) {
        if (!line.trim()) continue;
        // CSV columns: "id","name","filename","prompt"  (quoted)
        const cols = [];
        let cur = '', inQ = false;
        for (const ch of line) {
            if (ch === '"') { inQ = !inQ; }
            else if (ch === ',' && !inQ) { cols.push(cur); cur = ''; }
            else { cur += ch; }
        }
        cols.push(cur);
        const [id, , filename] = cols;
        if (id && filename) map[id] = filename;
    }
    return map;
}

// ── Step 2: find which files actually exist on disk ───────────────────
function getExistingFiles() {
    const files = fs.readdirSync(ASSETS_PATH);
    const map = new Map();
    for (const f of files) {
        const base = f.replace(/\.(png|jpg|jpeg|webp)+$/ig, '');
        map.set(base, f);
    }
    return map;
}

// ── Step 3: update foods.js ───────────────────────────────────────────
function updateFoodsJs(idToFile, existingFiles) {
    let content = fs.readFileSync(FOODS_FILE, 'utf8');
    const idRegex = /(id|"id"):\s*["']([^"']+)["']/g;
    let match;
    let updates = [];
    let updatedCount = 0;

    while ((match = idRegex.exec(content)) !== null) {
        const id    = match[2];
        const origFilename = idToFile[id];
        if (!origFilename) continue;
        const base = origFilename.replace(/\.(png|jpg|jpeg|webp)+$/ig, '');
        const filename = existingFiles.get(base);
        if (!filename) continue;

        const startIdx = match.index;
        let openBracePos = -1;
        for (let i = startIdx; i >= 0; i--) {
            if (content[i] === '{') { openBracePos = i; break; }
        }
        let closeBracePos = -1;
        let balance = 1;
        for (let i = startIdx; i < content.length; i++) {
            if (content[i] === '{') balance++;
            if (content[i] === '}') balance--;
            if (balance === 0) { closeBracePos = i; break; }
        }
        if (openBracePos === -1 || closeBracePos === -1) continue;

        const block = content.slice(openBracePos, closeBracePos + 1);
        const imageRegex = /(image|"image"):\s*(null|["']([^"']+)["'])/;
        let updatedBlock;

        // Only update if currently null (don't overwrite already-correct images)
        const imageMatch = block.match(imageRegex);
        if (imageMatch && imageMatch[2] !== 'null') continue; // already has image, skip

        if (block.match(imageRegex)) {
            updatedBlock = block.replace(imageRegex, `$1: "${filename}"`);
        } else {
            const lastBrace = block.lastIndexOf('}');
            updatedBlock = block.slice(0, lastBrace).trim() + `, image: "${filename}" }`;
        }
        updates.push({ start: openBracePos, end: closeBracePos + 1, block: updatedBlock });
        updatedCount++;
    }

    // Apply updates in reverse order to preserve offsets
    updates.sort((a, b) => b.start - a.start);
    for (const u of updates) {
        content = content.slice(0, u.start) + u.block + content.slice(u.end);
    }

    fs.writeFileSync(FOODS_FILE, content);
    return updatedCount;
}

// ── Main ─────────────────────────────────────────────────────────────
const idToFile     = readCsvMapping();
const existingFiles = getExistingFiles();

const getBase = (filename) => filename.replace(/\.(png|jpg|jpeg|webp)+$/ig, '');

// Show status
const pending = Object.entries(idToFile).filter(([id, file]) => !existingFiles.has(getBase(file)));
const ready   = Object.entries(idToFile).filter(([id, file]) =>  existingFiles.has(getBase(file)));

console.log(`\n📁 Images in assets folder : ${existingFiles.size}`);
console.log(`✅ Images ready to map      : ${ready.length}`);
console.log(`⏳ Images still missing     : ${pending.length}`);

if (ready.length === 0) {
    console.log('\n⚠️  No new images found yet. Drop your generated images into:');
    console.log(`   ${ASSETS_PATH}`);
    console.log('   Then run this script again.\n');
    process.exit(0);
}

console.log('\nMapping images to database...');
const count = updateFoodsJs(idToFile, existingFiles);
console.log(`✅ Successfully mapped ${count} new images to foods.js!\n`);

if (pending.length > 0) {
    console.log('📋 Still missing images for:');
    pending.slice(0, 20).forEach(([id, file]) => console.log(`   ${id} -> ${file}`));
    if (pending.length > 20) console.log(`   ... and ${pending.length - 20} more.`);
}
