import Image from 'next/image';

export default function Hero() {
    return (
        <section className="relative h-[600px] w-full flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                {/* Placeholder for generated image - assuming it will be placed in public/hero_truck_bg.png or similar */}
                <Image
                    src="/hero_truck_bg.png"
                    alt="Truck on road"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-brand-navy/60 mix-blend-multiply" />
            </div>

            <div className="relative z-10 container mx-auto px-4 text-center text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
                    安全と信頼を運ぶ<br />
                    <span className="text-brand-green">秋多運送</span>の物流サービス
                </h1>
                <p className="text-xl md:text-2xl mb-8 font-light drop-shadow-md">
                    首都圏を中心に、真心こめてお客様の荷物をお届けします。
                </p>
                <a href="#contact" className="inline-block bg-brand-green hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full shadow-lg transition-transform hover:scale-105">
                    お問い合わせはこちら
                </a>
            </div>
        </section>
    );
}
