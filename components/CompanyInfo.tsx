import { Building2, MapPin, User, Calendar } from "lucide-react";

export default function CompanyInfo() {
  return (
    <section id="company" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-4">
            会社概要
          </h2>
          <div className="w-20 h-1 bg-[#22c55e] mx-auto rounded-full" />
        </div>

        <div className="bg-gray-50 rounded-lg p-8 md:p-12">
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-start gap-4">
              <div className="flex items-center gap-2 text-[#1e3a8a] font-bold w-full md:w-48 flex-shrink-0">
                <Building2 className="w-5 h-5" />
                <span>名称</span>
              </div>
              <div className="text-gray-700">有限会社 秋多運送</div>
            </div>

            <div className="border-t border-gray-200" />

            <div className="flex flex-col md:flex-row md:items-start gap-4">
              <div className="flex items-center gap-2 text-[#1e3a8a] font-bold w-full md:w-48 flex-shrink-0">
                <Calendar className="w-5 h-5" />
                <span>設立</span>
              </div>
              <div className="text-gray-700">昭和48年4月10日</div>
            </div>

            <div className="border-t border-gray-200" />

            <div className="flex flex-col md:flex-row md:items-start gap-4">
              <div className="flex items-center gap-2 text-[#1e3a8a] font-bold w-full md:w-48 flex-shrink-0">
                <MapPin className="w-5 h-5" />
                <span>所在地</span>
              </div>
              <div className="text-gray-700">
                〒197-0811
                <br />
                東京都あきる野市市原小宮2-3-6
              </div>
            </div>

            <div className="border-t border-gray-200" />

            <div className="flex flex-col md:flex-row md:items-start gap-4">
              <div className="flex items-center gap-2 text-[#1e3a8a] font-bold w-full md:w-48 flex-shrink-0">
                <User className="w-5 h-5" />
                <span>代表</span>
              </div>
              <div className="text-gray-700">代表取締役 岡部 達也</div>
            </div>

            <div className="border-t border-gray-200" />

            <div className="flex flex-col md:flex-row md:items-start gap-4">
              <div className="text-[#1e3a8a] font-bold w-full md:w-48 flex-shrink-0">
                業務内容
              </div>
              <div className="text-gray-700">
                <ul className="space-y-2">
                  <li>• 一般貨物輸送（首都圏）</li>
                  <li>• 荷造り梱包</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-200" />

            <div className="flex flex-col md:flex-row md:items-start gap-4">
              <div className="text-[#1e3a8a] font-bold w-full md:w-48 flex-shrink-0">
                主要取引先
              </div>
              <div className="text-gray-700">
                <ul className="space-y-2">
                  <li>• ヤマト運輸株式会社</li>
                  <li>• マタイ紙工株式会社 秋川工場</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
