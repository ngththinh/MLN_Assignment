"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function InsightsContent() {
  return (
    <div className="w-full">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12">
        <div className="mb-8 animate-in fade-in-up text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 text-balance">
            Báo Cáo Project
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Tổng quan sử dụng AI trong dự án "FairTrade Tycoon" — vai trò, công
            cụ, ví dụ sử dụng, quy trình kiểm chứng và cam kết đạo đức. Tất cả
            đầu ra AI đều được con người rà soát trước khi đưa vào sản phẩm.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 items-stretch">
          {/* Overview / Commitment card */}
          <Card className="bg-card/70 backdrop-blur-sm shadow h-full">
            <CardHeader>
              <div className="text-center">
                <CardTitle className="text-lg">Tổng quan & Cam kết</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="flex flex-col h-full">
              <div className="flex-1">
                <p className="leading-relaxed text-foreground/85">
                  Website/game “FairTrade Tycoon” được phát triển với sự hỗ trợ
                  của AI, nhưng không để AI làm thay con người. AI là công cụ hỗ
                  trợ tăng tốc lập trình, sinh hình ảnh/animation, đề xuất UX và
                  soạn nội dung kịch bản game; mọi nội dung học thuật, luật
                  chơi, cân bằng số liệu và kiểm tra đầu cuối do nhóm sinh
                  viên/giảng viên chịu trách nhiệm.
                </p>

                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-primary mb-2">
                    Thời gian & Mục đích
                  </h4>
                  <ul className="list-disc ml-5 text-foreground/70 space-y-1">
                    <li>Thời gian áp dụng: Tháng 10 – 11/2025</li>
                    <li>
                      Mục đích: Hỗ trợ code React/TypeScript, tối ưu UX, sinh
                      assets, tạo demo animation, soạn logic trò chơi.
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tools card */}
          <Card className="bg-card/70 backdrop-blur-sm shadow h-full">
            <CardHeader>
              <CardTitle className="text-lg">Công cụ AI chính</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col h-full">
              <div className="flex-1">
                <ul className="list-disc ml-5 space-y-2 text-foreground/80">
                  <li>
                    <strong>GitHub Copilot / Copilot for Business</strong> —
                    auto-complete, boilerplate, gợi ý code React/TS.
                  </li>
                  <li>
                    <strong>ChatGPT / Claude (LLM)</strong> — tư vấn kiến trúc,
                    phác thảo logic game, soạn nội dung tiếng Việt, gợi ý
                    prompts.
                  </li>
                  <li>
                    <strong>DALL·E / Midjourney / Luma</strong> — sinh hình/clip
                    minh họa, background, prototype animation.
                  </li>
                  <li>
                    <strong>Figma + Plugin AI</strong> — prototype nhanh, đề
                    xuất UI, mock copy.
                  </li>
                  <li>
                    <strong>Lighthouse / Axe / CI</strong> — kiểm tra
                    performance & accessibility, tích hợp vào CI.
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Verification Workflow */}
          <Card className="bg-card/70 backdrop-blur-sm shadow h-full">
            <CardHeader>
              <CardTitle className="text-lg">
                Quy trình kiểm chứng & đạo đức
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col h-full">
              <div className="flex-1">
                <p className="leading-relaxed text-foreground/85">
                  Nguyên tắc: AI chỉ là trợ lý; mọi nội dung học thuật, số liệu,
                  logic game và quyết định UX đều do con người xác nhận trước
                  khi publish.
                </p>

                <div className="mt-3">
                  <h4 className="text-sm font-semibold mb-1">
                    Workflow (tóm tắt)
                  </h4>
                  <ol className="list-decimal ml-5 text-foreground/70 space-y-1">
                    <li>Sinh draft bằng AI (code, nội dung, hình ảnh).</li>
                    <li>
                      Nhóm/sinh viên/giảng viên đọc và hiệu chỉnh (thuật ngữ, số
                      liệu, ngữ cảnh VN).
                    </li>
                    <li>
                      Chạy test (unit, UI, performance) và playtest (ít nhất 3
                      người thử).
                    </li>
                    <li>
                      Hoàn thiện, lưu trữ prompt + kết quả + chỉnh sửa, sau đó
                      publish.
                    </li>
                  </ol>
                </div>

                <div className="mt-3">
                  <h4 className="text-sm font-semibold mb-1">
                    Không chấp nhận
                  </h4>
                  <ul className="list-disc ml-5 text-foreground/70">
                    <li>Không publish nội dung AI chưa được kiểm chứng.</li>
                    <li>Không dùng hình ảnh trái phép về bản quyền.</li>
                    <li>
                      Không để AI độc lập quyết định policy game mà không có con
                      người phê duyệt.
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Prompt examples (span full width on small) */}
          <Card className="bg-card/70 backdrop-blur-sm shadow md:col-span-3 h-full">
            <CardHeader>
              <CardTitle className="text-lg">
                Ví dụ prompt & kết quả (thực tế)
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col h-full">
              <div className="flex-1 space-y-4 text-foreground/85">
                <div>
                  <h4 className="font-semibold">
                    Ví dụ 1 — Tạo component RoundChoiceCard
                  </h4>
                  <p className="text-foreground/70 mt-1">
                    PROMPT: Tạo React component dùng Ant Design, framer-motion,
                    responsive.
                  </p>
                  <p className="mt-2">
                    KẾT QUẢ AI: Mã JSX/TSX với layout, props typing, animation
                    wrapper.
                  </p>
                  <p className="mt-1 text-foreground/70">
                    CHỈNH SỬA: Tinh chỉnh style, thêm aria-label, sửa logic tính
                    toán, viết unit test.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    Ví dụ 2 — Sinh nội dung Round (kịch bản game)
                  </h4>
                  <p className="text-foreground/70 mt-1">
                    PROMPT: Viết 3 lựa chọn cho Round 3 (nguồn nguyên liệu) —
                    chi phí, lợi nhuận, fairness, reputation, rủi ro.
                  </p>
                  <p className="mt-2">
                    KẾT QUẢ AI: Draft 3 lựa chọn có số liệu minh họa.
                  </p>
                  <p className="mt-1 text-foreground/70">
                    CHỈNH SỬA: Kiểm chứng số theo model target money, biên tập
                    ngôn ngữ tiếng Việt.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    Ví dụ 3 — Sinh hình hero & video demo
                  </h4>
                  <p className="text-foreground/70 mt-1">
                    PROMPT: Mô tả hình/clip demo (ví dụ: cooperative coffee
                    farmers, 5s cinematic clip).
                  </p>
                  <p className="mt-2">KẾT QUẢ AI: Ảnh/clip thô đạt concept.</p>
                  <p className="mt-1 text-foreground/70">
                    CHỈNH SỬA: Crop/retouch, chuyển sang WebP/MP4, thêm
                    captions, nén file.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-card/70 backdrop-blur-sm shadow md:col-span-3 h-full">
            <CardHeader>
              <CardTitle className="text-lg">
                Sáng tạo & Giá trị con người
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col h-full">
              <div className="flex-1">
                <p className="text-foreground/85">
                  AI hỗ trợ nhiều phần “kỹ thuật”, nhưng phần giá trị cốt lõi do
                  con người đảm nhiệm:
                </p>
                <ul className="list-disc ml-5 mt-3 text-foreground/70 space-y-1">
                  <li>
                    Thiết kế gameplay & cân bằng số liệu: công thức, penalty
                    factor, target money do nhóm xây dựng và thử nghiệm.
                  </li>
                  <li>
                    Kiểm chứng học thuật & VN hóa nội dung: biên tập, kiểm duyệt
                    ví dụ và thuật ngữ.
                  </li>
                  <li>
                    Quyết định UX: flow onboarding, vị trí nút, mobile
                    experience.
                  </li>
                  <li>
                    Sửa lỗi & debug: responsive, animation timing, accessibility
                    fixes.
                  </li>
                  <li>Sáng tạo nghệ thuật: phối màu, bố cục, storytelling.</li>
                </ul>

                <div className="mt-4">
                  <strong>Ước tính đóng góp:</strong>
                  <p className="text-foreground/70 mt-1">
                    AI hỗ trợ ~40% (code boilerplate, assets, gợi ý). Con người
                    ~60% (sáng tạo, kiểm chứng, chỉnh sửa).
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Risks & mitigation */}
          <Card className="bg-card/70 backdrop-blur-sm shadow h-full">
            <CardHeader>
              <CardTitle className="text-lg">Rủi ro & Giải pháp</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col h-full">
              <div className="flex-1">
                <ul className="list-disc ml-5 text-foreground/70 space-y-1">
                  <li>
                    Nội dung sai lệch / bias → Kiểm tra nguồn, review thủ công.
                  </li>
                  <li>
                    Bản quyền hình ảnh → Dùng hình có license, chỉnh sửa trước
                    khi publish.
                  </li>
                  <li>
                    Code insecure → Security review, test và linting trong CI.
                  </li>
                  <li>
                    Hiệu suất → Nén assets, lazy-load, tối ưu hình ảnh/video.
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Conclusion */}
          <Card className="bg-card/70 backdrop-blur-sm shadow md:col-span-2 h-full">
            <CardHeader>
              <CardTitle className="text-lg">Kết luận & Khuyến nghị</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col h-full">
              <div className="flex-1">
                <p className="leading-relaxed text-foreground/85">
                  AI là công cụ gia tốc hữu hiệu cho FairTrade Tycoon: tăng tốc
                  viết code, prototype UI, sinh assets và đề xuất ý tưởng. Tuy
                  nhiên để đảm bảo tính chính xác học thuật, công bằng trong
                  gameplay và trải nghiệm người dùng, cần quy trình
                  "human-in-the-loop" với lưu trữ prompt + kết quả + chỉnh sửa
                  để minh bạch và tái sử dụng.
                </p>
              </div>
            </CardContent>
          </Card>
          {/* References */}
          <Card className="bg-card/70 backdrop-blur-sm shadow md:col-span-3 h-full">
            <CardHeader>
              <CardTitle className="text-lg">Tài liệu tham khảo</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col h-full">
              <div className="flex-1">
                <ul className="list-disc ml-5 text-foreground/80 space-y-2">
                  <li>
                    Giáo trình Kinh tế chính trị Mác – Lênin, NXB Chính trị quốc
                    gia Sự thật, 2021, trang 177 – 187.
                  </li>
                  <li>Văn kiện Đại hội XIII Đảng Cộng sản Việt Nam.</li>
                  <li>
                    Báo cáo KT-XH Việt Nam 2021-2025 – Bộ Kế hoạch và Đầu tư.
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
