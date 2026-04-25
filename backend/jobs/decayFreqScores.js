const cron = require('node-cron');
const UserFoodStats = require('../models/UserFoodStats');

/**
 * Nightly freq-score decay job.
 * Runs at 3:00 AM server time.
 * Uses Mongo aggregation pipeline update — all computation stays server-side.
 *
 * Formula: freqScore = logCount × exp(-daysSinceLastLogged / 30)
 */
function startDecayJob() {
    cron.schedule('0 3 * * *', async () => {
        console.log('[Cron] Starting freqScore decay...');
        try {
            await UserFoodStats.updateMany(
                {},
                [
                    {
                        $set: {
                            freqScore: {
                                $multiply: [
                                    '$logCount',
                                    {
                                        $exp: {
                                            $multiply: [
                                                -1,
                                                {
                                                    $divide: [
                                                        {
                                                            $dateDiff: {
                                                                startDate: '$lastLoggedAt',
                                                                endDate: '$$NOW',
                                                                unit: 'day'
                                                            }
                                                        },
                                                        30
                                                    ]
                                                }
                                            ]
                                        }
                                    }
                                ]
                            }
                        }
                    }
                ]
            );
            console.log('[Cron] freqScore decay complete.');
        } catch (err) {
            console.error('[Cron] freqScore decay failed:', err.message);
        }
    });

    console.log('⏰  Freq-score decay cron scheduled (daily @ 3:00 AM)');
}

module.exports = { startDecayJob };
