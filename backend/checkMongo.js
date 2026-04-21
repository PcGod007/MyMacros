const mongoose = require('mongoose');
const dotenv = require('dotenv');
const DayLog = require('./models/DayLog');

dotenv.config({ path: './.env' });

async function checkDatabase() {
    try {
        await mongoose.connect(process.env.MONGO_URI);

        const dayLogs = await DayLog.find({});
        dayLogs.forEach(log => {
            console.log(`\nDate: ${log.date}, Total Entries: ${log.entries.length}`);
            if (log.entries.length > 0) {
                // Showing all foods instead of just the first one!
                log.entries.forEach((entry, idx) => {
                     console.log(`  ${idx + 1}. ${entry.foodName} (${entry.meal}) - ${entry.macros.calories} kcal`);
                });
            }
        });

        process.exit(0);
    } catch (error) {
        console.error('Error connecting to DB:', error);
        process.exit(1);
    }
}

checkDatabase();
