import { PrismaClient } from './generated/quote';

const globalForPrisma = global as unknown as { prismaQuote: PrismaClient };

const getUrl = () => {
  const baseUri = process.env.MONGODB_URI;
  const dbName = process.env.QUOTE_PLUGIN_DB;
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
  
  // console.log(`[Prisma] Quote URL: ${finalUrl.replace(/:[^:@]+@/, ':****@')}`);
  return finalUrl;
};

export const prismaQuote =
  globalForPrisma.prismaQuote ||
  new PrismaClient({
    datasources: {
      db: {
        url: getUrl(),
      },
    },
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prismaQuote = prismaQuote;
