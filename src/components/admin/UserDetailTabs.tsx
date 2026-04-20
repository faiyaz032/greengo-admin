'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { WebsitesTable } from './WebsitesTable';
import { LicensesTable } from './LicensesTable';
import { Badge } from '@/components/ui/badge';
import { format } from 'date-fns';
import { ShieldCheck, Mail, Calendar, User as UserIcon, ExternalLink } from 'lucide-react';

interface UserDetailTabsProps {
  userView: any;
}

export function UserDetailTabs({ userView }: UserDetailTabsProps) {
  return (
    <Tabs defaultValue="square-donations" className="w-full">
      <TabsList className="grid w-full grid-cols-3 max-w-2xl">
        <TabsTrigger value="square-donations" className="flex gap-2">
          Square Donations
          <Badge variant="outline" className="ml-auto pointer-events-none">
            {userView.squareDonationsUsers.length}
          </Badge>
        </TabsTrigger>
        <TabsTrigger value="quote-plugin" className="flex gap-2">
          Quote Plugin
          <Badge variant="outline" className="ml-auto pointer-events-none">
            {userView.quotePluginUsers.length}
          </Badge>
        </TabsTrigger>
        <TabsTrigger value="wishlist-flow" className="flex gap-2">
          Wishlist Flow
          <Badge variant="outline" className="ml-auto pointer-events-none">
            {userView.wishlistFlowUsers.length}
          </Badge>
        </TabsTrigger>
      </TabsList>

      <TabsContent value="square-donations" className="space-y-6 mt-6">
        {userView.squareDonationsUsers.length === 0 ? (
          <div className="py-20 text-center text-muted-foreground border rounded-lg">
            No accounts found in Square Donations for this email.
          </div>
        ) : (
          userView.squareDonationsUsers.map((u: any) => (
            <div key={u.userId} className="space-y-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0">
                  <div className="flex gap-4 items-center">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <UserIcon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">
                        {u.firstName} {u.lastName}
                        {u.role && <Badge variant="secondary" className="ml-2 capitalize">{u.role}</Badge>}
                      </CardTitle>
                      <CardDescription className="flex items-center gap-2 mt-1">
                        <Calendar className="h-3 w-3" /> Joined {format(new Date(u.createdAt), 'MMM dd, yyyy')}
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    {u.isEmailVerified && (
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 flex gap-1 items-center">
                        <ShieldCheck className="h-3 w-3" /> Verified
                      </Badge>
                    )}
                    <span className="text-xs text-muted-foreground">ID: {u.userId}</span>
                  </div>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-0">
                  <div className="space-y-1">
                    <span className="text-xs font-semibold text-muted-foreground uppercase">Stripe Account</span>
                    <p className="font-mono text-sm">{u.stripeAccountId || 'None'}</p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-semibold text-muted-foreground uppercase">Stripe Customer</span>
                    <p className="font-mono text-sm">{u.stripeCustomerId || 'None'}</p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-semibold text-muted-foreground uppercase">Websites</span>
                    <p className="text-sm font-medium">{u.websites.length} linked</p>
                  </div>
                </CardContent>
              </Card>
              <WebsitesTable websites={u.websites} />
            </div>
          ))
        )}
      </TabsContent>

      <TabsContent value="quote-plugin" className="space-y-6 mt-6">
        {userView.quotePluginUsers.length === 0 ? (
          <div className="py-20 text-center text-muted-foreground border rounded-lg">
            No accounts found in Quote Plugin for this email.
          </div>
        ) : (
          userView.quotePluginUsers.map((u: any) => (
            <div key={u.userId} className="space-y-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0">
                  <div className="flex gap-4 items-center">
                    <div className="bg-blue-500/10 p-3 rounded-full">
                      <UserIcon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">
                        {u.name}
                        {u.hasUsedTrial && <Badge variant="secondary" className="ml-2">Used Trial</Badge>}
                      </CardTitle>
                      <CardDescription className="flex items-center gap-2 mt-1">
                        <Calendar className="h-3 w-3" /> Joined {format(new Date(u.createdAt), 'MMM dd, yyyy')}
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    {u.isEmailVerified && (
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 flex gap-1 items-center">
                        <ShieldCheck className="h-3 w-3" /> Verified
                      </Badge>
                    )}
                  </div>
                </CardHeader>
              </Card>
              <LicensesTable licenses={u.licenses} />
            </div>
          ))
        )}
      </TabsContent>

      <TabsContent value="wishlist-flow" className="space-y-6 mt-6">
        {userView.wishlistFlowUsers.length === 0 ? (
          <div className="py-20 text-center text-muted-foreground border rounded-lg">
            No accounts found in Wishlist Flow for this email.
          </div>
        ) : (
          userView.wishlistFlowUsers.map((u: any) => (
            <div key={u.userId} className="space-y-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0">
                  <div className="flex gap-4 items-center">
                    <div className="bg-purple-500/10 p-3 rounded-full">
                      <UserIcon className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">
                        {u.name}
                        {u.hasUsedTrial && <Badge variant="secondary" className="ml-2">Used Trial</Badge>}
                      </CardTitle>
                      <CardDescription className="flex items-center gap-2 mt-1">
                        <Calendar className="h-3 w-3" /> Joined {format(new Date(u.createdAt), 'MMM dd, yyyy')}
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    {u.isEmailVerified && (
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 flex gap-1 items-center">
                        <ShieldCheck className="h-3 w-3" /> Verified
                      </Badge>
                    )}
                  </div>
                </CardHeader>
              </Card>
              <LicensesTable licenses={u.licenses} />
            </div>
          ))
        )}
      </TabsContent>
    </Tabs>
  );
}
