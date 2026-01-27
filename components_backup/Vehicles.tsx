import { Truck, PackageCheck, Wind, Gauge } from "lucide-react";

export default function Vehicles() {
  const vehicles = [
    { name: "大型（13tウイング）", count: "6台" },
    { name: "増トンウイング", count: "2台" },
    { name: "中型（4tウイングPG付）", count: "11台" },
    { name: "中型（4tドライバンPG付）", count: "2台" },
  ];

  const features = [
    {
      icon: PackageCheck,
      title: "荷扱いは細心の注意を",
      description: "お客様の大切な荷物を丁寧に取り扱います",
    },
    {
      icon: Gauge,
      title: "PGでゆっくり正確に",
      description: "パワーゲートを活用した安全な積み降ろし",
    },
    {
      icon: Wind,
      title: "エアサスで負担軽減",
      description: "エアサスペンションで荷物への衝撃を軽減",
    },
  ];

  return (
    <section id="vehicles" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-4">
            保有車両
          </h2>
          <div className="w-20 h-1 bg-[#22c55e] mx-auto rounded-full" />
        </div>

        {/* 特徴 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-[#22c55e] rounded-full flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-[#1e3a8a] text-center mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* 車両リスト */}
        <div className="bg-white rounded-lg p-8 shadow-md">
          <div className="flex items-center gap-2 mb-6">
            <Truck className="w-6 h-6 text-[#1e3a8a]" />
            <h3 className="text-xl font-bold text-[#1e3a8a]">車両一覧</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {vehicles.map((vehicle, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#1e3a8a] rounded-full flex items-center justify-center">
                    <Truck className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-medium text-gray-700">
                    {vehicle.name}
                  </span>
                </div>
                <span className="text-2xl font-bold text-[#22c55e]">
                  {vehicle.count}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-6 border-t border-gray-200 text-center">
            <p className="text-gray-600">
              全車両、安全性と環境性能を重視した最新設備を搭載
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
