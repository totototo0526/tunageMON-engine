import React, { useState, useEffect } from 'react';

export default function SubscriptionCalculator() {
  const [replaceCycle, setReplaceCycle] = useState<number>(5); // 年
  const [cpa, setCpa] = useState<number>(30); // 万円
  const [subscriptionPrice, setSubscriptionPrice] = useState<number>(3); // 万円/月
  const [customerCount, setCustomerCount] = useState<number>(100); // 社

  const [displayCost, setDisplayCost] = useState<number>(0);
  const [displayProfit, setDisplayProfit] = useState<number>(0);

  // 計算
  // 売り切りモデル維持のための年間必要新規獲得コスト（既存顧客と同数を維持するために毎年必要な獲得数×CPA）
  const annualMaintenanceCost = (customerCount / replaceCycle) * (cpa * 10000);
  
  // ストック型（保守・IoTサブスク）に転換した場合の年間ベース収益
  const annualStockProfit = subscriptionPrice * 10000 * 12 * customerCount;

  useEffect(() => {
    const duration = 500;
    const steps = 20;
    const stepTime = Math.abs(Math.floor(duration / steps));
    let currentStep = 0;
    const startCost = displayCost;
    const startProfit = displayProfit;
    const costDiff = annualMaintenanceCost - startCost;
    const profitDiff = annualStockProfit - startProfit;

    const timer = setInterval(() => {
      currentStep++;
      setDisplayCost(startCost + (costDiff * (currentStep / steps)));
      setDisplayProfit(startProfit + (profitDiff * (currentStep / steps)));
      if (currentStep >= steps) {
        clearInterval(timer);
        setDisplayCost(annualMaintenanceCost);
        setDisplayProfit(annualStockProfit);
      }
    }, stepTime);
    return () => clearInterval(timer);
  }, [annualMaintenanceCost, annualStockProfit]);

  const formatCurrency = (value: number) => Math.floor(value).toLocaleString();

  return (
    <div className="w-full max-w-4xl mx-auto p-4 sm:p-8">
      <div className="bg-white/70 backdrop-blur-xl border border-white/50 shadow-2xl rounded-3xl overflow-hidden relative">
        <div className="bg-gradient-to-r from-purple-900 to-fuchsia-800 p-8 sm:p-10 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-purple-500/20 blur-3xl"></div>
          <h2 className="relative z-10 text-2xl sm:text-3xl font-extrabold mb-4 tracking-tight" style={{ fontFeatureSettings: "'palt'" }}>
            ビジネスモデル変革（売り切り vs ストック型）
          </h2>
          <p className="relative z-10 text-purple-200 text-sm sm:text-base opacity-90 leading-relaxed">
            「来月もまたゼロから新規営業ですか？『売り切りモデル』の限界」<br />
            耐久財の買い替えサイクルと新規獲得コストから、現状の「新規依存コスト」と「サブスク化した場合の安定収益」を比較します。
          </p>
        </div>

        <div className="p-8 sm:p-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <label className="block text-sm font-bold text-slate-700">商材の買い替えサイクル</label>
                <span className="text-xl font-black text-purple-900">{replaceCycle} <span className="text-sm font-bold text-slate-500">年</span></span>
              </div>
              <input type="range" min="1" max="20" step="1" value={replaceCycle} onChange={(e) => setReplaceCycle(Number(e.target.value))} className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-purple-600" />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <label className="block text-sm font-bold text-slate-700">新規1社あたりの獲得コスト(CPA)</label>
                <span className="text-xl font-black text-purple-900">{cpa} <span className="text-sm font-bold text-slate-500">万円</span></span>
              </div>
              <input type="range" min="5" max="200" step="5" value={cpa} onChange={(e) => setCpa(Number(e.target.value))} className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-purple-600" />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <label className="block text-sm font-bold text-slate-700">既存顧客数</label>
                <span className="text-xl font-black text-purple-900">{customerCount} <span className="text-sm font-bold text-slate-500">社</span></span>
              </div>
              <input type="range" min="10" max="1000" step="10" value={customerCount} onChange={(e) => setCustomerCount(Number(e.target.value))} className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-purple-600" />
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <label className="block text-sm font-bold text-slate-700">想定サブスク・保守単価</label>
                <span className="text-xl font-black text-purple-900">{subscriptionPrice} <span className="text-sm font-bold text-slate-500">万円/月</span></span>
              </div>
              <input type="range" min="1" max="30" step="1" value={subscriptionPrice} onChange={(e) => setSubscriptionPrice(Number(e.target.value))} className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-purple-600" />
            </div>
          </div>

          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 shadow-inner flex flex-col justify-center space-y-6">
            
            <div>
              <p className="text-sm font-bold text-slate-500 mb-2 text-center">現状：規模維持に必要な年間コスト</p>
              <div className="text-center">
                <span className="text-3xl font-black text-rose-600">-{formatCurrency(displayCost)}</span>
                <span className="text-base font-bold text-rose-500 ml-1">円/年</span>
              </div>
              <p className="text-xs text-center text-slate-400 mt-2">（離脱を補うための新規営業費用）</p>
            </div>
            
            <div className="w-full h-px bg-slate-300"></div>

            <div>
              <p className="text-sm font-bold text-slate-500 mb-2 text-center">ストック型転換後の 年間安定収益</p>
              <div className="text-center">
                <span className="text-4xl sm:text-5xl font-black text-emerald-600">+{formatCurrency(displayProfit)}</span>
                <span className="text-xl font-bold text-emerald-500 ml-1">円/年</span>
              </div>
            </div>

            <div className="bg-purple-100 text-purple-900 p-4 rounded-xl text-center text-sm font-bold border border-purple-200 mt-4">
              ✨ 毎月ゼロから営業するのではなく、既存の {customerCount} 社から毎月確実なベース収益を得るモデルへ変革しましょう！
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
