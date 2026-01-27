import { Truck, Package, MapPin } from 'lucide-react';

export default function About() {
    return (
        <section id="about" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-brand-navy mb-4">会社案内</h2>
                    <div className="w-20 h-1 bg-brand-green mx-auto rounded-full" />
                    <p className="mt-4 text-gray-600">地域に根ざし、お客様と共に歩む運送会社です。</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    {/* Company Table */}
                    <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                        <h3 className="text-xl font-bold text-brand-navy mb-6 border-l-4 border-brand-green pl-3">会社概要</h3>
                        <dl className="grid grid-cols-1 gap-4">
                            <div className="grid grid-cols-1 sm:grid-cols-3 border-b border-gray-100 pb-4">
                                <dt className="font-bold text-gray-700">名称</dt>
                                <dd className="sm:col-span-2 text-gray-600">有限会社 秋多運送</dd>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-3 border-b border-gray-100 pb-4">
                                <dt className="font-bold text-gray-700">代表者</dt>
                                <dd className="sm:col-span-2 text-gray-600">代表取締役 岡部 達也</dd>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-3 border-b border-gray-100 pb-4">
                                <dt className="font-bold text-gray-700">所在地</dt>
                                <dd className="sm:col-span-2 text-gray-600">
                                    〒197-0811<br />東京都あきる野市市原小宮2-3-6
                                </dd>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-3 border-b border-gray-100 pb-4">
                                <dt className="font-bold text-gray-700">電話番号</dt>
                                <dd className="sm:col-span-2 text-gray-600">042-532-8256</dd>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-3">
                                <dt className="font-bold text-gray-700">主要取引先</dt>
                                <dd className="sm:col-span-2 text-gray-600">ヤマト運輸株式会社、マタイ紙工株式会社</dd>
                            </div>
                        </dl>
                    </div>

                    {/* Business Info / Features */}
                    <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                        <h3 className="text-xl font-bold text-brand-navy mb-6 border-l-4 border-brand-green pl-3">事業内容</h3>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4">
                                <div className="p-3 bg-blue-50 text-brand-navy rounded-lg">
                                    <Truck className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">一般貨物輸送（首都圏）</h4>
                                    <p className="text-gray-600 text-sm">首都圏エリアを中心に、安全・確実な輸送サービスを提供しています。13tウイングから中型車まで幅広い車両を保有。</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="p-3 bg-blue-50 text-brand-navy rounded-lg">
                                    <Package className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">荷造り梱包</h4>
                                    <p className="text-gray-600 text-sm">お客様の大切な荷物を守るため、細心の注意を払って丁寧な荷造り・梱包作業を行います。</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
