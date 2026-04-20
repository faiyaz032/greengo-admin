import { performAggregationSync } from '@/lib/sync/aggregationSync';

export async function GET() {
  try {
    await performAggregationSync();
    return Response.json({ success: true });
  } catch (error) {
    console.error('[Cron] Sync error:', error);
    return Response.json({ error: 'Sync failed' }, { status: 500 });
  }
}