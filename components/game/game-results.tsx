"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import type { GameResult } from "../game-container";

interface GameResultsProps {
  result: GameResult;
  onReset: () => void;
}

export function GameResults({ result, onReset }: GameResultsProps) {
  const isSuccess =
    result.title === "FairTrade Legend" ||
    result.title === "Sustainable Entrepreneur";
  const isFailure =
    result.title === "Ethical Failure" || result.title === "Financial Collapse";

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-12">
      {/* Title Banner */}
      <div
        className={`mb-12 p-8 rounded-lg border-2 text-center animate-in fade-in-up ${
          isSuccess
            ? "bg-green-50/50 border-green-200 dark:bg-green-950/20 dark:border-green-800"
            : isFailure
            ? "bg-red-50/50 border-red-200 dark:bg-red-950/20 dark:border-red-800"
            : "bg-amber-50/50 border-amber-200 dark:bg-amber-950/20 dark:border-amber-800"
        }`}
      >
        <div className="text-6xl mb-4">
          {isSuccess ? "🏆" : isFailure ? "💔" : "⭐"}
        </div>
        <h1 className="text-4xl font-bold mb-3">{result.title}</h1>
        <p
          className={`text-lg mb-2 ${
            isSuccess
              ? "text-green-700 dark:text-green-400"
              : isFailure
              ? "text-red-700 dark:text-red-400"
              : "text-amber-700 dark:text-amber-400"
          }`}
        >
          {result.message}
        </p>
        <div className="mt-4">
          <p className="text-2xl font-bold">
            Điểm Tổng:{" "}
            <span
              className={
                isSuccess
                  ? "text-green-600"
                  : isFailure
                  ? "text-red-600"
                  : "text-amber-600"
              }
            >
              {result.finalScore}
            </span>
          </p>
        </div>
      </div>

      {/* Business Info */}
      <Card
        className="mb-8 animate-in fade-in-up"
        style={{ animationDelay: "100ms" }}
      >
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Doanh Nghiệp: {result.businessName}</span>
            <Badge variant="outline">{result.businessType}</Badge>
          </CardTitle>
        </CardHeader>
      </Card>

      {/* Stats Grid */}
      <div
        className="grid gap-6 md:grid-cols-3 mb-8 animate-in fade-in-up"
        style={{ animationDelay: "200ms" }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <span className="text-2xl">💰</span>
              Kết Quả Tài Chính
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <p className="text-xs text-foreground/60">Vốn Ban Đầu</p>
              <p className="text-lg font-semibold">
                ${result.startingCapital.toLocaleString()}
              </p>
            </div>
            <div>
              <p className="text-xs text-foreground/60">Vốn Cuối Cùng</p>
              <p className="text-lg font-bold text-primary">
                ${result.finalMoney.toLocaleString()}
              </p>
            </div>
            <div>
              <p className="text-xs text-foreground/60">Mục Tiêu</p>
              <p className="text-lg font-semibold">
                ${result.targetMoney.toLocaleString()}
              </p>
            </div>
            <div className="pt-2">
              {result.finalMoney >= result.targetMoney ? (
                <Badge className="bg-green-600">✓ Đạt Mục Tiêu</Badge>
              ) : (
                <Badge variant="destructive">✗ Chưa Đạt Mục Tiêu</Badge>
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <span className="text-2xl">⚖️</span>
              Fairness (Công Bằng)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center mb-3">
              <div className="text-4xl font-bold text-secondary">
                {result.finalFairness}
              </div>
              <p className="text-sm text-foreground/60">/10</p>
            </div>
            <Progress value={result.finalFairness * 10} className="h-3 mb-2" />
            <div className="text-center">
              {result.finalFairness >= 6 ? (
                <Badge variant="default">Tốt</Badge>
              ) : result.finalFairness >= 4 ? (
                <Badge variant="secondary">Trung Bình</Badge>
              ) : (
                <Badge variant="destructive">Yếu</Badge>
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <span className="text-2xl">⭐</span>
              Reputation (Uy Tín)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center mb-3">
              <div className="text-4xl font-bold text-accent">
                {result.finalReputation}
              </div>
              <p className="text-sm text-foreground/60">/10</p>
            </div>
            <Progress
              value={result.finalReputation * 10}
              className="h-3 mb-2"
            />
            <div className="text-center">
              {result.finalReputation >= 6 ? (
                <Badge variant="default">Tốt</Badge>
              ) : result.finalReputation >= 4 ? (
                <Badge variant="secondary">Trung Bình</Badge>
              ) : (
                <Badge variant="destructive">Yếu</Badge>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Score Breakdown */}
      <Card
        className="mb-8 animate-in fade-in-up"
        style={{ animationDelay: "300ms" }}
      >
        <CardHeader>
          <CardTitle>Phân Tích Điểm</CardTitle>
          <CardDescription>Chi tiết cách tính điểm của bạn</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <p className="text-sm text-foreground/60 mb-1">Điểm Đạo Đức</p>
              <p className="text-2xl font-bold text-secondary">
                {result.scoreBreakdown.scoreEthics}
              </p>
              <p className="text-xs text-foreground/50 mt-1">
                (Fairness × 2.0) + (Reputation × 1.8)
              </p>
            </div>
            <div>
              <p className="text-sm text-foreground/60 mb-1">Điểm Tài Chính</p>
              <p className="text-2xl font-bold text-primary">
                {result.scoreBreakdown.scoreFinance}
              </p>
              <p className="text-xs text-foreground/50 mt-1">
                (Money ÷ Target) × 10
              </p>
            </div>
            <div>
              <p className="text-sm text-foreground/60 mb-1">Hệ Số Phạt</p>
              <p className="text-2xl font-bold text-accent">
                {result.scoreBreakdown.penaltyFactor}
              </p>
              <p className="text-xs text-foreground/50 mt-1">
                {result.scoreBreakdown.penaltyFactor === 1.0
                  ? "Không bị phạt"
                  : result.scoreBreakdown.penaltyFactor === 0.8
                  ? "Giảm 20%"
                  : "Giảm 40%"}
              </p>
            </div>
          </div>
          <div className="pt-4 border-t">
            <p className="text-sm text-foreground/60">Công Thức Tổng:</p>
            <p className="text-base font-mono">
              ({result.scoreBreakdown.scoreEthics} +{" "}
              {result.scoreBreakdown.scoreFinance}) ×{" "}
              {result.scoreBreakdown.penaltyFactor} ={" "}
              <strong className="text-primary">{result.finalScore}</strong>
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Recommendations */}
      <Card
        className="mb-8 border-l-4 border-l-primary animate-in fade-in-up"
        style={{ animationDelay: "400ms" }}
      >
        <CardHeader>
          <CardTitle>Khuyến Nghị Cải Thiện</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {result.recommendations.map((rec, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-primary font-bold mt-0.5">•</span>
                <span className="text-foreground/80">{rec}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Learning Points */}
      <Card
        className="mb-12 bg-primary/5 border-primary/20 animate-in fade-in-up"
        style={{ animationDelay: "500ms" }}
      >
        <CardHeader>
          <CardTitle>Bài Học Từ FairTrade Tycoon</CardTitle>
          <CardDescription>Những nguyên tắc kinh tế quan trọng</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <p>
            <strong>💰 Cân Bằng Lợi Nhuận:</strong> Thành công kinh doanh không
            chỉ đo bằng tiền, mà còn bằng tác động xã hội.
          </p>
          <p>
            <strong>⚖️ Công Bằng Thương Mại:</strong> Đối xử công bằng với nhân
            viên và đối tác tạo nền tảng bền vững.
          </p>
          <p>
            <strong>⭐ Uy Tín Doanh Nghiệp:</strong> Danh tiếng được xây dựng
            lâu dài và có thể mất trong chớp mắt.
          </p>
          <p>
            <strong>📊 Quy Luật Thị Trường:</strong> Giá cả, cung cầu và cạnh
            tranh chi phối mọi quyết định kinh doanh.
          </p>
        </CardContent>
      </Card>

      {/* Actions */}
      <div
        className="flex gap-4 animate-in fade-in-up"
        style={{ animationDelay: "600ms" }}
      >
        <Button onClick={onReset} size="lg" className="flex-1">
          🔄 Chơi Lại
        </Button>
        <Button
          onClick={() => (window.location.href = "/")}
          variant="outline"
          size="lg"
          className="flex-1"
        >
          🏠 Về Trang Chủ
        </Button>
      </div>
    </div>
  );
}
