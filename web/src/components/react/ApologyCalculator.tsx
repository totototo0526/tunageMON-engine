import React, { useState, useEffect } from 'react';

export default function ApologyCalculator() {
  // STEP 1: 基本データ
  const [complaintsPerMonth, setComplaintsPerMonth] = useState<number>(3); // 件/月 (表面化したクレーム)
  const [apologyTime, setApologyTime] = useState<number>(3); // 時間/件
  const [apologyExpense, setApologyExpense] = useState<number>(5000); // 円/件 (菓子折り等)
  const [hourlyWage, setHourlyWage] = useState<number>(1500); // 円/時

  // STEP 2: 海面下データ
  const [averageLtv, setAverageLtv] = useState<number>(1000000); // 円/年 (顧客1社の年間売上)
  const [silentChurnMultiplier, setSilentChurnMultiplier] = useState<number>(1); // クレーム1件に対するサイレント離反数

  // アニメーション用
  const [displayVisibleCost, setDisplayVisibleCost] = useState<number>(0);
  const [displayHiddenLaborCost, setDisplayHiddenLaborCost] = useState<number>(0);
  const [displayHiddenLtvLoss, setDisplayHiddenLtvLoss] = useState<number>(0);

  // --- 計算ロジック ---
  
  // 1. 表面化している謝罪コスト（氷山の一角）
  const visibleLaborCostPerMonth = complaintsPerMonth * apologyTime * hourlyWage;
  const visibleExpensePerMonth = complaintsPerMonth * apologyExpense;
  const totalVisibleCostPerMonth = visibleLaborCostPerMonth + visibleExpensePerMonth;
  const annualVisibleCost = totalVisibleCostPerMonth * 12;

  // 2. 隠れた尻拭いコスト（ハインリッヒの法則: 1件の重大クレームに対し29件の内部ミス）
  // ここでは重大クレーム＝顧客からのクレームと定義
  const internalMistakesPerMonth = complaintsPerMonth * 29;
  const internalFixTimePerMistake = 0.5; // 内部ミスの修正に30分かかると仮定
  const monthlyHiddenLaborCost = internalMistakesPerMonth * internalFixTimePerMistake * hourlyWage;
  const annualHiddenLaborCost = monthlyHiddenLaborCost * 12;

  // 3. サイレント離反による売上喪失（LTV喪失）
  const churnedCustomersPerMonth = complaintsPerMonth * silentChurnMultiplier;
  const annualHiddenLtvLoss = churnedCustomersPerMonth * averageLtv * 12;

  // 総合計
  const totalHiddenDamage = annualHiddenLaborCost + annualHiddenLtvLoss;

  useEffect(() => {
    const duration = 1200; // じわじわ上がる絶望感
    const steps = 30;
    const stepTime = Math.abs(Math.floor(duration / steps));
    let currentStep = 0;
    
    const startVisible = displayVisibleCost;
    const diffVisible = annualVisibleCost - startVisible;

    const startHiddenLabor = displayHiddenLaborCost;
    const diffHiddenLabor = annualHiddenLaborCost - startHiddenLabor;

    const startHiddenLtv = displayHiddenLtvLoss;
    const diffHiddenLtv = annualHiddenLtvLoss - startHiddenLtv;

    const timer = setInterval(() => {
      currentStep++;
      setDisplayVisibleCost(startVisible + (diffVisible * (currentStep / steps)));
      setDisplayHiddenLaborCost(startHiddenLabor + (diffHiddenLabor * (currentStep / steps)));
      setDisplayHiddenLtvLoss(startHiddenLtv + (diffHiddenLtv * (currentStep / steps)));
      
      if (currentStep >= steps) {
        clearInterval(timer);
        setDisplayVisibleCost(annualVisibleCost);
        setDisplayHiddenLaborCost(annualHiddenLaborCost);
        setDisplayHiddenLtvLoss(annualHiddenLtvLoss);
      }
    }, stepTime);
    return () => clearInterval(timer);
  }, [annualVisibleCost, annualHiddenLaborCost, annualHiddenLtvLoss]);

  const formatCurrency = (value: number) => Math.floor(value).toLocaleString();
  const formatTime = (value: number) => Math.floor(value).toLocaleString();

  return (
    <div className="w-full max-w-5xl mx-auto p-4 sm:p-8">
      <div className="bg-white/70 backdrop-blur-xl border border-white/50 shadow-2xl rounded-3xl overflow-hidden relative">
        <div className="bg-gradient-to-r from-sky-900 to-blue-900 p-8 sm:p-10 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-cyan-500/20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-48 h-48 rounded-full bg-blue-500/20 blur-3xl"></div>
          <h2 className="relative z-10 text-2xl sm:text-3xl font-extrabold mb-4 tracking-tight leading-snug" style={{ fontFeatureSettings: "'palt'" }}>
            謝罪・ミス対応コスト（エラーの氷山モデル）
          </h2>
          <p className="relative z-10 text-sky-100 text-sm sm:text-base opacity-90 leading-relaxed max-w-3xl">
            顧客からのクレーム対応にかかるお金は、単なる「氷山の一角」です。<br className="hidden sm:block"/>
            その海面下には、「表面化しなかった内部の尻拭いコスト」と「無言で去っていく顧客の売上喪失」という巨大な氷山が隠れています。
          </p>
        </div>

        <div className="p-8 sm:p-10 flex flex-col lg:flex-row gap-10">
          
          {/* 入力エリア */}
          <div className="w-full lg:w-5/12 flex flex-col space-y-8">
            
            <div className="space-y-6">
              <h3 className="text-lg font-black text-slate-800 border-b-2 border-sky-500 pb-2 inline-block">
                STEP 1: 表面上のクレームデータ
              </h3>
              
              <div className="space-y-4 bg-slate-50 p-5 rounded-2xl border border-slate-200">
                <div className="space-y-2">
                  <div className="flex justify-between items-end">
                    <label className="block text-sm font-bold text-slate-700">月間のクレーム・謝罪件数</label>
                    <span className="text-xl font-black text-sky-700">{complaintsPerMonth} <span className="text-sm font-bold text-slate-500">件</span></span>
                  </div>
                  <input type="range" min="1" max="30" step="1" value={complaintsPerMonth} onChange={(e) => setComplaintsPerMonth(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sky-500" />
                </div>

                <div className="space-y-2 pt-2">
                  <div className="flex justify-between items-end">
                    <label className="block text-sm font-bold text-slate-700">1件の謝罪・リカバリ時間</label>
                    <span className="text-lg font-black text-sky-700">{apologyTime} <span className="text-sm font-bold text-slate-500">時間</span></span>
                  </div>
                  <input type="range" min="0.5" max="10" step="0.5" value={apologyTime} onChange={(e) => setApologyTime(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sky-500" />
                </div>

                <div className="space-y-2 pt-2">
                  <div className="flex justify-between items-end">
                    <label className="block text-sm font-bold text-slate-700">1件のお詫び代（菓子折り等）</label>
                    <span className="text-lg font-black text-sky-700">{formatCurrency(apologyExpense)} <span className="text-sm font-bold text-slate-500">円</span></span>
                  </div>
                  <input type="range" min="0" max="30000" step="1000" value={apologyExpense} onChange={(e) => setApologyExpense(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sky-500" />
                </div>

                <div className="space-y-2 pt-2">
                  <div className="flex justify-between items-end">
                    <label className="block text-sm font-bold text-slate-700">対応するスタッフの時給</label>
                    <span className="text-lg font-black text-sky-700">{formatCurrency(hourlyWage)} <span className="text-sm font-bold text-slate-500">円</span></span>
                  </div>
                  <input type="range" min="1000" max="5000" step="50" value={hourlyWage} onChange={(e) => setHourlyWage(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sky-500" />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-lg font-black text-slate-800 border-b-2 border-blue-800 pb-2 inline-block">
                STEP 2: 潜在リスク（海面下）
              </h3>
              
              <div className="space-y-4 bg-sky-50 p-5 rounded-2xl border border-sky-200">
                <div className="space-y-2">
                  <div className="flex justify-between items-end">
                    <label className="block text-sm font-bold text-slate-700">顧客1社あたりの年間売上</label>
                    <span className="text-xl font-black text-blue-900">{formatCurrency(averageLtv)} <span className="text-sm font-bold text-slate-500">円/年</span></span>
                  </div>
                  <input type="range" min="100000" max="10000000" step="100000" value={averageLtv} onChange={(e) => setAverageLtv(Number(e.target.value))} className="w-full h-2 bg-slate-300 rounded-lg appearance-none cursor-pointer accent-blue-800" />
                  <p className="text-xs text-sky-700 font-bold mt-1">※この顧客が離れた場合に失う年間の売上（LTV）です。</p>
                </div>

                <div className="space-y-2 pt-4 border-t border-sky-200">
                  <div className="flex justify-between items-end">
                    <label className="block text-sm font-bold text-slate-700">クレーム1件に対するサイレント離反</label>
                    <span className="text-lg font-black text-blue-900">{silentChurnMultiplier} <span className="text-sm font-bold text-slate-500">社</span></span>
                  </div>
                  <input type="range" min="0" max="10" step="1" value={silentChurnMultiplier} onChange={(e) => setSilentChurnMultiplier(Number(e.target.value))} className="w-full h-2 bg-slate-300 rounded-lg appearance-none cursor-pointer accent-blue-800" />
                  <p className="text-xs text-sky-700 font-bold mt-1">※表面化したクレームの裏で、何も言わずに他社へ乗り換える顧客の数（推定値）</p>
                </div>
              </div>
            </div>

          </div>

          {/* 出力エリア（氷山モデル） */}
          <div className="w-full lg:w-7/12 flex flex-col space-y-4 relative">
            
            {/* 氷山の一角（海面上） */}
            <div className="bg-white rounded-t-3xl p-6 border-t border-x border-slate-200 relative overflow-hidden z-10 shadow-[0_-10px_20px_rgba(0,0,0,0.05)]">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 22h20L12 2zm0 4l6 14H6l6-14z"/></svg>
              </div>
              <h3 className="text-sm font-bold text-sky-600 mb-1 flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L12 12"></path><path d="M12 22L12 16"></path></svg>
                氷山の一角（目に見えるコスト）
              </h3>
              <p className="text-xs text-slate-500 mb-4">月間 {complaintsPerMonth} 件のクレームに対する謝罪・対応経費</p>
              
              <div className="flex items-end gap-2">
                <span className="text-3xl font-black text-slate-700" style={{ fontFeatureSettings: "'tnum'" }}>
                  {formatCurrency(displayVisibleCost)}
                </span>
                <span className="text-base font-bold text-slate-500 mb-1">円 / 年</span>
              </div>
            </div>

            {/* 海面ライン */}
            <div className="w-full h-2 bg-cyan-400 relative z-20 shadow-[0_0_10px_rgba(34,211,238,0.5)] flex items-center justify-center">
              <span className="bg-cyan-100 text-cyan-800 text-[10px] font-black px-2 py-0.5 rounded-full absolute">海面下（見えない被害）</span>
            </div>

            {/* 氷山の底（海面下） */}
            <div className="bg-gradient-to-b from-blue-900 to-slate-900 rounded-b-3xl p-6 text-white relative overflow-hidden shadow-2xl z-10">
              <div className="space-y-6">
                
                {/* 内部コスト */}
                <div>
                  <h3 className="text-sm font-bold text-sky-300 mb-1">① 社内の尻拭いコスト（ハインリッヒの法則）</h3>
                  <p className="text-xs text-slate-400 mb-2 leading-relaxed">
                    300件のヒヤリハット、29件の内部ミス、1件の重大クレーム。<br/>
                    {complaintsPerMonth}件のクレームの裏には、年間 <strong className="text-white">{formatCurrency(internalMistakesPerMonth * 12)}件</strong> の「社内で事前に見つけた隠れミス」があります。<br/>
                    現場は日々、このダブルチェックと修正作業に追われています。
                  </p>
                  <div className="flex flex-col sm:flex-row items-end gap-2 bg-white/10 p-3 rounded-lg border border-white/10 mt-2">
                    <span className="text-sm font-bold text-slate-300 mb-1">見えない人件費:</span>
                    <div className="flex items-end gap-1">
                      <span className="text-2xl font-black text-rose-400">{formatCurrency(displayHiddenLaborCost)}</span>
                      <span className="text-sm font-bold text-rose-300 mb-1">円 / 年</span>
                    </div>
                  </div>
                  <p className="text-[10px] text-slate-400 mt-1 pl-2 text-right">
                    （月{formatCurrency(complaintsPerMonth)}件 × 隠れミス29件 × 修正0.5h × 時給{formatCurrency(hourlyWage)}円 × 12ヶ月）
                  </p>
                </div>

                <div className="w-full h-px bg-white/20"></div>

                {/* 外部コスト */}
                <div>
                  <h3 className="text-sm font-bold text-sky-300 mb-1">② サイレント離反による「将来の売上喪失」</h3>
                  <p className="text-xs text-slate-400 mb-2 leading-relaxed">
                    クレーム対応すらさせてもらえず、ミスに呆れて無言で他社へ乗り換えた顧客。<br/>
                    月に {formatCurrency(churnedCustomersPerMonth)}社の優良顧客を失うことは、会社の未来の売上を捨てるのと同じです。
                  </p>
                  <div className="flex flex-col sm:flex-row items-end gap-2 bg-white/10 p-3 rounded-lg border border-white/10 mt-2">
                    <span className="text-sm font-bold text-slate-300 mb-1">喪失した売上（LTV）:</span>
                    <div className="flex items-end gap-1">
                      <span className="text-2xl font-black text-rose-400">{formatCurrency(displayHiddenLtvLoss)}</span>
                      <span className="text-sm font-bold text-rose-300 mb-1">円 / 年</span>
                    </div>
                  </div>
                  <p className="text-[10px] text-slate-400 mt-1 pl-2 text-right">
                    （月{formatCurrency(complaintsPerMonth)}件 × 離反{formatCurrency(silentChurnMultiplier)}社 × 12ヶ月 × LTV {formatCurrency(averageLtv)}円）
                  </p>
                </div>

                <div className="bg-rose-900/50 border border-rose-500/50 p-4 rounded-xl mt-4 text-center">
                  <p className="text-xs font-bold text-rose-300 mb-2">アナログなミスを放置したことによる、真の被害総額</p>
                  <div className="flex justify-center items-end gap-2">
                    <span className="text-4xl sm:text-5xl font-black text-rose-500 tracking-tighter" style={{ fontFeatureSettings: "'tnum'" }}>
                      {formatCurrency(displayHiddenLaborCost + displayHiddenLtvLoss)}
                    </span>
                    <span className="text-xl font-bold text-rose-400 mb-1">円 / 年</span>
                  </div>
                </div>

              </div>
            </div>

            {/* CTA */}
            {totalHiddenDamage > 0 && (
              <div className="mt-6 text-center">
                <a href="#download-form" className="inline-flex w-full items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-black py-4 px-6 rounded-xl shadow-[0_10px_25px_rgba(37,99,235,0.4)] transition-transform transform hover:-translate-y-1">
                  ミス撲滅！受発注システム連携ガイドをDL
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                </a>
              </div>
            )}

          </div>

        </div>
      </div>
    </div>
  );
}
