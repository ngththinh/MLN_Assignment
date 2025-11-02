"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

interface CTAItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  btnText: string;
  href: string;
  color: "primary" | "secondary" | "accent";
}

const ctaItems: CTAItem[] = [
  {
    id: "learning",
    title: "Học bài chi tiết",
    description:
      "Đọc toàn bộ nội dung bài học với các ví dụ thực tế về Việt Nam",
    icon: "📚",
    btnText: "Vào bài học",
    href: "/learning",
    color: "primary",
  },
  {
    id: "game",
    title: "Thử sức chơi game",
    description:
      "Điều hành doanh nghiệp qua 10 vòng và cân bằng lợi nhuận với giá trị công bằng",
    icon: "🎮",
    btnText: "Chơi ngay",
    href: "/game",
    color: "secondary",
  },
  {
    id: "insights",
    title: "Xem Báo Cáo Project",
    description:
      "Nhận báo cáo và phân tích về cách bạn quản lý doanh nghiệp và các công việc của sinh viên",
    icon: "🤖",
    btnText: "Xem báo cáo",
    href: "/insights",
    color: "accent",
  },
];

export function CTASection() {
  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Bắt đầu hành trình học tập
          </h2>
          <p className="text-lg text-foreground/70">
            Chọn cách bạn muốn khám phá kinh tế thị trường Việt Nam
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ctaItems.map((item, idx) => (
            <Card
              key={item.id}
              className="p-8 flex flex-col gap-6 hover:shadow-xl transition-all hover:scale-105 bg-card/70 backdrop-blur-sm animate-in fade-in-up"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="text-5xl">{item.icon}</div>
              <div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-foreground/70">{item.description}</p>
              </div>
              <Link href={item.href} className="mt-auto">
                <Button
                  className="w-full shadow-md hover:shadow-lg transition-all"
                  variant={item.color === "primary" ? "default" : "outline"}
                >
                  {item.btnText}
                </Button>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
