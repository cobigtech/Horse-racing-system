import { useState } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/home/Home';
import { JockeySelection } from './components/selection/JockeySelection';
import { HorseSelection } from './components/selection/HorseSelection';
import { TicketGeneration } from './components/payment/TicketGeneration';
import { ResultsDisplay } from './components/results/ResultsDisplay';
import { SystemInfo } from './components/info/SystemInfo';
import { CashoutProcess } from './components/cashout/CashoutProcess';
import { useSelection } from './hooks/useSelection';
import { Button } from './components/common/Button';

type ViewType = 'home' | 'selection' | 'payment' | 'ticket' | 'results' | 'info' | 'cashout';

function App() {
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [currentStep, setCurrentStep] = useState<'jockey' | 'horse' | 'payment'>('jockey');
  const [generatedTicketId, setGeneratedTicketId] = useState<string>('');
  const { selectedJockey, selectedHorse, clearSelection } = useSelection();

  const handleStartClick = () => {
    setCurrentView('selection');
  };

  const handleSysteminfo = () => {
    setCurrentView('info');
  } 

  const handleNavigation = (view: ViewType) => {
    setCurrentView(view);
  };

  const handlePaymentComplete = (ticketId: string) => {
    setGeneratedTicketId(ticketId);
    setCurrentView('ticket');
  };

  const handleSendTicket = () => {
    alert('チケットが正常に送信されました！');
    clearSelection();
    setCurrentView('home');
  };

  const handleCashoutComplete = () => {
    alert('決済が正常に完了しました！');
    setCurrentView('home');
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case 'home':
        return <Hero onStartClick={handleStartClick} onStartinfo={handleSysteminfo} />;
      
      case 'selection':
        return (
          <div className="container mx-auto px-4 py-8">
            <div className="max-w-6xl mx-auto">
              {/* Progress Steps */}
              <div className="flex justify-center mb-8">
                <div className="flex items-center space-x-4">
                  <div className={`flex items-center ${currentStep === 'jockey' ? 'text-blue-600' : selectedJockey ? 'text-green-600' : 'text-gray-400'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep === 'jockey' ? 'bg-blue-600 text-white' : selectedJockey ? 'bg-green-600 text-white' : 'bg-gray-300'}`}>
                      1
                    </div>
                    <span className="ml-2 font-medium">騎手選択</span>
                  </div>
                  <div className="w-8 h-0.5 bg-gray-300"></div>
                  <div className={`flex items-center ${currentStep === 'horse' ? 'text-blue-600' : selectedHorse ? 'text-green-600' : 'text-gray-400'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep === 'horse' ? 'bg-blue-600 text-white' : selectedHorse ? 'bg-green-600 text-white' : 'bg-gray-300'}`}>
                      2
                    </div>
                    <span className="ml-2 font-medium">馬選択</span>
                  </div>
                  <div className="w-8 h-0.5 bg-gray-300"></div>
                  <div className={`flex items-center ${currentStep === 'payment' ? 'text-blue-600' : 'text-gray-400'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep === 'payment' ? 'bg-blue-600 text-white' : 'bg-gray-300'}`}>
                      3
                    </div>
                    <span className="ml-2 font-medium">支払い</span>
                  </div>
                </div>
              </div>

              {/* Step Content */}
              {currentStep === 'jockey' && (
                <JockeySelection onNext={() => setCurrentStep('horse')} />
              )}
              {currentStep === 'horse' && (
                <HorseSelection onNext={() => setCurrentStep('payment')}/>)}
              {currentStep === 'payment' && <CashoutProcess onComplete={handlePaymentComplete} />}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8">
                <Button
                  variant="outline"
                  onClick={() => {
                    if (currentStep === 'horse') setCurrentStep('jockey');
                    else if (currentStep === 'payment') setCurrentStep('horse');
                    else setCurrentView('home');
                  }}
                >
                  戻る
                </Button>
              </div>
            </div>
          </div>
        );
      
      case 'ticket':
        return (
          <div className="container mx-auto px-4 py-8">
            <div className="max-w-2xl mx-auto">
              <TicketGeneration
                ticketId={generatedTicketId}
                onSendTicket={handleSendTicket}
              />
            </div>
          </div>
        );
      
      case 'cashout':
        return (
          <div className="container mx-auto px-4 py-8">
            <CashoutProcess
              onComplete={handleCashoutComplete}
              onCancel={() => setCurrentView('home')}
            />
          </div>
        );
      
      case 'results':
        return (
          <div className="container mx-auto px-4 py-8">
            <div className="max-w-4xl mx-auto">
              <ResultsDisplay />
            </div>
          </div>
        );
      
      case 'info':
        return (
          <div className="container mx-auto px-4 py-8">
            <div className="max-w-4xl mx-auto">
              <SystemInfo />
            </div>
          </div>
        );
      
      default:
        return <Hero onStartClick={handleStartClick} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Header />
      
      {/* Navigation Bar */}
      {currentView !== 'home' && (
        <nav className="bg-white shadow-sm border-b">
          <div className="container mx-auto px-4 py-3">
            <div className="flex space-x-6">
              <button
                onClick={() => handleNavigation('home')}
                className={`text-sm font-medium transition-colors ${
                  currentView === 'home' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                ホーム
              </button>
              <button
                onClick={() => handleNavigation('selection')}
                className={`text-sm font-medium transition-colors ${
                  currentView === 'selection' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                宝くじ購入
              </button>
              <button
                onClick={() => handleNavigation('cashout')}
                className={`text-sm font-medium transition-colors ${
                  currentView === 'cashout' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                キャッシュアウト
              </button>
              <button
                onClick={() => handleNavigation('results')}
                className={`text-sm font-medium transition-colors ${
                  currentView === 'results' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                結果確認
              </button>
              <button
                onClick={() => handleNavigation('info')}
                className={`text-sm font-medium transition-colors ${
                  currentView === 'info' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                システム情報
              </button>
            </div>
          </div>
        </nav>
      )}

      <main className="flex-1">
        {renderCurrentView()}
      </main>
      
      <Footer />
    </div>
  );
}

export default App;