import { mailerlite } from './mailerliteClient';

export const MAILERLITE_GROUPS = {
  WishlistFlow: process.env.MAILERLITE_GROUP_ID_WISHLIST || 'dummy_wishlist_id',
  SquareDonations: process.env.MAILERLITE_GROUP_ID_SQUARE || 'dummy_square_id',
  QuotePlugin: process.env.MAILERLITE_GROUP_ID_QUOTE || 'dummy_quote_id',
};

export type Platform = keyof typeof MAILERLITE_GROUPS;

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

/**
 * Retries a function if it fails with a 429 (Rate Limit) error.
 */
async function withRetry<T>(fn: () => Promise<T>, retries = 3, initialDelayMs = 2000): Promise<T> {
  try {
    return await fn();
  } catch (error: any) {
    const status = error?.response?.status;
    if (status === 429 && retries > 0) {
      console.warn(`[MailerLite] Rate limited. Retrying in ${initialDelayMs}ms...`);
      await delay(initialDelayMs);
      return withRetry(fn, retries - 1, initialDelayMs * 2);
    }
    throw error;
  }
}

export const mailerliteService = {
  /**
   * Subscribes an email to a specific MailerLite group.
   * Ensures the user is created/updated in MailerLite first.
   */
  async subscribeToGroup(email: string, platform: Platform) {
    const groupId = MAILERLITE_GROUPS[platform];
    if (!groupId || groupId.startsWith('dummy')) {
      console.warn(`[MailerLite] Group ID for ${platform} is not configured.`);
      return false;
    }

    try {
      console.log(`[MailerLite] Subscribing ${email} to ${platform} group (${groupId})...`);
      
      // According to the SDK docs, we can assign a subscriber to a group.
      // If the subscriber doesn't exist, this might fail or we might need to create them first.
      // Usually, MailerLite's assignSubscriber expects the SUBSCRIBER_ID.
      // However, we only have the email. We can use the 'createOrUpdate' method for subscribers first.
      
      const subscriberParams = {
        email: email,
        groups: [groupId],
        status: 'active' as const,
      };

      await withRetry(() => mailerlite.subscribers.createOrUpdate(subscriberParams));
      
      console.log(`[MailerLite] Successfully synced ${email} to ${platform}.`);
      return true;
    } catch (error: any) {
      console.error(`[MailerLite Error] Failed to subscribe ${email} to ${platform}:`, {
        status: error?.response?.status,
        data: error?.response?.data,
        message: error.message,
      });
      return false;
    }
  },

  /**
   * Bulk subscribe an email to multiple platforms.
   * Returns a list of platforms that were successfully synced.
   */
  async subscribeToMultipleGroups(email: string, platforms: Platform[]): Promise<Platform[]> {
    const success: Platform[] = [];
    for (const platform of platforms) {
      const ok = await this.subscribeToGroup(email, platform);
      if (ok) success.push(platform);
    }
    return success;
  },

  /**
   * Fetches existing groups for a subscriber from MailerLite and maps them to our Platform names.
   */
  async getSyncedGroupsFromMailerLite(email: string): Promise<Platform[]> {
    try {
      const response = await withRetry(() => mailerlite.subscribers.find(email));
      const subscriber = response.data as any;
      
      if (!subscriber || !subscriber.groups) return [];

      const syncedPlatforms: Platform[] = [];
      const subscriberGroupIds = subscriber.groups.map((g: any) => String(g.id));

      for (const [platform, groupId] of Object.entries(MAILERLITE_GROUPS)) {
        if (subscriberGroupIds.includes(groupId)) {
          syncedPlatforms.push(platform as Platform);
        }
      }

      return syncedPlatforms;
    } catch (error: any) {
      if (error?.response?.status === 404) {
        return []; // Subscriber doesn't exist yet
      }
      console.error(`[MailerLite Error] Failed to fetch groups for ${email}:`, {
        status: error?.response?.status,
        data: error?.response?.data,
        message: error.message,
      });
      return [];
    }
  }
};
