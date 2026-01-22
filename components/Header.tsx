import Link from 'next/link';
import { Phone, Menu } from 'lucide-react';

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100">
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-brand-navy rounded-md flex items-center justify-center text-white font-bold text-lg">
                        秋
                    </div>
                    <span className="text-xl font-bold text-brand-navy tracking-tight">有限会社 秋多運送</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link href="#about" className="text-gray-600 hover:text-brand-navy font-medium transition-colors">会社案内</Link>
                    <Link href="#services" className="text-gray-600 hover:text-brand-navy font-medium transition-colors">事業内容</Link>
                    <Link href="#recruit" className="text-gray-600 hover:text-brand-navy font-medium transition-colors">採用情報</Link>
                    <Link href="#news" className="text-gray-600 hover:text-brand-navy font-medium transition-colors">お知らせ</Link>
                </nav>

                {/* Contact / CTA */}
                <div className="hidden md:flex items-center gap-4">
                    <div className="flex flex-col items-end mr-2">
                        <span className="text-xs text-gray-500">お気軽にお問い合わせください</span>
                        <div className="flex items-center gap-1 text-xl font-bold text-brand-navy">
                            <Phone className="w-5 h-5" />
                            042-532-8256
                        </div>
                    </div>
                    <Link href="#contact" className="bg-brand-green hover:bg-green-600 text-white px-5 py-2.5 rounded-full font-bold shadow-lg shadow-green-200 transition-all hover:scale-105">
                        お問い合わせ
                    </Link>
                </div>

                {/* Mobile Menu Button (Placeholder) */}
                <button className="md:hidden p-2 text-gray-600">
                    <Menu className="w-6 h-6" />
                </button>
            </div>
        </header>
    );
}
