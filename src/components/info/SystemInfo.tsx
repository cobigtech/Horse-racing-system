import React from "react";
import { Award, BookOpen, Crown, Info, Shield } from "lucide-react";
import { Card } from "../common/Card";

export const SystemInfo: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <BookOpen className="h-16 w-16 text-blue-500 mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-gray-900 mb-2">システム情報</h2>
        <p className="text-gray-600">
          競馬宝くじのルールと仕組みをご説明します
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
          <Shield className="h-8 w-8 text-yellow-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">安全・安心</h3>
          <p className="text-gray-300 text-sm">
            最高レベルのセキュリティで、あなたの資金と個人情報を保護します。
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
          <Award className="h-8 w-8 text-yellow-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">高配当</h3>
          <p className="text-gray-300 text-sm">
            業界最高水準の配当率で、大きな勝利のチャンスを提供します。
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
          <Crown className="h-8 w-8 text-yellow-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">プレミアム体験</h3>
          <p className="text-gray-300 text-sm">
            最新の技術と美しいデザインで、最高のベッティング体験を。
          </p>
        </div>
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
    </div>
  );
};
