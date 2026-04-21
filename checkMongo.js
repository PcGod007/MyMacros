const mongoose = require('mongoose');
const dotenv = require('dotenv');
const DayLog = require('./backend/models/DayLog');
const WeightLog = require('./backend/models/WeightLog');
const User = require('./backend/models/User');

dotenv.config({ path: './backend/.env' });

async function checkDatabase() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to MongoDB.');

        const users = await User.find({});
        console.log(`\n--- Found ${users.length} User(s) ---`);

        const dayLogs = await DayLog.find({});
        console.log(`\n--- Found ${dayLogs.length} DayLog(s) ---`);
        dayLogs.forEach(log => {
            console.log(`User: ${log.user}, Date: ${log.date}, Entries: ${log.entries.length}`);
            if (log.entries.length > 0) {
                console.log(`  First item: ${log.entries[0].foodInfo?.name || 'Unknown food'} (${log.entries[0].meal})`);
            }
        });

        const weightLogs = await WeightLog.find({});
        console.log(`\n--- Found ${weightLogs.length} WeightLog(s) ---`);
        weightLogs.forEach(log => {
            console.log(`User: ${log.user}, Total Weight Entries: ${log.entries.length}`);
            if (log.entries.length > 0) {
                console.log(`  Latest weight: ${log.entries[log.entries.length - 1].weight} on ${log.entries[log.entries.length - 1].date}`);
            }
        });

        process.exit(0);
    } catch (error) {
        console.error('Error connecting to DB:', error);
        process.exit(1);
    }
}

checkDatabase();
