import React from 'react';
import { Crown, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Crown className="h-6 w-6 text-yellow-400" />
              <h3 className="text-lg font-bold">Japan Racing Lottery</h3>
            </div>
            <p className="text-gray-400 text-sm">
              日本最大の競馬宝くじサイト。安全で公正な競馬ベッティング体験を提供します。
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">サービス</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">宝くじ購入</a></li>
              <li><a href="#" className="hover:text-white transition-colors">レース結果</a></li>
              <li><a href="#" className="hover:text-white transition-colors">騎手情報</a></li>
              <li><a href="#" className="hover:text-white transition-colors">馬情報</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">サポート</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">ヘルプセンター</a></li>
              <li><a href="#" className="hover:text-white transition-colors">利用規約</a></li>
              <li><a href="#" className="hover:text-white transition-colors">プライバシーポリシー</a></li>
              <li><a href="#" className="hover:text-white transition-colors">お問い合わせ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">フォローする</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 Japan Racing Lottery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};