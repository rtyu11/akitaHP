import { ShieldCheck, Truck, Wind } from 'lucide-react';

export default function Services() {
    return (
        <section id="services" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-brand-navy mb-4">保有車両・特徴</h2>
                    <div className="w-20 h-1 bg-brand-green mx-auto rounded-full" />
                    <p className="mt-4 text-gray-600">多様なニーズにお応えする充実の車両ラインナップ</p>
                </div>

                {/* Features */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    <div className="p-6 bg-blue-50 rounded-xl text-center hover:shadow-lg transition-shadow">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-brand-navy shadow-sm">
                            <ShieldCheck className="w-8 h-8" />
                        </div>
                        <h3 className="font-bold text-lg mb-2 text-brand-navy">荷扱いは細心の注意を</h3>
                        <p className="text-gray-600 text-sm">お客様の大切なお荷物を、プロのドライバーが責任を持って丁寧に取り扱います。</p>
                    </div>
                    <div className="p-6 bg-blue-50 rounded-xl text-center hover:shadow-lg transition-shadow">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-brand-navy shadow-sm">
                            <Truck className="w-8 h-8" />
                        </div>
                        <h3 className="font-bold text-lg mb-2 text-brand-navy">PGでゆっくり正確に</h3>
                        <p className="text-gray-600 text-sm">パワーゲート装備車を多数保有。重量物も安全かつスムーズに積み降ろし可能です。</p>
                    </div>
                    <div className="p-6 bg-blue-50 rounded-xl text-center hover:shadow-lg transition-shadow">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-brand-navy shadow-sm">
                            <Wind className="w-8 h-8" />
                        </div>
                        <h3 className="font-bold text-lg mb-2 text-brand-navy">エアサスで負担軽減</h3>
                        <p className="text-gray-600 text-sm">精密機器などの輸送にも適したエアサス車を導入。振動によるお荷物への負担を最小限に抑えます。</p>
                    </div>
                </div>

                {/* Fleet List */}
                <div className="max-w-4xl mx-auto">
                    <h3 className="text-xl font-bold text-brand-navy mb-6 text-center">保有車両一覧</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="bg-gray-50 p-4 rounded-lg text-center border border-gray-100">
                            <div className="text-3xl font-bold text-brand-green mb-1">6<span className="text-sm text-gray-500 font-normal ml-1">台</span></div>
                            <div className="text-sm font-bold text-gray-700">大型<br />(13tウイング)</div>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg text-center border border-gray-100">
                            <div className="text-3xl font-bold text-brand-green mb-1">2<span className="text-sm text-gray-500 font-normal ml-1">台</span></div>
                            <div className="text-sm font-bold text-gray-700">増トン<br />ウイング</div>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg text-center border border-gray-100">
                            <div className="text-3xl font-bold text-brand-green mb-1">11<span className="text-sm text-gray-500 font-normal ml-1">台</span></div>
                            <div className="text-sm font-bold text-gray-700">中型<br />(4tウイングPG)</div>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg text-center border border-gray-100">
                            <div className="text-3xl font-bold text-brand-green mb-1">2<span className="text-sm text-gray-500 font-normal ml-1">台</span></div>
                            <div className="text-sm font-bold text-gray-700">中型<br />(4tバンPG)</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
