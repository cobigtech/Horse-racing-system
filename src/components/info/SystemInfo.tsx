import React from 'react';
import { BookOpen, Info, Shield, TrendingUp } from 'lucide-react';
import { Card } from '../common/Card';

export const SystemInfo: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <BookOpen className="h-16 w-16 text-blue-500 mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-gray-900 mb-2">システム情報</h2>
        <p className="text-gray-600">競馬宝くじのルールと仕組みをご説明します</p>
      </div>

      {/* How It Works */}
      <Card className="p-6">
        <div className="flex items-center mb-4">
          <Info className="h-6 w-6 text-blue-500 mr-2" />
          <h3 className="text-xl font-bold text-gray-900">仕組み</h3>
        </div>
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
              1
            </div>
            <div>
              <h4 className="font-semibold">騎手と馬を選択</h4>
              <p className="text-sm text-gray-600">
                8人の騎手と8頭の馬から、それぞれ1つずつ選択します
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
              2
            </div>
            <div>
              <h4 className="font-semibold">賭け金額を決定</h4>
              <p className="text-sm text-gray-600">
                1,000円から50,000円まで、お好みの金額を選択できます
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
              3
            </div>
            <div>
              <h4 className="font-semibold">宝くじを購入</h4>
              <p className="text-sm text-gray-600">
                支払いを完了すると、デジタル宝くじが発行されます
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
              4
            </div>
            <div>
              <h4 className="font-semibold">結果発表</h4>
              <p className="text-sm text-gray-600">
                レース結果に基づいて、当選者が決定されます
              </p>
            </div>
          </div>
        </div>
      </Card>

      {/* Rules */}
      <Card className="p-6">
        <div className="flex items-center mb-4">
          <Shield className="h-6 w-6 text-green-500 mr-2" />
          <h3 className="text-xl font-bold text-gray-900">ルール</h3>
        </div>
        <div className="space-y-3">
          <div>
            <h4 className="font-semibold text-gray-800">当選条件</h4>
            <p className="text-sm text-gray-600">
              選択した騎手と馬のペアが実際のレースで1位になった場合、当選となります
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800">配当率</h4>
            <p className="text-sm text-gray-600">
              配当率は人気度と過去の成績により決定されます（2倍〜10倍）
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800">払い戻し</h4>
            <p className="text-sm text-gray-600">
              当選した場合、賭け金額×配当率が自動的にウォレットに入金されます
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800">有効期限</h4>
            <p className="text-sm text-gray-600">
              払い戻し請求は結果発表から30日以内に行う必要があります
            </p>
          </div>
        </div>
      </Card>

      {/* Statistics */}
      <Card className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
        <div className="flex items-center mb-4">
          <TrendingUp className="h-6 w-6 text-purple-500 mr-2" />
          <h3 className="text-xl font-bold text-gray-900">統計情報</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">25,847</div>
            <div className="text-sm text-gray-600">総参加者数</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">¥1,247,832</div>
            <div className="text-sm text-gray-600">今月の総配当</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">23.4%</div>
            <div className="text-sm text-gray-600">平均当選率</div>
          </div>
        </div>
      </Card>

      {/* Safety */}
      <Card className="p-6 bg-gradient-to-r from-gray-50 to-slate-50 border-gray-200">
        <div className="flex items-center mb-4">
          <Shield className="h-6 w-6 text-gray-500 mr-2" />
          <h3 className="text-xl font-bold text-gray-900">安全性</h3>
        </div>
        <div className="space-y-3">
          <div className="flex items-start space-x-3">
            <div className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
              ✓
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">SSL暗号化</h4>
              <p className="text-sm text-gray-600">
                すべての取引は256bit SSL暗号化により保護されています
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
              ✓
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">ライセンス</h4>
              <p className="text-sm text-gray-600">
                日本国内の適切なライセンスを取得して運営しています
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
              ✓
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">責任あるギャンブル</h4>
              <p className="text-sm text-gray-600">
                適切な賭け金管理と制限機能を提供しています
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};