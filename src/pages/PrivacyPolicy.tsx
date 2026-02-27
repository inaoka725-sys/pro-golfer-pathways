import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-card/90 backdrop-blur-md border-b border-border sticky top-0 z-50">
        <div className="container mx-auto flex items-center h-16 px-4">
          <Link to="/" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft size={16} />
            トップへ戻る
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 max-w-3xl py-16">
        <h1 className="font-serif text-3xl font-bold text-foreground mb-8">プライバシーポリシー</h1>

        <div className="prose prose-sm max-w-none space-y-8 text-foreground/85 leading-relaxed">
          <p>
            一般社団法人プロゴルファーサポート機構（以下「当法人」）は、個人情報の保護に関する法律（以下「個人情報保護法」）を遵守し、以下のとおりプライバシーポリシーを定めます。
          </p>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-semibold text-foreground">1. 個人情報の定義</h2>
            <p>本ポリシーにおいて「個人情報」とは、個人情報保護法に規定される個人情報を指し、生存する個人に関する情報であって、氏名、生年月日、住所、電話番号、メールアドレス等により特定の個人を識別できるものをいいます。</p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-semibold text-foreground">2. 個人情報の収集方法</h2>
            <p>当法人は、お問い合わせフォーム、イベント申込み、その他サービスの提供に際して、適法かつ公正な手段により個人情報を収集いたします。</p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-semibold text-foreground">3. 個人情報の利用目的</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>イベント・競技会等の運営および管理</li>
              <li>お問い合わせへの対応</li>
              <li>当法人からのお知らせ・情報提供</li>
              <li>サービスの改善および新サービスの開発</li>
              <li>その他、上記に付随する業務</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-semibold text-foreground">4. 個人情報の第三者提供</h2>
            <p>当法人は、以下の場合を除き、ご本人の同意なく個人情報を第三者に提供いたしません。</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>法令に基づく場合</li>
              <li>人の生命、身体または財産の保護のために必要がある場合</li>
              <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合</li>
              <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-semibold text-foreground">5. 個人情報の安全管理</h2>
            <p>当法人は、個人情報の漏洩、滅失またはき損の防止その他の安全管理のために必要かつ適切な措置を講じます。</p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-semibold text-foreground">6. 個人情報の開示・訂正・削除</h2>
            <p>ご本人から個人情報の開示、訂正、削除等のご請求があった場合、合理的な期間内に対応いたします。</p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-semibold text-foreground">7. プライバシーポリシーの変更</h2>
            <p>当法人は、必要に応じて本ポリシーを変更することがあります。変更後のポリシーは、当ウェブサイトに掲載した時点から効力を生じるものとします。</p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-semibold text-foreground">8. お問い合わせ窓口</h2>
            <p>
              一般社団法人プロゴルファーサポート機構<br />
              〒651-0086 神戸市中央区磯上通八丁目１番29号 カサベラビルC＆M403号室
            </p>
          </section>

          <p className="text-sm text-muted-foreground pt-4">制定日：2025年6月30日</p>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
