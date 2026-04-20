'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { RefreshCw } from 'lucide-react';
import { toast } from 'sonner';

interface SyncButtonProps {
  onComplete?: () => void;
}

export function SyncButton({ onComplete }: SyncButtonProps) {
  const [isSyncing, setIsSyncing] = useState(false);

  const handleSync = async () => {
    setIsSyncing(true);
    const toastId = toast.loading('Syncing data from all apps...');

    try {
      const res = await fetch('/api/admin/sync', {
        method: 'POST',
      });

      const data = await res.json();

      if (res.ok) {
        toast.success(`Sync complete! ${data.syncedCount} users aggregated.`, { id: toastId });
        if (onComplete) onComplete();
      } else {
        toast.error(`Sync failed: ${data.error || 'Unknown error'}`, { id: toastId });
      }
    } catch (error) {
      toast.error('Failed to trigger sync', { id: toastId });
    } finally {
      setIsSyncing(false);
    }
  };

  return (
    <Button 
      variant="outline" 
      onClick={handleSync} 
      disabled={isSyncing}
      className="gap-2"
    >
      <RefreshCw className={`h-4 w-4 ${isSyncing ? 'animate-spin' : ''}`} />
      {isSyncing ? 'Syncing...' : 'Sync Now'}
    </Button>
  );
}
