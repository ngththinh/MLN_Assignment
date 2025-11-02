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
import { Progress } from "@/components/ui/progress";
import type { GameData, GameResult } from "../game-container";
import { getDecisionsByBusinessType } from "@/lib/game-decisions";

interface GameplayProps {
  gameData: GameData;
  onComplete: (result: GameResult) => void;
}

export function Gameplay({ gameData, onComplete }: GameplayProps) {
  const gameDecisions = getDecisionsByBusinessType(gameData.businessType);
  const [currentRound, setCurrentRound] = useState(0);
  const [money, setMoney] = useState(gameData.startingCapital);
  const [fairness, setFairness] = useState(5);
  const [reputation, setReputation] = useState(5);

  const currentDecision = gameDecisions[currentRound];
  const progress = ((currentRound + 1) / 7) * 100;

  const handleDecision = (optionIndex: number) => {
    const option = currentDecision.options[optionIndex];
    const actualMoneyChange = Math.round(
      option.moneyChange * gameData.riskFactor
    );

    const newMoney = Math.max(0, money + actualMoneyChange);
    const newFairness = Math.max(
      0,
      Math.min(10, fairness + option.fairnessChange)
    );
    const newReputation = Math.max(
      0,
      Math.min(10, reputation + option.reputationChange)
    );

    if (newFairness === 0 || newReputation === 0) {
      finishGame(newMoney, newFairness, newReputation, true);
      return;
    }

    setMoney(newMoney);
    setFairness(newFairness);
    setReputation(newReputation);

    if (currentRound < 6) {
      setCurrentRound(currentRound + 1);
    } else {
      finishGame(newMoney, newFairness, newReputation, false);
    }
  };

  const finishGame = (
    finalMoney: number,
    finalFairness: number,
    finalReputation: number,
    isGameOver: boolean
  ) => {
    const targetMoney = gameData.startingCapital * 2;

    if (isGameOver) {
      onComplete({
        businessName: gameData.businessName,
        businessType: gameData.businessType,
        startingCapital: gameData.startingCapital,
        finalMoney: Math.round(finalMoney),
        finalFairness,
        finalReputation,
        targetMoney,
        finalScore: 0,
        title: "Ethical Failure",
        scoreBreakdown: { scoreEthics: 0, scoreFinance: 0, penaltyFactor: 0 },
        message:
          "Game Over! Doanh nghiệp của bạn đã mất hoàn toàn uy tín hoặc công bằng.",
        recommendations: ["Fairness và Reputation không được phép rơi xuống 0"],
      });
      return;
    }

    let penaltyFactor = 1.0;
    if (finalFairness < 4 || finalReputation < 4) {
      penaltyFactor = 0.6;
    } else if (finalFairness < 6 || finalReputation < 6) {
      penaltyFactor = 0.8;
    }

    const scoreEthics = finalFairness * 2.0 + finalReputation * 1.8;
    const scoreFinance = (finalMoney / targetMoney) * 10;
    const finalScore = (scoreEthics + scoreFinance) * penaltyFactor;

    let title = "";
    let message = "";

    if (finalMoney < targetMoney) {
      title = "Financial Collapse";
      message = "Phá sản tài chính!";
    } else if (finalScore >= 30) {
      title = "FairTrade Legend";
      message = "Doanh nhân công bằng huyền thoại!";
    } else if (finalScore >= 22) {
      title = "Sustainable Entrepreneur";
      message = "Doanh nhân phát triển bền vững";
    } else if (finalScore >= 15) {
      title = "Ethical Struggler";
      message = "Người theo đuổi đạo đức";
    } else if (finalScore >= 10) {
      title = "Profit-Driven Trader";
      message = "Nhà buôn vụ lợi";
    } else {
      title = "Ethical Failure";
      message = "Thất bại đạo đức";
    }

    onComplete({
      businessName: gameData.businessName,
      businessType: gameData.businessType,
      startingCapital: gameData.startingCapital,
      finalMoney: Math.round(finalMoney),
      finalFairness,
      finalReputation,
      targetMoney,
      finalScore: Math.round(finalScore * 10) / 10,
      title,
      scoreBreakdown: {
        scoreEthics: Math.round(scoreEthics * 10) / 10,
        scoreFinance: Math.round(scoreFinance * 10) / 10,
        penaltyFactor,
      },
      message,
      recommendations: ["Chơi lại để cải thiện kết quả"],
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-12">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-3xl font-bold">FairTrade Tycoon</h1>
          <div className="text-right">
            <p className="text-sm text-foreground/60">Doanh nghiệp</p>
            <p className="font-semibold">{gameData.businessName}</p>
          </div>
        </div>
        <p className="text-foreground/60">Vòng {currentRound + 1} / 7</p>
        <Progress value={progress} className="mt-4 h-2" />
      </div>

      <div className="grid gap-4 md:grid-cols-3 mb-8">
        <Card className="bg-primary/10 border-primary/20">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <span className="text-2xl">💰</span>
              Money
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-primary">
              ${money.toLocaleString()}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-secondary/10 border-secondary/20">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <span className="text-2xl">⚖️</span>
              Fairness
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline gap-2">
              <div className="text-3xl font-bold text-secondary">
                {fairness}
              </div>
              <div className="text-lg text-foreground/60">/10</div>
            </div>
            <Progress value={fairness * 10} className="mt-2 h-2" />
          </CardContent>
        </Card>

        <Card className="bg-accent/10 border-accent/20">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <span className="text-2xl">⭐</span>
              Reputation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline gap-2">
              <div className="text-3xl font-bold text-accent">{reputation}</div>
              <div className="text-lg text-foreground/60">/10</div>
            </div>
            <Progress value={reputation * 10} className="mt-2 h-2" />
          </CardContent>
        </Card>
      </div>

      <Card className="border-2 border-primary/30">
        <CardHeader className="bg-primary/5">
          <CardTitle className="text-2xl">{currentDecision.title}</CardTitle>
          <CardDescription>{currentDecision.description}</CardDescription>
        </CardHeader>
        <CardContent className="pt-6 space-y-3">
          {currentDecision.options.map((option, index) => {
            const actualMoney = Math.round(
              option.moneyChange * gameData.riskFactor
            );
            return (
              <Button
                key={index}
                onClick={() => handleDecision(index)}
                variant="outline"
                className="w-full justify-start h-auto py-4 px-4 text-left hover:bg-primary/10"
              >
                <div className="flex-1 space-y-2">
                  <p className="font-medium">{option.text}</p>
                  <div className="flex gap-3 text-xs">
                    <span
                      className={
                        actualMoney > 0 ? "text-green-600" : "text-red-600"
                      }
                    >
                      💰 {actualMoney > 0 ? "+" : ""}$
                      {actualMoney.toLocaleString()}
                    </span>
                    <span>
                      ⚖️ {option.fairnessChange > 0 ? "+" : ""}
                      {option.fairnessChange}
                    </span>
                    <span>
                      ⭐ {option.reputationChange > 0 ? "+" : ""}
                      {option.reputationChange}
                    </span>
                  </div>
                </div>
              </Button>
            );
          })}
        </CardContent>
      </Card>

      {(fairness < 4 || reputation < 4) && (
        <Card className="mt-6 bg-red-50/50 border-red-200 dark:bg-red-950/20">
          <CardContent className="pt-6">
            <p className="font-semibold text-red-700">
              ⚠️ Cảnh báo! Chỉ số nguy hiểm!
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
