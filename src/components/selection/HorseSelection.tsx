import React from 'react';
import { Zap, Heart, Award, Check } from 'lucide-react';
import { Card } from '../common/Card';
import { Button } from '../common/Button';
import { Horse } from '../../types';
import { horses } from '../../data/mockData';
import { useSelection } from '../../hooks/useSelection';

interface HorseSelectionProps {
  onNext: () => void;
}

export const HorseSelection: React.FC<HorseSelectionProps> = ({ onNext }) => {
  const { selectedHorse, setSelectedHorse } = useSelection();

  const handleHorseSelect = (horse: Horse) => {
    setSelectedHorse(horse);
  };

  const getStatColor = (stat: number) => {
    if (stat >= 90) return 'text-green-600';
    if (stat >= 80) return 'text-blue-600';
    if (stat >= 70) return 'text-yellow-600';
    return 'text-gray-600';
  };

  const getStatBg = (stat: number) => {
    if (stat >= 90) return 'bg-green-100';
    if (stat >= 80) return 'bg-blue-100';
    if (stat >= 70) return 'bg-yellow-100';
    return 'bg-gray-100';
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">馬を選択</h2>
        <p className="text-gray-600">あなたの予想する馬を選んでください</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {horses.map((horse) => (
          <Card
            key={horse.id}
            className={`transition-all duration-300 ${
              selectedHorse?.id === horse.id
                ? 'ring-4 ring-green-500 shadow-xl'
                : 'hover:shadow-xl'
            }`}
          >
            <div className="relative">
              <img
                src={horse.image}
                alt={horse.name}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                #{horse.id}
              </div>
              {selectedHorse?.id === horse.id && (
                <div className="absolute inset-0 bg-green-500/20 flex items-center justify-center">
                  <div className="bg-green-500 text-white px-4 py-2 rounded-lg font-bold flex items-center">
                    <Check className="h-4 w-4 mr-2" />
                    選択済み
                  </div>
                </div>
              )}
            </div>
            
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">{horse.name}</h3>
              
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">勝率</span>
                  <span className="font-semibold text-green-600">{horse.winRate}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">年齢</span>
                  <span className="font-semibold">{horse.age}歳</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">品種</span>
                  <span className="font-semibold">{horse.breed}</span>
                </div>
              </div>
              
              <div className="mt-3 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Zap className="h-4 w-4 text-yellow-500 mr-1" />
                    <span className="text-xs font-medium">スピード</span>
                  </div>
                  <span className={`text-sm font-bold px-2 py-1 rounded ${getStatBg(horse.speed)} ${getStatColor(horse.speed)}`}>
                    {horse.speed}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Heart className="h-4 w-4 text-red-500 mr-1" />
                    <span className="text-xs font-medium">スタミナ</span>
                  </div>
                  <span className={`text-sm font-bold px-2 py-1 rounded ${getStatBg(horse.stamina)} ${getStatColor(horse.stamina)}`}>
                    {horse.stamina}
                  </span>
                </div>
              </div>
              
              <p className="text-xs text-gray-600 mt-2 line-clamp-2">
                {horse.description}
              </p>
              
              <div className="mt-4">
                <Button
                  onClick={() => handleHorseSelect(horse)}
                  variant={selectedHorse?.id === horse.id ? "secondary" : "primary"}
                  className="w-full"
                  size="sm"
                >
                  {selectedHorse?.id === horse.id ? (
                    <>
                      <Check className="h-4 w-4 mr-2" />
                      選択済み
                    </>
                  ) : (
                    '選択'
                  )}
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {selectedHorse && (
        <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
          <div className="flex items-center mb-4">
            <Award className="h-6 w-6 text-green-600 mr-2" />
            <h3 className="text-xl font-bold text-gray-900">選択された馬</h3>
          </div>
          
          <div className="flex items-center space-x-4">
            <img
              src={selectedHorse.image}
              alt={selectedHorse.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h4 className="font-bold text-lg">{selectedHorse.name}</h4>
              <p className="text-sm text-gray-600">{selectedHorse.breed} - {selectedHorse.age}歳</p>
              <div className="flex items-center space-x-4 mt-1">
                <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">
                  勝率 {selectedHorse.winRate}%
                </span>
                <span className="text-sm bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                  スピード {selectedHorse.speed}
                </span>
                <span className="text-sm bg-red-100 text-red-800 px-2 py-1 rounded">
                  スタミナ {selectedHorse.stamina}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {selectedHorse && (
        <div className="flex justify-end">
          <Button size="lg" className="px-8" onClick={onNext}>
            次へ：支払い
          </Button>
        </div>
      )}
    </div>
  );
};