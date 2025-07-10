import React, { useState } from 'react';
import { Download, Share2, Copy, CheckCircle, QrCode, Send, Calendar, MapPin, Trophy } from 'lucide-react';
import { Card } from '../common/Card';
import { Button } from '../common/Button';
import { useSelection } from '../../hooks/useSelection';

interface TicketGenerationProps {
  ticketId: string;
  onSendTicket: () => void;
}

export const TicketGeneration: React.FC<TicketGenerationProps> = ({ 
  ticketId, 
  onSendTicket 
}) => {
  const { selectedJockey, selectedHorse, betAmount } = useSelection();
  const [isCopied, setIsCopied] = useState(false);
  const [isSending, setIsSending] = useState(false);
  
  // Calculate payout information
  const calculatePayoutMultiplier = (amount: number) => {
    if (amount >= 50000) return 8.5;
    if (amount >= 20000) return 6.2;
    if (amount >= 10000) return 4.8;
    if (amount >= 5000) return 3.5;
    if (amount >= 2000) return 2.8;
    return 2.0;
  };
  
  const payoutMultiplier = calculatePayoutMultiplier(betAmount);
  const expectedWinnings = betAmount * payoutMultiplier;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('ja-JP', {
      style: 'currency',
      currency: 'JPY'
    }).format(amount);
  };

  const copyTicketId = () => {
    navigator.clipboard.writeText(ticketId);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const currentDate = new Date().toLocaleDateString('ja-JP');
  const currentTime = new Date().toLocaleTimeString('ja-JP');
  
  // Race information
  const raceDate = new Date();
  raceDate.setDate(raceDate.getDate() + 3); // Race in 3 days
  const raceLocation = "東京競馬場";
  
  const handleSendToManagement = async () => {
    setIsSending(true);
    // Simulate sending to management
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSending(false);
    alert('宝くじが管理部門に正常に送信されました！');
    onSendTicket();
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-gray-900 mb-2">宝くじ購入完了</h2>
        <p className="text-gray-600">宝くじが正常に生成されました</p>
      </div>

      {/* Digital Ticket */}
      <Card className="p-0 overflow-hidden bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-2xl font-bold">Japan Racing Lottery</h3>
              <p className="text-blue-200">公式宝くじ</p>
            </div>
            <div className="text-right">
              <p className="text-blue-200">チケット番号</p>
              <p className="font-mono text-lg">{ticketId}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-4">
              <div>
                <p className="text-blue-200 text-sm">購入者</p>
                <p className="font-semibold">ゲストユーザー</p>
              </div>
              <div>
                <p className="text-blue-200 text-sm">購入金額</p>
                <p className="font-semibold text-xl">{formatCurrency(betAmount)}</p>
              </div>
              <div>
                <p className="text-blue-200 text-sm">配当倍率</p>
                <p className="font-semibold text-xl text-yellow-300">{payoutMultiplier}倍</p>
              </div>
              <div>
                <p className="text-blue-200 text-sm">購入日時</p>
                <p className="font-semibold">{currentDate} {currentTime}</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-blue-200 text-sm">選択騎手</p>
                <div className="flex items-center space-x-2">
                  <img
                    src={selectedJockey?.image}
                    alt={selectedJockey?.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span className="font-semibold">{selectedJockey?.name}</span>
                </div>
              </div>
              <div>
                <p className="text-blue-200 text-sm">選択馬</p>
                <div className="flex items-center space-x-2">
                  <img
                    src={selectedHorse?.image}
                    alt={selectedHorse?.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span className="font-semibold">{selectedHorse?.name}</span>
                </div>
              </div>
              <div>
                <p className="text-blue-200 text-sm">期待賞金</p>
                <p className="font-semibold text-2xl text-yellow-300">{formatCurrency(expectedWinnings)}</p>
              </div>
            </div>
          </div>

          <div className="border-t border-blue-400 pt-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-blue-200 text-sm">ステータス</p>
                <p className="font-semibold text-yellow-300">レース待ち</p>
              </div>
              <div className="text-right">
                <QrCode className="h-12 w-12 text-blue-200" />
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Race Information */}
      <Card className="p-6 bg-gradient-to-r from-orange-50 to-red-50 border-orange-200">
        <div className="flex items-center mb-4">
          <Trophy className="h-6 w-6 text-orange-500 mr-2" />
          <h3 className="text-xl font-bold text-gray-900">レース情報</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center space-x-3">
            <Calendar className="h-5 w-5 text-orange-500" />
            <div>
              <p className="font-semibold">抽選日</p>
              <p className="text-sm text-gray-600">{raceDate.toLocaleDateString('ja-JP')}</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <MapPin className="h-5 w-5 text-orange-500" />
            <div>
              <p className="font-semibold">開催場所</p>
              <p className="text-sm text-gray-600">{raceLocation}</p>
            </div>
          </div>
        </div>
        <div className="mt-4 p-3 bg-orange-100 rounded-lg">
          <p className="text-sm text-orange-800">
            <strong>重要:</strong> 抽選結果は{raceDate.toLocaleDateString('ja-JP')}の18:00に発表されます
          </p>
        </div>
      </Card>

      {/* Ticket Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Button
          variant="outline"
          onClick={copyTicketId}
          className="flex items-center justify-center space-x-2"
        >
          {isCopied ? (
            <>
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>コピー済み</span>
            </>
          ) : (
            <>
              <Copy className="h-4 w-4" />
              <span>番号をコピー</span>
            </>
          )}
        </Button>
        
        <Button
          variant="outline"
          className="flex items-center justify-center space-x-2"
        >
          <Download className="h-4 w-4" />
          <span>PDFダウンロード</span>
        </Button>
        
        <Button
          variant="outline"
          className="flex items-center justify-center space-x-2"
        >
          <Share2 className="h-4 w-4" />
          <span>シェア</span>
        </Button>
      </div>

      {/* Important Notice */}
      <Card className="p-6 bg-yellow-50 border-yellow-200">
        <h3 className="font-semibold text-yellow-800 mb-2">重要なお知らせ</h3>
        <ul className="text-sm text-yellow-700 space-y-1">
          <li>• チケット番号は大切に保管してください</li>
          <li>• レース結果は{raceDate.toLocaleDateString('ja-JP')}の18:00に発表されます</li>
          <li>• 当選時はこのチケット番号が必要です</li>
          <li>• 払い戻し期限は発表から30日間です</li>
          <li>• 期待賞金: {formatCurrency(expectedWinnings)} (配当倍率: {payoutMultiplier}倍)</li>
        </ul>
      </Card>

      {/* Send to Management Button */}
      <Button
        onClick={handleSendToManagement}
        isLoading={isSending}
        className="w-full py-4 text-lg"
        variant="secondary"
      >
        <Send className="h-5 w-5 mr-2" />
        {isSending ? '送信中...' : '管理部門に宝くじを送信'}
      </Button>
    </div>
  );
};