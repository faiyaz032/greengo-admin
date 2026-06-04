import { prismaWishlist } from '../prisma/wishlistClient';

export const wishlistFlowService = {
  async fetchAllUsers() {
    try {
      return await prismaWishlist.user.findMany();
    } catch (error) {
      console.error('Error fetching Wishlist Flow users:', error);
      return [];
    }
  },

  async fetchLicensesByUserIds(userIds: string[]) {
    try {
      return await prismaWishlist.license.findMany({
        where: {
          userId: { in: userIds },
        },
      });
    } catch (error) {
      console.error('Error fetching Wishlist Flow licenses:', error);
      return [];
    }
  },
};
