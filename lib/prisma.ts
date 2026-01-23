import { PrismaClient } from '@prisma/client';

const databaseUrl =
    process.env.POSTGRES_PRISMA_URL ??
    process.env.POSTGRES_URL_NON_POOLING ??
    process.env.DATABASE_URL;

const createPrismaClient = () =>
    new PrismaClient();

declare global {
    var prismaGlobal: PrismaClient | undefined;
}

let prisma: PrismaClient | undefined;

if (databaseUrl) {
    if (process.env.NODE_ENV === 'production') {
        prisma = createPrismaClient();
    } else {
        if (!globalThis.prismaGlobal) {
            globalThis.prismaGlobal = createPrismaClient();
        }
        prisma = globalThis.prismaGlobal;
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
