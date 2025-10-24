import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section with Poster Background */}
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(/poster.jpg)",
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#09003f]/80 via-[#09003f]/60 to-[#09003f]/90"></div>
        </div>

        {/* Decorative Circles */}
        <div className="circle-decoration w-64 h-64 bg-[#fe1ecc]/20 blur-3xl absolute top-20 left-10 animate-pulse"></div>
        <div className="circle-decoration w-96 h-96 bg-[#116cc7]/20 blur-3xl absolute bottom-20 right-10 animate-pulse delay-75"></div>
        <div className="circle-decoration w-48 h-48 bg-[#00d9ff]/20 blur-3xl absolute top-1/2 left-1/4 animate-pulse delay-150"></div>

        {/* Content */}
        <div className="relative z-10 container text-center py-20">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-4">
              <p className="text-lg md:text-xl text-white/80 font-medium">
                日本大学豊山中学校・高等学校
              </p>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
                飛び込め！
                <br />
                ここにしかない青春へ
              </h1>
              <div className="flex items-center justify-center space-x-4 text-2xl md:text-3xl font-bold">
                <span className="text-[#fe1ecc]">豊山祭</span>
                <span className="text-white">2025</span>
              </div>
            </div>

            <div className="space-y-4 text-white/90">
              <p className="text-xl md:text-2xl font-semibold">
                10月25日(土) - 26日(日)
              </p>
              <p className="text-lg">SAT.SUN</p>
            </div>

            <div className="pt-8">
              <p className="text-lg text-white/80 mb-6">
                Produced by 日大豊山 高校生徒会
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 bg-gradient-to-b from-[#09003f] to-[#0a0050]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#fe1ecc] to-[#116cc7] bg-clip-text text-transparent">
              Welcome to Buzan Festival!
            </h2>

            <div className="space-y-6 text-lg text-white/90">
              <p className="leading-relaxed">
                今年も飲食の模擬店＆売店も充実に営業中！
              </p>
              <p className="leading-relaxed">
                男子校だからこその文化祭を、ぜひお楽しみください！！
              </p>
              <p className="leading-relaxed">
                ご予約は不要です。みなさまのご来場、心よりお待ちしております！
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Notice Section */}
      <section className="py-16 bg-[#0a0050]">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#00d9ff]">
              お知らせ
            </h2>

            <div className="space-y-6 bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="space-y-4 text-white/90">
                <p className="text-lg">
                  <span className="text-[#fe1ecc] font-semibold">
                    校内土足厳禁
                  </span>
                  ですので、
                  <span className="text-[#fe1ecc] font-semibold">
                    スリッパ等持参
                  </span>
                  するようにお願いします
                </p>
                <p className="text-lg">
                  展示は
                  <span className="text-[#fe1ecc] font-semibold">
                    15時まで開催となります
                  </span>
                  。
                </p>
                <p className="text-lg">
                  アリーナイベントは
                  <span className="text-[#fe1ecc] font-semibold">
                    16時まで行っています
                  </span>
                  。
                </p>
              </div>

              <div className="pt-6 text-center">
                <p className="text-white/80 mb-4">パンフレットはこちらです！</p>
                <Button
                  className="bg-gradient-to-r from-[#fe1ecc] to-[#116cc7] hover:opacity-90 text-white font-semibold px-8 py-6 text-lg"
                  asChild
                >
                  <a href="https://drive.google.com/file/d/151-N_G_bkufAFXyjf_W_LDC2gL6esG0c/view?usp=sharing" target="_blank" rel="noopener noreferrer">詳しく見る</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 bg-gradient-to-b from-[#0a0050] to-[#09003f]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Link href="/food-shops">
              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#ff6b35]/20 to-[#fe1ecc]/20 border border-white/10 p-8 hover:border-[#fe1ecc]/50 transition-all duration-300 cursor-pointer h-full">
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    飲食模擬店
                  </h3>
                  <p className="text-white/70">
                    美味しい食べ物が盛りだくさん！
                  </p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#fe1ecc]/0 to-[#fe1ecc]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </Link>

            <Link href="/exhibitions">
              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#116cc7]/20 to-[#00d9ff]/20 border border-white/10 p-8 hover:border-[#116cc7]/50 transition-all duration-300 cursor-pointer h-full">
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    展示詳細
                  </h3>
                  <p className="text-white/70">
                    クラス・部活動の展示をチェック！
                  </p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#116cc7]/0 to-[#116cc7]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </Link>

            <Link href="/stage-events">
              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#00d9ff]/20 to-[#116cc7]/20 border border-white/10 p-8 hover:border-[#00d9ff]/50 transition-all duration-300 cursor-pointer h-full">
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    ステージイベント
                  </h3>
                  <p className="text-white/70">熱気あふれるステージをお楽しみに！</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#00d9ff]/0 to-[#00d9ff]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

