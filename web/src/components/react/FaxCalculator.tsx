import React, { useState, useEffect } from 'react';

export default function FaxCalculator() {
  const [ordersPerMonth, setOrdersPerMonth] = useState<number>(500); // 件
  const [analogRate, setAnalogRate] = useState<number>(80); // %
  const [averageOrderValue, setAverageOrderValue] = useState<number>(10); // 万円
  const [buyerYouthLevel, setBuyerYouthLevel] = useState<number>(3); // 1-5

  const [displayLoss, setDisplayLoss] = useState<number>(0);

  // 計算
  // 若手化レベルに応じた基礎カゴ落ちリスク (1: 2%, 2: 4%, 3: 6%, 4: 8%, 5: 10%)
  const baseRisk = buyerYouthLevel * 0.02;
  // アナログ割合が高いほどリスクが顕在化する
  const actualDropRate = baseRisk * (analogRate / 100);
  
  // 月間の隠れ失注件数
  const hiddenLostOrders = ordersPerMonth * actualDropRate;
  
  // 年間機会損失額
  const annualOpportunityLoss = hiddenLostOrders * (averageOrderValue * 10000) * 12;

  useEffect(() => {
    const duration = 500;
    const steps = 20;
    const stepTime = Math.abs(Math.floor(duration / steps));
    let currentStep = 0;
    const startValue = displayLoss;
    const endValue = annualOpportunityLoss;
    const difference = endValue - startValue;

    if (difference === 0) {
      setDisplayLoss(endValue);
      return;
    }

    const timer = setInterval(() => {
      currentStep++;
      setDisplayLoss(startValue + (difference * (currentStep / steps)));
      if (currentStep >= steps) {
        clearInterval(timer);
        setDisplayLoss(endValue);
      }
    }, stepTime);
    return () => clearInterval(timer);
  }, [annualOpportunityLoss]);

  const formatCurrency = (value: number) => Math.floor(value).toLocaleString();

  const getYouthLevelLabel = (level: number) => {
    const labels = ["ベテラン層が多い", "ややベテラン寄り", "半々くらい", "20-30代が増えてきた", "スマホ世代が中心"];
    return labels[level - 1];
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 sm:p-8">
      <div className="bg-white/70 backdrop-blur-xl border border-white/50 shadow-2xl rounded-3xl overflow-hidden relative">
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-8 sm:p-10 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-blue-400/30 blur-3xl"></div>
          <h2 className="relative z-10 text-2xl sm:text-3xl font-extrabold mb-4 tracking-tight" style={{ fontFeatureSettings: "'palt'" }}>
            若手バイヤーの「FAX離れ」失注額
          </h2>
          <p className="relative z-10 text-blue-100 text-sm sm:text-base opacity-90 leading-relaxed">
            「スマホ世代のバイヤーは『FAX発注が面倒』という理由だけで他社へ乗り換えます」<br />
            アナログ受注の割合とバイヤーの若手化から、見えない「カゴ落ち（サイレント失注）」の機会損失額を算出します。
          </p>
        </div>

        <div className="p-8 sm:p-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <label className="block text-sm font-bold text-slate-700">月間受注件数</label>
                <span className="text-xl font-black text-blue-900">{ordersPerMonth} <span className="text-sm font-bold text-slate-500">件</span></span>
              </div>
              <input type="range" min="50" max="5000" step="50" value={ordersPerMonth} onChange={(e) => setOrdersPerMonth(Number(e.target.value))} className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600" />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <label className="block text-sm font-bold text-slate-700">FAX・電話などアナログ受注の割合</label>
                <span className="text-xl font-black text-blue-900">{analogRate} <span className="text-sm font-bold text-slate-500">%</span></span>
              </div>
              <input type="range" min="0" max="100" step="5" value={analogRate} onChange={(e) => setAnalogRate(Number(e.target.value))} className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600" />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <label className="block text-sm font-bold text-slate-700">取引先バイヤーの年齢層</label>
                <span className="text-sm font-black text-blue-700">{getYouthLevelLabel(buyerYouthLevel)}</span>
              </div>
              <input type="range" min="1" max="5" step="1" value={buyerYouthLevel} onChange={(e) => setBuyerYouthLevel(Number(e.target.value))} className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600" />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <label className="block text-sm font-bold text-slate-700">平均顧客単価</label>
                <span className="text-xl font-black text-blue-900">{averageOrderValue} <span className="text-sm font-bold text-slate-500">万円</span></span>
              </div>
              <input type="range" min="1" max="200" step="1" value={averageOrderValue} onChange={(e) => setAverageOrderValue(Number(e.target.value))} className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600" />
            </div>
          </div>

          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 shadow-inner flex flex-col justify-center space-y-6">
            
            <div className="text-center space-y-2">
              <p className="text-sm font-bold text-slate-500">推定される「カゴ落ち（サイレント失注）」率</p>
              <p className="text-3xl font-black text-rose-500">{(actualDropRate * 100).toFixed(1)} %</p>
              <p className="text-xs text-slate-400">（月間約 {Math.round(hiddenLostOrders)} 件の注文が面倒さにより他社へ流出）</p>
            </div>
            
            <div className="w-full h-px bg-slate-300"></div>

            <div>
              <p className="text-sm font-bold text-slate-500 mb-2 text-center">年間 機会損失額（売上）</p>
              <div className="text-center">
                <span className="text-4xl sm:text-5xl font-black text-rose-600">{formatCurrency(displayLoss)}</span>
                <span className="text-xl font-bold text-rose-500 ml-1">円</span>
              </div>
            </div>

            <div className="bg-blue-100 text-blue-900 p-4 rounded-xl text-center text-sm font-bold border border-blue-200 mt-2">
              💡 B2B ECポータル（Web受注）へ移行するだけで、この見えない損失をゼロにし、売上を底上げできます。
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
