export default function Hero() {
  return (
    <section
      id="top"
      className="relative h-[500px] md:h-[600px] w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1e3a8a] via-[#1e40af] to-[#3b82f6]"
    >
      {/* 背景パターン */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNjAgMTAgTSAxMCAwIEwgMTAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="mb-6">
          <div className="inline-block bg-[#22c55e] text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
            昭和48年創業
          </div>
        </div>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
          西多摩から、
          <br />
          <span className="text-[#22c55e]">安心と信頼</span>を運びます
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-8 font-light drop-shadow-md max-w-3xl mx-auto">
          首都圏を中心に、一般貨物輸送と荷造り・梱包を手がけています。
          <br className="hidden md:block" />
          お客様の大切な荷物を、真心こめてお届けします。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="inline-block bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold py-4 px-8 rounded-full shadow-lg transition-transform hover:scale-105"
          >
            お問い合わせはこちら
          </a>
          <a
            href="#recruit"
            className="inline-block bg-white hover:bg-gray-100 text-[#1e3a8a] font-bold py-4 px-8 rounded-full shadow-lg transition-transform hover:scale-105"
          >
            採用情報を見る
          </a>
        </div>
      </div>
    </section>
  );
}
