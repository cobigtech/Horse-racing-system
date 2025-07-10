import React, { useState } from 'react';
import { Crown, Menu, X, User, LogOut, Wallet } from 'lucide-react';
import { Button } from '../common/Button';

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  return (
    <header className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white sticky top-0 z-40 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Crown className="h-8 w-8 text-yellow-400" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
              Japan Racing Lottery
            </h1>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <a href="#home" className="hover:text-yellow-400 transition-colors">ホーム</a>
            <a href="#rules" className="hover:text-yellow-400 transition-colors">ルール</a>
            <a href="#results" className="hover:text-yellow-400 transition-colors">結果</a>
            <a href="#about" className="hover:text-yellow-400 transition-colors">概要</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="secondary"
              className="bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-400 hover:to-yellow-300 text-black font-bold"
            >
              今すぐ始める
            </Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-2">
              <a href="#home" className="py-2 hover:text-yellow-400 transition-colors">ホーム</a>
              <a href="#rules" className="py-2 hover:text-yellow-400 transition-colors">ルール</a>
              <a href="#results" className="py-2 hover:text-yellow-400 transition-colors">結果</a>
              <a href="#about" className="py-2 hover:text-yellow-400 transition-colors">概要</a>
              <Button
                variant="secondary"
                className="bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-400 hover:to-yellow-300 text-black font-bold"
              >
                今すぐ始める
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};