import { NextResponse } from 'next/server';
import { performAggregationSync } from '@/lib/sync/aggregationSync';

export async function POST() {
  try {
    const result = await performAggregationSync();
    
    if (result.success) {
      return NextResponse.json(result);
    } else {
      return NextResponse.json(result, { status: 500 });
    }
  } catch (error) {
    console.error('Sync API Error:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}
