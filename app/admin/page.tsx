"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { Calendar, Trash2, Plus, LogOut, Newspaper } from "lucide-react";

interface News {
  id: string;
  title: string;
  content: string;
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

export default function AdminDashboard() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [newsItems, setNewsItems] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/admin/login");
    } else if (status === "authenticated") {
      fetchNews();
    }
  }, [status, router]);

  const fetchNews = async () => {
    try {
      const res = await fetch("/api/news");
      const data = await res.json();
      setNewsItems(data.news || []);
    } catch (error) {
      console.error("Failed to fetch news:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const res = await fetch("/api/news", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, content, published: true }),
      });

      if (res.ok) {
        setTitle("");
        setContent("");
        fetchNews();
      } else {
        alert("投稿に失敗しました");
      }
    } catch (error) {
      console.error("Failed to create news:", error);
      alert("投稿に失敗しました");
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("本当に削除しますか？")) return;

    try {
      const res = await fetch(`/api/news?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        fetchNews();
      } else {
        alert("削除に失敗しました");
      }
    } catch (error) {
      console.error("Failed to delete news:", error);
      alert("削除に失敗しました");
    }
  };

  if (status === "loading" || loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1e3a8a] mx-auto"></div>
          <p className="mt-4 text-gray-600">読み込み中...</p>
        </div>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <header className="flex justify-between items-center mb-8 bg-white p-6 rounded-xl shadow-sm">
        <div>
          <h1 className="text-2xl font-bold text-[#1e3a8a] flex items-center gap-2">
            <Newspaper className="w-7 h-7" />
            管理ダッシュボード
          </h1>
          <p className="text-sm text-gray-600 mt-1">秋多運送 お知らせ管理</p>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="/"
            className="text-sm text-gray-600 hover:text-[#1e3a8a] transition-colors"
          >
            サイトを見る →
          </a>
          <button
            onClick={() => signOut({ callbackUrl: "/admin/login" })}
            className="flex items-center gap-2 text-sm text-red-600 hover:text-red-800 hover:underline font-bold transition-colors"
          >
            <LogOut className="w-4 h-4" />
            ログアウト
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* 投稿フォーム */}
        <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold mb-4 text-[#1e3a8a] border-b pb-3 flex items-center gap-2">
            <Plus className="w-5 h-5" />
            お知らせ投稿
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-bold mb-2 text-gray-700">
                タイトル <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={title}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
                className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-[#22c55e] focus:border-transparent outline-none"
                required
                placeholder="例: 夏季休業のお知らせ"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2 text-gray-700">
                内容 <span className="text-red-500">*</span>
              </label>
              <textarea
                value={content}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value)}
                className="w-full border border-gray-300 px-4 py-3 rounded-lg h-40 focus:ring-2 focus:ring-[#22c55e] focus:border-transparent outline-none resize-none"
                required
                placeholder="詳細を入力してください..."
              />
            </div>
            <button
              disabled={submitting}
              className="w-full bg-[#22c55e] text-white px-4 py-3 rounded-lg font-bold hover:bg-[#16a34a] transition-colors shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitting ? "投稿中..." : "投稿する"}
            </button>
          </form>
        </section>

        {/* ニュース一覧 */}
        <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold mb-4 text-[#1e3a8a] border-b pb-3 flex items-center gap-2">
            <Newspaper className="w-5 h-5" />
            投稿済み一覧
            <span className="ml-auto text-sm font-normal text-gray-600">
              {newsItems.length}件
            </span>
          </h2>
          <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2">
            {newsItems.map((item) => (
              <div
                key={item.id}
                className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors"
              >
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-800 mb-1">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                      <Calendar className="w-3 h-3" />
                      {new Date(item.createdAt).toLocaleDateString("ja-JP")}
                    </div>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {item.content}
                    </p>
                  </div>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="flex items-center gap-1 text-red-500 text-sm hover:text-red-700 border border-red-200 px-3 py-2 rounded-lg bg-red-50 hover:bg-red-100 transition-colors flex-shrink-0"
                  >
                    <Trash2 className="w-4 h-4" />
                    削除
                  </button>
                </div>
              </div>
            ))}
            {newsItems.length === 0 && (
              <p className="text-gray-500 text-center py-12">
                お知らせはまだありません。
                <br />
                <span className="text-sm">上のフォームから投稿してください。</span>
              </p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
