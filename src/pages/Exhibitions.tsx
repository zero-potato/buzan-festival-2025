import Layout from "@/components/Layout";
import { useEffect, useState } from "react";
import { useRoute } from "wouter";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

interface Exhibition {
  group: string;
  title: string;
  location: string;
  description: string;
}

interface ExhibitionsData {
  [key: string]: Exhibition[];
}

export default function Exhibitions() {
  const [, params] = useRoute("/exhibitions/:category");
  const category = params?.category;

  const [exhibitions, setExhibitions] = useState<ExhibitionsData>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/exhibitions.json")
      .then((res) => res.json())
      .then((data) => {
        setExhibitions(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading exhibitions:", error);
        setLoading(false);
      });
  }, []);

  const categories = [
    { key: "中学1年", label: "中学1年", color: "bg-[#fe1ecc]" },
    { key: "中学2年", label: "中学2年", color: "bg-[#ff6b35]" },
    { key: "中学3年", label: "中学3年", color: "bg-[#116cc7]" },
    { key: "高校1年", label: "高校1年", color: "bg-[#00d9ff]" },
    { key: "高校2年", label: "高校2年", color: "bg-[#fe1ecc]" },
    { key: "高校3年", label: "高校3年", color: "bg-[#ff6b35]" },
    { key: "部活動・委員会", label: "部活動・委員会", color: "bg-[#116cc7]" },
  ];

  const selectedCategory = category
    ? categories.find((cat) => cat.key === decodeURIComponent(category))
    : null;

  const displayData = selectedCategory
    ? { [selectedCategory.key]: exhibitions[selectedCategory.key] || [] }
    : exhibitions;

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-[#09003f] via-[#0a0050] to-[#09003f] overflow-hidden">
        <div className="circle-decoration w-96 h-96 bg-[#116cc7]/20 blur-3xl absolute top-0 left-0 animate-pulse"></div>
        <div className="circle-decoration w-64 h-64 bg-[#00d9ff]/20 blur-3xl absolute bottom-0 right-0 animate-pulse delay-75"></div>

        <div className="container relative z-10">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#116cc7] to-[#00d9ff] bg-clip-text text-transparent">
              展示詳細
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              クラス・部活動の個性あふれる展示をお楽しみください
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-[#09003f] border-b border-white/10">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/exhibitions">
              <Button
                variant={!category ? "default" : "outline"}
                className={
                  !category
                    ? "bg-[#116cc7] text-white hover:bg-[#116cc7]/90"
                    : "text-white border-white/30 hover:bg-white/10"
                }
              >
                すべて
              </Button>
            </Link>
            {categories.map((cat) => (
              <Link key={cat.key} href={`/exhibitions/${encodeURIComponent(cat.key)}`}>
                <Button
                  variant={category === cat.key ? "default" : "outline"}
                  className={
                    category === cat.key
                      ? `${cat.color} text-white hover:opacity-90`
                      : "text-white border-white/30 hover:bg-white/10"
                  }
                >
                  {cat.label}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Exhibitions List */}
      <section className="py-16 bg-[#09003f]">
        <div className="container">
          {loading ? (
            <div className="text-center text-white/60">読み込み中...</div>
          ) : (
            <div className="space-y-16">
              {Object.entries(displayData).map(([categoryName, items]) => {
                const categoryInfo = categories.find((cat) => cat.key === categoryName);
                if (!items || items.length === 0) return null;

                return (
                  <div key={categoryName}>
                    <h2
                      className={`text-3xl md:text-4xl font-bold mb-8 pb-4 border-b-2 ${
                        categoryInfo?.color || "bg-[#116cc7]"
                      } bg-clip-text text-transparent`}
                      style={{
                        backgroundImage: `linear-gradient(to right, ${
                          categoryInfo?.color.replace("bg-", "") || "#116cc7"
                        }, transparent)`,
                      }}
                    >
                      {categoryName}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {items.map((exhibition, index) => (
                        <Card
                          key={index}
                          className="bg-white/5 backdrop-blur-sm border-white/10 hover:border-[#116cc7]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#116cc7]/20"
                        >
                          <CardHeader>
                            <div className="flex items-start justify-between mb-2">
                              <span className="text-sm font-semibold text-[#00d9ff] bg-[#00d9ff]/20 px-3 py-1 rounded-full">
                                {exhibition.group}
                              </span>
                              {exhibition.location && (
                                <span className="text-base font-bold text-[#fe1ecc] bg-[#fe1ecc]/20 px-3 py-1.5 rounded-lg">
                                  {exhibition.location}
                                </span>
                              )}
                            </div>
                            <CardTitle className="text-2xl text-white">
                              {exhibition.title || "準備中"}
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <CardDescription className="text-white/70 text-base leading-relaxed">
                              {exhibition.description || "詳細は当日のお楽しみ！"}
                            </CardDescription>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}

