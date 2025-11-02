"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { id: "home", label: "Trang chủ", href: "/" },
    { id: "learning", label: "Bài học", href: "/learning" },
    { id: "game", label: "Trò chơi", href: "/game" },
    { id: "insights", label: "Báo Cáo Project", href: "/insights" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-card/80 backdrop-blur-lg border-b border-border/50">
      <nav className="flex h-16 items-center justify-between px-4 md:px-8 max-w-7xl mx-auto w-full">
        <Link
          href="/"
          className="flex items-center gap-2 transition-transform hover:scale-105"
        >
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shadow-lg">
            <span className="text-primary-foreground font-bold">ET</span>
          </div>
          <span className="font-bold text-lg hidden sm:inline">EconTycoon</span>
        </Link>

        <div className="flex items-center gap-1 md:gap-2">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={`px-3 md:px-4 py-2 rounded-md text-sm font-medium transition-all ${
                pathname === item.href
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "text-foreground/70 hover:text-foreground hover:bg-card/60 hover:shadow-sm"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
