import React, { useState, useEffect } from 'react';

export default function TeleapoCalculator() {
  // 入力項目
  // 架電スタッフ
  const [staffCount, setStaffCount] = useState<number>(3); // 人
  const [staffHourlyWage, setStaffHourlyWage] = useState<number>(1200); // 円
  const [staffMonthlyHours, setStaffMonthlyHours] = useState<number>(80); // 時間

  // 管理者コスト
  const [managerMonthlySalary, setManagerMonthlySalary] = useState<number>(40); // 万円
  const [managerMonthlyHours, setManagerMonthlyHours] = useState<number>(20); // 時間

  // 実績・その他
  const [monthlyApoCount, setMonthlyApoCount] = useState<number>(10); // 件
  const [fixedListCost, setFixedListCost] = useState<number>(5); // 万円 (リスト作成・システム・通信費)
  
  const [knowsCallsPerApo, setKnowsCallsPerApo] = useState<boolean>(true);
  const [callsPerApoInput, setCallsPerApoInput] = useState<number>(100); // 件
  const [onboardingCost, setOnboardingCost] = useState<number>(30); // 万円
  const [outsourceApoCost, setOutsourceApoCost] = useState<number>(20000); // 円

  // アニメーション用
  const [displayInhouseCpa, setDisplayInhouseCpa] = useState<number>(0);

  // 1件アポをとるための架電数（わからない場合は業界平均の100件=1%）
  const actualCallsPerApo = knowsCallsPerApo ? callsPerApoInput : 100;

  // 計算ロジック
  // 1. 架電スタッフの人件費（月額）
  const staffCost = staffCount * staffHourlyWage * staffMonthlyHours;
  
  // 2. 管理者の見えない人件費（月額）: 月給を160hで割って時給換算
  const managerHourlyWage = (managerMonthlySalary * 10000) / 160;
  const managerCost = managerHourlyWage * managerMonthlyHours;
  
  // 3. リスト作成や通信費等の固定費（月額）
  const fixedCost = fixedListCost * 10000;

  // 4. メンタル疲弊・隠れ離職コスト
  const rejections = actualCallsPerApo - 1;
  const totalRejectionsPerMonth = rejections * monthlyApoCount;
  // 架電数と断られ数に基づく離職リスクの仮説計算（150件以上/アポだとリスク大）
  const turnoverRiskPercent = Math.min(100, Math.floor((actualCallsPerApo / 150) * 100));
  // 月間の隠れ離職コスト（採用・教育費の掛け捨てリスク換算）
  const hiddenTurnoverCost = staffCount * (onboardingCost * 10000) * (turnoverRiskPercent / 100) / 12;

  // 総コスト
  const totalTeleapoCost = staffCost + managerCost + fixedCost + hiddenTurnoverCost;
  
  // 自社での1件あたりのアポ獲得単価（CPA）
  const inhouseCpa = monthlyApoCount > 0 ? totalTeleapoCost / monthlyApoCount : 0;
  
  // 差額（自社CPA - 外注CPA）
  const cpaDifference = inhouseCpa - outsourceApoCost;

  useEffect(() => {
    const duration = 600;
    const steps = 20;
    const stepTime = Math.abs(Math.floor(duration / steps));
    let currentStep = 0;
    const startValue = displayInhouseCpa;
    const endValue = inhouseCpa;
    const difference = endValue - startValue;

    const timer = setInterval(() => {
      currentStep++;
      setDisplayInhouseCpa(startValue + (difference * (currentStep / steps)));
      if (currentStep >= steps) {
        clearInterval(timer);
        setDisplayInhouseCpa(endValue);
      }
    }, stepTime);
    return () => clearInterval(timer);
  }, [inhouseCpa]);

  const formatCurrency = (value: number) => Math.floor(value).toLocaleString();

  return (
    <div className="w-full max-w-5xl mx-auto p-4 sm:p-8">
      <div className="bg-white/70 backdrop-blur-xl border border-white/50 shadow-2xl rounded-3xl overflow-hidden relative">
        <div className="bg-gradient-to-r from-emerald-900 to-teal-800 p-8 sm:p-10 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-emerald-500/20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-48 h-48 rounded-full bg-teal-500/20 blur-3xl"></div>
          <h2 className="relative z-10 text-2xl sm:text-3xl font-extrabold mb-4 tracking-tight leading-snug" style={{ fontFeatureSettings: "'palt'" }}>
            テレアポ外注化の損益分岐点シミュレーター
          </h2>
          <p className="relative z-10 text-emerald-100 text-sm sm:text-base opacity-90 leading-relaxed max-w-3xl">
            「自社でアルバイトに電話させた方が安い」は本当でしょうか？<br className="hidden sm:block"/>
            リスト作成や指導にかかる社員の管理コスト、スタッフの離職リスクといった「見えないコスト」を暴き出し、<br className="hidden sm:block"/>
            プロに外注した場合の相場と直接比較してみましょう。
          </p>
        </div>

        <div className="p-8 sm:p-10 flex flex-col lg:flex-row gap-10">
          
          {/* 入力エリア */}
          <div className="w-full lg:w-1/2 flex flex-col space-y-8">
            <h3 className="text-lg font-black text-slate-800 border-b-2 border-teal-500 pb-2 inline-block self-start">現在の体制と実績</h3>
            
            <div className="bg-slate-50 p-4 rounded-xl space-y-4 border border-slate-200">
              <h4 className="text-sm font-bold text-slate-600">① 架電スタッフ（アルバイト等）のコスト</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-end">
                  <label className="block text-xs font-bold text-slate-500">架電スタッフ数</label>
                  <span className="text-lg font-black text-teal-900">{staffCount} <span className="text-xs font-bold text-slate-500">人</span></span>
                </div>
                <input type="range" min="1" max="20" step="1" value={staffCount} onChange={(e) => setStaffCount(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-teal-600" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-end">
                    <label className="block text-xs font-bold text-slate-500">時給</label>
                    <span className="text-lg font-black text-teal-900">{staffHourlyWage.toLocaleString()} <span className="text-xs font-bold text-slate-500">円</span></span>
                  </div>
                  <input type="range" min="1000" max="2500" step="50" value={staffHourlyWage} onChange={(e) => setStaffHourlyWage(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-teal-600" />
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-end">
                    <label className="block text-xs font-bold text-slate-500">1人の月間稼働</label>
                    <span className="text-lg font-black text-teal-900">{staffMonthlyHours} <span className="text-xs font-bold text-slate-500">H</span></span>
                  </div>
                  <input type="range" min="10" max="160" step="10" value={staffMonthlyHours} onChange={(e) => setStaffMonthlyHours(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-teal-600" />
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl space-y-4 border border-slate-200">
              <h4 className="text-sm font-bold text-slate-600">② 社員（マネージャー）の見えない管理コスト</h4>
              <p className="text-xs text-slate-500">※リスト作成、スタッフ指導、架電履歴のExcel集計などに費やしている時間</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-end">
                    <label className="block text-xs font-bold text-slate-500">社員の月給</label>
                    <span className="text-lg font-black text-teal-900">{managerMonthlySalary} <span className="text-xs font-bold text-slate-500">万円</span></span>
                  </div>
                  <input type="range" min="20" max="100" step="5" value={managerMonthlySalary} onChange={(e) => setManagerMonthlySalary(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-teal-600" />
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-end">
                    <label className="block text-xs font-bold text-slate-500">月間の管理時間</label>
                    <span className="text-lg font-black text-teal-900">{managerMonthlyHours} <span className="text-xs font-bold text-slate-500">H</span></span>
                  </div>
                  <input type="range" min="0" max="100" step="5" value={managerMonthlyHours} onChange={(e) => setManagerMonthlyHours(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-teal-600" />
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-end">
                <label className="block text-xs font-bold text-slate-500">現在の月間アポ獲得数（チーム全体）</label>
                <span className="text-lg font-black text-teal-900">{monthlyApoCount} <span className="text-xs font-bold text-slate-500">件</span></span>
              </div>
              <input type="range" min="1" max="100" step="1" value={monthlyApoCount} onChange={(e) => setMonthlyApoCount(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-teal-600" />
            </div>

            <h3 className="text-lg font-black text-slate-800 border-b-2 border-slate-300 pb-2 inline-block self-start mt-4">隠れコストと外注相場</h3>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <input type="checkbox" id="knows-calls" checked={knowsCallsPerApo} onChange={(e) => setKnowsCallsPerApo(e.target.checked)} className="w-4 h-4 text-teal-600 rounded" />
                <label htmlFor="knows-calls" className="text-sm font-bold text-slate-600">1件アポを取るまでの架電数を把握している</label>
              </div>
              
              {!knowsCallsPerApo ? (
                <div className="bg-slate-100 p-3 rounded-lg border border-slate-200 text-sm text-slate-600">
                  ※業界平均の「アポ率1%（100件に1件）」として計算します。
                </div>
              ) : (
                <div className="space-y-3 pl-6">
                  <div className="flex justify-between items-end">
                    <label className="block text-xs font-bold text-slate-500">1件アポを取るまでの架電数</label>
                    <span className="text-lg font-black text-slate-700">{callsPerApoInput} <span className="text-xs font-bold text-slate-400">件</span></span>
                  </div>
                  <input type="range" min="20" max="300" step="10" value={callsPerApoInput} onChange={(e) => setCallsPerApoInput(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-400" />
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex justify-between items-end">
                  <label className="block text-xs font-bold text-slate-500">システム・通信・リスト代</label>
                  <span className="text-lg font-black text-slate-700">{fixedListCost} <span className="text-xs font-bold text-slate-400">万円</span></span>
                </div>
                <input type="range" min="0" max="20" step="1" value={fixedListCost} onChange={(e) => setFixedListCost(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-400" />
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-end">
                  <label className="block text-xs font-bold text-slate-500">採用教育コスト（1人あたり）</label>
                  <span className="text-lg font-black text-slate-700">{onboardingCost} <span className="text-xs font-bold text-slate-400">万円</span></span>
                </div>
                <input type="range" min="0" max="150" step="10" value={onboardingCost} onChange={(e) => setOnboardingCost(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-400" />
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-end">
                <label className="block text-xs font-bold text-slate-500">比較する外注のアポ単価相場</label>
                <span className="text-lg font-black text-indigo-700">{formatCurrency(outsourceApoCost)} <span className="text-xs font-bold text-slate-400">円</span></span>
              </div>
              <input type="range" min="10000" max="50000" step="1000" value={outsourceApoCost} onChange={(e) => setOutsourceApoCost(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600" />
            </div>

          </div>

          {/* 出力エリア */}
          <div className="w-full lg:w-1/2 flex flex-col space-y-6">
            
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 shadow-inner text-center">
              <p className="text-sm font-bold text-slate-500 mb-2">現在の自社アポ獲得単価（CPA）</p>
              <div className="flex items-baseline justify-center">
                <span className={`text-5xl font-black ${cpaDifference > 0 ? 'text-rose-600' : 'text-emerald-600'} tracking-tighter`}>{formatCurrency(displayInhouseCpa)}</span>
                <span className="text-lg font-bold text-slate-400 ml-2">円/件</span>
              </div>
              <p className="text-xs font-medium text-slate-400 mt-2">（スタッフ人件費＋管理者コスト＋固定費＋離職リスク）</p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-indigo-500 to-purple-600"></div>
              <p className="text-sm font-bold text-slate-500 mb-2 text-center">内製 vs 外注（プロ）の単価対決</p>
              
              <div className="flex justify-between items-center mb-6 mt-4">
                <div className="text-center w-1/2 border-r border-slate-200">
                  <p className="text-xs text-slate-500 mb-1">現在の自社単価</p>
                  <p className="text-xl font-bold text-slate-800">{formatCurrency(inhouseCpa)}円</p>
                </div>
                <div className="text-center w-1/2">
                  <p className="text-xs text-slate-500 mb-1">代行業者の相場</p>
                  <p className="text-xl font-bold text-indigo-600">{formatCurrency(outsourceApoCost)}円</p>
                </div>
              </div>

              {cpaDifference > 0 ? (
                <div className="bg-rose-50 text-rose-800 p-4 rounded-xl text-center text-sm font-bold border border-rose-200 flex flex-col items-center gap-2">
                  <span className="text-2xl">⚠️</span>
                  <span>
                    自社で架電する方が、1件あたり <strong>{formatCurrency(cpaDifference)}円</strong> も高くついています。<br/>
                    しかも自社運用では、マーケティングデータも残りません。
                  </span>
                </div>
              ) : (
                <div className="bg-emerald-50 text-emerald-800 p-4 rounded-xl text-center text-sm font-bold border border-emerald-200 flex flex-col items-center gap-2">
                  <span className="text-2xl">✨</span>
                  <span>
                    素晴らしい効率です。<br/>
                    外注するよりも自社運用の方が <strong>{formatCurrency(Math.abs(cpaDifference))}円</strong> 安く運用できています。
                  </span>
                </div>
              )}
            </div>

            {/* メンタル・隠れコスト */}
            <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700 shadow-lg text-white">
              <p className="text-sm font-bold text-slate-400 mb-4 flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                放置できない「メンタル疲弊・管理コスト」
              </p>
              
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm text-slate-300">月間の「ガチャ切り・お断り」数</span>
                <span className="text-xl font-bold text-rose-300">{formatCurrency(totalRejectionsPerMonth)} 回</span>
              </div>
              
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm text-slate-300">社員のデータ集計・指導コスト</span>
                <span className="text-xl font-bold text-amber-300">{formatCurrency(managerCost)} 円</span>
              </div>

              <div className="flex justify-between items-end border-t border-slate-600 pt-4 mt-2">
                <span className="text-sm font-bold text-slate-200">採用教育費の<br/>掛け捨て損失リスク</span>
                <div>
                  <span className="text-2xl font-black text-rose-400 tracking-tighter">{formatCurrency(hiddenTurnoverCost)}</span>
                  <span className="text-sm font-bold text-slate-400 ml-1">円/月</span>
                </div>
              </div>
            </div>

            {/* CTA (Howへの導線) */}
            {cpaDifference > 0 && (
              <div className="mt-4 bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl p-6 border border-orange-200 text-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <h4 className="text-lg font-black text-orange-800 mb-2">自社で消耗する前に、外注のリアルを知る</h4>
                <p className="text-sm text-orange-700 font-medium mb-4 leading-relaxed">
                  代行業者の単価には、「リスト精査」「NG理由の分析」「スクリプト改善」などの運用費がすべて含まれています。<br/>
                  失敗しない外注先の選び方をまとめたチェックリスト（PDF）を無料で配布中です。
                </p>
                <div className="flex flex-col gap-3 w-full max-w-sm mx-auto mt-6">

                  <a href="/slides/17_presentation.pdf" className="inline-flex w-full text-[14px] sm:text-base !text-white !no-underline items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:-translate-y-1">
                    業者選定チェックリストをダウンロード
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
