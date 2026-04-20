import { PrismaClient } from './generated/wishlist';

const globalForPrisma = global as unknown as { prismaWishlist: PrismaClient };

const getUrl = () => {
  const baseUri = process.env.MONGODB_URI;
  const dbName = process.env.WISHLIST_FLOW_DB;
  if (!baseUri || !dbName) return undefined;
  
  let finalUrl: string;
  if (baseUri.includes('?')) {
    const [base, query] = baseUri.split('?');
    const cleanBase = base.endsWith('/') ? base.slice(0, -1) : base;
    finalUrl = `${cleanBase}/${dbName}?${query}`;
  } else {
    const cleanUri = baseUri.endsWith('/') ? baseUri.slice(0, -1) : baseUri;
    finalUrl = `${cleanUri}/${dbName}`;
  }
  
  // console.log(`[Prisma] Wishlist URL: ${finalUrl.replace(/:[^:@]+@/, ':****@')}`);
  return finalUrl;
};

export const prismaWishlist =
  globalForPrisma.prismaWishlist ||
  new PrismaClient({
    datasources: {
      db: {
        url: getUrl(),
      },
    },
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prismaWishlist = prismaWishlist;
