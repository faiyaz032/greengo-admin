import cron from 'node-cron';
import { performAggregationSync } from './aggregationSync';

let isJobRunning = false;

export function initCronJob() {
  if (typeof window !== 'undefined') return;

  // console.log('[Cron] Initializing sync job (every 5 minutes)');
  
  // Run every 5 minutes
  cron.schedule('*/5 * * * *', async () => {
    if (isJobRunning) {
      console.log('[Cron] Sync already in progress, skipping...');
      return;
    }

    isJobRunning = true;
    try {
      await performAggregationSync();
    } catch (error) {
      console.error('[Cron] Error in scheduled sync:', error);
    } finally {
      isJobRunning = false;
    }
  });
}
