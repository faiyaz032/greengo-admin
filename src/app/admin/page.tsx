'use client';

import { useState, useEffect, useCallback } from 'react';
import { UserTable } from '@/components/admin/UserTable';
import { SyncButton } from '@/components/admin/SyncButton';
import { Input } from '@/components/ui/input';
import { Search, Users, LayoutGrid, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

const PLATFORM_TABS = [
  { value: 'all', label: 'All Users', color: 'text-slate-600' },
  { value: 'square', label: 'Square', color: 'text-blue-600' },
  { value: 'quote', label: 'Quote', color: 'text-violet-600' },
  { value: 'wishlist', label: 'Wishlist', color: 'text-emerald-600' },
];

export default function AdminPage() {
  const [users, setUsers] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [app, setApp] = useState('all');
  const [isLoading, setIsLoading] = useState(true);

  const fetchUsers = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`/api/admin/users?page=${page}&search=${search}&app=${app}`);
      const data = await res.json();
      if (res.ok) {
        setUsers(data.users);
        setTotal(data.pagination.total);
      }
    } catch (error) {
      console.error('Failed to fetch users:', error);
    } finally {
      setIsLoading(false);
    }
  }, [page, search, app]);

  useEffect(() => { fetchUsers(); }, [fetchUsers]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-violet-50/20">
      {/* Hero Header */}
      <div className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-blue-500 to-violet-600 p-2.5 rounded-xl shadow-md">
              <LayoutGrid className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight text-slate-900">GreenGo Admin</h1>
              <p className="text-xs text-slate-500">Aggregated SaaS dashboard</p>
            </div>
          </div>
          <SyncButton onComplete={fetchUsers} />
        </div>
      </div>

      <div className="container mx-auto px-6 py-8 space-y-6">
        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Total Users', value: total, icon: Users, from: 'from-blue-500', to: 'to-blue-600' },
            { label: 'Page', value: page, icon: TrendingUp, from: 'from-violet-500', to: 'to-violet-600' },
            { label: 'Showing', value: users.length, icon: LayoutGrid, from: 'from-emerald-500', to: 'to-emerald-600' },
            { label: 'Per Page', value: 50, icon: Search, from: 'from-amber-500', to: 'to-orange-500' },
          ].map((stat) => (
            <div key={stat.label} className="bg-white rounded-xl border border-slate-100 shadow-sm p-4 flex items-center gap-3">
              <div className={`bg-gradient-to-br ${stat.from} ${stat.to} p-2 rounded-lg shadow-sm`}>
                <stat.icon className="h-4 w-4 text-white" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">{stat.label}</p>
                <p className="text-xl font-bold text-slate-800">{stat.value.toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input
              placeholder="Search by email..."
              className="pl-10 bg-slate-50 border-slate-200 focus:bg-white"
              value={search}
              onChange={(e) => { setSearch(e.target.value); setPage(1); }}
            />
          </div>
          <Tabs value={app} onValueChange={(val) => { setApp(val); setPage(1); }}>
            <TabsList className="bg-slate-100">
              {PLATFORM_TABS.map(tab => (
                <TabsTrigger key={tab.value} value={tab.value} className={`data-[state=active]:text-slate-900 ${tab.color}`}>
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
          {isLoading ? (
            <div className="flex flex-col justify-center items-center py-24 gap-3">
              <div className="animate-spin rounded-full h-10 w-10 border-2 border-violet-500 border-t-transparent" />
              <p className="text-sm text-slate-500">Loading users...</p>
            </div>
          ) : (
            <UserTable users={users} />
          )}
        </div>

        {/* Pagination */}
        {!isLoading && (
          <div className="flex items-center justify-between text-sm">
            <p className="text-slate-500">
              Showing <span className="font-semibold text-slate-700">{users.length}</span> of <span className="font-semibold text-slate-700">{total}</span> users
            </p>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="border-slate-200" onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}>
                ← Previous
              </Button>
              <span className="flex items-center justify-center px-3 text-xs font-medium text-slate-600 bg-slate-50 rounded-md border border-slate-200">
                Page {page}
              </span>
              <Button variant="outline" size="sm" className="border-slate-200" onClick={() => setPage(p => p + 1)} disabled={users.length < 50}>
                Next →
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
