const FooterSection = () => {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="font-serif text-2xl md:text-3xl font-bold mb-2">お問い合わせ</h2>
          <div className="w-12 h-0.5 bg-accent mx-auto mb-6" />
          <p className="text-primary-foreground/75 text-sm max-w-lg mx-auto">
            イベントへの参加、協賛、その他お問い合わせは下記よりご連絡ください。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 text-sm">
          <div className="space-y-3">
            <h3 className="font-semibold text-base mb-4">法人情報</h3>
            <p className="text-primary-foreground/80">一般社団法人プロゴルファーサポート機構</p>
            <p className="text-primary-foreground/80">
              〒651-0086<br />
              神戸市中央区磯上通八丁目１番29号<br />
              カサベラビルC＆M403号室
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="font-semibold text-base mb-4">リンク</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <button onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-primary-foreground transition-colors">
                  法人概要
                </button>
              </li>
              <li>
                <button onClick={() => document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-primary-foreground transition-colors">
                  事業内容
                </button>
              </li>
              <li>
                <button onClick={() => document.querySelector("#topics")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-primary-foreground transition-colors">
                  トピックス
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-10 pt-6 text-center">
          <p className="text-primary-foreground/60 text-xs">
            © 2025 一般社団法人プロゴルファーサポート機構. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
