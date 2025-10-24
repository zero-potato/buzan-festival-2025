import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "ホーム", color: "bg-[#fe1ecc]" },
    { path: "/food-shops", label: "飲食模擬店", color: "bg-[#ff6b35]" },
    { path: "/exhibitions", label: "展示詳細", color: "bg-[#116cc7]" },
    { path: "/stage-events", label: "ステージイベント", color: "bg-[#00d9ff]" },
    { path: "/notice", label: "お知らせ・お願い", color: "bg-[#fe1ecc]" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#09003f]/95 backdrop-blur-sm border-b border-white/10">
        <div className="container">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/">
              <div className="flex items-center space-x-2 cursor-pointer">
                <span className="text-xl font-bold bg-gradient-to-r from-[#fe1ecc] to-[#116cc7] bg-clip-text text-transparent">
                  豊山祭2025
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-2">
              {navItems.map((item) => (
                <Link key={item.path} href={item.path}>
                  <Button
                    variant={location === item.path ? "default" : "ghost"}
                    className={`${
                      location === item.path
                        ? `${item.color} text-white hover:opacity-90`
                        : "text-white/80 hover:text-white hover:bg-white/10"
                    } transition-all duration-200 border-2 border-transparent hover:border-white/20`}
                  >
                    {item.label}
                  </Button>
                </Link>
              ))}
              <a
                href="https://www.buzan.hs.nihon-u.ac.jp/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="text-white border-white/30 hover:bg-white/10"
                >
                  日大豊山HP
                </Button>
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#09003f] border-t border-white/10">
            <nav className="container py-4 space-y-2">
              {navItems.map((item) => (
                <Link key={item.path} href={item.path}>
                  <Button
                    variant={location === item.path ? "default" : "ghost"}
                    className={`w-full justify-start ${
                      location === item.path
                        ? `${item.color} text-white`
                        : "text-white/80 hover:text-white hover:bg-white/10"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Button>
                </Link>
              ))}
              <a
                href="https://www.buzan.hs.nihon-u.ac.jp/"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button
                  variant="outline"
                  className="w-full justify-start text-white border-white/30 hover:bg-white/10"
                >
                  日大豊山HP
                </Button>
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 pt-16">{children}</main>

      {/* Footer */}
      <footer className="bg-[#09003f] border-t border-white/10 py-8">
        <div className="container">
          <div className="text-center text-white/60 text-sm space-y-2">
            <p className="text-white/80 font-semibold">日本大学豊山高等学校生徒会</p>
            <p>TEL：03-3943-2161(代)　FAX：03-3943-1991</p>
            <p className="text-xs text-white/50 mt-3">※このサイトは、学校の指導・管理のもと生徒会が運用しています。</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

