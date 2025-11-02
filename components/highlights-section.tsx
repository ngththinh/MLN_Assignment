"use client";

import { Card } from "@/components/ui/card";

interface HighlightCard {
  icon: string;
  title: string;
  description: string;
  color: "blue" | "green" | "amber";
}

const highlights: HighlightCard[] = [
  {
    icon: "📈",
    title: "Thị trường mang lại sức mạnh",
    description:
      "Hiểu cách cạnh tranh và thị trường tự điều chỉnh giúp nền kinh tế phát triển mạnh mẽ.",
    color: "blue",
  },
  {
    icon: "⚠️",
    title: "Nhưng cũng có những hạn chế",
    description:
      "Thị trường không tự động giải quyết được vấn đề xã hội và bất bình đẳng.",
    color: "amber",
  },
  {
    icon: "🎯",
    title: "Việt Nam chọn con đường riêng",
    description:
      "Kết hợp kinh tế thị trường với nguyên tắc xã hội chủ nghĩa để đảm bảo công bằng.",
    color: "green",
  },
];

const colorClasses = {
  blue: "bg-blue-50 border-blue-200 dark:bg-blue-950 dark:border-blue-800",
  green: "bg-green-50 border-green-200 dark:bg-green-950 dark:border-green-800",
  amber: "bg-amber-50 border-amber-200 dark:bg-amber-950 dark:border-amber-800",
};

const textClasses = {
  blue: "text-blue-600 dark:text-blue-400",
  green: "text-green-600 dark:text-green-400",
  amber: "text-amber-600 dark:text-amber-400",
};

export function HighlightsSection() {
  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nội dung chính bài học
          </h2>
          <p className="text-lg text-foreground/70 text-balance">
            Khám phá ba trụ cột của kinh tế thị trường định hướng xã hội chủ
            nghĩa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((highlight, idx) => (
            <Card
              key={idx}
              className={`p-8 border-2 transition-all hover:shadow-xl hover:scale-105 bg-card/70 backdrop-blur-sm ${
                colorClasses[highlight.color]
              }`}
            >
              <div className="text-4xl mb-4">{highlight.icon}</div>
              <h3
                className={`text-xl font-bold mb-3 ${
                  textClasses[highlight.color]
                }`}
              >
                {highlight.title}
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                {highlight.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
