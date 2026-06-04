import { performAggregationSync } from '@/lib/sync/aggregationSync';

export async function POST() {
  try {
    const result = await performAggregationSync();
    return Response.json(result);
  } catch (error) {
    console.error('[Sync] Error:', error);
    return Response.json({ error: 'Sync failed' }, { status: 500 });
  }
}