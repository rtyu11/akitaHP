import { getNews } from '@/lib/news-service';
import { format } from 'date-fns';
import { ja } from 'date-fns/locale';

export default async function NewsSection() {
    const newsItems = await getNews();

    return (
        <section id="news" className="py-20 bg-white">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-brand-navy mb-4">お知らせ</h2>
                    <div className="w-20 h-1 bg-brand-green mx-auto rounded-full" />
                </div>

                <div className="space-y-4">
                    {newsItems.length > 0 ? (
                        newsItems.map((news) => (
                            <div key={news.id} className="border-b border-gray-100 py-4 flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 hover:bg-gray-50 transition-colors px-4 rounded-lg">
                                <time className="text-gray-500 text-sm font-medium whitespace-nowrap">
                                    {format(new Date(news.publishedAt), 'yyyy.MM.dd', { locale: ja })}
                                </time>
                                <div className="flex-1">
                                    <h3 className="text-lg font-bold text-gray-800 mb-1">{news.title}</h3>
                                    <p className="text-gray-600 text-sm line-clamp-2">{news.content}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-500">現在お知らせはありません。</p>
                    )}
                </div>
            </div>
        </section>
    );
}
