import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
    schema: "prisma/schema.prisma",
    datasource: {
        url: process.env.POSTGRES_PRISMA_URL ?? "postgresql://dummy:dummy@localhost:5432/dummy",
        // @ts-expect-error directUrl is supported by Prisma CLI but missing in type definition
        directUrl: process.env.POSTGRES_URL_NON_POOLING ?? "postgresql://dummy:dummy@localhost:5432/dummy",
    },
});
