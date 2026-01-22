import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 max-w-4xl text-center">
                <h2 className="text-3xl font-bold text-brand-navy mb-4">お問い合わせ</h2>
                <div className="w-20 h-1 bg-brand-green mx-auto rounded-full mb-8" />

                <div className="bg-white p-10 rounded-xl shadow-lg border border-gray-100">
                    <p className="text-gray-600 mb-8">
                        配送のご依頼、採用に関するお問い合わせは、お電話にて承っております。<br />
                        お気軽にご連絡ください。
                    </p>

                    <div className="bg-blue-50 py-8 px-4 rounded-lg mb-8 inline-block w-full max-w-md">
                        <div className="flex items-center justify-center gap-2 text-brand-navy mb-2">
                            <Phone className="w-6 h-6" />
                            <span className="font-bold">電話番号</span>
                        </div>
                        <a href="tel:0425328256" className="text-4xl font-bold text-brand-navy hover:text-brand-green transition-colors font-mono">
                            042-532-8256
                        </a>
                        <p className="text-sm text-gray-500 mt-2">受付時間 8:00〜17:00（日曜・祝日定休）</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-lg mx-auto mb-8 text-gray-600">
                        <div className="flex items-start gap-2">
                            <span className="font-bold min-w-[3rem]">FAX</span>
                            <span>042-532-8257</span>
                        </div>
                        <div className="flex items-start gap-2">
                            <span className="font-bold min-w-[3rem]">住所</span>
                            <span>〒197-0811<br />東京都あきる野市市原小宮2-3-6</span>
                        </div>
                    </div>

                    {/* Warning */}
                    <div className="bg-red-50 border border-red-100 p-4 rounded-lg mt-8">
                        <p className="text-red-600 font-bold flex items-center justify-center gap-2">
                            <span className="text-xl">⚠️</span>
                            営業電話・営業メールなどは固くお断りいたします。
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
