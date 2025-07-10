import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Wallet, CreditCard, Shield, CheckCircle, Lock, AlertCircle } from 'lucide-react';
import { Card } from '../common/Card';
import { Button } from '../common/Button';
import { Modal } from '../common/Modal';

interface CashoutProcessProps {
  onComplete: () => void;
  onCancel: () => void;
}

type CashoutStep = 'liquid' | 'wallet' | 'confirmation';

export const CashoutProcess: React.FC<CashoutProcessProps> = ({ onComplete, onCancel }) => {
  const [currentStep, setCurrentStep] = useState<CashoutStep>('liquid');
  const [selectedAmount, setSelectedAmount] = useState<number>(0);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [paymentMethod, setPaymentMethod] = useState<'wallet' | 'card'>('wallet');
  const [walletNumber, setWalletNumber] = useState<string>('');
  const [walletPassword, setWalletPassword] = useState<string>('');
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentComplete, setPaymentComplete] = useState(false);

  const predefinedAmounts = [1000, 2000, 5000, 10000, 20000, 50000];
  
  const getMultiplier = (amount: number) => {
    if (amount >= 50000) return 8.5;
    if (amount >= 20000) return 6.2;
    if (amount >= 10000) return 4.8;
    if (amount >= 5000) return 3.5;
    if (amount >= 2000) return 2.8;
    return 2.0;
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('ja-JP', {
      style: 'currency',
      currency: 'JPY'
    }).format(amount);
  };

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value);
    const numValue = parseInt(value) || 0;
    setSelectedAmount(numValue);
  };

  const handleNextStep = () => {
    if (currentStep === 'liquid' && selectedAmount > 0) {
      setCurrentStep('wallet');
    } else if (currentStep === 'wallet' && walletNumber && walletPassword) {
      setCurrentStep('confirmation');
    }
  };

  const handlePreviousStep = () => {
    if (currentStep === 'wallet') {
      setCurrentStep('liquid');
    } else if (currentStep === 'confirmation') {
      setCurrentStep('wallet');
    }
  };

  const handleConfirmPayment = () => {
    setShowConfirmModal(true);
  };

  const handleFinalConfirmation = async () => {
    setShowConfirmModal(false);
    setIsProcessing(true);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsProcessing(false);
    setPaymentComplete(true);
    
    // Show payment success message
    setTimeout(() => {
      onComplete();
    }, 3000);
  };

  const multiplier = getMultiplier(selectedAmount);
  const expectedWinnings = selectedAmount * multiplier;
  const winningRate = ((1 / multiplier) * 100);

  // Step 1: Liquid Selection
  const renderLiquidSelection = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">賭け金額を選択</h2>
        <p className="text-gray-600">賭け金額が高いほど、配当倍率と期待賞金が増加します</p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {predefinedAmounts.map((amount) => (
          <div
            key={amount}
            className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
              selectedAmount === amount
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-300 hover:border-gray-400'
            }`}
            onClick={() => handleAmountSelect(amount)}
          >
            <div className="text-center">
              <div className="text-lg font-bold">{formatCurrency(amount)}</div>
              <div className="text-sm text-gray-500">{getMultiplier(amount)}倍</div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center space-x-2">
        <input
          type="number"
          value={customAmount}
          onChange={(e) => handleCustomAmountChange(e.target.value)}
          placeholder="4000"
          className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
          min="1000"
          step="1000"
        />
        <span className="text-gray-600 font-medium">円</span>
      </div>

      {selectedAmount > 0 && (
        <Card className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
          <h3 className="text-lg font-bold mb-4 text-purple-800">配当情報</h3>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-purple-600">{multiplier}倍</div>
              <div className="text-sm text-gray-600">配当倍率</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600">{formatCurrency(expectedWinnings)}</div>
              <div className="text-sm text-gray-600">期待賞金</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600">{winningRate.toFixed(1)}%</div>
              <div className="text-sm text-gray-600">当選確率</div>
            </div>
          </div>
        </Card>
      )}
    </div>
  );

  // Step 2: Wallet Connection
  const renderWalletConnection = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">ウォレット接続</h2>
        <p className="text-gray-600">ウォレット情報を入力してください</p>
      </div>

      {/* Payment Method Selection */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-800">支払い方法を選択</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                <h4 className="font-semibold">ウォレット残高</h4>
                <p className="text-sm text-gray-600">残高: {formatCurrency(100000)}</p>
              </div>
              {paymentMethod === 'wallet' && (
                <CheckCircle className="h-5 w-5 text-blue-600 ml-auto" />
              )}
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
                <h4 className="font-semibold">クレジットカード</h4>
                <p className="text-sm text-gray-600">Visa, MasterCard, JCB</p>
              </div>
              {paymentMethod === 'card' && (
                <CheckCircle className="h-5 w-5 text-blue-600 ml-auto" />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Wallet Credentials */}
      <Card className="p-6 bg-gray-50">
        <div className="flex items-center mb-4">
          <Lock className="h-5 w-5 text-gray-600 mr-2" />
          <h3 className="text-lg font-semibold text-gray-800">
            {paymentMethod === 'wallet' ? 'ウォレット認証情報' : 'カード情報'}
          </h3>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {paymentMethod === 'wallet' ? 'ウォレット番号' : 'カード番号'}
            </label>
            <input
              type="text"
              value={walletNumber}
              onChange={(e) => setWalletNumber(e.target.value)}
              placeholder={paymentMethod === 'wallet' ? 'ウォレット番号を入力' : 'カード番号を入力'}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {paymentMethod === 'wallet' ? 'パスワード' : 'セキュリティコード'}
            </label>
            <input
              type="password"
              value={walletPassword}
              onChange={(e) => setWalletPassword(e.target.value)}
              placeholder={paymentMethod === 'wallet' ? 'パスワードを入力' : 'CVVを入力'}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
          <div className="flex items-start space-x-2">
            <Shield className="h-5 w-5 text-yellow-600 mt-0.5" />
            <div className="text-sm text-yellow-800">
              <p className="font-medium">セキュリティについて</p>
              <p>すべての情報は暗号化されて安全に処理されます。</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Selected Amount Summary */}
      <Card className="p-4 bg-blue-50 border-blue-200">
        <div className="flex justify-between items-center">
          <span className="text-gray-700">選択金額:</span>
          <span className="text-xl font-bold text-blue-600">{formatCurrency(selectedAmount)}</span>
        </div>
      </Card>
    </div>
  );

  // Step 3: Payment Confirmation
  const renderPaymentConfirmation = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">支払い確認</h2>
        <p className="text-gray-600">支払い内容を確認してください</p>
      </div>

      {paymentComplete ? (
        <Card className="p-8 text-center bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-green-800 mb-2">決済完了</h3>
          <p className="text-green-700 mb-4">お支払いが正常に処理されました</p>
          <p className="text-sm text-gray-600">宝くじが生成されています...</p>
        </Card>
      ) : (
        <>
          <Card className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
            <h3 className="text-lg font-bold mb-4 text-gray-900">支払い概要</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">宝くじ代金</span>
                <span className="font-semibold text-lg">{formatCurrency(selectedAmount)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">配当倍率</span>
                <span className="font-semibold text-lg text-purple-600">{multiplier}倍</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">期待賞金</span>
                <span className="font-semibold text-lg text-green-600">{formatCurrency(expectedWinnings)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">手数料</span>
                <span className="font-semibold text-lg text-red-600">無料</span>
              </div>
              <div className="border-t border-green-300 pt-3">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-gray-900">合計金額</span>
                  <span className="text-2xl font-bold text-gray-900">{formatCurrency(selectedAmount)}</span>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-4 bg-blue-50 border-blue-200">
            <h4 className="font-semibold text-gray-800 mb-2">支払い方法</h4>
            <div className="flex items-center space-x-2">
              {paymentMethod === 'wallet' ? <Wallet className="h-5 w-5" /> : <CreditCard className="h-5 w-5" />}
              <span>{paymentMethod === 'wallet' ? 'ウォレット残高' : 'クレジットカード'}</span>
              <span className="text-gray-600">
                (****{walletNumber.slice(-4)})
              </span>
            </div>
          </Card>

          <Button
            onClick={handleConfirmPayment}
            isLoading={isProcessing}
            className="w-full py-4 text-lg bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800"
            disabled={isProcessing}
          >
            {isProcessing ? '決済処理中...' : '確認して決済する'}
          </Button>
        </>
      )}
    </div>
  );

  const renderStepIndicator = () => (
    <div className="flex justify-center mb-8">
      <div className="flex items-center space-x-4">
        <div className={`flex items-center ${
          currentStep === 'liquid' ? 'text-blue-600' : 'text-green-600'
        }`}>
          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
            currentStep === 'liquid' ? 'bg-blue-600 text-white' : 'bg-green-600 text-white'
          }`}>
            1
          </div>
          <span className="ml-2 font-medium">金額選択</span>
        </div>
        <div className="w-12 h-0.5 bg-gray-300"></div>
        <div className={`flex items-center ${
          currentStep === 'wallet' ? 'text-blue-600' : 
          currentStep === 'confirmation' ? 'text-green-600' : 'text-gray-400'
        }`}>
          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
            currentStep === 'wallet' ? 'bg-blue-600 text-white' :
            currentStep === 'confirmation' ? 'bg-green-600 text-white' : 'bg-gray-300'
          }`}>
            2
          </div>
          <span className="ml-2 font-medium">ウォレット接続</span>
        </div>
        <div className="w-12 h-0.5 bg-gray-300"></div>
        <div className={`flex items-center ${currentStep === 'confirmation' ? 'text-blue-600' : 'text-gray-400'}`}>
          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
            currentStep === 'confirmation' ? 'bg-blue-600 text-white' : 'bg-gray-300'
          }`}>
            3
          </div>
          <span className="ml-2 font-medium">決済確認</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto">
      {renderStepIndicator()}
      
      <Card className="p-8">
        {currentStep === 'liquid' && renderLiquidSelection()}
        {currentStep === 'wallet' && renderWalletConnection()}
        {currentStep === 'confirmation' && renderPaymentConfirmation()}
      </Card>

      {!paymentComplete && currentStep !== 'confirmation' && (
        <div className="flex justify-between mt-6">
          <Button
            variant="outline"
            onClick={currentStep === 'liquid' ? onCancel : handlePreviousStep}
            className="flex items-center space-x-2"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>{currentStep === 'liquid' ? 'キャンセル' : '戻る'}</span>
          </Button>
          
          <Button
            onClick={handleNextStep}
            disabled={
              (currentStep === 'liquid' && selectedAmount === 0) ||
              (currentStep === 'wallet' && (!walletNumber || !walletPassword))
            }
            className="flex items-center space-x-2"
          >
            <span>次へ</span>
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      )}

      {/* Confirmation Modal */}
      <Modal
        isOpen={showConfirmModal}
        onClose={() => setShowConfirmModal(false)}
        title="決済確認"
        size="md"
      >
        <div className="space-y-4">
          <div className="flex items-center space-x-3 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <AlertCircle className="h-6 w-6 text-yellow-600" />
            <div>
              <p className="font-medium text-yellow-800">本当に決済を実行しますか？</p>
              <p className="text-sm text-yellow-700">
                {formatCurrency(selectedAmount)}の決済を実行します。この操作は取り消せません。
              </p>
            </div>
          </div>
          
          <div className="flex space-x-3">
            <Button
              variant="outline"
              onClick={() => setShowConfirmModal(false)}
              className="flex-1"
            >
              キャンセル
            </Button>
            <Button
              onClick={handleFinalConfirmation}
              className="flex-1 bg-red-600 hover:bg-red-700"
            >
              確認して決済
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};