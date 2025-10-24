import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function StageEvents() {
  const day1Arena = [
    { time: "8:30-9:40", title: "中学校青春メッセージ", venue: "アリーナ" },
    { time: "10:50-11:30", title: "吹奏楽部ステージ演奏", venue: "アリーナ" },
    { time: "12:20-13:40", title: "音楽部バンドライブ", venue: "アリーナ" },
    { time: "14:00-15:00", title: "ミス豊山", venue: "アリーナ" },
    { time: "15:30-16:00", title: "吹奏楽部ドリル演奏", venue: "アリーナ" },
  ];

  const day1Hall = [
    { time: "9:30-11:30", title: "音楽部バンドライブ", venue: "多目的ホール" },
    { time: "13:30-14:30", title: "演劇部パフォーマンス", venue: "多目的ホール" },
  ];

  const day2Arena = [
    { time: "10:20-11:50", title: "音楽部バンドライブ", venue: "アリーナ" },
    { time: "12:30-14:00", title: "のど自慢", venue: "アリーナ" },
    { time: "15:00-16:00", title: "表彰・吹奏楽部ドリル演奏・閉会宣言", venue: "アリーナ", note: "※ドリル演奏は15:20~" },
  ];

  const day2Hall = [
    { time: "9:00-10:10", title: "高2探究発表", venue: "多目的ホール" },
    { time: "11:30-12:30", title: "演劇部パフォーマンス", venue: "多目的ホール" },
    { time: "13:00-14:00", title: "音楽部バンドライブ", venue: "多目的ホール" },
    { time: "14:30-15:30", title: "書道部パフォーマンス", venue: "多目的ホール" },
  ];

  const EventCard = ({ event }: { event: any }) => (
    <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:border-[#00d9ff]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#00d9ff]/20">
      <CardHeader>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
          <span className="text-lg font-bold text-[#00d9ff] bg-[#00d9ff]/20 px-4 py-2 rounded-full inline-block w-fit">
            {event.time}
          </span>
          <span className="text-sm text-[#fe1ecc] bg-[#fe1ecc]/20 px-3 py-1 rounded-full inline-block w-fit">
            {event.venue}
          </span>
        </div>
        <CardTitle className="text-2xl text-white">{event.title}</CardTitle>
      </CardHeader>
      {event.note && (
        <CardContent>
          <CardDescription className="text-white/70 text-base">{event.note}</CardDescription>
        </CardContent>
      )}
    </Card>
  );

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-[#09003f] via-[#0a0050] to-[#09003f] overflow-hidden">
        <div className="circle-decoration w-96 h-96 bg-[#00d9ff]/20 blur-3xl absolute top-0 right-0 animate-pulse"></div>
        <div className="circle-decoration w-64 h-64 bg-[#116cc7]/20 blur-3xl absolute bottom-0 left-0 animate-pulse delay-75"></div>

        <div className="container relative z-10">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#00d9ff] to-[#116cc7] bg-clip-text text-transparent">
              ステージイベント
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              熱気あふれるステージパフォーマンスをお楽しみください
            </p>
          </div>
        </div>
      </section>

      {/* Events Schedule */}
      <section className="py-16 bg-[#09003f]">
        <div className="container">
          <Tabs defaultValue="day1" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-8 bg-white/5 p-1">
              <TabsTrigger
                value="day1"
                className="data-[state=active]:bg-[#fe1ecc] data-[state=active]:text-white text-white/70"
              >
                10月25日(土)
              </TabsTrigger>
              <TabsTrigger
                value="day2"
                className="data-[state=active]:bg-[#116cc7] data-[state=active]:text-white text-white/70"
              >
                10月26日(日)
              </TabsTrigger>
            </TabsList>

            <TabsContent value="day1" className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-[#00d9ff] text-center">アリーナ</h2>
                <div className="space-y-4">
                  {day1Arena.map((event, index) => (
                    <EventCard key={index} event={event} />
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6 text-[#fe1ecc] text-center">多目的ホール</h2>
                <div className="space-y-4">
                  {day1Hall.map((event, index) => (
                    <EventCard key={index} event={event} />
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="day2" className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-[#00d9ff] text-center">アリーナ</h2>
                <div className="space-y-4">
                  {day2Arena.map((event, index) => (
                    <EventCard key={index} event={event} />
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6 text-[#fe1ecc] text-center">多目的ホール</h2>
                <div className="space-y-4">
                  {day2Hall.map((event, index) => (
                    <EventCard key={index} event={event} />
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Notice Section */}
      <section className="py-12 bg-gradient-to-b from-[#09003f] to-[#0a0050]">
        <div className="container">
          <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-[#00d9ff] mb-4 text-center">
              ステージイベントについて
            </h3>
            <div className="space-y-3 text-white/80">
              <p>• 開場は各イベント10分前となります</p>
              <p>• アリーナイベント入場の際は1階来場者入口横の赤階段をご利用ください</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

