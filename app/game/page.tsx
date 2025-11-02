import { Navigation } from "@/components/navigation";
import { GameContainer } from "@/components/game-container";

export default function GamePage() {
  return (
    <main className="min-h-screen animated-gradient-bg">
      <Navigation />
      <GameContainer />

      {/* Footer */}
      <footer className="border-t bg-card/40 backdrop-blur-sm py-8 px-4">
        <div className="max-w-6xl mx-auto text-center text-foreground/60 text-sm">
          <p>
            EconTycoon - Nền tảng giáo dục về kinh tế thị trường & xã hội chủ
            nghĩa Việt Nam
          </p>
        </div>
      </footer>
    </main>
  );
}
