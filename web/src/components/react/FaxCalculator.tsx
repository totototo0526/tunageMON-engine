import React, { useState, useEffect } from 'react';

export default function FaxCalculator() {
  // 1. 現状の入力項目
  const [ordersPerMonth, setOrdersPerMonth] = useState<number>(500); // 件
  const [currentInputMinutes, setCurrentInputMinutes] = useState<number>(5.0); // 分
  const [hourlyWage, setHourlyWage] = useState<number>(1500); // 円（会社負担込）

  // 2. 改善シミュレーション入力項目
  const [improvedInputMinutes, setImprovedInputMinutes] = useState<number>(1.0); // 分

  // 3. アニメーション用表示値
  const [displayCurrentAnnualCost, setDisplayCurrentAnnualCost] = useState<number>(0);
  const [displayImprovedAnnualCost, setDisplayImprovedAnnualCost] = useState<number>(0);
  const [displayAnnualSavings, setDisplayAnnualSavings] = useState<number>(0);

  // 定数
  const MONTHS_PER_YEAR = 12;

  // 計算ロジック
  // 現状のコスト
  const currentAnnualHours = (ordersPerMonth * MONTHS_PER_YEAR) * (currentInputMinutes / 60);
  const currentAnnualCost = currentAnnualHours * hourlyWage;

  // 改善後のコスト
  const improvedAnnualHours = (ordersPerMonth * MONTHS_PER_YEAR) * (improvedInputMinutes / 60);
  const improvedAnnualCost = improvedAnnualHours * hourlyWage;

  // 生み出される利益（差額）
  const annualSavings = currentAnnualCost - improvedAnnualCost;

  // 改善目標スライダーが現状より遅くならないようにする制約
  useEffect(() => {
    if (improvedInputMinutes > currentInputMinutes) {
      setImprovedInputMinutes(currentInputMinutes);
    }
  }, [currentInputMinutes, improvedInputMinutes]);

  useEffect(() => {
    const duration = 800; // アニメーション時間
    const steps = 20;
    const stepTime = Math.abs(Math.floor(duration / steps));
    let currentStep = 0;
    
    const startCost = displayCurrentAnnualCost;
    const diffCost = currentAnnualCost - startCost;

    const startImpCost = displayImprovedAnnualCost;
    const diffImpCost = improvedAnnualCost - startImpCost;

    const startSavings = displayAnnualSavings;
    const diffSavings = annualSavings - startSavings;

    const timer = setInterval(() => {
      currentStep++;
      setDisplayCurrentAnnualCost(startCost + (diffCost * (currentStep / steps)));
      setDisplayImprovedAnnualCost(startImpCost + (diffImpCost * (currentStep / steps)));
      setDisplayAnnualSavings(startSavings + (diffSavings * (currentStep / steps)));
      
      if (currentStep >= steps) {
        clearInterval(timer);
        setDisplayCurrentAnnualCost(currentAnnualCost);
        setDisplayImprovedAnnualCost(improvedAnnualCost);
        setDisplayAnnualSavings(annualSavings);
      }
    }, stepTime);
    return () => clearInterval(timer);
  }, [currentAnnualCost, improvedAnnualCost, annualSavings]);

  const formatCurrency = (value: number) => Math.floor(value).toLocaleString();

  return (
    <div className="w-full max-w-5xl mx-auto p-4 sm:p-8">
      <div className="bg-white/70 backdrop-blur-xl border border-white/50 shadow-2xl rounded-3xl overflow-hidden relative">
        <div className="bg-gradient-to-r from-emerald-800 to-teal-700 p-8 sm:p-10 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-emerald-400/20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-48 h-48 rounded-full bg-teal-400/20 blur-3xl"></div>
          <h2 className="relative z-10 text-2xl sm:text-3xl font-extrabold mb-4 tracking-tight leading-snug" style={{ fontFeatureSettings: "'palt'" }}>
            「脱・人海戦術」効果シミュレーター
          </h2>
          <p className="relative z-10 text-emerald-50 text-sm sm:text-base opacity-90 leading-relaxed max-w-3xl">
            「取引先がFAXだからペーパーレスは無理」と諦めていませんか？<br className="hidden sm:block"/>
            取引先への要求は不要です。社内の**「手打ち入力」**のスピードをわずか数分・数十秒縮めるだけで、新人1人を採用するよりもはるかに大きな利益（コスト削減）を生み出せます。
          </p>
        </div>

        <div className="p-8 sm:p-10 flex flex-col lg:flex-row gap-10">
          
          {/* 入力エリア */}
          <div className="w-full lg:w-1/2 flex flex-col space-y-8">
            <h3 className="text-lg font-black text-slate-800 border-b-2 border-teal-500 pb-2 inline-block self-start">
              STEP 1: 現在の状況
            </h3>
            
            <div className="space-y-6 bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <div className="space-y-3">
                <div className="flex justify-between items-end">
                  <label className="block text-sm font-bold text-slate-700">月間のアナログ受注件数（FAX/電話）</label>
                  <span className="text-xl font-black text-emerald-700">{ordersPerMonth.toLocaleString()} <span className="text-sm font-bold text-slate-500">件/月</span></span>
                </div>
                <input type="range" min="50" max="10000" step="50" value={ordersPerMonth} onChange={(e) => setOrdersPerMonth(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600" />
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-end">
                  <label className="block text-sm font-bold text-slate-700">1件の「手打ち入力・確認」にかかる時間</label>
                  <span className="text-xl font-black text-emerald-700">{currentInputMinutes.toFixed(1)} <span className="text-sm font-bold text-slate-500">分</span></span>
                </div>
                <input type="range" min="1" max="15" step="0.5" value={currentInputMinutes} onChange={(e) => setCurrentInputMinutes(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600" />
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-end">
                  <label className="block text-sm font-bold text-slate-700">事務スタッフの平均時給（会社負担込）</label>
                  <span className="text-xl font-black text-emerald-700">{hourlyWage.toLocaleString()} <span className="text-sm font-bold text-slate-500">円</span></span>
                </div>
                <input type="range" min="1000" max="3000" step="50" value={hourlyWage} onChange={(e) => setHourlyWage(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600" />
              </div>
            </div>

            <h3 className="text-lg font-black text-slate-800 border-b-2 border-rose-500 pb-2 inline-block self-start mt-4">
              STEP 2: 改善シミュレーション
            </h3>

            <div className="space-y-4 bg-rose-50 p-6 rounded-2xl border border-rose-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-2 text-rose-200 opacity-50">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
              </div>
              <p className="text-sm font-bold text-rose-800 mb-2 relative z-10">
                システム化やAI-OCRを導入して、<br/>1件あたりの処理時間をどこまで縮められますか？
              </p>
              
              <div className="flex justify-between items-end relative z-10">
                <label className="block text-sm font-bold text-rose-700">改善後の処理時間（目標）</label>
                <span className="text-3xl font-black text-rose-600">{improvedInputMinutes.toFixed(1)} <span className="text-sm font-bold text-rose-500">分</span></span>
              </div>
              <input type="range" min="0.1" max={currentInputMinutes} step="0.1" value={improvedInputMinutes} onChange={(e) => setImprovedInputMinutes(Number(e.target.value))} className="w-full h-3 bg-rose-200 rounded-lg appearance-none cursor-pointer accent-rose-600 relative z-10" />
              
              <div className="flex justify-between text-xs font-bold text-rose-400 mt-1 relative z-10">
                <span>超効率化 (0.1分)</span>
                <span>現状維持 ({currentInputMinutes.toFixed(1)}分)</span>
              </div>
            </div>

          </div>

          {/* 出力エリア */}
          <div className="w-full lg:w-1/2 flex flex-col space-y-6">
            
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <p className="text-sm font-bold text-slate-500">現在の年間入力コスト（赤字）</p>
                <span className="text-2xl font-black text-slate-400 line-through">{formatCurrency(displayCurrentAnnualCost)} <span className="text-sm font-bold">円</span></span>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-sm font-bold text-teal-600">改善後の年間コスト</p>
                <span className="text-3xl font-black text-teal-600">{formatCurrency(displayImprovedAnnualCost)} <span className="text-sm font-bold">円</span></span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-8 shadow-xl text-center text-white relative overflow-hidden transform transition-all">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-yellow-300 opacity-20 rounded-full blur-2xl"></div>
              
              <p className="text-sm font-bold text-emerald-100 mb-2">手入力の効率化が生み出す「年間利益」</p>
              
              <div className="flex items-baseline justify-center">
                <span className="text-6xl sm:text-7xl font-black text-white tracking-tighter drop-shadow-md" style={{ fontFeatureSettings: "'tnum'" }}>
                  {formatCurrency(displayAnnualSavings)}
                </span>
                <span className="text-xl font-bold text-emerald-200 ml-2">円</span>
              </div>
              
              <p className="text-sm font-bold text-emerald-50 mt-4 bg-black/10 inline-block px-4 py-2 rounded-full">
                1件あたり わずか <span className="text-yellow-300">{(currentInputMinutes - improvedInputMinutes).toFixed(1)}分</span> 縮めるだけでこれだけの効果！
              </p>
            </div>

            {/* CTA */}
            {annualSavings > 1000000 && (
              <div className="mt-4 bg-slate-800 rounded-2xl p-6 text-center relative overflow-hidden group">
                <h4 className="text-lg font-black text-white mb-2">新人採用の前に、システム化を！</h4>
                
                <p className="text-sm text-slate-300 font-medium mb-5 leading-relaxed">
                  人を増やして人海戦術で乗り切るよりも、社内の手打ちを自動化する方が圧倒的に高コスパです。取引先はFAXのままでOK！社内だけこっそりDXする事例集を用意しました。
                </p>
                
                <div className="flex flex-col gap-3 w-full max-w-sm mx-auto mt-6">

                  <a href="/slides/19_presentation.pdf" className="inline-flex w-full text-[14px] sm:text-base !text-white !no-underline items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:-translate-y-1">
                    FAX受注の自動化・事例集をDL
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                  </a>
                  
  <a href="https://www.k-sp.co.jp/admin/std/contact/new" className="inline-flex w-full items-center justify-center gap-2 bg-slate-700 hover:bg-slate-600 !text-white !no-underline border border-slate-500 font-bold py-3 px-6 rounded-full transition-all">
    無料で相談する
  </a>
</div>
              </div>
            )}

          </div>

        </div>
      </div>
    </div>
  );
}
