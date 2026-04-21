const fs = require('fs');
const content = fs.readFileSync('frontend/js/data/foods.js', 'utf8');
const items = content.match(/(image|\"image\"):\s*(\"[^\"]+\"|null)/g);
if (!items) {
  console.log('No image fields found');
  process.exit();
}
const stats = { null: 0, url: 0, local: 0 };
items.forEach(item => {
  const val = item.split(':')[1].trim();
  if (val === 'null') stats.null++;
  else if (val.includes('http')) stats.url++;
  else stats.local++;
});
console.log(stats);
