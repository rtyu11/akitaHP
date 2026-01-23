import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1e3a8a] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* 会社情報 */}
          <div>
            <h3 className="text-lg font-bold mb-4">有限会社 秋多運送</h3>
            <address className="not-italic text-slate-300 leading-relaxed">
              〒197-0811
              <br />
              東京都あきる野市市原小宮2-3-6
              <br />
              <br />
              <strong>TEL:</strong>{" "}
              <a href="tel:042-532-8256" className="hover:text-[#22c55e]">
                042-532-8256
              </a>
              <br />
              <strong>設立:</strong> 昭和48年4月10日
              <br />
              <strong>代表:</strong> 代表取締役 岡部 達也
            </address>
          </div>

          {/* 事業内容 */}
          <div>
            <h3 className="text-lg font-bold mb-4">事業内容</h3>
            <ul className="space-y-2 text-slate-300">
              <li>一般貨物輸送（首都圏）</li>
              <li>荷造り・梱包</li>
            </ul>
            <h3 className="text-lg font-bold mt-6 mb-4">主要取引先</h3>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li>ヤマト運輸株式会社</li>
              <li>マタイ紙工株式会社 秋川工場</li>
            </ul>
          </div>

          {/* リンク */}
          <div>
            <h3 className="text-lg font-bold mb-4">メニュー</h3>
            <ul className="space-y-2 text-slate-300">
              <li>
                <a href="#company" className="hover:text-[#22c55e] transition-colors">
                  会社概要
                </a>
              </li>
              <li>
                <a href="#vehicles" className="hover:text-[#22c55e] transition-colors">
                  保有車両
                </a>
              </li>
              <li>
                <a href="#recruit" className="hover:text-[#22c55e] transition-colors">
                  採用情報
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#22c55e] transition-colors">
                  お問い合わせ
                </a>
              </li>
              <li>
                <Link
                  href="/admin"
                  className="hover:text-[#22c55e] transition-colors text-sm opacity-50"
                >
                  管理者ログイン
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-6 text-center text-slate-400 text-sm">
          <p>&copy; {new Date().getFullYear()} 有限会社 秋多運送 All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
