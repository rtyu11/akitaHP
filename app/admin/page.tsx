import Link from 'next/link';
import { getNews } from '@/lib/news-service';
import { addNewsAction, deleteNewsAction } from '@/lib/actions';

export default async function AdminDashboard() {
    const newsItems = await getNews();

    return (
        <div className="min-h-screen bg-gray-50 p-4 md:p-8">
            <header className="flex justify-between items-center mb-8 bg-white p-4 rounded-lg shadow-sm">
                <h1 className="text-2xl font-bold text-gray-800">管理ダッシュボード</h1>
                <Link href="/api/auth/signout" className="text-sm text-red-600 hover:text-red-800 hover:underline font-bold" prefetch={false}>
                    ログアウト
                </Link>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Create Form */}
                <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h2 className="text-xl font-bold mb-4 text-brand-navy border-b pb-2">お知らせ投稿</h2>
                    <form action={addNewsAction} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-1 text-gray-700">タイトル</label>
                            <input
                                name="title"
                                type="text"
                                className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none"
                                required
                                placeholder="例: 夏季休業のお知らせ"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1 text-gray-700">内容</label>
                            <textarea
                                name="content"
                                className="w-full border border-gray-300 p-2 rounded h-32 focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none"
                                required
                                placeholder="詳細を入力..."
                            />
                        </div>
                        <button className="w-full bg-brand-green text-white px-4 py-3 rounded font-bold hover:bg-green-600 transition-colors shadow-md">
                            投稿する
                        </button>
                    </form>
                </section>

                {/* News List */}
                <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h2 className="text-xl font-bold mb-4 text-brand-navy border-b pb-2">投稿済み一覧</h2>
                    <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
                        {newsItems.map(item => (
                            <div key={item.id} className="border-b border-gray-100 pb-4 last:border-0 flex justify-between items-start hover:bg-gray-50 p-2 rounded transition-colors">
                                <div className="flex-1 mr-4">
                                    <h3 className="font-bold text-gray-800">{item.title}</h3>
                                    <p className="text-xs text-gray-500 mb-1">{new Date(item.publishedAt).toLocaleDateString()}</p>
                                    <p className="text-sm text-gray-600 line-clamp-2">{item.content}</p>
                                </div>
                                <form action={deleteNewsAction}>
                                    <input type="hidden" name="id" value={item.id} />
                                    <button className="text-red-500 text-sm hover:text-red-700 hover:underline border border-red-200 px-3 py-1 rounded bg-red-50">
                                        削除
                                    </button>
                                </form>
                            </div>
                        ))}
                        {newsItems.length === 0 && <p className="text-gray-500 text-center py-8">お知らせはありません。</p>}
                    </div>
                </section>
            </div>
        </div>
    )
}
