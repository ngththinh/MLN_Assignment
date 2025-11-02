"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { GameData } from "../game-container";

const businesses = [
  {
    name: "Trang Trại Cà Phê Công Bằng",
    type: "coffee",
    description:
      "Canh tác cà phê hữu cơ đạt chuẩn FairTrade - ổn định, dễ tăng Fairness và Reputation",
    startingCapital: 50000,
    risk: "Thấp",
    riskLevel: "low" as const,
    riskFactor: 1.1,
    icon: "☕",
  },
  {
    name: "Xưởng Dệt Thủ Công",
    type: "textile",
    description:
      "Sản xuất quần áo, vải sợi bằng lao động địa phương và vật liệu tái chế",
    startingCapital: 69500,
    risk: "Trung bình",
    riskLevel: "medium" as const,
    riskFactor: 1.2,
    icon: "🧵",
  },
  {
    name: "Trang Trại Chăn Nuôi Hữu Cơ",
    type: "livestock",
    description:
      "Nuôi trồng, sản xuất thực phẩm hữu cơ và cung cấp cho chuỗi siêu thị xanh",
    startingCapital: 100000,
    risk: "Cao",
    riskLevel: "high" as const,
    riskFactor: 1.4,
    icon: "🐄",
  },
  {
    name: "Công Ty Công Nghệ Xanh",
    type: "greentech",
    description:
      "Phát triển công nghệ giảm phát thải, tiết kiệm năng lượng và tái chế chất thải",
    startingCapital: 150000,
    risk: "Rất Cao",
    riskLevel: "high" as const,
    riskFactor: 1.6,
    icon: "🌱",
  },
  {
    name: "Cửa Hàng Thủ Công Mỹ Nghệ",
    type: "handicraft",
    description:
      "Kinh doanh sản phẩm truyền thống, bảo tồn văn hóa địa phương và hỗ trợ nghệ nhân",
    startingCapital: 40000,
    risk: "Rất Thấp",
    riskLevel: "low" as const,
    riskFactor: 0.8,
    icon: "🎨",
  },
  {
    name: "Nhà Máy Năng Lượng Mặt Trời",
    type: "solar",
    description:
      "Đầu tư vào năng lượng tái tạo, cung cấp điện sạch cho cộng đồng và doanh nghiệp",
    startingCapital: 200000,
    risk: "Cao",
    riskLevel: "high" as const,
    riskFactor: 1.3,
    icon: "☀️",
  },
];

interface BusinessSelectionProps {
  onSelect: (data: GameData) => void;
}

export function BusinessSelection({ onSelect }: BusinessSelectionProps) {
  const [selectedBusiness, setSelectedBusiness] = useState<
    (typeof businesses)[0] | null
  >(null);

  const handleConfirm = () => {
    if (!selectedBusiness) return;

    onSelect({
      businessName: selectedBusiness.name,
      businessType: selectedBusiness.type,
      startingCapital: selectedBusiness.startingCapital,
      riskLevel: selectedBusiness.riskLevel,
      riskFactor: selectedBusiness.riskFactor,
    });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-8 py-12">
      {/* Header */}
      <div className="mb-12 text-center animate-in fade-in-up">
        <h1 className="text-4xl md:text-5xl font-bold mb-3">
          Chọn Doanh Nghiệp Của Bạn
        </h1>
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
          Lựa chọn loại hình kinh doanh mà bạn muốn quản lý. Mỗi doanh nghiệp có
          những thách thức và cơ hội khác nhau.
        </p>
      </div>

      {/* Business Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-12">
        {businesses.map((business, idx) => (
          <Card
            key={business.type}
            className={`cursor-pointer transition-all bg-card/70 backdrop-blur-sm animate-in fade-in-up ${
              selectedBusiness?.type === business.type
                ? "ring-2 ring-primary border-primary shadow-xl scale-105"
                : "hover:shadow-xl hover:scale-105"
            }`}
            style={{ animationDelay: `${idx * 50}ms` }}
            onClick={() => setSelectedBusiness(business)}
          >
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <span className="text-3xl">{business.icon}</span>
                  <div>
                    <CardTitle className="text-lg">{business.name}</CardTitle>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <CardDescription>{business.description}</CardDescription>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-foreground/60">Vốn Ban Đầu:</span>
                  <span className="font-semibold text-primary">
                    ${business.startingCapital.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-foreground/60">Độ Rủi Ro:</span>
                  <Badge
                    variant={
                      business.risk === "Thấp"
                        ? "outline"
                        : business.risk === "Trung bình"
                        ? "secondary"
                        : "destructive"
                    }
                  >
                    {business.risk}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Selection Info */}
      {selectedBusiness && (
        <Card className="bg-primary/10 backdrop-blur-sm border-primary/30 mb-8 shadow-xl animate-in fade-in-up">
          <CardHeader>
            <CardTitle className="text-base">
              Bạn đã chọn: {selectedBusiness.name}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-foreground/70 mb-4">
              Bạn sẽ bắt đầu với vốn $
              {selectedBusiness.startingCapital.toLocaleString()} USD. Mục tiêu:
              đạt ${(selectedBusiness.startingCapital * 2).toLocaleString()} USD
              sau 7 vòng quyết định và duy trì Fairness, Reputation cao để giành
              chiến thắng!
            </p>
            <Button
              onClick={handleConfirm}
              size="lg"
              className="w-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              Bắt Đầu Trò Chơi
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
