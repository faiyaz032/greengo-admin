'use client';

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { buttonVariants } from '@/components/ui/button';
import { format } from 'date-fns';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface UserTableProps {
  users: any[];
}

function PlatformBadges({ user }: { user: any }) {
  const platforms = [
    user.squareDonationsUsers?.length > 0 && { label: 'Square', className: 'bg-blue-50 text-blue-700 border-blue-200' },
    user.quotePluginUsers?.length > 0 && { label: 'Quote', className: 'bg-violet-50 text-violet-700 border-violet-200' },
    user.wishlistFlowUsers?.length > 0 && { label: 'Wishlist', className: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
  ].filter(Boolean) as { label: string; className: string }[];

  if (platforms.length === 0) return <span className="text-slate-400 text-sm">—</span>;
  return (
    <div className="flex flex-wrap gap-1.5">
      {platforms.map((p) => (
        <Badge key={p.label} variant="outline" className={cn('text-[11px] font-semibold px-2 h-5', p.className)}>
          {p.label}
        </Badge>
      ))}
    </div>
  );
}

export function UserTable({ users }: UserTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow className="bg-slate-50/80 hover:bg-slate-50/80">
          <TableHead className="text-slate-500 font-semibold text-xs uppercase tracking-wide pl-6">Email</TableHead>
          <TableHead className="text-slate-500 font-semibold text-xs uppercase tracking-wide">Platform</TableHead>
          <TableHead className="text-slate-500 font-semibold text-xs uppercase tracking-wide">Joined</TableHead>
          <TableHead className="text-slate-500 font-semibold text-xs uppercase tracking-wide text-right pr-6">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.length === 0 ? (
          <TableRow>
            <TableCell colSpan={4} className="text-center py-16 text-slate-400">
              No users found. Try syncing or adjusting your search.
            </TableCell>
          </TableRow>
        ) : (
          users.map((user) => (
            <TableRow key={user.email} className="hover:bg-blue-50/30 transition-colors group">
              <TableCell className="font-medium text-slate-800 pl-6">
                {user.email}
              </TableCell>
              <TableCell><PlatformBadges user={user} /></TableCell>
              <TableCell className="text-sm text-slate-500 whitespace-nowrap">
                {user.summary?.earliestJoinedAt
                  ? format(new Date(user.summary.earliestJoinedAt), 'MMM d, yyyy')
                  : '—'}
              </TableCell>
              <TableCell className="text-right pr-6">
                <Link
                  href={`/admin/users/${encodeURIComponent(user.email)}`}
                  className={cn(
                    buttonVariants({ variant: 'ghost', size: 'sm' }),
                    'gap-1.5 text-slate-600 hover:text-violet-700 hover:bg-violet-50 group-hover:opacity-100'
                  )}
                >
                  View <ArrowRight className="h-3 w-3" />
                </Link>
              </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  );
}
