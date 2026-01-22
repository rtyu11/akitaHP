import { PrismaClient } from '@prisma/client';

const databaseUrl =
    process.env.POSTGRES_PRISMA_URL ??
    process.env.POSTGRES_URL_NON_POOLING ??
    process.env.DATABASE_URL;

const createPrismaClient = (url: string) =>
    new PrismaClient({
        datasources: {
            db: { url },
        },
    });

declare global {
    var prismaGlobal: PrismaClient | undefined;
}

let prisma: PrismaClient | undefined;

if (databaseUrl) {
    if (process.env.NODE_ENV === 'production') {
        prisma = createPrismaClient(databaseUrl);
    } else {
        prisma = globalThis.prismaGlobal ?? createPrismaClient(databaseUrl);
        globalThis.prismaGlobal = prisma;
    }
}

export function hasPrismaClient() {
    return Boolean(prisma);
}

export function getPrismaClient() {
    if (!prisma) {
        throw new Error('Prisma client is not configured; set POSTGRES_PRISMA_URL.');
    }
    return prisma;
}

export default prisma;
