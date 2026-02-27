import { Calendar, MapPin, Users, Trophy, Plane } from "lucide-react";
import proamImage from "@/assets/proam-event.jpg";
import tournamentImage from "@/assets/tournament.jpg";
import vietnamImage from "@/assets/vietnam-golf.jpg";

const topics = [
  {
    id: 1,
    badge: "コンペ",
    title: "国内プロアマコンペ開催",
    image: proamImage,
    imageAlt: "プロアマコンペの様子",
    summary: "女子プロ1名＋アマチュア3名の4名1組によるプロアマコンペを開催予定。交流を主目的とし、チーム戦などエンターテインメント性のある要素を導入します。",
    details: [
      { icon: Users, text: "10組程度（プロ10名・アマ30名規模）" },
      { icon: Trophy, text: "交流目的のため賞金設定なし" },
      { icon: Calendar, text: "JLPGAライセンス保有者・宣言プロ対象" },
    ],
  },
  {
    id: 2,
    badge: "トーナメント",
    title: "国内小規模トーナメント開催",
    image: tournamentImage,
    imageAlt: "女子プロトーナメント",
    summary: "女子プロ40名以上が参加する1DAYトーナメントを開催予定。プロアマ同時開催の2DAYS形式も検討中。JLPGAライセンス保有者は無条件参加可能。",
    details: [
      { icon: Users, text: "女子プロ40名（10組）以上参加" },
      { icon: Trophy, text: "優勝賞金50万円（賞金総額200万円想定）" },
      { icon: Calendar, text: "無観客試合・1DAY形式" },
    ],
  },
  {
    id: 3,
    badge: "海外ツアー",
    title: "ベトナム クアンニン省ゴルフツアー",
    image: vietnamImage,
    imageAlt: "ベトナムのゴルフリゾート",
    summary: "現地3泊4日・ゴルフ2ラウンドのベトナム視察ツアーを催行予定。日本から女子プロが同行し、同伴プレーを楽しめる特別なツアーです。",
    details: [
      { icon: Plane, text: "現地3泊4日・2ラウンド" },
      { icon: Users, text: "女子プロ同行（同伴プレー付き）" },
      { icon: MapPin, text: "ベトナム クアンニン省" },
    ],
  },
];

const TopicsSection = () => {
  return (
    <section id="topics" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <p className="text-golf-green-light text-sm tracking-[0.2em] uppercase mb-2">Topics</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">2026年 トピックス</h2>
          <div className="w-16 h-0.5 bg-accent mx-auto mb-6" />
          <p className="text-muted-foreground max-w-xl mx-auto">
            現在構想中の2026年のイベント・企画をご紹介します。
          </p>
        </div>

        <div className="space-y-12">
          {topics.map((topic, index) => (
            <div
              key={topic.id}
              className={`flex flex-col ${index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} gap-8 items-center bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow`}
            >
              {/* Image */}
              <div className="w-full md:w-5/12 aspect-[4/3] overflow-hidden">
                <img
                  src={topic.image}
                  alt={topic.imageAlt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="w-full md:w-7/12 p-6 md:p-10">
                <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  {topic.badge}
                </span>
                <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground mb-3">{topic.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{topic.summary}</p>
                <ul className="space-y-2">
                  {topic.details.map((detail, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-foreground/80">
                      <detail.icon className="text-primary flex-shrink-0" size={16} />
                      <span>{detail.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopicsSection;
