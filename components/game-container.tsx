"use client";

import { useState } from "react";
import { BusinessSelection } from "./game/business-selection";
import { Gameplay } from "./game/gameplay";
import { GameResults } from "./game/game-results";

export type GameState = "selection" | "playing" | "results";

export interface GameData {
  businessName: string;
  businessType: string;
  startingCapital: number;
  riskLevel: "low" | "medium" | "high";
  riskFactor: number;
}

export interface GameResult {
  businessName: string;
  businessType: string;
  startingCapital: number;
  finalMoney: number;
  finalFairness: number;
  finalReputation: number;
  targetMoney: number;
  finalScore: number;
  title: string;
  scoreBreakdown: {
    scoreEthics: number;
    scoreFinance: number;
    penaltyFactor: number;
  };
  message: string;
  recommendations: string[];
}

export function GameContainer() {
  const [gameState, setGameState] = useState<GameState>("selection");
  const [gameData, setGameData] = useState<GameData | null>(null);
  const [gameResult, setGameResult] = useState<GameResult | null>(null);

  const handleBusinessSelect = (data: GameData) => {
    setGameData(data);
    setGameState("playing");
  };

  const handleGameComplete = (result: GameResult) => {
    setGameResult(result);
    setGameState("results");
  };

  const handleReset = () => {
    setGameState("selection");
    setGameData(null);
    setGameResult(null);
  };

  return (
    <div className="w-full">
      {gameState === "selection" && (
        <BusinessSelection onSelect={handleBusinessSelect} />
      )}
      {gameState === "playing" && gameData && (
        <Gameplay gameData={gameData} onComplete={handleGameComplete} />
      )}
      {gameState === "results" && gameResult && (
        <GameResults result={gameResult} onReset={handleReset} />
      )}
    </div>
  );
}
