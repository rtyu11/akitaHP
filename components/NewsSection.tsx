import { prisma, mockNews, checkDatabaseConnection } from "@/lib/db";
import { format } from "date-fns";
import { ja } from "date-fns/locale";
import { Calendar } from "lucide-react";

export default async function NewsSection() {
  let newsItems = mockNews;
  let usingMockData = true;

  try {
    const isConnected = await checkDatabaseConnection();
    if (isConnected) {
      const dbNews = await prisma.news.findMany({
        where: { published: true },
        orderBy: { createdAt: "desc" },
        take: 3,
      });
      if (dbNews.length > 0) {
        newsItems = dbNews;
        usingMockData = false;
      }
    }
  } catch (error) {
    console.log("Using mock news data:", error);
  }

  return (
    <section id="news" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-4">
            お知らせ
          </h2>
          <div className="w-20 h-1 bg-[#22c55e] mx-auto rounded-full" />
          {usingMockData && (
            <p className="text-xs text-gray-500 mt-4">
              ※ サンプルデータを表示しています
            </p>
          )}
        </div>

        <div className="space-y-4">
          {newsItems.length > 0 ? (
            newsItems.map((news) => (
              <div
                key={news.id}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="flex items-center gap-2 text-gray-500 text-sm font-medium whitespace-nowrap">
                    <Calendar className="w-4 h-4" />
                    <time>
                      {format(new Date(news.createdAt), "yyyy.MM.dd", {
                        locale: ja,
                      })}
                    </time>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                      {news.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {news.content}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 py-8">
              現在お知らせはありません。
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
