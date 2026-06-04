'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { 
  Search, 
  Mail, 
  MessageSquare, 
  Calendar, 
  ArrowLeft, 
  Copy, 
  Check, 
  ExternalLink,
  Sparkles,
  Layers,
  Inbox
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';

const SOURCE_TABS = [
  { value: 'all', label: 'All Messages', color: 'text-slate-600' },
  { value: 'square', label: 'Square Donations', color: 'text-blue-600' },
  { value: 'quote', label: 'Quote Plugin', color: 'text-violet-600' },
  { value: 'wishlist', label: 'Wishlist Flow', color: 'text-emerald-600' },
];

export default function ContactsPage() {
  const [messages, setMessages] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [source, setSource] = useState('all');
  const [isLoading, setIsLoading] = useState(true);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const fetchMessages = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`/api/admin/contacts?page=${page}&search=${search}&source=${source}`);
      const data = await res.json();
      if (res.ok) {
        setMessages(data.messages);
        setTotal(data.pagination.total);
      }
    } catch (error) {
      console.error('Failed to fetch messages:', error);
      toast.error('Failed to load contact messages');
    } finally {
      setIsLoading(false);
    }
  }, [page, search, source]);

  useEffect(() => {
    fetchMessages();
  }, [fetchMessages]);

  const handleCopyEmail = (email: string, id: string) => {
    navigator.clipboard.writeText(email);
    setCopiedId(id);
    toast.success('Email address copied!');
    setTimeout(() => setCopiedId(null), 2000);
  };

  const getSourceBadgeColor = (src: string) => {
    const s = src.toLowerCase();
    if (s.includes('wishlist')) return 'bg-emerald-50 text-emerald-700 border-emerald-200';
    if (s.includes('quote')) return 'bg-violet-50 text-violet-700 border-violet-200';
    if (s.includes('square') || s.includes('donations')) return 'bg-blue-50 text-blue-700 border-blue-200';
    return 'bg-slate-50 text-slate-700 border-slate-200';
  };

  const getSourceDisplay = (src: string) => {
    const s = src.toLowerCase();
    if (s.includes('wishlist')) return 'Wishlist Flow';
    if (s.includes('quote')) return 'Quote Plugin';
    if (s.includes('square')) return 'Square Donations';
    return src;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Stats computation
  const stats = {
    total,
    wishlist: messages.filter((m: any) => m.source.toLowerCase().includes('wishlist')).length,
    quote: messages.filter((m: any) => m.source.toLowerCase().includes('quote')).length,
    square: messages.filter((m: any) => m.source.toLowerCase().includes('square')).length,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-violet-50/20">
      {/* Header */}
      <div className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/admin">
              <Button variant="ghost" size="icon" className="rounded-lg border border-slate-100 hover:bg-slate-100/50">
                <ArrowLeft className="h-4 w-4 text-slate-600" />
              </Button>
            </Link>
            <div className="bg-gradient-to-br from-blue-500 to-violet-600 p-2.5 rounded-xl shadow-md">
              <Inbox className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight text-slate-900">Contact Messages</h1>
              <p className="text-xs text-slate-500">Customer feedback and enquiries</p>
            </div>
          </div>
          <Link href="/admin">
            <Button variant="outline" className="border-slate-200 shadow-sm text-slate-700 hover:text-slate-900">
              Users Dashboard
            </Button>
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8 space-y-6">
        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Total Messages', value: total, icon: MessageSquare, from: 'from-blue-500', to: 'to-blue-600' },
            { label: 'Wishlist Flow', value: stats.wishlist, icon: Sparkles, from: 'from-emerald-500', to: 'to-emerald-600' },
            { label: 'Quote Plugin', value: stats.quote, icon: Layers, from: 'from-violet-500', to: 'to-violet-600' },
            { label: 'Square Donations', value: stats.square, icon: Mail, from: 'from-amber-500', to: 'to-orange-500' },
          ].map((stat) => (
            <div key={stat.label} className="bg-white rounded-xl border border-slate-100 shadow-sm p-4 flex items-center gap-3">
              <div className={`bg-gradient-to-br ${stat.from} ${stat.to} p-2 rounded-lg shadow-sm`}>
                <stat.icon className="h-4 w-4 text-white" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">{stat.label}</p>
                <p className="text-xl font-bold text-slate-800">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input
              placeholder="Search by name, email, or message..."
              className="pl-10 bg-slate-50 border-slate-200 focus:bg-white"
              value={search}
              onChange={(e) => { setSearch(e.target.value); setPage(1); }}
            />
          </div>
          <Tabs value={source} onValueChange={(val) => { setSource(val); setPage(1); }}>
            <TabsList className="bg-slate-100">
              {SOURCE_TABS.map(tab => (
                <TabsTrigger key={tab.value} value={tab.value} className={`data-[state=active]:text-slate-900 ${tab.color}`}>
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {/* Messages List */}
        <div className="space-y-4">
          {isLoading ? (
            <div className="flex flex-col justify-center items-center py-24 gap-3 bg-white rounded-xl border border-slate-100 shadow-sm">
              <div className="animate-spin rounded-full h-10 w-10 border-2 border-violet-500 border-t-transparent" />
              <p className="text-sm text-slate-500">Loading messages...</p>
            </div>
          ) : messages.length === 0 ? (
            <div className="flex flex-col justify-center items-center py-24 bg-white rounded-xl border border-slate-100 shadow-sm text-center px-4">
              <div className="bg-slate-50 p-4 rounded-full border border-slate-100 mb-4">
                <MessageSquare className="h-8 w-8 text-slate-400" />
              </div>
              <h3 className="text-base font-semibold text-slate-800">No messages found</h3>
              <p className="text-sm text-slate-500 mt-1 max-w-xs">
                No contact form submissions matched your search filters.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {messages.map((msg: any) => (
                <div 
                  key={msg.id} 
                  className="bg-white rounded-2xl border border-slate-100 hover:border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col justify-between"
                >
                  <div className="p-6 space-y-4">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-50 to-violet-50 border border-slate-100 flex items-center justify-center font-semibold text-slate-700">
                          {msg.name.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-800 leading-tight">{msg.name}</h4>
                          <p className="text-xs text-slate-500 mt-0.5">{msg.email}</p>
                        </div>
                      </div>
                      <Badge className={`border shadow-none ${getSourceBadgeColor(msg.source)}`}>
                        {getSourceDisplay(msg.source)}
                      </Badge>
                    </div>

                    {/* Message Body */}
                    <div className="bg-slate-50/50 rounded-xl p-4 border border-slate-100/50">
                      <p className="text-sm text-slate-600 whitespace-pre-wrap leading-relaxed">
                        {msg.message}
                      </p>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="bg-slate-50/50 border-t border-slate-100 px-6 py-3 flex items-center justify-between text-xs text-slate-500">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5 text-slate-400" />
                      <span>{formatDate(msg.createdAt)}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => handleCopyEmail(msg.email, msg.id)}
                        className="h-8 px-2 text-slate-500 hover:text-slate-800 rounded-md"
                      >
                        {copiedId === msg.id ? (
                          <Check className="h-3.5 w-3.5 text-emerald-600 mr-1" />
                        ) : (
                          <Copy className="h-3.5 w-3.5 mr-1" />
                        )}
                        Copy Email
                      </Button>
                      <a href={`mailto:${msg.email}?subject=Re: Contact from ${getSourceDisplay(msg.source)}`}>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="h-8 px-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50/50 rounded-md"
                        >
                          <ExternalLink className="h-3.5 w-3.5 mr-1" />
                          Reply
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Pagination */}
        {!isLoading && messages.length > 0 && (
          <div className="flex items-center justify-between text-sm">
            <p className="text-slate-500">
              Showing <span className="font-semibold text-slate-700">{messages.length}</span> of <span className="font-semibold text-slate-700">{total}</span> messages
            </p>
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                size="sm" 
                className="border-slate-200 shadow-sm" 
                onClick={() => setPage(p => Math.max(1, p - 1))} 
                disabled={page === 1}
              >
                ← Previous
              </Button>
              <span className="flex items-center justify-center px-3 text-xs font-medium text-slate-600 bg-slate-50 rounded-md border border-slate-200">
                Page {page}
              </span>
              <Button 
                variant="outline" 
                size="sm" 
                className="border-slate-200 shadow-sm" 
                onClick={() => setPage(p => p + 1)} 
                disabled={messages.length < 50}
              >
                Next →
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
