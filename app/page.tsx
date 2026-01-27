"use client";

import { useEffect, useState } from "react";
import { Phone, Mail, MapPin, Send, Truck, Users, Shield, Clock, ChevronRight, Menu, X, Candy } from "lucide-react";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");
    const form = e.currentTarget;
    const formData = new FormData(form);

    // Google Apps Script URL (User to configure)
    const GAS_URL = "YOUR_GAS_SCRIPT_URL_HERE";

    try {
      // If no URL is set, simulate success for demo
      if (GAS_URL === "YOUR_GAS_SCRIPT_URL_HERE") {
        await new Promise(resolve => setTimeout(resolve, 1500));
        setFormStatus("success");
        form.reset();
        return;
      }

      await fetch(GAS_URL, {
        method: "POST",
        body: formData,
        mode: "no-cors",
      });
      setFormStatus("success");
      form.reset();
    } catch (error) {
      console.error(error);
      setFormStatus("error");
    }
  };

  const navLinks = [
    { name: "ホーム", href: "#top" },
    { name: "会社概要", href: "#about" },
    { name: "事業内容", href: "#services" },
    { name: "保有車両", href: "#vehicles" },
    { name: "採用情報", href: "#recruit" },
    { name: "お問い合わせ", href: "#contact" },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-200">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "py-4 glass shadow-md" : "py-6 bg-transparent"
          }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <a href="#top" className="text-2xl font-bold tracking-tight text-slate-900">
            秋多運送<span className="text-brand-green">.</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-600 hover:text-brand-navy font-medium transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-green transition-all group-hover:w-full" />
              </a>
            ))}
            <a
              href="#contact"
              className="px-5 py-2.5 bg-brand-navy text-white rounded-full font-bold hover:bg-blue-800 transition-colors shadow-lg shadow-blue-900/20"
            >
              お問い合わせ
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100 p-6 flex flex-col gap-4 animate-in slide-in-from-top-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-slate-700 py-2 border-b border-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="top" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-blue-50 z-0" />
        {/* Animated Shapes */}
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-blue-200/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-green-200/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />

        <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 fade-in-up">
            <div className="inline-block px-4 py-1.5 bg-blue-100 text-brand-navy rounded-full text-sm font-bold tracking-wide mb-2">
              SINCE 1973 - 創業50年の信頼
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight text-slate-900">
              物流の未来を、<br />
              <span className="text-gradient">確かな技術</span>で<br />
              つなぐ。
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-lg">
              東京都あきる野市を拠点に、安全・迅速・確実な輸送サービスを提供します。
              お客様のビジネスを止めない、信頼のパートナー。
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-8 py-4 bg-brand-navy text-white rounded-full font-bold text-lg hover:bg-blue-800 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center gap-2"
              >
                お見積もり・相談 <ChevronRight className="w-5 h-5" />
              </a>
              <a
                href="#services"
                className="px-8 py-4 bg-white text-brand-navy border-2 border-brand-navy rounded-full font-bold text-lg hover:bg-blue-50 transition-all"
              >
                事業内容を見る
              </a>
            </div>
          </div>
          <div className="relative h-[400px] md:h-[600px] bg-gradient-to-tr from-brand-navy to-blue-600 rounded-3xl shadow-2xl overflow-hidden group">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-80 group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-black/10" />

            {/* Overlay Info */}
            <div className="absolute bottom-8 left-8 right-8 glass p-6 rounded-2xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-green rounded-full flex items-center justify-center text-white">
                  <Truck className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-600">保有車両</p>
                  <p className="text-2xl font-bold text-brand-navy">2t 〜 大型車まで</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About / Features */}
      <section id="about" className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">秋多運送の強み</h2>
            <div className="w-20 h-1 bg-brand-green mx-auto rounded-full" />
            <p className="mt-6 text-slate-600">
              半世紀にわたり積み重ねてきた実績とノウハウで、<br />
              お客様の多種多様なニーズに柔軟にお応えします。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "絶対的な安全性",
                desc: "徹底した安全管理とドライバー教育により、お客様の大切な荷物を事故なく確実に届けます。",
                color: "text-blue-600",
                bg: "bg-blue-50"
              },
              {
                icon: Clock,
                title: "迅速・正確",
                desc: "交通状況をリアルタイムに把握し、最適なルートでの配送を実現。納期厳守をお約束します。",
                color: "text-green-600",
                bg: "bg-green-50"
              },
              {
                icon: Users,
                title: "柔軟な対応力",
                desc: "急な配送依頼や特殊な荷物の取り扱いなど、物流のプロフェッショナルが親身に対応します。",
                color: "text-purple-600",
                bg: "bg-purple-50"
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-100 card-hover">
                <div className={`w-16 h-16 ${item.bg} ${item.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <span className="text-brand-green font-bold tracking-wider uppercase text-sm">Services</span>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mt-2">事業内容</h2>
            </div>
            <p className="text-slate-600 max-w-md">
              一般貨物輸送から精密機器の運搬、引越しまで。<br />物流に関するあらゆる課題を解決します。
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "一般貨物自動車運送事業",
              "貨物軽自動車運送事業",
              "貨物利用運送事業",
              "荷造り梱包",
              "引越し便",
              "倉庫管理・保管"
            ].map((service, idx) => (
              <div key={idx} className="group relative bg-white overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-all h-64 flex items-end p-6 border border-gray-100">
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                <div className="relative z-10 w-full">
                  <div className="w-12 h-1 bg-brand-green mb-4 transform origin-left group-hover:scale-x-150 transition-transform" />
                  <h3 className="text-xl font-bold text-white group-hover:text-brand-green transition-colors">{service}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recruit Section (Updated with Details) */}
      <section id="recruit" className="py-32 bg-brand-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-fixed bg-center opacity-20" />

        {/* Decorative Blur */}
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-brand-green blur-[100px] opacity-20" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">共に走る仲間を募集中</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              自然豊かな環境で、健康的に働きませんか？<br />
              未経験者も大歓迎。充実したサポート体制でお迎えします。
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Requirements */}
            <div className="glass bg-white/10 p-8 rounded-2xl border border-white/10 backdrop-blur-md">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Users className="w-6 h-6 text-brand-light-green" /> 募集要項
              </h3>
              <div className="space-y-6">
                <div className="pb-4 border-b border-white/10">
                  <p className="text-brand-light-green font-bold text-sm mb-1">募集職種</p>
                  <p className="text-xl font-bold text-white">配送ドライバー（未経験歓迎）</p>
                  <p className="text-sm text-blue-200 mt-1">※ 中型免許以上 / 大型・フォークリフト免許取得支援あり</p>
                </div>
                <div className="pb-4 border-b border-white/10">
                  <p className="text-brand-light-green font-bold text-sm mb-1">給与</p>
                  <p className="text-xl font-bold text-white">月給 280,000円 〜</p>
                  <p className="text-sm text-blue-200 mt-1">※ 大型車ドライバー：月給 400,000円以上可</p>
                </div>
                <div>
                  <p className="text-brand-light-green font-bold text-sm mb-2">手当・福利厚生</p>
                  <div className="grid grid-cols-2 gap-3 text-sm text-white">
                    {["健康維持促進手当", "通信費補助", "子供手当", "貢献手当", "社会保険完備"].map(tag => (
                      <span key={tag} className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-lg">
                        <Shield className="w-3 h-3 text-brand-green" /> {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Special Benefit: Snacks */}
            <div className="relative">
              <div className="absolute -top-6 -right-6 bg-gradient-to-br from-pink-500 to-red-500 text-white w-24 h-24 rounded-full flex items-center justify-center font-bold text-xs shadow-xl rotate-12 z-20 animate-bounce cursor-default" title="Unique Benefit">
                注目の<br />福利厚生
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-2xl overflow-hidden relative group">
                <div className="absolute inset-0 bg-brand-green/5 group-hover:bg-brand-green/10 transition-colors" />
                <h3 className="text-2xl font-bold text-brand-navy mb-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-green rounded-full flex items-center justify-center text-white">🍭</div>
                  禁煙者におやつ代支給
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6 font-medium">
                  秋多運送は社員の健康を第一に考えています。<br />
                  タバコを吸わない方には、毎月「おやつ代」として特別手当を支給！
                  休憩時間のリフレッシュや健康促進を応援しています。
                </p>
                <a
                  href="tel:042-532-8256"
                  className="flex w-full items-center justify-center gap-2 py-4 bg-brand-navy text-white font-bold rounded-xl hover:bg-blue-800 transition-all shadow-lg"
                >
                  <Phone className="w-5 h-5" />
                  電話で応募する (042-532-8256)
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">お問い合わせ</h2>
            <p className="text-slate-600">お見積もりのご依頼やご質問など、お気軽にお問い合わせください。</p>
          </div>

          <div className="grid md:grid-cols-5 gap-12">
            {/* Info Side */}
            <div className="md:col-span-2 space-y-8">
              <div className="bg-slate-50 p-6 rounded-2xl border border-gray-100">
                <h3 className="font-bold text-brand-navy mb-4 flex items-center gap-2">
                  <Phone className="w-5 h-5 text-brand-green" /> お電話
                </h3>
                <p className="text-2xl font-bold text-slate-800">042-532-8256</p>
                <p className="text-sm text-slate-500 mt-1">平日 8:00〜17:00</p>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-gray-100">
                <h3 className="font-bold text-brand-navy mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-brand-green" /> 所在地
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  〒197-0811<br />
                  東京都あきる野市市原小宮2-3-6
                </p>
              </div>

              <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
                <p className="text-sm text-red-600 font-bold">
                  ※営業電話・営業メールなどはお断りしております。
                </p>
              </div>
            </div>

            {/* Form Side */}
            <div className={`md:col-span-3 bg-white p-8 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden ${formStatus === "submitting" ? "opacity-70 pointer-events-none" : ""}`}>
              {formStatus === "success" ? (
                <div className="absolute inset-0 z-10 bg-white/90 flex flex-col items-center justify-center text-center p-6 fade-in">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                    <Send className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-navy mb-2">送信完了しました</h3>
                  <p className="text-slate-600 mb-6">
                    お問い合わせありがとうございます。<br />担当者より折り返しご連絡いたします。
                  </p>
                  <button onClick={() => setFormStatus("idle")} className="text-brand-blue font-bold hover:underline">
                    戻る
                  </button>
                </div>
              ) : null}

              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">お名前 <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all outline-none"
                    placeholder="例：山田 太郎"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2">メールアドレス <span className="text-red-500">*</span></label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all outline-none"
                    placeholder="例：example@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2">お問い合わせ内容 <span className="text-red-500">*</span></label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all outline-none resize-none"
                    placeholder="ご用件をご記入ください"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className="w-full py-4 bg-brand-navy text-white font-bold rounded-lg hover:bg-blue-900 transition-colors shadow-lg flex items-center justify-center gap-2"
                >
                  {formStatus === "submitting" ? "送信中..." : "送信する"}
                  {!formStatus && <Send className="w-4 h-4" />}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-white mb-6">有限会社 秋多運送</h2>
          <div className="flex justify-center gap-6 mb-8 text-sm font-medium">
            {navLinks.map(link => (
              <a key={link.name} href={link.href} className="hover:text-white transition-colors">{link.name}</a>
            ))}
          </div>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Akita Transport Co., Ltd. All Rights Reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
