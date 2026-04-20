'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { LayoutGrid, Lock } from 'lucide-react';

export default function LoginPage() {
  const [secret, setSecret] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await new Promise(r => setTimeout(r, 400));
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ secret }),
      });
      if (res.ok) {
        toast.success('Login successful');
        router.push('/admin');
        router.refresh();
      } else {
        toast.error('Invalid admin secret');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-violet-50 to-slate-100 flex items-center justify-center p-4">
      {/* Decorative blobs */}
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-violet-300/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative w-full max-w-md">
        <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl border border-white/60 p-8 space-y-6">
          {/* Logo / Header */}
          <div className="text-center space-y-3">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-violet-600 shadow-lg mx-auto">
              <LayoutGrid className="h-7 w-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-900">GreenGo Admin</h1>
              <p className="text-sm text-slate-500 mt-1">Sign in to access the dashboard</p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                type="password"
                placeholder="Admin secret"
                className="pl-10 h-11 bg-slate-50 border-slate-200 focus:bg-white"
                value={secret}
                onChange={(e) => setSecret(e.target.value)}
                required
              />
            </div>
            <Button
              className="w-full h-11 bg-gradient-to-r from-blue-500 to-violet-600 hover:from-blue-600 hover:to-violet-700 text-white shadow-md font-semibold"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <span className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                  Verifying...
                </span>
              ) : 'Sign In'}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
