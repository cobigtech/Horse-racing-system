import React from "react";
import { Zap, Crown} from "lucide-react";
import { Button } from "../common/Button";

interface HeroProps {
  onStartClick: () => void;
  onStartinfo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartClick, onStartinfo }) => {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/1996333/pexels-photo-1996333.jpeg?auto=compress&cs=tinysrgb&w=1200)",
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-indigo-900/80" />

      {/* Content */}
      <div className="relative container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Crown className="h-16 w-16 text-yellow-400 mx-auto mb-4 animate-pulse" />
            <h1 className="text-3xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
                第23回
              </span>
              <br />
              <span className="text-white text-6xl">東京乗馬競技大会</span>
            </h1>
          </div>

          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
            日本最大の競馬宝くじサイトであなたの夢を現実にしてみてください。
            <br />
            プロの騎手と名馬を選択して幸運をキャッチ！
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              size="lg"
              onClick={onStartClick}
              className="text-lg px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-400 hover:to-yellow-300 text-black font-bold shadow-2xl hover:shadow-yellow-500/25"
            >
              <Zap className="mr-2 h-5 w-5" />
              今すぐ始める
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-blue-900"
              onClick={onStartinfo}
            >
              ルールを見る
            </Button>
          </div>

          {/* Feature Cards */}
          
        </div>
      </div>

      {/* Animated Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};
