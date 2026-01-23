import { Candy, Heart, Wallet, Users, Baby } from 'lucide-react'; // Candy icon for snacks

export default function Recruit() {
    return (
        <section id="recruit" className="py-20 bg-brand-navy text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute right-[-10%] top-[-10%] w-[50%] h-[50%] rounded-full bg-brand-green blur-3xl" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">採用情報</h2>
                    <div className="w-20 h-1 bg-brand-green mx-auto rounded-full" />
                    <p className="mt-4 text-gray-300 text-lg">
                        &quot;自然豊かな西多摩で、ゆったりとした雰囲気の中、<br className="hidden md:inline" />健康的に働きませんか？&quot;
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Job Details */}
                    <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/10">
                        <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                            <Users className="w-6 h-6 text-brand-green" />
                            募集要項
                        </h3>
                        <dl className="space-y-4">
                            <div className="pb-4 border-b border-white/10">
                                <dt className="text-brand-green font-bold text-sm mb-1">雇用形態</dt>
                                <dd className="font-bold text-lg">正社員（未経験歓迎）</dd>
                            </div>
                            <div className="pb-4 border-b border-white/10">
                                <dt className="text-brand-green font-bold text-sm mb-1">給与</dt>
                                <dd className="font-bold text-lg">
                                    月給 28万円〜<br />
                                    <span className="text-base font-normal text-gray-300">（大型ドライバー：40万円〜）</span>
                                </dd>
                            </div>
                            <div>
                                <dt className="text-brand-green font-bold text-sm mb-1">福利厚生・手当</dt>
                                <dd className="grid grid-cols-1 gap-2 text-sm">
                                    <span className="flex items-center gap-2"><Heart className="w-4 h-4" /> 健康維持促進手当</span>
                                    <span className="flex items-center gap-2"><Wallet className="w-4 h-4" /> 通信費補助 / 貢献手当</span>
                                    <span className="flex items-center gap-2"><Baby className="w-4 h-4" /> 子供手当</span>
                                </dd>
                            </div>
                        </dl>
                    </div>

                    {/* Unique Benefit Highlight */}
                    <div className="flex flex-col justify-center">
                        <div className="bg-white text-brand-navy p-8 rounded-xl shadow-2xl relative transform hover:scale-105 transition-transform duration-300">
                            <div className="absolute -top-6 -right-6 bg-red-500 text-white w-20 h-20 rounded-full flex items-center justify-center font-bold text-sm shadow-lg rotate-12 animate-pulse">
                                CHECK!
                            </div>
                            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-brand-navy">
                                <Candy className="w-8 h-8 text-brand-green" />
                                ユニークな福利厚生
                            </h3>
                            <div className="bg-brand-green/10 p-6 rounded-lg border-2 border-brand-green/20 mb-4">
                                <h4 className="text-xl font-bold text-brand-green mb-2">おやつ代支給 🍭</h4>
                                <p className="text-gray-700 font-medium">
                                    なんと、禁煙者の方には毎月「おやつ代」を支給！<br />
                                    健康的な身体づくりとお茶の時間を大切にしています。
                                </p>
                            </div>
                            <p className="text-gray-600 text-sm">
                                秋多運送では、社員の健康と笑顔を第一に考えています。<br />
                                喫煙習慣のない方には、感謝の気持ちを込めてプラスアルファのサポートをご用意。
                            </p>
                        </div>
                        <div className="mt-8 text-center">
                            <a href="#contact" className="inline-block bg-brand-green text-white font-bold py-3 px-10 rounded-full shadow-lg hover:bg-green-500 transition-colors">
                                応募について問い合わせる
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
