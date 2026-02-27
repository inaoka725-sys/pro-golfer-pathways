import { Building2, MapPin, User } from "lucide-react";

const infoItems = [
  { icon: Building2, label: "設立", value: "2025年6月30日" },
  { icon: MapPin, label: "所在地", value: "神戸市中央区磯上通八丁目１番29号\nカサベラビルC＆M403号室" },
  { icon: User, label: "代表理事", value: "藤澤志郎" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <p className="text-golf-green-light text-sm tracking-[0.2em] uppercase mb-2">About Us</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">法人概要</h2>
          <div className="w-16 h-0.5 bg-accent mx-auto" />
        </div>

        <p className="text-foreground/80 leading-relaxed text-base md:text-lg mb-12 text-center max-w-3xl mx-auto">
          代表者自身の長年に渡るゴルフ業界との関わりにより取得した幅広い知見・人脈を生かし、プロゴルファーの活動をサポートする目的で当法人を設立いたしました。
          プロゴルファーにとって活躍の場は試合だけではありません。アマチュアとの交流や地域イベントへの参加、次世代への指導など、ゴルフを通じて社会とつながるチャンスは無限に広がっています。
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {infoItems.map((item) => (
            <div key={item.label} className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-md transition-shadow">
              <item.icon className="mx-auto mb-3 text-primary" size={28} />
              <p className="text-sm font-medium text-muted-foreground mb-1">{item.label}</p>
              <p className="text-foreground font-medium whitespace-pre-line text-sm">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
