import { squareDonationsService } from '../services/squareDonationsService';
import { quotePluginService } from '../services/quotePluginService';
import { wishlistFlowService } from '../services/wishlistFlowService';
import { prismaAdmin } from '../prisma/adminClient';
import { mailerliteService, Platform } from '../mailerlite/mailerliteService';

export async function performAggregationSync() {
  const start = Date.now();
  // console.log('[Sync] Starting aggregation sync...');

  try {
    // 1. Fetch all users from all 3 databases
    const [squareUsers, quoteUsers, wishlistUsers] = await Promise.all([
      squareDonationsService.fetchAllUsers(),
      quotePluginService.fetchAllUsers(),
      wishlistFlowService.fetchAllUsers(),
    ]);

    // 2. Identify all unique emails (lowercased, trimmed)
    const emailToData: Record<string, any> = {};

    squareUsers.forEach((u) => {
      const email = u.email.toLowerCase().trim();
      if (!emailToData[email]) emailToData[email] = { square: [], quote: [], wishlist: [] };
      emailToData[email].square.push(u);
    });

    quoteUsers.forEach((u) => {
      const email = u.email.toLowerCase().trim();
      if (!emailToData[email]) emailToData[email] = { square: [], quote: [], wishlist: [] };
      emailToData[email].quote.push(u);
    });

    wishlistUsers.forEach((u) => {
      const email = u.email.toLowerCase().trim();
      if (!emailToData[email]) emailToData[email] = { square: [], quote: [], wishlist: [] };
      emailToData[email].wishlist.push(u);
    });

    const emails = Object.keys(emailToData);

    // 3. Fetch related websites/licenses in batch
    const allSquareUserIds = squareUsers.map((u) => u.id);
    const allQuoteUserIds = quoteUsers.map((u) => u.id);
    const allWishlistUserIds = wishlistUsers.map((u) => u.id);

    const [allWebsites, allQuoteLicenses, allWishlistLicenses] = await Promise.all([
      squareDonationsService.fetchWebsitesByUserIds(allSquareUserIds),
      quotePluginService.fetchLicensesByUserIds(allQuoteUserIds),
      wishlistFlowService.fetchLicensesByUserIds(allWishlistUserIds),
    ]);

    // 4. Group websites/licenses by userId
    const websitesByUserId: Record<string, any[]> = {};
    allWebsites.forEach((w) => {
      if (!websitesByUserId[w.userId]) websitesByUserId[w.userId] = [];
      websitesByUserId[w.userId].push(w);
    });

    const quoteLicensesByUserId: Record<string, any[]> = {};
    allQuoteLicenses.forEach((l) => {
      if (!quoteLicensesByUserId[l.userId]) quoteLicensesByUserId[l.userId] = [];
      quoteLicensesByUserId[l.userId].push(l);
    });

    const wishlistLicensesByUserId: Record<string, any[]> = {};
    allWishlistLicenses.forEach((l) => {
      if (!wishlistLicensesByUserId[l.userId]) wishlistLicensesByUserId[l.userId] = [];
      wishlistLicensesByUserId[l.userId].push(l);
    });

    // 5. Build and Upsert records
    let syncedCount = 0;
    for (const email of emails) {
      const data = emailToData[email];

      const squareDonationsUsers = data.square.map((u: any) => ({
        userId: u.id,
        firstName: u.firstName,
        lastName: u.lastName,
        role: u.role,
        stripeCustomerId: u.stripeCustomerId,
        stripeAccountId: u.stripeAccountId,
        isEmailVerified: u.isEmailVerified,
        createdAt: u.createdAt,
        websites: websitesByUserId[u.id] || [],
      }));

      const quotePluginUsers = data.quote.map((u: any) => ({
        userId: u.id,
        name: u.name,
        hasUsedTrial: u.hasUsedTrial,
        isEmailVerified: u.isEmailVerified,
        createdAt: u.createdAt,
        licenses: quoteLicensesByUserId[u.id] || [],
      }));

      const wishlistFlowUsers = data.wishlist.map((u: any) => ({
        userId: u.id,
        name: u.name,
        hasUsedTrial: u.hasUsedTrial,
        isEmailVerified: u.isEmailVerified,
        createdAt: u.createdAt,
        licenses: wishlistLicensesByUserId[u.id] || [],
      }));

      const allCreatedAt = [
        ...squareDonationsUsers.map((u: any) => new Date(u.createdAt)),
        ...quotePluginUsers.map((u: any) => new Date(u.createdAt)),
        ...wishlistFlowUsers.map((u: any) => new Date(u.createdAt)),
      ].filter(d => !isNaN(d.getTime()));

      const earliestJoinedAt = allCreatedAt.length > 0 
        ? new Date(Math.min(...allCreatedAt.map(d => d.getTime()))) 
        : new Date();

      const summary = {
        totalWebsites: squareDonationsUsers.reduce((acc: number, u: any) => acc + (u.websites?.length || 0), 0),
        totalQuoteLicenses: quotePluginUsers.reduce((acc: number, u: any) => acc + (u.licenses?.length || 0), 0),
        totalWishlistLicenses: wishlistFlowUsers.reduce((acc: number, u: any) => acc + (u.licenses?.length || 0), 0),
        activeSubscriptions: 
          quotePluginUsers.reduce((acc: number, u: any) => acc + (u.licenses?.filter((l: any) => l.subscriptionStatus === 'active').length || 0), 0) +
          wishlistFlowUsers.reduce((acc: number, u: any) => acc + (u.licenses?.filter((l: any) => l.subscriptionStatus === 'active').length || 0), 0),
        trialingSubscriptions:
          quotePluginUsers.reduce((acc: number, u: any) => acc + (u.licenses?.filter((l: any) => l.subscriptionStatus === 'trialing').length || 0), 0) +
          wishlistFlowUsers.reduce((acc: number, u: any) => acc + (u.licenses?.filter((l: any) => l.subscriptionStatus === 'trialing').length || 0), 0),
        canceledSubscriptions:
          quotePluginUsers.reduce((acc: number, u: any) => acc + (u.licenses?.filter((l: any) => l.subscriptionStatus === 'canceled').length || 0), 0) +
          wishlistFlowUsers.reduce((acc: number, u: any) => acc + (u.licenses?.filter((l: any) => l.subscriptionStatus === 'canceled').length || 0), 0),
        hasActiveStripeAccount: squareDonationsUsers.some((u: any) => !!u.stripeAccountId),
        earliestJoinedAt,
      };

      // --- MailerLite Sync ---
      const activePlatforms: Platform[] = [];
      if (squareDonationsUsers.length > 0) activePlatforms.push('SquareDonations');
      if (quotePluginUsers.length > 0) activePlatforms.push('QuotePlugin');
      if (wishlistFlowUsers.length > 0) activePlatforms.push('WishlistFlow');

      const existingRecord = await prismaAdmin.adminUserView.findUnique({
        where: { email },
        select: { mailerLiteSyncedGroups: true }
      });

      let alreadySyncedGroups = (existingRecord?.mailerLiteSyncedGroups as Platform[]) || [];
      
      // If we haven't synced this user yet, check MailerLite directly to see if they
      // already exist in the target groups (e.g. added via another source).
      if (alreadySyncedGroups.length === 0) {
        const remoteSyncedGroups = await mailerliteService.getSyncedGroupsFromMailerLite(email);
        if (remoteSyncedGroups.length > 0) {
          alreadySyncedGroups = remoteSyncedGroups;
        }
      }

      const groupsToSync = activePlatforms.filter(p => !alreadySyncedGroups.includes(p));

      const syncedNow = groupsToSync.length > 0
        ? await mailerliteService.subscribeToMultipleGroups(email, groupsToSync)
        : [];
      
      const mailerLiteSyncedGroups = Array.from(new Set([...alreadySyncedGroups, ...syncedNow]));
      // -----------------------

      await prismaAdmin.adminUserView.upsert({
        where: { email },
        create: {
          email,
          lastSyncedAt: new Date(),
          squareDonationsUsers,
          quotePluginUsers,
          wishlistFlowUsers,
          summary,
          mailerLiteSyncedGroups,
        },
        update: {
          lastSyncedAt: new Date(),
          squareDonationsUsers,
          quotePluginUsers,
          wishlistFlowUsers,
          summary,
          mailerLiteSyncedGroups,
        },
      });
      syncedCount++;

      // Small throttling delay to avoid hitting MailerLite rate limits too quickly
      await new Promise(resolve => setTimeout(resolve, 100));
    }

    const duration = Date.now() - start;
    // console.log(`[Sync] Completed successfully in ${duration}ms. Synced ${syncedCount} users.`);
    return { success: true, syncedCount, durationMs: duration };
  } catch (error) {
    console.error('[Sync] Error during aggregation:', error);
    return { success: false, error: (error as Error).message };
  }
}
