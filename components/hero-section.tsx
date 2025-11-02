"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-[600px] overflow-hidden pt-20 pb-16">
      {/* Background gradient with parallax effect */}
      <div
        className="absolute inset-0 bg-linear-to-br from-primary/10 via-secondary/8 to-accent/10 -z-10 opacity-60"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      />

      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[500px]">
          {/* Left content */}
          <div className="space-y-6 animate-in fade-in-up duration-700">
            <div className="inline-block">
              <span className="px-4 py-2 bg-secondary/20 backdrop-blur-sm text-secondary-foreground rounded-full text-sm font-medium shadow-sm border border-secondary/30">
                Kinh tế thị trường & Xã hội chủ nghĩa
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-pretty drop-shadow-sm">
              Làm sao để Việt Nam phát triển vừa công bằng?
            </h1>

            <p className="text-lg text-foreground/80 leading-relaxed text-balance">
              Khám phá cách Việt Nam cân bằng giữa sức mạnh kinh tế thị trường
              và giá trị xã hội chủ nghĩa để xây dựng tương lai bền vững.
            </p>

            <div className="flex flex-wrap gap-4 pt-6">
              <Link href="/learning">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all hover:scale-105"
                >
                  Bắt đầu học
                </Button>
              </Link>
              <Link href="/game">
                <Button
                  size="lg"
                  variant="outline"
                  className="shadow-md hover:shadow-lg transition-all hover:scale-105 bg-card/50 backdrop-blur-sm"
                >
                  Chơi game
                </Button>
              </Link>
            </div>
          </div>

          {/* Right visual - animated stats */}
          <div className="hidden lg:grid grid-cols-2 gap-4">
            {[
              { label: "Khái niệm", value: "5+" },
              { label: "Bài tập", value: "10" },
              { label: "Game rounds", value: "10" },
              { label: "AI insights", value: "Real-time" },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-lg p-6 animate-in fade-in-up shadow-lg hover:shadow-xl transition-all hover:scale-105"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="text-2xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="text-sm text-foreground/60 mt-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
