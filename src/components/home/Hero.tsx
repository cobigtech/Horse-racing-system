import React from 'react';
import { Zap, Crown, Shield, Award, Wallet } from 'lucide-react';
import { Button } from '../common/Button';

interface HeroProps {
  onStartClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartClick }) => {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1996333/pexels-photo-1996333.jpeg?auto=compress&cs=tinysrgb&w=1200)'
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-indigo-900/80" />
      
      {/* Content */}
      <div className="relative container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Crown className="h-16 w-16 text-yellow-400 mx-auto mb-4 animate-pulse" />
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
                Japan Racing
              </span>
              <br />
              <span className="text-white">Lottery</span>
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
            日本最大の競馬宝くじサイトで、あなたの予想を現実にしましょう。
            <br />
            プロの騎手と名馬を選んで、大きな勝利を掴みましょう！
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
              size="lg"
              className="text-lg px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold shadow-2xl"
              onClick={() => window.location.hash = 'cashout'}
            >
              <Wallet className="mr-2 h-5 w-5" />
              キャッシュアウト
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-blue-900"
            >
              ルールを見る
            </Button>
          </div>
          
          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
              <Shield className="h-8 w-8 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">安全・安心</h3>
              <p className="text-gray-300 text-sm">
                最高レベルのセキュリティで、あなたの資金と個人情報を保護します。
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
              <Award className="h-8 w-8 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">高配当</h3>
              <p className="text-gray-300 text-sm">
                業界最高水準の配当率で、大きな勝利のチャンスを提供します。
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
              <Crown className="h-8 w-8 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">プレミアム体験</h3>
              <p className="text-gray-300 text-sm">
                最新の技術と美しいデザインで、最高のベッティング体験を。
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};