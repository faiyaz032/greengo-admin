'use client';

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Check, X, FileJson } from 'lucide-react';
import { format } from 'date-fns';

interface LicensesTableProps {
  licenses: any[];
}

export function LicensesTable({ licenses }: LicensesTableProps) {
  const getStatusVariant = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500 hover:bg-green-600';
      case 'trialing': return 'bg-yellow-500 hover:bg-yellow-600';
      case 'past_due': return 'bg-orange-500 hover:bg-orange-600';
      case 'canceled': return 'bg-red-500 hover:bg-red-600';
      default: return 'bg-gray-500 hover:bg-gray-600';
    }
  };

  return (
    <div className="rounded-md border overflow-hidden">
      <Table>
        <TableHeader className="bg-muted/50">
          <TableRow>
            <TableHead>License Name</TableHead>
            <TableHead>Website URL</TableHead>
            <TableHead className="text-center">Status</TableHead>
            <TableHead>Trial Ends</TableHead>
            <TableHead className="text-center">Auto-Cancel</TableHead>
            <TableHead className="text-center">Google Sheets</TableHead>
            <TableHead className="text-center">Squarespace</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {licenses.length === 0 ? (
            <TableRow>
              <TableCell colSpan={7} className="text-center py-10 text-muted-foreground">
                No licenses found for this account.
              </TableCell>
            </TableRow>
          ) : (
            licenses.map((license) => (
              <TableRow key={license.id}>
                <TableCell className="font-medium">{license.name}</TableCell>
                <TableCell className="text-sm truncate max-w-[200px]">
                  {license.websiteUrl ? (
                    <a
                      href={license.websiteUrl.startsWith('http') ? license.websiteUrl : `https://${license.websiteUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary underline hover:text-primary/80 transition-colors"
                    >
                      {license.websiteUrl}
                    </a>
                  ) : (
                    <span className="text-muted-foreground">—</span>
                  )}
                </TableCell>
                <TableCell className="text-center">
                  <Badge className={getStatusVariant(license.subscriptionStatus)}>
                    {license.subscriptionStatus}
                  </Badge>
                </TableCell>
                <TableCell className="text-sm text-muted-foreground">
                  {license.trialEndsAt ? format(new Date(license.trialEndsAt), 'MMM dd, yyyy') : 'N/A'}
                </TableCell>
                <TableCell className="text-center">
                  {license.cancelAtPeriodEnd ? (
                    <Badge variant="destructive" className="text-[10px] h-5">On</Badge>
                  ) : (
                    <span className="text-muted-foreground text-xs">Off</span>
                  )}
                </TableCell>
                <TableCell className="text-center">
                  {license.googleIntegration?.connectedEmail ? (
                    <Check className="h-4 w-4 text-green-500 mx-auto" />
                  ) : (
                    <X className="h-4 w-4 text-red-500 mx-auto" />
                  )}
                </TableCell>
                <TableCell className="text-center">
                  {license.squarespaceWebsiteId ? (
                    <Check className="h-4 w-4 text-green-500 mx-auto" />
                  ) : (
                    <X className="h-4 w-4 text-red-500 mx-auto" />
                  )}
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}
