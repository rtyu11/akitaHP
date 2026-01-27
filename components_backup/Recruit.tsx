import { Candy, Heart, Wallet, Users, Baby, Award } from "lucide-react";

export default function Recruit() {
  return (
    <section
      id="recruit"
      className="py-20 bg-[#1e3a8a] text-white relative overflow-hidden"
    >
      {/* 背景装飾 */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute right-[-10%] top-[-10%] w-[50%] h-[50%] rounded-full bg-[#22c55e] blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">採用情報</h2>
          <div className="w-20 h-1 bg-[#22c55e] mx-auto rounded-full" />
          <p className="mt-6 text-gray-300 text-lg max-w-3xl mx-auto">
            自然豊かな環境で、健康的に働きませんか？
            <br className="hidden md:inline" />
            禁煙された方には「おやつ代」を支給するなど、健康促進に力を入れています。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* 募集要項 */}
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/10">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Users className="w-6 h-6 text-[#22c55e]" />
              募集要項
            </h3>
            <dl className="space-y-6">
              <div className="pb-4 border-b border-white/10">
                <dt className="text-[#22c55e] font-bold text-sm mb-2">
                  募集職種
                </dt>
                <dd className="font-bold text-lg">
                  配送ドライバー（未経験歓迎）
                </dd>
                <dd className="text-sm text-gray-300 mt-1">
                  中型免許以上をお持ちの方
                  <br />
                  大型・フォークリフト免許取得制度あり
                </dd>
              </div>
              <div className="pb-4 border-b border-white/10">
                <dt className="text-[#22c55e] font-bold text-sm mb-2">給与</dt>
                <dd className="font-bold text-lg">基本給 280,000円〜</dd>
                <dd className="text-base font-normal text-gray-300 mt-1">
                  ※ 大型車ドライバー：400,000円以上可
                </dd>
              </div>
              <div>
                <dt className="text-[#22c55e] font-bold text-sm mb-3">
                  福利厚生・手当
                </dt>
                <dd className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 bg-white/5 p-2 rounded">
                    <Heart className="w-4 h-4 text-[#22c55e]" />
                    <span>健康維持促進手当</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/5 p-2 rounded">
                    <Wallet className="w-4 h-4 text-[#22c55e]" />
                    <span>通信費補助</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/5 p-2 rounded">
                    <Baby className="w-4 h-4 text-[#22c55e]" />
                    <span>子供手当</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/5 p-2 rounded">
                    <Award className="w-4 h-4 text-[#22c55e]" />
                    <span>貢献手当</span>
                  </div>
                </dd>
              </div>
            </dl>
          </div>

          {/* ユニークな福利厚生の強調 */}
          <div className="flex flex-col justify-center">
            <div className="bg-white text-[#1e3a8a] p-8 rounded-xl shadow-2xl relative">
              <div className="absolute -top-4 -right-4 bg-gradient-to-br from-red-500 to-pink-500 text-white w-24 h-24 rounded-full flex items-center justify-center font-bold text-xs shadow-lg rotate-12 leading-tight">
                注目の
                <br />
                福利厚生
              </div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-[#1e3a8a]">
                <Candy className="w-8 h-8 text-[#22c55e]" />
                おやつ代支給
              </h3>
              <div className="bg-[#22c55e]/10 p-6 rounded-lg border-2 border-[#22c55e]/30 mb-4">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-3xl">🍭</span>
                  <h4 className="text-xl font-bold text-[#22c55e]">
                    禁煙者向け特別手当
                  </h4>
                </div>
                <p className="text-gray-700 font-medium leading-relaxed">
                  健康的な生活を応援するため、禁煙者の方には毎月「おやつ代」を支給しています。
                  休憩時間のリフレッシュタイムを大切にしながら、健康的な身体づくりをサポートします。
                </p>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                秋多運送では、社員の健康と笑顔を第一に考えています。喫煙習慣のない方には、感謝の気持ちを込めて特別な手当をご用意しています。
              </p>
            </div>
            <div className="mt-8 text-center">
              <a
                href="#contact"
                className="inline-block bg-[#22c55e] text-white font-bold py-4 px-10 rounded-full shadow-lg hover:bg-[#16a34a] transition-all hover:scale-105"
              >
                応募について問い合わせる
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
