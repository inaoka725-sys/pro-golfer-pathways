import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const navItems = [
  { label: "ホーム", href: "#hero" },
  { label: "法人概要", href: "#about" },
  { label: "事業内容", href: "#services" },
  { label: "トピックス", href: "#topics" },
  { label: "お問い合わせ", href: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const scrollTo = (href: string) => {
    setIsOpen(false);
    if (href.startsWith("/")) {
      navigate(href);
      return;
    }
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <button onClick={() => scrollTo("#hero")} className="font-serif text-lg font-semibold text-primary tracking-wide">
          一般社団法人プロゴルファーサポート機構
        </button>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <nav className="md:hidden bg-card border-b border-border">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className="block w-full text-left px-6 py-3 text-sm text-muted-foreground hover:bg-secondary hover:text-primary transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
