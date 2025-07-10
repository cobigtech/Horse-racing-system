import React from 'react';
import { Crown, Trophy, Target, Check } from 'lucide-react';
import { Card } from '../common/Card';
import { Button } from '../common/Button';
import { Jockey } from '../../types';
import { jockeys } from '../../data/mockData';
import { useSelection } from '../../hooks/useSelection';

interface JockeySelectionProps {
  onNext: () => void;
}

export const JockeySelection: React.FC<JockeySelectionProps> = ({ onNext }) => {
  const { selectedJockey, setSelectedJockey } = useSelection();

  const handleJockeySelect = (jockey: Jockey) => {
    setSelectedJockey(jockey);
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">騎手を選択</h2>
        <p className="text-gray-600">あなたの予想する騎手を選んでください</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {jockeys.map((jockey) => (
          <Card
            key={jockey.id}
            className={`transition-all duration-300 ${
              selectedJockey?.id === jockey.id
                ? 'ring-4 ring-blue-500 shadow-xl'
                : 'hover:shadow-xl'
            }`}
          >
            <div className="relative">
              <img
                src={jockey.image}
                alt={jockey.name}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-2 right-2 bg-yellow-400 text-black px-2 py-1 rounded-full text-xs font-bold">
                #{jockey.id}
              </div>
              {selectedJockey?.id === jockey.id && (
                <div className="absolute inset-0 bg-blue-500/20 flex items-center justify-center">
                  <div className="bg-blue-500 text-white px-4 py-2 rounded-lg font-bold flex items-center">
                    <Check className="h-4 w-4 mr-2" />
                    選択済み
                  </div>
                </div>
              )}
            </div>
            
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">{jockey.name}</h3>
              
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">勝率</span>
                  <span className="font-semibold text-green-600">{jockey.winRate}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">勝利数</span>
                  <span className="font-semibold">{jockey.wins}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">経験年数</span>
                  <span className="font-semibold">{jockey.experience}年</span>
                </div>
              </div>
              
              <div className="mt-3 p-2 bg-blue-50 rounded-lg">
                <div className="flex items-center mb-1">
                  <Target className="h-4 w-4 text-blue-600 mr-1" />
                  <span className="text-xs font-medium text-blue-600">専門分野</span>
                </div>
                <p className="text-xs text-gray-600">{jockey.specialty}</p>
              </div>
              
              <p className="text-xs text-gray-600 mt-2 line-clamp-2">
                {jockey.description}
              </p>
              
              <div className="mt-4">
                <Button
                  onClick={() => handleJockeySelect(jockey)}
                  variant={selectedJockey?.id === jockey.id ? "secondary" : "primary"}
                  className="w-full"
                  size="sm"
                >
                  {selectedJockey?.id === jockey.id ? (
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

      {selectedJockey && (
        <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
          <div className="flex items-center mb-4">
            <Crown className="h-6 w-6 text-yellow-500 mr-2" />
            <h3 className="text-xl font-bold text-gray-900">選択された騎手</h3>
          </div>
          
          <div className="flex items-center space-x-4">
            <img
              src={selectedJockey.image}
              alt={selectedJockey.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h4 className="font-bold text-lg">{selectedJockey.name}</h4>
              <p className="text-sm text-gray-600">{selectedJockey.specialty}</p>
              <div className="flex items-center space-x-4 mt-1">
                <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">
                  勝率 {selectedJockey.winRate}%
                </span>
                <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
                  {selectedJockey.wins} 勝
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {selectedJockey && (
        <div className="flex justify-end">
          <Button size="lg" className="px-8" onClick={onNext}>
            次へ：馬を選択
          </Button>
        </div>
      )}
    </div>
  );
};