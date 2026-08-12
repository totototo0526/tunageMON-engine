import React, { useState, useEffect } from 'react';

export default function TonosamaCalculator() {
  const [ordersPerMonth, setOrdersPerMonth] = useState<number>(300); // 件
  const [processingMinutes, setProcessingMinutes] = useState<number>(15); // 分/件
  const [hourlyWage, setHourlyWage] = useState<number>(1500); // 円/時
  const [averageOrderValue, setAverageOrderValue] = useState<number>(3000); // 円/件

  const [displayLoss, setDisplayLoss] = useState<number>(0);

  // 定数：粗利率（仮で30%とする）
  const GROSS_MARGIN_RATE = 0.3;

  // 計算
  const costPerOrder = hourlyWage * (processingMinutes / 60);
  const grossProfitPerOrder = averageOrderValue * GROSS_MARGIN_RATE;
  
  // 1件あたりの赤字額（黒字の場合は0）
  const deficitPerOrder = costPerOrder > grossProfitPerOrder ? (costPerOrder - grossProfitPerOrder) : 0;
  
  // 年間赤字額
  const annualLoss = deficitPerOrder * ordersPerMonth * 12;

  useEffect(() => {
    const duration = 500;
    const steps = 20;
    const stepTime = Math.abs(Math.floor(duration / steps));
    let currentStep = 0;
    const startValue = displayLoss;
    const endValue = annualLoss;
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
  }, [annualLoss]);

  const formatCurrency = (value: number) => Math.floor(value).toLocaleString();

  return (
    <div className="w-full max-w-4xl mx-auto p-4 sm:p-8">
      <div className="bg-white/70 backdrop-blur-xl border border-white/50 shadow-2xl rounded-3xl overflow-hidden relative">
        <div className="bg-gradient-to-r from-slate-900 to-gray-800 p-8 sm:p-10 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-slate-500/20 blur-3xl"></div>
          <h2 className="relative z-10 text-2xl sm:text-3xl font-extrabold mb-4 tracking-tight" style={{ fontFeatureSettings: "'palt'" }}>
            バックオフィスの隠れ赤字（殿様商売チェッカー）
          </h2>
          <p className="relative z-10 text-slate-300 text-sm sm:text-base opacity-90 leading-relaxed">
            「売上が上がっているのに儲からない原因は『極小ロットのタダ働き』です」<br />
            受注ごとの事務コストと粗利を比較し、見えない赤字取引の年間総額を算出します。
          </p>
        </div>

        <div className="p-8 sm:p-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <label className="block text-sm font-bold text-slate-700">月間受注件数</label>
                <span className="text-xl font-black text-slate-800">{ordersPerMonth} <span className="text-sm font-bold text-slate-500">件</span></span>
              </div>
              <input type="range" min="10" max="2000" step="10" value={ordersPerMonth} onChange={(e) => setOrdersPerMonth(Number(e.target.value))} className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-600" />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <label className="block text-sm font-bold text-slate-700">平均顧客単価</label>
                <span className="text-xl font-black text-slate-800">{formatCurrency(averageOrderValue)} <span className="text-sm font-bold text-slate-500">円/件</span></span>
              </div>
              <input type="range" min="500" max="50000" step="500" value={averageOrderValue} onChange={(e) => setAverageOrderValue(Number(e.target.value))} className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-600" />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <label className="block text-sm font-bold text-slate-700">1件あたりの事務処理時間</label>
                <span className="text-xl font-black text-slate-800">{processingMinutes} <span className="text-sm font-bold text-slate-500">分/件</span></span>
              </div>
              <input type="range" min="1" max="60" step="1" value={processingMinutes} onChange={(e) => setProcessingMinutes(Number(e.target.value))} className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-600" />
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <label className="block text-sm font-bold text-slate-700">事務担当者の時給目安</label>
                <span className="text-xl font-black text-slate-800">{formatCurrency(hourlyWage)} <span className="text-sm font-bold text-slate-500">円/時</span></span>
              </div>
              <input type="range" min="1000" max="3000" step="50" value={hourlyWage} onChange={(e) => setHourlyWage(Number(e.target.value))} className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-600" />
            </div>
          </div>

          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 shadow-inner flex flex-col justify-center space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-xl border border-slate-200 text-center">
                <p className="text-xs font-bold text-slate-500 mb-1">1件の想定粗利(30%)</p>
                <p className="text-lg font-black text-slate-700">{formatCurrency(grossProfitPerOrder)} 円</p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200 text-center">
                <p className="text-xs font-bold text-slate-500 mb-1">1件の事務人件費</p>
                <p className="text-lg font-black text-rose-600">{formatCurrency(costPerOrder)} 円</p>
              </div>
            </div>
            
            <div className="w-full h-px bg-slate-300"></div>

            <div>
              <p className="text-sm font-bold text-slate-500 mb-2 text-center">極小ロットによる 年間「赤字」総額</p>
              <div className="text-center">
                {annualLoss > 0 ? (
                  <>
                    <span className="text-5xl font-black text-rose-600">{formatCurrency(displayLoss)}</span>
                    <span className="text-xl font-bold text-rose-500 ml-1">円</span>
                  </>
                ) : (
                  <span className="text-3xl font-black text-emerald-600">赤字取引はありません！</span>
                )}
              </div>
            </div>

            {annualLoss > 0 && (
              <div className="bg-rose-100 text-rose-800 p-4 rounded-xl text-center text-sm font-bold border border-rose-200">
                ⚠️ 売れば売るほど事務コストで赤字が膨らんでいます。<br/>
                値上げ交渉か、受発注システムの導入による処理時間削減が必要です。
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
