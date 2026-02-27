import { Trophy, Users, GraduationCap, Presentation } from "lucide-react";

const services = [
  {
    icon: Users,
    title: "プロアマイベント",
    description: "プロゴルファーとアマチュアが交流できるイベントを企画・運営。ゴルフの魅力をもっと身近に感じていただける機会を創出します。",
  },
  {
    icon: Trophy,
    title: "小規模競技会",
    description: "プロゴルファーが実力を発揮できる競技会を開催。JLPGAライセンス保有者をはじめ、幅広いプロゴルファーに活躍の場を提供します。",
  },
  {
    icon: GraduationCap,
    title: "レッスン会",
    description: "プロゴルファーによるレッスン会を開催。一般プレイヤーのスキル向上とプロゴルファーの新たな活動の場を両立させます。",
  },
  {
    icon: Presentation,
    title: "ゴルフ関連セミナー",
    description: "ゴルフ業界の最新動向や技術に関するセミナーを開催。業界関係者のネットワーク構築と知見の共有を図ります。",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <p className="text-golf-green-light text-sm tracking-[0.2em] uppercase mb-2">Services</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">事業内容</h2>
          <div className="w-16 h-0.5 bg-accent mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            プロゴルファー、ゴルフ関連施設経営者、用品業者、出版社、指導者、一般プレイヤーなど、広範囲にわたるネットワークを活かし事業を展開しています。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-all hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="text-primary" size={22} />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
