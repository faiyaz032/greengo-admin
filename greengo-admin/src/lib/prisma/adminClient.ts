import { PrismaClient } from './generated/admin';

const globalForPrisma = global as unknown as { prismaAdmin: PrismaClient };

const getUrl = () => {
  const baseUri = process.env.MONGODB_URI;
  const dbName = process.env.ADMIN_DB;
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
  
  // console.log(`[Prisma] Admin URL: ${finalUrl.replace(/:[^:@]+@/, ':****@')}`);
  return finalUrl;
};

export const prismaAdmin =
  globalForPrisma.prismaAdmin ||
  new PrismaClient({
    datasources: {
      db: {
        url: getUrl(),
      },
    },
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prismaAdmin = prismaAdmin;
