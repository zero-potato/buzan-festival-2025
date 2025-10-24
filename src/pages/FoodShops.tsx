import Layout from "@/components/Layout";
import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface FoodShop {
  group: string;
  title: string;
  location: string;
  description: string;
}

export default function FoodShops() {
  const [foodShops, setFoodShops] = useState<FoodShop[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/food-shops.json")
      .then((res) => res.json())
      .then((data) => {
        setFoodShops(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading food shops:", error);
        setLoading(false);
      });
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-[#09003f] via-[#0a0050] to-[#09003f] overflow-hidden">
        <div className="circle-decoration w-96 h-96 bg-[#ff6b35]/20 blur-3xl absolute top-0 right-0 animate-pulse"></div>
        <div className="circle-decoration w-64 h-64 bg-[#fe1ecc]/20 blur-3xl absolute bottom-0 left-0 animate-pulse delay-75"></div>

        <div className="container relative z-10">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#ff6b35] to-[#fe1ecc] bg-clip-text text-transparent">
              飲食模擬店
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              美味しい食べ物が盛りだくさん！各クラスが腕によりをかけた自慢の一品をお楽しみください。
            </p>
          </div>
        </div>
      </section>

      {/* Food Shops List */}
      <section className="py-16 bg-[#09003f]">
        <div className="container">
          {loading ? (
            <div className="text-center text-white/60">読み込み中...</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {foodShops.map((shop, index) => (
                <Card
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border-white/10 hover:border-[#fe1ecc]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#fe1ecc]/20"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <span className="text-sm font-semibold text-[#ff6b35] bg-[#ff6b35]/20 px-3 py-1 rounded-full">
                        {shop.group}
                      </span>
                      <span className="text-base font-bold text-[#fe1ecc] bg-[#fe1ecc]/20 px-3 py-1.5 rounded-lg">{shop.location}</span>
                    </div>
                    <CardTitle className="text-2xl text-white">{shop.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-white/70 text-base leading-relaxed">
                      {shop.description || "詳細は当日のお楽しみ！"}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}

