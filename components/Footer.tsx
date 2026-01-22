import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-brand-navy text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">有限会社 秋多運送</h3>
                        <address className="not-italic text-slate-300 leading-relaxed">
                            〒197-0811<br />
                            東京都あきる野市市原小宮2-3-6<br />
                            TEL: 042-532-8256<br />
                            FAX: 042-532-8257
                        </address>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">リンク</h3>
                        <ul className="space-y-2 text-slate-300">
                            <li><Link href="#about" className="hover:text-white transition-colors">会社案内</Link></li>
                            <li><Link href="#services" className="hover:text-white transition-colors">事業内容</Link></li>
                            <li><Link href="#recruit" className="hover:text-white transition-colors">採用情報</Link></li>
                            <li><Link href="#contact" className="hover:text-white transition-colors">お問い合わせ</Link></li>
                            <li><Link href="/admin" className="hover:text-white transition-colors text-sm opacity-50">管理者ログイン</Link></li>
                        </ul>
                    </div>

                    {/* Map Placeholder or Copyright */}
                    <div>
                        <div className="w-full h-40 bg-slate-800 rounded-lg flex items-center justify-center mb-4">
                            <span className="text-slate-500">Map Area</span>
                        </div>
                        <p className="text-slate-400 text-sm">
                            &copy; {new Date().getFullYear()} Akita Unso Co., Ltd. All Rights Reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
