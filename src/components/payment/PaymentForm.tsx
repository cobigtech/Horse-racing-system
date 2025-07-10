import React, { useState } from 'react';
import { CreditCard, Shield, Banknote, Wallet } from 'lucide-react';
import { Card } from '../common/Card';
import { Button } from '../common/Button';
import { useSelection } from '../../hooks/useSelection';

interface PaymentFormProps {
  onPaymentComplete: (ticketId: string) => void;
}

export const PaymentForm: React.FC<PaymentFormProps> = ({ onPaymentComplete }) => {
  const { selectedJockey, selectedHorse, betAmount, setBetAmount } = useSelection();
  const [paymentMethod, setPaymentMethod] = useState<'wallet' | 'card'>('wallet');
  const [isProcessing, setIsProcessing] = useState(false);
  
  // Calculate payout multiplier based on bet amount
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

  const handlePayment = async () => {
    if (!selectedJockey || !selectedHorse) return;

    setIsProcessing(true);

    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Generate ticket ID
    const ticketId = `TKT-${Date.now()}-${Math.random().toString(36).substring(7)}`;
    
    setIsProcessing(false);
    onPaymentComplete(ticketId);
  };

  const betOptions = [1000, 2000, 5000, 10000, 20000, 50000];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">支払い</h2>
        <p className="text-gray-600">宝くじの購入金額を選択してください</p>
      </div>

      {/* Selection Summary */}
      <Card className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50">
        <h3 className="text-lg font-bold mb-4">選択内容</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center space-x-3">
            <img
              src={selectedJockey?.image}
              alt={selectedJockey?.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold">{selectedJockey?.name}</p>
              <p className="text-sm text-gray-600">騎手</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <img
              src={selectedHorse?.image}
              alt={selectedHorse?.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold">{selectedHorse?.name}</p>
              <p className="text-sm text-gray-600">馬</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Bet Amount Selection */}
      <Card className="p-6">
        <h3 className="text-lg font-bold mb-4">賭け金額を選択</h3>
        <p className="text-sm text-gray-600 mb-4">
          賭け金額が高いほど、配当倍率と期待賞金が増加します
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
          {betOptions.map((amount) => (
            <div
              key={amount}
              className={`p-3 rounded-lg border-2 transition-all cursor-pointer ${
                betAmount === amount
                  ? 'border-blue-500 bg-blue-50 text-blue-700'
                  : 'border-gray-300 hover:border-gray-400'
              }`}
              onClick={() => setBetAmount(amount)}
            >
              <div className="text-center">
                <div className="font-bold">{formatCurrency(amount)}</div>
                <div className="text-xs text-gray-500">
                  {calculatePayoutMultiplier(amount)}倍
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="number"
            value={betAmount}
            onChange={(e) => setBetAmount(Number(e.target.value))}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            min="1000"
            step="1000"
          />
          <span className="text-gray-600">円</span>
        </div>
      </Card>

      {/* Payout Information */}
      <Card className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
        <h3 className="text-lg font-bold mb-4 text-purple-800">配当情報</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">{payoutMultiplier}倍</div>
            <div className="text-sm text-gray-600">配当倍率</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">{formatCurrency(expectedWinnings)}</div>
            <div className="text-sm text-gray-600">期待賞金</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">{((1 / payoutMultiplier) * 100).toFixed(1)}%</div>
            <div className="text-sm text-gray-600">当選確率</div>
          </div>
        </div>
      </Card>

      {/* Payment Method */}
      <Card className="p-6">
        <h3 className="text-lg font-bold mb-4">支払い方法</h3>
        <div className="space-y-3">
          <div
            className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
              paymentMethod === 'wallet'
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-300 hover:border-gray-400'
            }`}
            onClick={() => setPaymentMethod('wallet')}
          >
            <div className="flex items-center space-x-3">
              <Wallet className="h-6 w-6 text-blue-600" />
              <div>
                <p className="font-semibold">ウォレット残高</p>
                <p className="text-sm text-gray-600">
                  残高: {formatCurrency(100000)}
                </p>
              </div>
            </div>
          </div>
          <div
            className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
              paymentMethod === 'card'
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-300 hover:border-gray-400'
            }`}
            onClick={() => setPaymentMethod('card')}
          >
            <div className="flex items-center space-x-3">
              <CreditCard className="h-6 w-6 text-blue-600" />
              <div>
                <p className="font-semibold">クレジットカード</p>
                <p className="text-sm text-gray-600">Visa, MasterCard, JCB</p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Payment Summary */}
      <Card className="p-6 bg-gradient-to-r from-green-50 to-emerald-50">
        <h3 className="text-lg font-bold mb-4">支払い概要</h3>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>宝くじ代金</span>
            <span className="font-semibold">{formatCurrency(betAmount)}</span>
          </div>
          <div className="flex justify-between">
            <span>配当倍率</span>
            <span className="font-semibold text-purple-600">{payoutMultiplier}倍</span>
          </div>
          <div className="flex justify-between">
            <span>期待賞金</span>
            <span className="font-semibold text-green-600">{formatCurrency(expectedWinnings)}</span>
          </div>
          <div className="flex justify-between">
            <span>手数料</span>
            <span className="font-semibold">無料</span>
          </div>
          <div className="border-t pt-2">
            <div className="flex justify-between text-lg font-bold">
              <span>合計金額</span>
              <span>{formatCurrency(betAmount)}</span>
            </div>
          </div>
        </div>
      </Card>

      {/* Security Notice */}
      <div className="flex items-center space-x-2 text-sm text-gray-600">
        <Shield className="h-4 w-4" />
        <span>すべての取引は256bit SSL暗号化により保護されています</span>
      </div>

      {/* Payment Button */}
      <Button
        onClick={handlePayment}
        isLoading={isProcessing}
        className="w-full py-4 text-lg"
        disabled={!selectedJockey || !selectedHorse || betAmount < 1000 || isProcessing}
      >
        {isProcessing ? '電子決済処理中...' : `${formatCurrency(betAmount)}で電子決済`}
      </Button>
    </div>
  );
};