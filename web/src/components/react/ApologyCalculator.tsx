import React, { useState, useEffect } from 'react';

export default function ApologyCalculator() {
  const [errorCount, setErrorCount] = useState<number>(5); // 件/月
  const [handleTime, setHandleTime] = useState<number>(2); // 時間/件
  const [hourlyWage, setHourlyWage] = useState<number>(3000); // 円/時
  const [apologyExpense, setApologyExpense] = useState<number>(2); // 万円/月

  const [displayCost, setDisplayCost] = useState<number>(0);

  // 計算
  const laborCostPerMonth = errorCount * handleTime * hourlyWage;
  const expensePerMonth = apologyExpense * 10000;
  
  const totalCostPerMonth = laborCostPerMonth + expensePerMonth;
  const annualCost = totalCostPerMonth * 12;

  useEffect(() => {
    const duration = 500;
    const steps = 20;
    const stepTime = Math.abs(Math.floor(duration / steps));
    let currentStep = 0;
    const startValue = displayCost;
    const endValue = annualCost;
    const difference = endValue - startValue;

    if (difference === 0) {
      setDisplayCost(endValue);
      return;
    }

    const timer = setInterval(() => {
      currentStep++;
      setDisplayCost(startValue + (difference * (currentStep / steps)));
      if (currentStep >= steps) {
        clearInterval(timer);
        setDisplayCost(endValue);
      }
    }, stepTime);
    return () => clearInterval(timer);
  }, [annualCost]);

  const formatCurrency = (value: number) => Math.floor(value).toLocaleString();

  return (
    <div className="w-full max-w-4xl mx-auto p-4 sm:p-8">
      <div className="bg-white/70 backdrop-blur-xl border border-white/50 shadow-2xl rounded-3xl overflow-hidden relative">
        <div className="bg-gradient-to-r from-orange-800 to-red-800 p-8 sm:p-10 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-orange-500/20 blur-3xl"></div>
          <h2 className="relative z-10 text-2xl sm:text-3xl font-extrabold mb-4 tracking-tight" style={{ fontFeatureSettings: "'palt'" }}>
            謝罪・ミス対応コスト（ごめんなさい計算機）
          </h2>
          <p className="relative z-10 text-orange-200 text-sm sm:text-base opacity-90 leading-relaxed">
            「御社は年間〇〇万円を『ごめんなさい』のために支払っています」<br />
            FAX見間違いなどのアナログなミスによる、対応人件費とお詫び経費の年間総額を算出します。
          </p>
        </div>

        <div className="p-8 sm:p-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <label className="block text-sm font-bold text-slate-700">月間のミス発生件数</label>
                <span className="text-xl font-black text-orange-900">{errorCount} <span className="text-sm font-bold text-slate-500">件/月</span></span>
              </div>
              <input type="range" min="1" max="50" step="1" value={errorCount} onChange={(e) => setErrorCount(Number(e.target.value))} className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-orange-600" />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <label className="block text-sm font-bold text-slate-700">1件の謝罪・リカバリにかかる時間</label>
                <span className="text-xl font-black text-orange-900">{handleTime} <span className="text-sm font-bold text-slate-500">時間</span></span>
              </div>
              <input type="range" min="0.5" max="10" step="0.5" value={handleTime} onChange={(e) => setHandleTime(Number(e.target.value))} className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-orange-600" />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <label className="block text-sm font-bold text-slate-700">対応する管理者・担当者の時給</label>
                <span className="text-xl font-black text-orange-900">{formatCurrency(hourlyWage)} <span className="text-sm font-bold text-slate-500">円</span></span>
              </div>
              <input type="range" min="1500" max="6000" step="100" value={hourlyWage} onChange={(e) => setHourlyWage(Number(e.target.value))} className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-orange-600" />
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <label className="block text-sm font-bold text-slate-700">月間のお詫び代（菓子折り・特急便代）</label>
                <span className="text-xl font-black text-orange-900">{apologyExpense} <span className="text-sm font-bold text-slate-500">万円</span></span>
              </div>
              <input type="range" min="0" max="20" step="1" value={apologyExpense} onChange={(e) => setApologyExpense(Number(e.target.value))} className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-orange-600" />
            </div>
          </div>

          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 shadow-inner flex flex-col justify-center space-y-6">
            
            <div className="text-center space-y-2">
              <p className="text-sm font-bold text-slate-500">月間の「ごめんなさい」コスト</p>
              <p className="text-2xl font-black text-slate-700">{formatCurrency(totalCostPerMonth)} 円</p>
              <p className="text-xs text-slate-400">（人件費 {formatCurrency(laborCostPerMonth)}円 ＋ 経費 {formatCurrency(expensePerMonth)}円）</p>
            </div>
            
            <div className="w-full h-px bg-slate-300"></div>

            <div>
              <p className="text-sm font-bold text-slate-500 mb-2 text-center">年間 謝罪コスト総額</p>
              <div className="text-center">
                <span className="text-4xl sm:text-5xl font-black text-rose-600">{formatCurrency(displayCost)}</span>
                <span className="text-xl font-bold text-rose-500 ml-1">円</span>
              </div>
            </div>

            <div className="bg-orange-100 text-orange-900 p-4 rounded-xl text-center text-sm font-bold border border-orange-200 mt-2">
              ⚠️ これは利益を1円も生まない完全な「マイナスコスト」です。<br/>
              システム統合によりヒューマンエラーを撲滅しましょう。
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
