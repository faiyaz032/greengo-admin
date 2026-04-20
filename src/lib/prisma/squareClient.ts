import { PrismaClient } from './generated/square';

const globalForPrisma = global as unknown as { prismaSquare: PrismaClient };

const getUrl = () => {
  const baseUri = process.env.MONGODB_URI;
  const dbName = process.env.SQUARE_DONATIONS_DB;
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
  
  // Mask password for logging
  // console.log(`[Prisma] Square URL: ${finalUrl.replace(/:[^:@]+@/, ':****@')}`);
  return finalUrl;
};

export const prismaSquare =
  globalForPrisma.prismaSquare ||
  new PrismaClient({
    datasources: {
      db: {
        url: getUrl(),
      },
    },
    log: ['error', 'warn'],
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prismaSquare = prismaSquare;
