import React, { useState, useEffect } from 'react';

export default function WastedTimeCalculator() {
  // 入力項目（あなた自身に関するデータ）
  const [monthlySalary, setMonthlySalary] = useState<number>(30); // 万円
  
  // ムダ時間の内訳（1日あたり）
  const [copyPasteHours, setCopyPasteHours] = useState<number>(1); // 転記・コピペ
  const [searchHours, setSearchHours] = useState<number>(0.5); // 探し物
  const [waitingHours, setWaitingHours] = useState<number>(0.5); // 承認待ち・アイドリング
  
  // アニメーション用表示値
  const [displayAnnualWastedHours, setDisplayAnnualWastedHours] = useState<number>(0);
  const [displayAnnualLoss, setDisplayAnnualLoss] = useState<number>(0);

  // 定数
  const SOCIAL_INSURANCE_RATE = 1.15; // 会社負担分15%上乗せ
  const WORKING_HOURS_PER_MONTH = 160;
  const WORKING_DAYS_PER_MONTH = 20;

  // 計算ロジック
  // 1. 1日のムダ時間合計
  const dailyWastedHours = copyPasteHours + searchHours + waitingHours;
  
  // 2. 年間のムダ時間合計
  const annualWastedHours = dailyWastedHours * WORKING_DAYS_PER_MONTH * 12;
  const annualWastedDays = Math.floor(annualWastedHours / 8); // 8時間営業日換算

  // 3. あなたの「真の時給」
  const realHourlyWage = (monthlySalary * 10000 * SOCIAL_INSURANCE_RATE) / WORKING_HOURS_PER_MONTH;
  
  // 4. 会社がドブに捨てている人件費（年間）
  const totalAnnualLoss = realHourlyWage * annualWastedHours;

  useEffect(() => {
    const duration = 800; // アニメーション時間
    const steps = 20;
    const stepTime = Math.abs(Math.floor(duration / steps));
    let currentStep = 0;
    
    const startHours = displayAnnualWastedHours;
    const endHours = annualWastedHours;
    const diffHours = endHours - startHours;

    const startLoss = displayAnnualLoss;
    const endLoss = totalAnnualLoss;
    const diffLoss = endLoss - startLoss;

    const timer = setInterval(() => {
      currentStep++;
      setDisplayAnnualWastedHours(startHours + (diffHours * (currentStep / steps)));
      setDisplayAnnualLoss(startLoss + (diffLoss * (currentStep / steps)));
      
      if (currentStep >= steps) {
        clearInterval(timer);
        setDisplayAnnualWastedHours(endHours);
        setDisplayAnnualLoss(endLoss);
      }
    }, stepTime);
    return () => clearInterval(timer);
  }, [annualWastedHours, totalAnnualLoss]);

  const formatCurrency = (value: number) => Math.floor(value).toLocaleString();

  return (
    <div className="w-full max-w-5xl mx-auto p-4 sm:p-8">
      <div className="bg-white/70 backdrop-blur-xl border border-white/50 shadow-2xl rounded-3xl overflow-hidden relative">
        <div className="bg-gradient-to-r from-rose-900 to-pink-800 p-8 sm:p-10 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-rose-500/20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-48 h-48 rounded-full bg-pink-500/20 blur-3xl"></div>
          <h2 className="relative z-10 text-2xl sm:text-3xl font-extrabold mb-4 tracking-tight leading-snug" style={{ fontFeatureSettings: "'palt'" }}>
            真のムダ時間コスト計算機（現場用）
          </h2>
          <p className="relative z-10 text-rose-100 text-sm sm:text-base opacity-90 leading-relaxed max-w-3xl">
            「またこのExcelにコピペか…」「あの資料どこだっけ？」<br className="hidden sm:block"/>
            あなたが毎日奪われているその時間は、会社にとっても<strong className="text-white bg-rose-500/50 px-1 rounded">大赤字</strong>です。<br className="hidden sm:block"/>
            あなたの失われた時間と、会社がドブに捨てているコストを計算し、上司を説得するための武器を作りましょう。
          </p>
        </div>

        <div className="p-8 sm:p-10 flex flex-col lg:flex-row gap-10">
          
          {/* 入力エリア */}
          <div className="w-full lg:w-1/2 flex flex-col space-y-8">
            <h3 className="text-lg font-black text-slate-800 border-b-2 border-pink-500 pb-2 inline-block self-start">
              あなたの業務状況
            </h3>
            
            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <label className="block text-sm font-bold text-slate-600">あなたの月給（ざっくり額面でOK）</label>
                  <span className="text-xl font-black text-rose-700">{monthlySalary} <span className="text-sm font-bold text-slate-500">万円</span></span>
                </div>
                <input type="range" min="15" max="80" step="1" value={monthlySalary} onChange={(e) => setMonthlySalary(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-rose-600" />
                <p className="text-xs text-slate-400 font-medium mt-1">※内部で社会保険料負担分を加味し、あなたの「真の時給」を計算します。</p>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-sm font-bold text-slate-700">1日のうち、以下の作業にどれくらい時間を取られていますか？</h4>
              
              <div className="space-y-3">
                <div className="flex justify-between items-end">
                  <label className="block text-sm font-bold text-slate-600">① 転記・コピペ・二重入力</label>
                  <span className="text-lg font-black text-slate-700">{copyPasteHours} <span className="text-xs font-bold text-slate-500">時間</span></span>
                </div>
                <input type="range" min="0" max="5" step="0.5" value={copyPasteHours} onChange={(e) => setCopyPasteHours(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-400 hover:accent-pink-500" />
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-end">
                  <label className="block text-sm font-bold text-slate-600">② 探し物（過去のメールや書類など）</label>
                  <span className="text-lg font-black text-slate-700">{searchHours} <span className="text-xs font-bold text-slate-500">時間</span></span>
                </div>
                <input type="range" min="0" max="5" step="0.5" value={searchHours} onChange={(e) => setSearchHours(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-400 hover:accent-pink-500" />
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-end">
                  <label className="block text-sm font-bold text-slate-600">③ 上司の確認待ち・アイドリング</label>
                  <span className="text-lg font-black text-slate-700">{waitingHours} <span className="text-xs font-bold text-slate-500">時間</span></span>
                </div>
                <input type="range" min="0" max="5" step="0.5" value={waitingHours} onChange={(e) => setWaitingHours(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-400 hover:accent-pink-500" />
              </div>
            </div>

          </div>

          {/* 出力エリア */}
          <div className="w-full lg:w-1/2 flex flex-col space-y-6">
            
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-slate-400 to-slate-600"></div>
              
              <p className="text-sm font-bold text-slate-500 mb-2 text-center">あなたが「1年間」で単純作業に奪われている時間</p>
              <div className="flex flex-col items-center justify-center mb-2">
                <div className="flex items-baseline">
                  <span className="text-5xl font-black text-slate-700 tracking-tighter">{formatCurrency(displayAnnualWastedHours)}</span>
                  <span className="text-lg font-bold text-slate-400 ml-2">時間</span>
                </div>
                {annualWastedHours > 0 && (
                  <p className="text-sm font-bold text-rose-500 mt-2 bg-rose-50 px-3 py-1 rounded-full">
                    ＝ 約 {annualWastedDays} 営業日分の労働をムダにしています
                  </p>
                )}
              </div>
            </div>

            <div className="bg-rose-50 rounded-2xl p-6 border border-rose-200 shadow-inner relative overflow-hidden text-center">
              <p className="text-sm font-bold text-rose-800 mb-2">このままだと、会社はあなたの価値を活かせず</p>
              <p className="text-xs font-bold text-rose-400 mb-4">（社会保険料を加味したあなたの真の時給：{formatCurrency(realHourlyWage)}円で計算）</p>
              
              <p className="text-lg font-bold text-rose-600 mb-1">年間</p>
              <div className="flex items-baseline justify-center">
                <span className="text-5xl sm:text-6xl font-black text-rose-600 tracking-tighter drop-shadow-sm" style={{ fontFeatureSettings: "'tnum'" }}>
                  {formatCurrency(displayAnnualLoss)}
                </span>
                <span className="text-xl font-bold text-rose-500 ml-2">円</span>
              </div>
              <p className="text-sm font-bold text-rose-800 mt-3">ものコストをドブに捨てていることになります。</p>
            </div>

            {/* CTA (Howへの導線) */}
            {totalAnnualLoss > 0 && (
              <div className="mt-4 bg-slate-800 rounded-2xl p-6 border border-slate-700 text-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <h4 className="text-lg font-black text-white mb-2">この結果を上司に提出しませんか？</h4>
                
                <p className="text-sm text-slate-300 font-medium mb-4 leading-relaxed">
                  「私が頑張ればいい」は会社のためになりません。<br/>
                  システム化すれば、あなたの時間はもっと価値ある仕事に使えます。稟議を通しやすくするための説得テンプレート集を用意しました。
                </p>
                
                <a href="#download-form" className="inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:-translate-y-1">
                  上司説得用テンプレートをDL
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
