import React, { useState, useEffect } from 'react';

export default function WastedTimeCalculator() {
  // 入力項目
  const [employeeCount, setEmployeeCount] = useState<number>(10); // 人
  const [salary, setSalary] = useState<number>(500); // 万円 (500 = 5,000,000 yen)
  const [wastedHoursPerDay, setWastedHoursPerDay] = useState<number>(1); // hours/day
  
  // アニメーション用表示値
  const [displayAnnualLoss, setDisplayAnnualLoss] = useState<number>(0);
  const [displayMonthlyLoss, setDisplayMonthlyLoss] = useState<number>(0);

  // 定数
  const SOCIAL_INSURANCE_RATE = 1.15; // 会社負担分15%上乗せ
  const WORKING_HOURS_PER_YEAR = 1920; // 月160時間 * 12ヶ月
  const WORKING_DAYS_PER_MONTH = 20;

  // 計算ロジック
  // 1人あたりの真の時給
  const realSalary = salary * 10000 * SOCIAL_INSURANCE_RATE;
  const realHourlyWage = realSalary / WORKING_HOURS_PER_YEAR;
  
  // 1人あたりのムダ時間損失（月・年）
  const monthlyWastedHoursPerPerson = wastedHoursPerDay * WORKING_DAYS_PER_MONTH;
  const annualWastedHoursPerPerson = monthlyWastedHoursPerPerson * 12;
  
  // 会社全体のムダ時間損失（月・年）
  const totalMonthlyLoss = realHourlyWage * monthlyWastedHoursPerPerson * employeeCount;
  const totalAnnualLoss = realHourlyWage * annualWastedHoursPerPerson * employeeCount;

  // 比較用システム導入費（仮の相場）
  const systemImplementationCost = 1500000; // 150万円（初期＋1年分）

  useEffect(() => {
    const duration = 600;
    const steps = 20;
    const stepTime = Math.abs(Math.floor(duration / steps));
    let currentStep = 0;
    
    const startValueA = displayAnnualLoss;
    const endValueA = totalAnnualLoss;
    const diffA = endValueA - startValueA;

    const startValueM = displayMonthlyLoss;
    const endValueM = totalMonthlyLoss;
    const diffM = endValueM - startValueM;

    const timer = setInterval(() => {
      currentStep++;
      setDisplayAnnualLoss(startValueA + (diffA * (currentStep / steps)));
      setDisplayMonthlyLoss(startValueM + (diffM * (currentStep / steps)));
      
      if (currentStep >= steps) {
        clearInterval(timer);
        setDisplayAnnualLoss(endValueA);
        setDisplayMonthlyLoss(endValueM);
      }
    }, stepTime);
    return () => clearInterval(timer);
  }, [totalAnnualLoss, totalMonthlyLoss]);

  const formatCurrency = (value: number) => Math.floor(value).toLocaleString();

  return (
    <div className="w-full max-w-5xl mx-auto p-4 sm:p-8">
      <div className="bg-white/70 backdrop-blur-xl border border-white/50 shadow-2xl rounded-3xl overflow-hidden relative">
        <div className="bg-gradient-to-r from-blue-900 to-indigo-800 p-8 sm:p-10 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-blue-500/20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-48 h-48 rounded-full bg-indigo-500/20 blur-3xl"></div>
          <h2 className="relative z-10 text-2xl sm:text-3xl font-extrabold mb-4 tracking-tight leading-snug" style={{ fontFeatureSettings: "'palt'" }}>
            真のムダ時間コスト計算機
          </h2>
          <p className="relative z-10 text-blue-100 text-sm sm:text-base opacity-90 leading-relaxed max-w-3xl">
            「問い合わせ対応」「探し物」「二重入力」…何に時間を使っているかは問いません。<br className="hidden sm:block"/>
            システム化を先送りした結果、会社全体で毎月・毎年どれだけの人件費をドブに捨てているか、社会保険料の会社負担分を含めた「真の時給」から正確に割り出します。
          </p>
        </div>

        <div className="p-8 sm:p-10 flex flex-col lg:flex-row gap-10">
          
          {/* 入力エリア */}
          <div className="w-full lg:w-1/2 flex flex-col space-y-8">
            <h3 className="text-lg font-black text-slate-800 border-b-2 border-indigo-500 pb-2 inline-block self-start">現在の体制と状況</h3>
            
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <label className="block text-sm font-bold text-slate-500">対象となる社員数</label>
                <span className="text-xl font-black text-indigo-900">{employeeCount} <span className="text-sm font-bold text-slate-500">人</span></span>
              </div>
              <input type="range" min="1" max="100" step="1" value={employeeCount} onChange={(e) => setEmployeeCount(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600" />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <label className="block text-sm font-bold text-slate-500">対象者の平均年収</label>
                <span className="text-xl font-black text-indigo-900">{salary} <span className="text-sm font-bold text-slate-500">万円</span></span>
              </div>
              <input type="range" min="300" max="2000" step="50" value={salary} onChange={(e) => setSalary(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600" />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <label className="block text-sm font-bold text-slate-500">1人あたりの1日のムダ時間（探し物・確認待ち等）</label>
                <span className="text-xl font-black text-rose-600">{wastedHoursPerDay} <span className="text-sm font-bold text-slate-500">時間</span></span>
              </div>
              <input type="range" min="0.5" max="5" step="0.5" value={wastedHoursPerDay} onChange={(e) => setWastedHoursPerDay(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-rose-500" />
              <p className="text-xs text-slate-400 font-medium mt-1">※ 1日の業務時間（8時間）のうち、本来の価値を生まない作業時間</p>
            </div>

          </div>

          {/* 出力エリア */}
          <div className="w-full lg:w-1/2 flex flex-col space-y-6">
            
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 shadow-inner flex justify-between items-center">
              <div>
                <p className="text-sm font-bold text-slate-500">社員1人あたりの「真の時給」</p>
                <p className="text-xs text-slate-400 mt-1">※社会保険料の会社負担分(+約15%)を含む</p>
              </div>
              <div className="text-right">
                <span className="text-2xl font-black text-slate-700">{formatCurrency(realHourlyWage)}</span>
                <span className="text-sm font-bold text-slate-400 ml-1">円</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-rose-200 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-rose-500 to-red-600"></div>
              
              <p className="text-sm font-bold text-slate-500 mb-2 text-center">会社全体が「毎月」ドブに捨てている人件費</p>
              <div className="flex items-baseline justify-center mb-6">
                <span className="text-4xl font-black text-rose-600 tracking-tighter">{formatCurrency(displayMonthlyLoss)}</span>
                <span className="text-lg font-bold text-slate-400 ml-2">円/月</span>
              </div>

              <div className="w-full h-px bg-slate-100 my-4"></div>

              <p className="text-sm font-bold text-rose-500 mb-2 text-center">会社全体が「1年間」で失う利益（赤字）</p>
              <div className="flex items-baseline justify-center">
                <span className="text-5xl sm:text-6xl font-black text-rose-700 tracking-tighter" style={{ fontFeatureSettings: "'tnum'" }}>{formatCurrency(displayAnnualLoss)}</span>
                <span className="text-xl font-bold text-rose-500 ml-2">円</span>
              </div>
            </div>

            {/* システム化費用との比較・CTA */}
            {totalAnnualLoss > systemImplementationCost && (
              <div className="mt-4 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-6 border border-indigo-100 relative overflow-hidden group">
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"></path><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                  </div>
                  <h4 className="text-lg font-black text-indigo-900">システムを入れた方が安いかも？</h4>
                </div>
                
                <p className="text-sm text-slate-600 font-medium mb-4 leading-relaxed">
                  システム導入費用の相場（例: {formatCurrency(systemImplementationCost)}円）と比較しても、<strong className="text-indigo-700">圧倒的に手作業の損失の方が大きい</strong>状態です。これ以上の赤字を垂れ流す前に、自動化をご検討ください。
                </p>
                
                <a href="https://www.k-sp.co.jp/admin/std/contact/new" target="_blank" rel="noopener noreferrer" className="inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:-translate-y-1">
                  無料でDX（自動化）の相談をする
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </a>
              </div>
            )}

          </div>

        </div>
      </div>
    </div>
  );
}
