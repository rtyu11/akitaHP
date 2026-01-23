import { Phone, Mail, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-4">
            お問い合わせ
          </h2>
          <div className="w-20 h-1 bg-[#22c55e] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 電話でのお問い合わせ */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <h3 className="text-xl font-bold text-[#1e3a8a] mb-6 flex items-center gap-2">
              <Phone className="w-6 h-6 text-[#22c55e]" />
              お電話でのお問い合わせ
            </h3>
            <div className="bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] py-8 px-4 rounded-lg mb-6 text-center">
              <div className="text-white mb-2 font-bold">電話番号</div>
              <a
                href="tel:042-532-8256"
                className="text-4xl md:text-5xl font-bold text-white hover:text-[#22c55e] transition-colors font-mono block"
              >
                042-532-8256
              </a>
              <p className="text-sm text-blue-100 mt-3">
                受付時間 8:00〜17:00（日曜・祝日定休）
              </p>
            </div>

            <div className="space-y-4 text-gray-700">
              <div className="flex items-start gap-3 p-3 bg-gray-50 rounded">
                <MapPin className="w-5 h-5 text-[#1e3a8a] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-sm mb-1">所在地</div>
                  <div className="text-sm">
                    〒197-0811
                    <br />
                    東京都あきる野市市原小宮2-3-6
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* メールフォーム */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <h3 className="text-xl font-bold text-[#1e3a8a] mb-6 flex items-center gap-2">
              <Mail className="w-6 h-6 text-[#22c55e]" />
              メールでのお問い合わせ
            </h3>
            <form action="https://formspree.io/f/YOUR_ID_HERE" method="POST">
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-bold text-gray-700 mb-2"
                  >
                    お名前 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#22c55e] focus:border-transparent"
                    placeholder="山田 太郎"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-bold text-gray-700 mb-2"
                  >
                    メールアドレス <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#22c55e] focus:border-transparent"
                    placeholder="example@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-bold text-gray-700 mb-2"
                  >
                    電話番号
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#22c55e] focus:border-transparent"
                    placeholder="090-1234-5678"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-bold text-gray-700 mb-2"
                  >
                    お問い合わせ内容 <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#22c55e] focus:border-transparent resize-none"
                    placeholder="お問い合わせ内容をご記入ください"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold py-4 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg"
                >
                  <Send className="w-5 h-5" />
                  送信する
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* 警告 */}
        <div className="mt-8 bg-red-50 border-2 border-red-200 p-6 rounded-lg">
          <p className="text-red-600 font-bold text-center flex items-center justify-center gap-2 text-lg">
            <span className="text-2xl">⚠️</span>
            営業電話・営業メールなどは固くお断りいたします。
          </p>
        </div>
      </div>
    </section>
  );
}
