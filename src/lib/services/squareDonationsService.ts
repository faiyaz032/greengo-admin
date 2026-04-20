import { prismaSquare } from '../prisma/squareClient';

export const squareDonationsService = {
  async fetchAllUsers() {
    try {
      return await prismaSquare.user.findMany();
    } catch (error) {
      console.error('Error fetching Square Donations users:', error);
      return [];
    }
  },

  async fetchWebsitesByUserIds(userIds: string[]) {
    try {
      return await prismaSquare.website.findMany({
        where: { userId: { in: userIds } },
      });
    } catch (error) {
      console.error('Error fetching Square Donations websites:', error);
      return [];
    }
  },
};
