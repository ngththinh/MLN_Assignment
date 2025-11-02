// @ts-nocheck
"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
const learningModules = [
  {
    id: "market-economy",
    title: "Kinh Tế Thị Trường",
    icon: "📊",
    content: {
      title: "Khái niệm về nền kinh tế thị trường",
      sections: [
        {
          type: "definition",
          content:
            "Nền kinh tế thị trường là hình thức phát triển cao của nền kinh tế hàng hoá, trong đó các hoạt động sản xuất – phân phối – trao đổi – tiêu dùng được điều tiết chủ yếu bằng quan hệ cung cầu và giá cả trên thị trường.",
          quote:
            "Kinh tế thị trường là nền kinh tế hàng hóa phát triển ở trình độ cao, trong đó các quan hệ kinh tế được thực hiện thông qua thị trường.",
          source: "Giáo trình Kinh tế chính trị Mác – Lênin (2021) trang 177",
          explanation:
            "Nói cách khác: thị trường là cơ chế điều phối trung tâm. Doanh nghiệp, người sản xuất, người tiêu dùng là chủ thể độc lập, cạnh tranh với nhau và tự quyết định hành vi kinh tế của mình.",
        },
        {
          type: "essence-laws",
          title:
            "Bản chất và các quy luật vận động trong nền kinh tế thị trường",
          essence: [
            "Là hình thức kinh tế mở, năng động, cạnh tranh",
            "Dựa trên sự tự chủ và tự chịu trách nhiệm của các chủ thể kinh tế",
            "Không dựa vào phân phối bao cấp từ trung ương như cơ chế cũ",
          ],
          laws: [
            "Quy luật giá trị",
            "Quy luật cung – cầu",
            "Quy luật cạnh tranh",
          ],
          note: "Giá cả là tín hiệu thị trường quyết định hướng đầu tư, phân bổ nguồn lực, mở rộng hay thu hẹp sản xuất.",
        },
      ],
    },
    lessons: [],
  },
  {
    id: "socialism-economics",
    title: "Vai trò và hạn chế",
    icon: "🤝",
    content: {
      title: "Vai trò và hạn chế của nền kinh tế thị trường",
      sections: [
        {
          type: "definition",
          title: "Vai trò tích cực của nền kinh tế thị trường",
          bullets: [
            "thúc đẩy phân công lao động và chuyên môn hoá",
            "giải phóng và phát triển lực lượng sản xuất",
            "tạo động lực cải tiến kỹ thuật, nâng cao năng suất",
            "thúc đẩy hội nhập kinh tế quốc tế",
          ],
          examplesTitle: "Ví dụ Việt Nam:",
          examples: [
            "sự phát triển của khu vực tư nhân đã đóng vai trò quan trọng (năm 2023 khu vực tư nhân đóng góp khoảng 43% GDP)",
            "các ngành như công nghệ - thương mại điện tử – logistics phát triển mạnh mẽ nhờ cơ chế cạnh tranh thị trường (Shopee, Lazada, Tiki cạnh tranh → lợi ích người tiêu dùng tăng)",
          ],
        },
        {
          type: "definition",
          title: "Hạn chế khách quan của nền kinh tế thị trường",
          quote: "Kinh tế thị trường không tự nó đảm bảo công bằng xã hội.",
          source: "Giáo trình trang 181",
          bullets: [
            "phân hóa giàu nghèo",
            "lợi ích nhóm, độc quyền",
            "chạy theo lợi nhuận làm gia tăng ô nhiễm môi trường",
            "suy thoái đạo đức kinh doanh",
          ],
          examplesTitle: "Ví dụ Việt Nam:",
          examples: [
            "chênh lệch thu nhập giữa thành thị và nông thôn rất rõ rệt",
            "các vụ việc gian lận chứng khoán / đầu cơ đất đai diễn ra gây méo mó thị trường",
            "ô nhiễm công nghiệp tại Bắc Ninh, Đồng Nai, Bình Dương… đi kèm với tăng trưởng",
          ],
        },
      ],
    },
  },
  {
    id: "business-basics",
    title: "Định hướng XHCN Việt Nam",
    icon: "💼",
    content: {
      title: "Nền kinh tế thị trường định hướng xã hội chủ nghĩa ở Việt Nam",
      sections: [
        {
          type: "definition",
          title:
            "Nền kinh tế thị trường định hướng xã hội chủ nghĩa ở Việt Nam",
          quote:
            "Kinh tế thị trường định hướng xã hội chủ nghĩa ở Việt Nam là nền kinh tế vận hành đầy đủ theo các quy luật thị trường nhưng dưới sự quản lý của Nhà nước pháp quyền XHCN, nhằm mục tiêu dân giàu, nước mạnh, dân chủ, công bằng, văn minh.",
          source: "Giáo trình trang 184",
          explanation:
            "→ tức là Việt Nam không chọn thị trường tự do tư bản chủ nghĩa, mà phát triển thị trường nhưng có định hướng XHCN.",
          bullets: [
            "nhiều thành phần kinh tế cùng tồn tại",
            "kinh tế nhà nước giữ vai trò chủ đạo ở lĩnh vực then chốt",
            "phân phối theo lao động → kết hợp với phúc lợi xã hội",
          ],
        },
      ],
    },
  },
  {
    id: "sustainable-development",
    title: "Phát Triển Bền Vững",
    icon: "🌱",
    content: {
      title:
        "Làm sao để Việt Nam vừa phát triển, vừa khắc phục những hạn chế của nền kinh tế thị trường?",
      sections: [
        {
          type: "explanation",
          content:
            "Việt Nam cần đảm bảo hai mục tiêu kép song song: duy trì động lực phát triển từ thị trường và hạn chế mặt trái của nó thông qua định hướng XHCN và quản lý nhà nước. Để làm được điều đó, cần triển khai các nhóm giải pháp sau:",
        },
        {
          type: "definition",
          title: "1. Hoàn thiện thể chế kinh tế thị trường định hướng XHCN",
          bullets: [
            "Hoàn thiện hệ thống pháp luật, tạo môi trường cạnh tranh bình đẳng.",
            "Xây dựng Nhà nước pháp quyền XHCN hoạt động minh bạch.",
            "Tăng cường kiểm soát quyền lực, phòng chống tham nhũng, lợi ích nhóm.",
          ],
          explanation:
            "→ điều này giúp giảm méo mó thị trường, ngăn việc doanh nghiệp “lobby – mua chính sách” gây bất bình đẳng.",
          examplesTitle: "Ví dụ VN thực tiễn:",
          examples: [
            "Việc xử lý các vụ thao túng chứng khoán, siết lại thị trường trái phiếu doanh nghiệp 2022–2024 là minh chứng Nhà nước đang sửa méo mó thị trường tài chính.",
          ],
        },
        {
          type: "definition",
          title:
            "2. Kết hợp tăng trưởng kinh tế với tiến bộ và công bằng xã hội",
          bullets: [
            "Thị trường tạo ra của cải, nhưng Nhà nước phải điều tiết phân phối lại.",
            "Chính sách thuế lũy tiến, phúc lợi xã hội, hỗ trợ người yếu thế.",
            "Đầu tư công vào giáo dục – y tế – hạ tầng vùng khó khăn.",
          ],
          explanation:
            "→ nhờ vậy, phát triển thị trường không biến thành cực đoan tư bản hoá.",
          examplesTitle: "Ví dụ VN:",
          examples: [
            "Chính sách BHYT toàn dân, mục tiêu giảm nghèo đa chiều áp dụng từ 2021 là những công cụ để giảm phân hoá xã hội.",
          ],
        },
        {
          type: "definition",
          title: "3. Phát triển con người và xây dựng văn hóa kinh doanh XHCN",
          bullets: [
            "Xây dựng hệ giá trị quốc gia – văn hoá kinh doanh liêm chính.",
            "Giáo dục đạo đức, trách nhiệm xã hội trong kinh doanh, để hạn chế “chạy theo lợi nhuận bằng mọi giá”.",
          ],
          examplesTitle: "Ví dụ VN:",
          examples: [
            "ESG (Environment – Social – Governance) đang trở thành bắt buộc với DN xuất khẩu khi tiếp cận thị trường EU → VN muốn phát triển được thì văn hóa kinh doanh phải chuẩn, không gian dối – không đánh đổi môi trường.",
          ],
        },
        {
          type: "definition",
          title: "4. Thúc đẩy khoa học công nghệ, chuyển đổi số, kinh tế số",
          bullets: [
            "Thị trường hiện đại không thể dựa mãi vào lao động giá rẻ.",
            "Đổi mới mô hình tăng trưởng dựa vào công nghệ, đổi mới sáng tạo, AI.",
          ],
          explanation:
            "→ Chuyển đổi số giúp Việt Nam tăng năng suất, rút ngắn khoảng cách với nước phát triển, giảm lệ thuộc vốn và nhân công cơ bắp.",
          examplesTitle: "Ví dụ VN:",
          examples: [
            "Thanh toán số, thương mại điện tử, govtech, blockchain truy xuất nông sản giúp giảm chi phí giao dịch, thu hẹp chênh lệch vùng miền (đặc biệt nông nghiệp Đồng bằng sông Cửu Long).",
          ],
        },
        {
          type: "definition",
          title: "Kết luận",
          content:
            "Nền kinh tế thị trường có vai trò to lớn trong phát triển nhưng mang tính hai mặt. Việt Nam lựa chọn con đường kinh tế thị trường định hướng xã hội chủ nghĩa để:",
          bullets: [
            "tận dụng sức mạnh thị trường",
            "kiểm soát hạn chế tiêu cực",
            "đảm bảo phát triển vì con người",
          ],
          explanation:
            "Mục tiêu cuối cùng: dân giàu – nước mạnh – dân chủ – công bằng – văn minh.",
        },
      ],
    },
  },
];

