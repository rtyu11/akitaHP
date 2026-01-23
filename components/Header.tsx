"use client";

import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* 会社名 */}
          <div className="flex-shrink-0">
            <h1 className="text-xl md:text-2xl font-bold text-[#1e3a8a]">
              有限会社 秋多運送
            </h1>
          </div>

          {/* 電話番号 - デスクトップ */}
          <div className="hidden lg:flex items-center gap-3 bg-[#22c55e] text-white px-6 py-3 rounded-lg shadow-lg hover:bg-[#16a34a] transition-colors">
            <Phone className="w-6 h-6" />
            <div>
              <div className="text-xs font-medium">お電話でのお問い合わせ</div>
              <a
                href="tel:042-532-8256"
                className="text-2xl font-bold tracking-wider"
              >
                042-532-8256
              </a>
            </div>
          </div>

          {/* ナビゲーション - デスクトップ */}
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("top")}
              className="text-gray-700 hover:text-[#1e3a8a] font-medium transition-colors"
            >
              トップ
            </button>
            <button
              onClick={() => scrollToSection("news")}
              className="text-gray-700 hover:text-[#1e3a8a] font-medium transition-colors"
            >
              お知らせ
            </button>
            <button
              onClick={() => scrollToSection("company")}
              className="text-gray-700 hover:text-[#1e3a8a] font-medium transition-colors"
            >
              会社概要
            </button>
            <button
              onClick={() => scrollToSection("vehicles")}
              className="text-gray-700 hover:text-[#1e3a8a] font-medium transition-colors"
            >
              保有車両
            </button>
            <button
              onClick={() => scrollToSection("recruit")}
              className="text-gray-700 hover:text-[#1e3a8a] font-medium transition-colors"
            >
              採用情報
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-[#1e3a8a] font-medium transition-colors"
            >
              お問い合わせ
            </button>
          </nav>

          {/* モバイルメニューボタン */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* 電話番号 - モバイル */}
        <div className="lg:hidden mb-3">
          <a
            href="tel:042-532-8256"
            className="flex items-center justify-center gap-2 bg-[#22c55e] text-white px-4 py-3 rounded-lg shadow-lg hover:bg-[#16a34a] transition-colors"
          >
            <Phone className="w-5 h-5" />
            <span className="text-lg font-bold">042-532-8256</span>
          </a>
        </div>

        {/* モバイルメニュー */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-3">
              <button
                onClick={() => scrollToSection("top")}
                className="text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded transition-colors"
              >
                トップ
              </button>
              <button
                onClick={() => scrollToSection("news")}
                className="text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded transition-colors"
              >
                お知らせ
              </button>
              <button
                onClick={() => scrollToSection("company")}
                className="text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded transition-colors"
              >
                会社概要
              </button>
              <button
                onClick={() => scrollToSection("vehicles")}
                className="text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded transition-colors"
              >
                保有車両
              </button>
              <button
                onClick={() => scrollToSection("recruit")}
                className="text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded transition-colors"
              >
                採用情報
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded transition-colors"
              >
                お問い合わせ
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
