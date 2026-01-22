import { getPrismaClient, hasPrismaClient } from './prisma';

export interface NewsItem {
    id: string;
    title: string;
    content: string;
    publishedAt: Date;
}

const MOCK_NEWS: NewsItem[] = [
    {
        id: '1',
        title: 'ホームページをリニューアルしました',
        content: '秋多運送の公式サイトをリニューアルいたしました。今後ともよろしくお願いいたします。',
        publishedAt: new Date('2024-04-01'),
    },
    {
        id: '2',
        title: '新規トラックを導入しました',
        content: '最新の安全装置を搭載した大型トラックを2台導入しました。',
        publishedAt: new Date('2024-03-15'),
    },
    {
        id: '3',
        title: 'ドライバー募集中',
        content: '業務拡大につきドライバーを募集しています。未経験の方も歓迎です！',
        publishedAt: new Date('2024-02-20'),
    },
];

export async function getNews(): Promise<NewsItem[]> {
    if (!hasPrismaClient()) {
        return MOCK_NEWS;
    }

    try {
        // Attempt to fetch from DB
        const prisma = getPrismaClient();
        const news = await prisma.news.findMany({
            orderBy: { publishedAt: 'desc' },
            take: 3
        });
        return news;
    } catch (error) {
        console.warn('Database connection failed, using Mock Data.', error);
        return MOCK_NEWS;
    }
}

export async function createNews(title: string, content: string) {
    if (!hasPrismaClient()) {
        throw new Error('Database is not configured.');
    }

    try {
        const prisma = getPrismaClient();
        return await prisma.news.create({
            data: {
                title,
                content
            }
        });
    } catch {
        throw new Error('Database error during creation');
    }
}

export async function deleteNews(id: string) {
    if (!hasPrismaClient()) {
        throw new Error('Database is not configured.');
    }

    try {
        const prisma = getPrismaClient();
        return await prisma.news.delete({
            where: { id }
        });
    } catch {
        throw new Error('Database error during deletion');
    }
}
