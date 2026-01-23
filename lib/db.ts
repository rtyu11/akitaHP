import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

const prismaClientOptions = process.env.POSTGRES_PRISMA_URL
  ? {
      adapter: {
        url: process.env.POSTGRES_PRISMA_URL,
      },
    }
  : {};

export const prisma =
  globalForPrisma.prisma ?? new PrismaClient(prismaClientOptions);

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

// データベース接続確認用の関数
export async function checkDatabaseConnection(): Promise<boolean> {
  try {
    await prisma.$queryRaw`SELECT 1`;
    return true;
  } catch (error) {
    console.error("Database connection failed:", error);
    return false;
  }
}

// モックデータ
export const mockNews = [
  {
    id: "mock-1",
    title: "【お知らせ】ゴールデンウィーク休業のお知らせ",
    content:
      "平素より格別のご愛顧を賜り、誠にありがとうございます。誠に勝手ながら、下記の期間を休業とさせていただきます。",
    published: true,
    createdAt: new Date("2026-04-25"),
    updatedAt: new Date("2026-04-25"),
  },
  {
    id: "mock-2",
    title: "【採用情報】ドライバー募集中！未経験者歓迎",
    content:
      "当社では現在、配送ドライバーを募集しております。未経験の方も大歓迎です。充実した研修制度で安心してスタートできます。",
    published: true,
    createdAt: new Date("2026-04-15"),
    updatedAt: new Date("2026-04-15"),
  },
  {
    id: "mock-3",
    title: "【お知らせ】新車両導入のご報告",
    content:
      "この度、最新の環境性能を備えた大型トラック2台を導入いたしました。より安全で環境に優しい輸送サービスを提供してまいります。",
    published: true,
    createdAt: new Date("2026-04-01"),
    updatedAt: new Date("2026-04-01"),
  },
];
