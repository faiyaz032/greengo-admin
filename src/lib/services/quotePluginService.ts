import { prismaQuote } from '../prisma/quoteClient';

export const quotePluginService = {
  async fetchAllUsers() {
    try {
      return await prismaQuote.user.findMany();
    } catch (error) {
      console.error('Error fetching Quote Plugin users:', error);
      return [];
    }
  },

  async fetchLicensesByUserIds(userIds: string[]) {
    try {
      return await prismaQuote.license.findMany({
        where: {
          userId: { in: userIds },
        },
      });
    } catch (error) {
      console.error('Error fetching Quote Plugin licenses:', error);
      return [];
    }
  },
};
