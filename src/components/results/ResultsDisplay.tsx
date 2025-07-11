import React, { useState } from 'react';
import { Trophy, Calendar, Clock, TrendingUp, Star } from 'lucide-react';
import { Card } from '../common/Card';
import { Button } from '../common/Button';
import { mockRaceResults } from '../../data/mockData';

export const ResultsDisplay: React.FC = () => {
  const [selectedResult, setSelectedResult] = useState(mockRaceResults[0]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('ja-JP', {
      style: 'currency',
      currency: 'JPY'
    }).format(amount);
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <Trophy className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-gray-900 mb-2">レース結果</h2>
        <p className="text-gray-600">最新のレース結果をご確認ください</p>
      </div>

      {/* Latest Result Highlight */}
      <Card className="p-6 bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200">
        <div className="flex items-center mb-4">
          <Star className="h-6 w-6 text-yellow-500 mr-2" />
          <h3 className="text-xl font-bold text-gray-900">最新結果</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-gray-500" />
              <span className="text-gray-600">
                {selectedResult.raceDate.toLocaleDateString('ja-JP')}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-gray-500" />
              <span className="text-gray-600">タイム: {selectedResult.raceTime}</span>
            </div>
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-gray-500" />
              <span className="text-gray-600">
                配当倍率: {selectedResult.payoutMultiplier}倍
              </span>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">優勝騎手</h4>
              <div className="flex items-center space-x-3">
                <img
                  src={selectedResult.winningJockey.image}
                  alt={selectedResult.winningJockey.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">{selectedResult.winningJockey.name}</p>
                  <p className="text-sm text-gray-600">
                    勝率 {selectedResult.winningJockey.winRate}%
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">優勝馬</h4>
              <div className="flex items-center space-x-3">
                <img
                  src={selectedResult.winningHorse.image}
                  alt={selectedResult.winningHorse.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">{selectedResult.winningHorse.name}</p>
                  <p className="text-sm text-gray-600">
                    {selectedResult.winningHorse.breed} - {selectedResult.winningHorse.age}歳
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Results History */}
      <Card className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">過去の結果</h3>
        <div className="space-y-4">
          {mockRaceResults.map((result) => (
            <div
              key={result.id}
              className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                selectedResult.id === result.id
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => setSelectedResult(result)}
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-semibold">
                    {result.raceDate.toLocaleDateString('ja-JP')}
                  </p>
                  <p className="text-sm text-gray-600">
                    {result.winningJockey.name} × {result.winningHorse.name}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-green-600">
                    {result.payoutMultiplier}倍
                  </p>
                  <p className="text-sm text-gray-600">{result.raceTime}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Payout Calculator */}
      <Card className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
        <h3 className="text-xl font-bold text-gray-900 mb-4">配当計算機</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              賭け金額
            </label>
            <input
              type="number"
              defaultValue="1000"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="p-4 bg-white rounded-lg">
            <p className="text-sm text-gray-600">当選時の払い戻し額</p>
            <p className="text-2xl font-bold text-green-600">
              {formatCurrency(1000 * selectedResult.payoutMultiplier)}
            </p>
          </div>
        </div>
      </Card>

      {/* Check Ticket Button */}
      <Button className="w-full py-4 text-lg" variant="secondary">
        チケットを確認
      </Button>
    </div>
  );
};