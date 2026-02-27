import heroImage from "@/assets/hero-golf.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="美しいゴルフコースの風景"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/55" />
        {/* Sunrise light animation overlay */}
        <div className="absolute inset-0 animate-sunrise pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="text-primary-foreground/80 text-sm tracking-[0.3em] uppercase mb-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Pro Golfer Support Organization
        </p>
        <h1 className="font-serif text-4xl md:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-in-up">
          プロゴルファーの
          <br />
          未来を支える
        </h1>
        <p className="text-primary-foreground/85 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          ゴルフを愛するすべての人とプロゴルファーの新たな可能性をサポートしたいという思いから誕生しました。
        </p>
        <div className="animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          <button
            onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-md font-medium hover:bg-golf-green-light transition-colors"
          >
            詳しく見る
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
