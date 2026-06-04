'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { UserDetailTabs } from '@/components/admin/UserDetailTabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Mail, Clock, RefreshCw, Users } from 'lucide-react';
import { format, formatDistanceToNow } from 'date-fns';

export default function UserDetailPage() {
  const { email } = useParams();
  const router = useRouter();
  const [userView, setUserView] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchUserDetail = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`/api/admin/users/${email}`);
      const data = await res.json();
      if (res.ok) setUserView(data);
    } catch (error) {
      console.error('Failed to fetch user detail:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => { fetchUserDetail(); }, [email]);

  if (isLoading) return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-violet-50/20 flex justify-center items-center">
      <div className="flex flex-col items-center gap-3">
        <div className="animate-spin rounded-full h-10 w-10 border-2 border-violet-500 border-t-transparent" />
        <p className="text-sm text-slate-500">Loading profile...</p>
      </div>
    </div>
  );

  if (!userView) return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-violet-50/20 flex flex-col justify-center items-center gap-4">
      <div className="bg-white rounded-2xl border shadow-md p-10 text-center max-w-md space-y-3">
        <div className="bg-red-50 w-14 h-14 rounded-full flex items-center justify-center mx-auto">
          <Mail className="h-7 w-7 text-red-400" />
        </div>
        <h1 className="text-xl font-bold text-slate-900">User Not Found</h1>
        <p className="text-slate-500 text-sm">{decodeURIComponent(email as string)} is not in our aggregated database.</p>
        <Button onClick={() => router.push('/admin')} className="mt-2 bg-gradient-to-r from-blue-500 to-violet-600 text-white">
          <ArrowLeft className="h-4 w-4 mr-2" /> Back to Dashboard
        </Button>
      </div>
    </div>
  );

  const platforms = [
    userView.squareDonationsUsers?.length > 0 && { label: 'Square', cls: 'bg-blue-100 text-blue-700 border-blue-200' },
    userView.quotePluginUsers?.length > 0 && { label: 'Quote Plugin', cls: 'bg-violet-100 text-violet-700 border-violet-200' },
    userView.wishlistFlowUsers?.length > 0 && { label: 'Wishlist Flow', cls: 'bg-emerald-100 text-emerald-700 border-emerald-200' },
  ].filter(Boolean) as { label: string; cls: string }[];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-violet-50/20">
      {/* Header */}
      <div className="border-b bg-white/80 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Button variant="ghost" onClick={() => router.push('/admin')} className="gap-2 text-slate-600 hover:text-slate-900">
            <ArrowLeft className="h-4 w-4" /> Back to Dashboard
          </Button>
          <Button variant="outline" size="sm" onClick={fetchUserDetail} className="gap-2 border-slate-200">
            <RefreshCw className="h-3 w-3" /> Refresh
          </Button>
        </div>
      </div>

      {/* Profile Hero */}
      <div className="bg-gradient-to-r from-blue-600 via-violet-600 to-purple-700 text-white">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-5">
            {/* Avatar */}
            <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center shadow-lg text-2xl font-bold">
              {decodeURIComponent(email as string)[0].toUpperCase()}
            </div>
            <div className="flex-1 space-y-2">
              <h1 className="text-2xl font-bold tracking-tight">{decodeURIComponent(email as string)}</h1>
              <div className="flex flex-wrap items-center gap-2">
                {platforms.map(p => (
                  <span key={p.label} className="bg-white/20 backdrop-blur text-white text-xs font-semibold px-2.5 py-0.5 rounded-full border border-white/30">
                    {p.label}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-end gap-1 text-sm text-white/80">
              <div className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" />
                <span>Synced {formatDistanceToNow(new Date(userView.lastSyncedAt), { addSuffix: true })}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Users className="h-3.5 w-3.5" />
                <span>{platforms.length} platform{platforms.length !== 1 ? 's' : ''}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-8">
        <UserDetailTabs userView={userView} />
      </div>
    </div>
  );
}
