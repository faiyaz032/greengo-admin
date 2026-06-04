'use client';

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Check, X } from 'lucide-react';

interface WebsitesTableProps {
  websites: any[];
}

export function WebsitesTable({ websites }: WebsitesTableProps) {
  return (
    <div className="rounded-md border overflow-hidden">
      <Table>
        <TableHeader className="bg-muted/50">
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Domain</TableHead>
            <TableHead>Platform</TableHead>
            <TableHead className="text-center">Active</TableHead>
            <TableHead className="text-center">Script</TableHead>
            <TableHead className="text-center">Launchpad</TableHead>
            <TableHead className="text-right">Stripe</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {websites.length === 0 ? (
            <TableRow>
              <TableCell colSpan={7} className="text-center py-10 text-muted-foreground">
                No websites found for this account.
              </TableCell>
            </TableRow>
          ) : (
            websites.map((website) => (
              <TableRow key={website.id}>
                <TableCell className="font-medium">{website.name}</TableCell>
                <TableCell className="text-sm text-primary underline">{website.domain}</TableCell>
                <TableCell className="text-sm">{website.platform || 'N/A'}</TableCell>
                <TableCell className="text-center">
                  {website.isActive ? (
                    <Badge variant="default" className="bg-green-500">Active</Badge>
                  ) : (
                    <Badge variant="secondary">Inactive</Badge>
                  )}
                </TableCell>
                <TableCell className="text-center">
                  {website.isScriptConfigured ? (
                    <Check className="h-4 w-4 text-green-500 mx-auto" />
                  ) : (
                    <X className="h-4 w-4 text-red-500 mx-auto" />
                  )}
                </TableCell>
                <TableCell className="text-center text-sm">
                  {website.isLaunchpadCompleted ? (
                    <Badge variant="outline" className="text-green-600 border-green-600">Done</Badge>
                  ) : (
                    <span className="text-muted-foreground">{website.launchPadCompletedSteps}/?</span>
                  )}
                </TableCell>
                <TableCell className="text-right">
                  {website.stripeAccountId ? (
                    <Badge variant="outline" className="text-blue-600 border-blue-600">Connected</Badge>
                  ) : (
                    <span className="text-xs text-muted-foreground">None</span>
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
