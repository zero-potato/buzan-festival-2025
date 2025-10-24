import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, MapPin, Info, Camera, Users, Vote } from "lucide-react";

export default function Notice() {
  const notices = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "来場者の出入口について",
      color: "text-[#116cc7]",
      bgColor: "bg-[#116cc7]/10",
      borderColor: "border-[#116cc7]/30",
      content: [
        "来場者の皆様の出入口は1階となります",
        "在校生の出入口は2階です",
      ],
    },
    {
      icon: <Info className="w-6 h-6" />,
      title: "エレベーター・エスカレーターのご利用",
      color: "text-[#00d9ff]",
      bgColor: "bg-[#00d9ff]/10",
      borderColor: "border-[#00d9ff]/30",
      content: [
        "来場者の皆様は、エスカレーター・エレベーター(小)をご自由にご利用ください",
      ],
    },
    {
      icon: <AlertCircle className="w-6 h-6" />,
      title: "保健室について",
      color: "text-[#fe1ecc]",
      bgColor: "bg-[#fe1ecc]/10",
      borderColor: "border-[#fe1ecc]/30",
      content: [
        "「保健室」は、2階にあります",
        "怪我をされた方や体調が優れない方は、遠慮なく「保健室」にお越しください",
      ],
    },
    {
      icon: <Info className="w-6 h-6" />,
      title: "ご飲食について",
      color: "text-[#ff6b35]",
      bgColor: "bg-[#ff6b35]/10",
      borderColor: "border-[#ff6b35]/30",
      content: [
        "ご飲食は、2階の生徒ホールと3階の模擬店教室内にてお願いします",
      ],
    },
    {
      icon: <AlertCircle className="w-6 h-6" />,
      title: "イベント実施時間",
      color: "text-[#116cc7]",
      bgColor: "bg-[#116cc7]/10",
      borderColor: "border-[#116cc7]/30",
      content: [
        "アリーナイベントは16時まで実施しています",
        "展示は15時まで実施しています",
      ],
    },
    {
      icon: <Vote className="w-6 h-6" />,
      title: "優秀展示賞投票",
      color: "text-[#00d9ff]",
      bgColor: "bg-[#00d9ff]/10",
      borderColor: "border-[#00d9ff]/30",
      content: [
        "出口にて、優秀展示賞を決定する来場者投票を行っております",
        "ぜひ、ご参加ください",
        "【実施時間】25日 - 終日、26日 - 14時まで",
      ],
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: "写真撮影について",
      color: "text-[#fe1ecc]",
      bgColor: "bg-[#fe1ecc]/10",
      borderColor: "border-[#fe1ecc]/30",
      content: [
        "写真等を撮る際は生徒や教職員、他の来場者の顔が写らないようにご配慮ください",
      ],
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "運営スタッフについて",
      color: "text-[#ff6b35]",
      bgColor: "bg-[#ff6b35]/10",
      borderColor: "border-[#ff6b35]/30",
      content: [
        "豊山祭運営スタッフは、「STAFF」と書かれたTシャツまたはパーカーを着用しています",
        "何かお困りの際は、お気軽にお声がけください",
        "本部は1階出入口にあります",
      ],
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-[#09003f] via-[#0a0050] to-[#09003f] overflow-hidden">
        <div className="circle-decoration w-96 h-96 bg-[#fe1ecc]/20 blur-3xl absolute top-0 left-0 animate-pulse"></div>
        <div className="circle-decoration w-64 h-64 bg-[#116cc7]/20 blur-3xl absolute bottom-0 right-0 animate-pulse delay-75"></div>

        <div className="container relative z-10">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#fe1ecc] to-[#116cc7] bg-clip-text text-transparent">
              お知らせ・お願い
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              ご来場前に必ずご確認ください
            </p>
          </div>
        </div>
      </section>

      {/* Notices */}
      <section className="py-16 bg-[#09003f]">
        <div className="container">
          <div className="space-y-8 max-w-4xl mx-auto">
            {notices.map((notice, index) => (
              <Card
                key={index}
                className={`bg-white/5 backdrop-blur-sm border ${notice.borderColor} hover:shadow-lg transition-all duration-300`}
              >
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className={`${notice.bgColor} ${notice.color} p-3 rounded-full`}>
                      {notice.icon}
                    </div>
                    <CardTitle className={`text-2xl ${notice.color}`}>
                      {notice.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-white/80">
                    {notice.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2">
                        <span className="text-white/40 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Floor Map Notice */}
      <section className="py-12 bg-gradient-to-b from-[#09003f] to-[#0a0050]">
        <div className="container">
          <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-[#00d9ff] mb-4 text-center">
              フロアマップ
            </h3>
            <p className="text-white/80 text-center mb-4">
              詳しいフロアマップは、パンフレットをご覧ください
            </p>
            <div className="text-white/70 space-y-2">
              <p className="text-center">各展示のPRも掲載されています！</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 bg-gradient-to-b from-[#0a0050] to-[#09003f]">
        <div className="container">
          <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center">
            <h3 className="text-2xl font-bold text-[#00d9ff] mb-4">お問い合わせ</h3>
            <p className="text-white/80 mb-6">
              ご不明な点がございましたら、下記までお問い合わせください
            </p>
            <div className="space-y-2 text-white/70">
              <p>日本大学豊山中学校・高等学校</p>
              <p>〒112-0012 東京都文京区大塚5-40-10</p>
              <p>TEL: 03-3943-2161</p>
            </div>
            <div className="mt-6">
              <a
                href="https://www.buzan.hs.nihon-u.ac.jp/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-[#fe1ecc] to-[#116cc7] hover:opacity-90 text-white font-semibold px-8 py-3 rounded-lg transition-opacity"
              >
                学校ホームページ
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

