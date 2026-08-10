import React, { useState, useEffect } from 'react';

export default function WastedTimeCalculator() {
  // States for sliders
  const [salary, setSalary] = useState<number>(600); // 万円 (600 = 6,000,000 yen)
  const [wastedHoursPerWeek, setWastedHoursPerWeek] = useState<number>(5); // hours/week
  
  // Display numbers (for animation/smoothness)
  const [displayLoss, setDisplayLoss] = useState<number>(0);

  // Constants
  const SOCIAL_INSURANCE_RATE = 1.15; // 会社負担分15%上乗せ
  const WORKING_HOURS_PER_YEAR = 1920; // 月160時間 * 12ヶ月
  const WEEKS_PER_YEAR = 52;

  // Calculations
  const realSalary = salary * 10000 * SOCIAL_INSURANCE_RATE;
  const realHourlyWage = realSalary / WORKING_HOURS_PER_YEAR;
  const annualWastedHours = wastedHoursPerWeek * WEEKS_PER_YEAR;
  const annualLoss = realHourlyWage * annualWastedHours;

  // Simple number animation effect when loss changes
  useEffect(() => {
    const duration = 500; // ms
    const steps = 20;
    const stepTime = Math.abs(Math.floor(duration / steps));
    let currentStep = 0;
    
    const startValue = displayLoss;
    const endValue = annualLoss;
    const difference = endValue - startValue;

    const timer = setInterval(() => {
      currentStep++;
      const nextValue = startValue + (difference * (currentStep / steps));
      setDisplayLoss(nextValue);
      if (currentStep >= steps) {
        clearInterval(timer);
        setDisplayLoss(endValue);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [annualLoss]);

  const formatCurrency = (value: number) => {
    return Math.floor(value).toLocaleString();
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 sm:p-8">
      <div className="bg-white/70 backdrop-blur-xl border border-white/50 shadow-2xl rounded-3xl overflow-hidden relative">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-900 to-indigo-800 p-8 sm:p-10 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-blue-500/20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-48 h-48 rounded-full bg-indigo-500/20 blur-2xl"></div>
          
          <h2 className="relative z-10 text-2xl sm:text-3xl font-extrabold mb-4 tracking-tight" style={{ fontFeatureSettings: "'palt'" }}>
            真のムダ時間コスト計算機
          </h2>
          <p className="relative z-10 text-blue-100 text-sm sm:text-base opacity-90 leading-relaxed">
            システム化をケチった結果、会社が負担している「見えないコスト」を可視化します。<br className="hidden sm:block" />
            社会保険料などの会社負担分（約15%）を含めた「真の時給」から、年間のドブ捨て金額を算出します。
          </p>
        </div>

        {/* Content */}
        <div className="p-8 sm:p-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Controls */}
          <div className="space-y-10">
            {/* Slider 1 */}
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <label className="block text-sm font-bold text-slate-700 tracking-wide">
                  対象者の平均年収
                </label>
                <span className="text-2xl font-black text-indigo-900">
                  {salary} <span className="text-sm font-bold text-slate-500 ml-1">万円</span>
                </span>
              </div>
              <div className="relative">
                <input 
                  type="range" 
                  min="300" max="2000" step="50" 
                  value={salary}
                  onChange={(e) => setSalary(Number(e.target.value))}
                  className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                />
                <div className="flex justify-between text-xs text-slate-400 mt-2 font-semibold">
                  <span>300万円</span>
                  <span>2,000万円</span>
                </div>
              </div>
            </div>

            {/* Slider 2 */}
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <label className="block text-sm font-bold text-slate-700 tracking-wide">
                  1週間のムダ時間（手作業・探し物等）
                </label>
                <span className="text-2xl font-black text-rose-600">
                  {wastedHoursPerWeek} <span className="text-sm font-bold text-slate-500 ml-1">時間/週</span>
                </span>
              </div>
              <div className="relative">
                <input 
                  type="range" 
                  min="1" max="20" step="1" 
                  value={wastedHoursPerWeek}
                  onChange={(e) => setWastedHoursPerWeek(Number(e.target.value))}
                  className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
                />
                <div className="flex justify-between text-xs text-slate-400 mt-2 font-semibold">
                  <span>1時間</span>
                  <span>20時間</span>
                </div>
              </div>
            </div>
          </div>

          {/* Results Box */}
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 shadow-inner flex flex-col justify-center relative overflow-hidden">
            <div className="absolute -right-8 -top-8 text-slate-100">
              <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.11-1.39-3.28-3.4h2.9c.16 1.02.97 1.48 1.83 1.48 1.16 0 1.95-.56 1.95-1.4 0-.82-.6-1.12-1.92-1.45-2.07-.51-3.61-1.15-3.61-3.21 0-1.87 1.34-3.04 3.13-3.37V4h2.67v1.94c1.47.38 2.6 1.37 2.75 3.15h-2.82c-.17-.89-.9-1.33-1.68-1.33-1.16 0-1.85.5-1.85 1.25 0 .8.62 1.1 2.05 1.48 2.3.61 3.51 1.41 3.51 3.25 0 1.95-1.42 3.01-3.01 3.35z"/></svg>
            </div>
            
            <div className="relative z-10 text-center space-y-6">
              
              <div>
                <p className="text-sm font-bold text-slate-500 tracking-wider mb-1">真の時給（会社負担込）</p>
                <p className="text-xl font-bold text-slate-700">
                  約 {formatCurrency(realHourlyWage)} <span className="text-sm font-semibold">円/時</span>
                </p>
              </div>
              
              <div className="w-16 h-px bg-slate-300 mx-auto"></div>

              <div>
                <p className="text-sm font-bold text-rose-500 tracking-wider mb-2">従業員1人あたりの年間損失額</p>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-5xl sm:text-6xl font-black text-rose-600 tracking-tighter" style={{ fontFeatureSettings: "'tnum'" }}>
                    {formatCurrency(displayLoss)}
                  </span>
                  <span className="text-xl font-bold text-rose-500">円</span>
                </div>
                <p className="text-xs font-semibold text-slate-400 mt-4">
                  （年間約 {formatCurrency(annualWastedHours)} 時間のムダ × 真の時給）
                </p>
              </div>

            </div>
          </div>

        </div>
        
        {/* Footer Note */}
        <div className="bg-slate-100/50 p-4 sm:px-10 border-t border-slate-200 text-xs font-semibold text-slate-500 text-center sm:text-left">
          ※ 会社負担分は健康保険・厚生年金等の社会保険料目安として約15%を上乗せして計算しています。<br className="hidden sm:block" />
          ※ 年間労働時間は1,920時間（月160時間×12ヶ月）として算出しています。
        </div>

      </div>
    </div>
  );
}
