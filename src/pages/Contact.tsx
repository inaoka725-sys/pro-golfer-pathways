import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Send, MapPin, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "お名前を入力してください").max(100),
  email: z.string().trim().email("正しいメールアドレスを入力してください").max(255),
  company: z.string().trim().max(100).optional(),
  subject: z.string().trim().min(1, "件名を入力してください").max(200),
  message: z.string().trim().min(1, "お問い合わせ内容を入力してください").max(2000),
});

const Contact = () => {
  const { toast } = useToast();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      company: formData.get("company") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    };

    const result = contactSchema.safeParse(data);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      setIsSubmitting(false);
      return;
    }

    setErrors({});
    // For now, just show success toast (no backend)
    setTimeout(() => {
      toast({
        title: "送信完了",
        description: "お問い合わせを受け付けました。担当者より折り返しご連絡いたします。",
      });
      (e.target as HTMLFormElement).reset();
      setIsSubmitting(false);
    }, 800);
  };

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

      <main className="container mx-auto px-4 max-w-4xl py-16">
        <div className="text-center mb-12">
          <p className="text-golf-green-light text-sm tracking-[0.2em] uppercase mb-2">Contact</p>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">お問い合わせ</h1>
          <div className="w-16 h-0.5 bg-accent mx-auto mb-6" />
          <p className="text-muted-foreground max-w-lg mx-auto">
            イベントへの参加、協賛、その他ご質問がございましたらお気軽にお問い合わせください。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Info */}
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-xl p-6 space-y-4">
              <div className="flex items-start gap-3">
                <Building size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-sm text-foreground mb-1">法人名</h3>
                  <p className="text-muted-foreground text-sm">一般社団法人プロゴルファーサポート機構</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-sm text-foreground mb-1">所在地</h3>
                  <p className="text-muted-foreground text-sm">
                    〒651-0086<br />
                    神戸市中央区磯上通八丁目１番29号<br />
                    カサベラビルC＆M403号室
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-2">
            <form onSubmit={handleSubmit} className="bg-card border border-border rounded-xl p-6 md:p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="name">お名前 <span className="text-destructive">*</span></Label>
                  <Input id="name" name="name" placeholder="山田 太郎" />
                  {errors.name && <p className="text-destructive text-xs">{errors.name}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">メールアドレス <span className="text-destructive">*</span></Label>
                  <Input id="email" name="email" type="email" placeholder="example@email.com" />
                  {errors.email && <p className="text-destructive text-xs">{errors.email}</p>}
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">会社名・団体名</Label>
                <Input id="company" name="company" placeholder="（任意）" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">件名 <span className="text-destructive">*</span></Label>
                <Input id="subject" name="subject" placeholder="お問い合わせの件名" />
                {errors.subject && <p className="text-destructive text-xs">{errors.subject}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">お問い合わせ内容 <span className="text-destructive">*</span></Label>
                <Textarea id="message" name="message" rows={5} placeholder="お問い合わせ内容をご記入ください" />
                {errors.message && <p className="text-destructive text-xs">{errors.message}</p>}
              </div>
              <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
                <Send size={16} />
                {isSubmitting ? "送信中..." : "送信する"}
              </Button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