export function LearningContent() {
  const [selectedModule, setSelectedModule] = useState(learningModules[0].id);

  return (
    <div className="w-full">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12">
        {/* Header */}
        <div className="mb-12 animate-in fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 text-balance">
            Bài Học và Tài Liệu Giáo Dục
          </h1>
          <p className="text-lg text-foreground/70">
            Khám phá các mô-đun học tập toàn diện về kinh tế thị trường, xã hội
            chủ nghĩa và phát triển bền vững
          </p>
        </div>

        {/* Module Tabs */}
        <Tabs
          value={selectedModule}
          onValueChange={setSelectedModule}
          className="w-full"
        >
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8 bg-card/60 backdrop-blur-sm">
            {learningModules.map((module) => (
              <TabsTrigger
                key={module.id}
                value={module.id}
                className="text-sm"
              >
                <span className="mr-2">{module.icon}</span>
                <span className="hidden sm:inline">{module.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Lessons Content */}
          {learningModules.map((module) => (
            <TabsContent
              key={module.id}
              value={module.id}
              className="space-y-6"
            >
              {/* Module with content (Market Economy) */}
              {module.content ? (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold mb-4">
                      {module.content.title}
                    </h2>
                  </div>

                  {module.content.sections.map((section, idx) => (
                    <Card
                      key={idx}
                      className={`backdrop-blur-sm shadow-lg animate-in fade-in-up ${
                        section.type === "definition"
                          ? "bg-linear-to-br from-primary/15 via-blue-500/10 to-cyan-500/15 border-primary/30"
                          : section.type === "essence-laws"
                          ? "bg-linear-to-br from-secondary/15 via-green-500/10 to-emerald-500/15 border-secondary/30"
                          : "bg-linear-to-br from-accent/15 via-yellow-500/10 to-amber-500/15 border-accent/30"
                      }`}
                      style={{ animationDelay: `${idx * 100}ms` }}
                    >
                      <CardContent className="pt-6">
                        {section.type === "definition" &&
                          (section.title ===
                          "Vai trò tích cực của nền kinh tế thị trường" ? (
                            // Special layout requested: remove the top box and show bullets under the title
                            <div className="space-y-4">
                              <div className="mb-2">
                                <h3 className="text-xl font-semibold text-primary">
                                  {section.title}
                                </h3>
                              </div>

                              {section.bullets && (
                                <div className="mt-2">
                                  <ul className="space-y-2 ml-4">
                                    {section.bullets.map(
                                      (b: string, i: number) => (
                                        <li
                                          key={i}
                                          className="text-foreground/80 leading-relaxed list-disc"
                                        >
                                          {b}
                                        </li>
                                      )
                                    )}
                                  </ul>
                                </div>
                              )}

                              {section.examples && (
                                <div className="mt-4">
                                  <div className="mb-2">
                                    <h4 className="text-sm font-semibold text-primary">
                                      {section.examplesTitle || "Ví dụ"}
                                    </h4>
                                  </div>
                                  <ul className="space-y-2 ml-4">
                                    {section.examples.map(
                                      (ex: string, i: number) => (
                                        <li
                                          key={i}
                                          className="text-foreground/80 leading-relaxed list-disc"
                                        >
                                          {ex}
                                        </li>
                                      )
                                    )}
                                  </ul>
                                </div>
                              )}
                            </div>
                          ) : (
                            <div className="space-y-4">
                              <div className="flex items-center gap-2 mb-3">
                                <h3 className="text-lg font-semibold text-primary">
                                  {section.title || "Định nghĩa"}
                                </h3>
                              </div>
                              {section.content && (
                                <p className="text-foreground/80 leading-relaxed text-lg">
                                  {section.content}
                                </p>
                              )}

                              {section.quote && (
                                <div className="mt-4 pt-4 border-t border-primary/20">
                                  <div className="flex items-center gap-2 mb-3">
                                    <h4 className="text-base font-semibold text-primary">
                                      Trích dẫn
                                    </h4>
                                  </div>
                                  <blockquote className="border-l-4 border-primary/30 pl-4 italic text-foreground/80">
                                    "{section.quote}"
                                  </blockquote>
                                  {section.source && (
                                    <p className="text-sm text-foreground/60 mt-2">
                                      — {section.source}
                                    </p>
                                  )}
                                </div>
                              )}

                              {section.bullets && (
                                <div className="mt-4 pt-4 border-t border-primary/20">
                                  <div className="flex items-center gap-2 mb-3">
                                    <h4 className="text-base font-semibold text-primary">
                                      Điểm chính
                                    </h4>
                                  </div>
                                  <ul className="space-y-2 ml-4">
                                    {section.bullets.map(
                                      (b: string, i: number) => (
                                        <li
                                          key={i}
                                          className="text-foreground/80 leading-relaxed list-disc"
                                        >
                                          {b}
                                        </li>
                                      )
                                    )}
                                  </ul>
                                </div>
                              )}

                              {section.explanation && (
                                <div className="mt-4 pt-4 border-t border-primary/20">
                                  <p className="text-foreground/80 leading-relaxed">
                                    {section.explanation}
                                  </p>
                                </div>
                              )}

                              {section.examples && (
                                <div className="mt-4 pt-4 border-t border-primary/20">
                                  <div className="flex items-center gap-2 mb-3">
                                    <h4 className="text-base font-semibold text-primary">
                                      {section.examplesTitle || "Ví dụ"}
                                    </h4>
                                  </div>
                                  <ul className="space-y-2 ml-4">
                                    {section.examples.map(
                                      (ex: string, i: number) => (
                                        <li
                                          key={i}
                                          className="text-foreground/80 leading-relaxed list-disc"
                                        >
                                          {ex}
                                        </li>
                                      )
                                    )}
                                  </ul>
                                </div>
                              )}
                            </div>
                          ))}

                        {section.type === "explanation" && (
                          <div className="space-y-2">
                            <p className="text-foreground/80 leading-relaxed text-lg">
                              → {section.content}
                            </p>
                          </div>
                        )}

                        {section.type === "essence-laws" && (
                          <div className="space-y-4">
                            <div className="flex items-center gap-2 mb-3">
                              <h3 className="text-lg font-semibold text-secondary">
                                {section.title}
                              </h3>
                            </div>

                            <div className="space-y-4">
                              <div>
                                <p className="font-medium text-base text-foreground/90 mb-2">
                                  Bản chất:
                                </p>
                                <ul className="space-y-2 ml-4">
                                  {section.essence?.map((item, i) => (
                                    <li
                                      key={i}
                                      className="text-foreground/80 leading-relaxed list-disc"
                                    >
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              <div>
                                <p className="font-medium text-base text-foreground/90 mb-2">
                                  Các quy luật kinh tế chi phối:
                                </p>
                                <ul className="space-y-2 ml-4">
                                  {section.laws?.map((law, i) => (
                                    <li
                                      key={i}
                                      className="text-foreground/80 leading-relaxed list-disc"
                                    >
                                      {law}
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              <p className="text-foreground/70 italic pt-2 border-t border-secondary/20">
                                💡 {section.note}
                              </p>
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                /* Module with lessons (old format) */
                <>
                  <div>
                    <h2 className="text-2xl font-bold mb-2">{module.title}</h2>
                    <p className="text-foreground/70">
                      {module.lessons.length} bài học
                    </p>
                  </div>

                  {/* Lessons Grid */}
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {module.lessons.map((lesson, idx) => (
                      <Card
                        key={lesson.id}
                        className="hover:shadow-xl transition-all hover:scale-105 cursor-pointer group bg-card/70 backdrop-blur-sm animate-in fade-in-up"
                        style={{ animationDelay: `${idx * 50}ms` }}
                      >
                        <CardHeader>
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <CardTitle className="text-lg group-hover:text-primary transition-colors">
                                {lesson.title}
                              </CardTitle>
                            </div>
                          </div>
                          <div className="flex gap-2 mt-2">
                            <Badge variant="outline" className="text-xs">
                              {lesson.duration}
                            </Badge>
                            <Badge variant="secondary" className="text-xs">
                              {lesson.level}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="line-clamp-2">
                            {lesson.description}
                          </CardDescription>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </>
              )}

              {/* Learning Path Info */}
              <Card className="bg-secondary/10 backdrop-blur-sm border-secondary/30 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-base">Mẹo Học Tập</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-foreground/70">
                  <p>
                    • Bắt đầu với các bài học cơ bản để xây dựng nền tảng vững
                    chắc
                  </p>
                  <p>
                    • Hoàn thành các bài học theo trình tự để hiểu sâu hơn các
                    khái niệm
                  </p>
                  <p>
                    • Áp dụng kiến thức vào Trò Chơi FairTrade Tycoon để thực
                    hành
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        {/* Additional Resources */}
        <div className="mt-16 pt-12 border-t border-border/50">
          <h2 className="text-2xl font-bold mb-6">Tài Nguyên Bổ Sung</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-card/70 backdrop-blur-sm hover:shadow-xl transition-all hover:scale-105">
              <CardHeader>
                <CardTitle className="text-base">Sách Tham Khảo</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-foreground/70">
                <p>Danh sách các sách kinh điển về kinh tế học</p>
              </CardContent>
            </Card>
            <Card className="bg-card/70 backdrop-blur-sm hover:shadow-xl transition-all hover:scale-105">
              <CardHeader>
                <CardTitle className="text-base">Video Giải Thích</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-foreground/70">
                <p>Video hướng dẫn chi tiết cho từng khái niệm</p>
              </CardContent>
            </Card>
            <Card className="bg-card/70 backdrop-blur-sm hover:shadow-xl transition-all hover:scale-105">
              <CardHeader>
                <CardTitle className="text-base">
                  Trắc Nghiệm Thực Hành
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-foreground/70">
                <p>Kiểm tra kiến thức và nhận phản hồi tức thì</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
