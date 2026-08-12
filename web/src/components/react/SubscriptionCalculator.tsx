import React, { useState, useEffect } from 'react';

export default function SubscriptionCalculator() {
  // 1. 入力項目
  const [oneTimePrice, setOneTimePrice] = useState<number>(100); // 万円
  const [subPrice, setSubPrice] = useState<number>(3); // 万円/月
  const [churnRate, setChurnRate] = useState<number>(2.0); // %/月

  // 2. アニメーション用表示値
  const [displayOneTimeLtv, setDisplayOneTimeLtv] = useState<number>(0);
  const [displaySubLtv, setDisplaySubLtv] = useState<number>(0);

  // 計算ロジック
  // 売り切りモデルのLTV（1回売って終わり）
  const actualOneTimeLtv = oneTimePrice * 10000;

  // サブスクモデルのLTV（平均継続月数 = 1 / 月次解約率）
  const averageLifespanMonths = 1 / (churnRate / 100);
  const actualSubLtv = (subPrice * 10000) * averageLifespanMonths;

  // 損益分岐点（何ヶ月で売り切り価格を超えるか）
  const breakEvenMonths = Math.ceil(oneTimePrice / subPrice);
  const breakEvenYears = Math.floor(breakEvenMonths / 12);
  const breakEvenRemainingMonths = breakEvenMonths % 12;

  // サブスクの方が儲かるか？
  const isSubBetter = actualSubLtv > actualOneTimeLtv;
  const difference = Math.abs(actualSubLtv - actualOneTimeLtv);

  useEffect(() => {
    const duration = 800; // アニメーション時間
    const steps = 20;
    const stepTime = Math.abs(Math.floor(duration / steps));
    let currentStep = 0;
    
    const startOneTime = displayOneTimeLtv;
    const diffOneTime = actualOneTimeLtv - startOneTime;

    const startSub = displaySubLtv;
    const diffSub = actualSubLtv - startSub;

    const timer = setInterval(() => {
      currentStep++;
      setDisplayOneTimeLtv(startOneTime + (diffOneTime * (currentStep / steps)));
      setDisplaySubLtv(startSub + (diffSub * (currentStep / steps)));
      
      if (currentStep >= steps) {
        clearInterval(timer);
        setDisplayOneTimeLtv(actualOneTimeLtv);
        setDisplaySubLtv(actualSubLtv);
      }
    }, stepTime);
    return () => clearInterval(timer);
  }, [actualOneTimeLtv, actualSubLtv]);

  const formatCurrency = (value: number) => Math.floor(value).toLocaleString();

  // グラフ用ヘルパー
  const graphMaxMonths = Math.max(36, breakEvenMonths + 12);
  const graphMaxY = Math.max(actualOneTimeLtv * 1.5, (subPrice * 10000) * graphMaxMonths);
  const getX = (month: number) => `${(month / graphMaxMonths) * 100}%`;
  const getY = (value: number) => `${100 - (value / graphMaxY) * 100}%`;

  return (
    <div className="w-full max-w-5xl mx-auto p-4 sm:p-8">
      <div className="bg-white/70 backdrop-blur-xl border border-white/50 shadow-2xl rounded-3xl overflow-hidden relative">
        <div className="bg-gradient-to-r from-indigo-900 to-violet-800 p-8 sm:p-10 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-indigo-500/30 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-48 h-48 rounded-full bg-violet-400/20 blur-3xl"></div>
          <h2 className="relative z-10 text-2xl sm:text-3xl font-extrabold mb-4 tracking-tight leading-snug" style={{ fontFeatureSettings: "'palt'" }}>
            ビジネスモデル変革（売り切り vs サブスク）診断
          </h2>
          <p className="relative z-10 text-indigo-100 text-sm sm:text-base opacity-90 leading-relaxed max-w-3xl">
            「本当にサブスクにすれば儲かるのか？」<br className="hidden sm:block"/>
            自社の商材をストック型に転換した場合の「顧客1社あたりの生涯売上（LTV）」と「損益分岐点」を計算し、どちらのモデルが自社に合っているか客観的にジャッジします。
          </p>
        </div>

        <div className="p-8 sm:p-10 flex flex-col lg:flex-row gap-10">
          
          {/* 入力エリア */}
          <div className="w-full lg:w-1/2 flex flex-col space-y-8">
            <h3 className="text-lg font-black text-slate-800 border-b-2 border-indigo-500 pb-2 inline-block self-start">
              STEP 1: 単価の設定
            </h3>
            
            <div className="space-y-6 bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <div className="space-y-3">
                <div className="flex justify-between items-end">
                  <label className="block text-sm font-bold text-slate-700">現状の「売り切り」販売単価</label>
                  <span className="text-xl font-black text-indigo-700">{oneTimePrice.toLocaleString()} <span className="text-sm font-bold text-slate-500">万円/件</span></span>
                </div>
                <input type="range" min="10" max="500" step="10" value={oneTimePrice} onChange={(e) => setOneTimePrice(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600" />
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-end">
                  <label className="block text-sm font-bold text-slate-700">想定「サブスク（保守/SaaS）」月額</label>
                  <span className="text-xl font-black text-indigo-700">{subPrice.toLocaleString()} <span className="text-sm font-bold text-slate-500">万円/月</span></span>
                </div>
                <input type="range" min="0.5" max="50" step="0.5" value={subPrice} onChange={(e) => setSubPrice(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600" />
              </div>
            </div>

            <h3 className="text-lg font-black text-slate-800 border-b-2 border-fuchsia-500 pb-2 inline-block self-start mt-4">
              STEP 2: 顧客の定着率（重要）
            </h3>

            <div className="space-y-4 bg-fuchsia-50 p-6 rounded-2xl border border-fuchsia-200 relative overflow-hidden">
              <p className="text-sm font-bold text-fuchsia-800 mb-2 relative z-10">
                毎月、何%の顧客が解約すると想定しますか？
              </p>
              
              <div className="flex justify-between items-end relative z-10">
                <label className="block text-sm font-bold text-fuchsia-700">月次解約率（チャーンレート）</label>
                <span className="text-3xl font-black text-fuchsia-600">{churnRate.toFixed(1)} <span className="text-sm font-bold text-fuchsia-500">%</span></span>
              </div>
              <input type="range" min="0.1" max="10" step="0.1" value={churnRate} onChange={(e) => setChurnRate(Number(e.target.value))} className="w-full h-3 bg-fuchsia-200 rounded-lg appearance-none cursor-pointer accent-fuchsia-600 relative z-10" />
              
              <div className="bg-white/80 p-3 rounded-lg border border-fuchsia-100 mt-2">
                <p className="text-xs font-bold text-slate-600 text-center">
                  💡 この解約率の場合、顧客の平均利用期間は<br/>
                  <span className="text-lg text-fuchsia-600 font-black">{Math.floor(averageLifespanMonths)} ヶ月</span>
                  （約 {(averageLifespanMonths / 12).toFixed(1)} 年）となります。
                </p>
              </div>
            </div>

          </div>

          {/* 出力エリア */}
          <div className="w-full lg:w-1/2 flex flex-col space-y-6">
            
            <h3 className="text-lg font-black text-slate-800 text-center">
              顧客1社あたりの生涯売上（LTV）比較
            </h3>

            <div className="grid grid-cols-2 gap-4">
              {/* 売り切り */}
              <div className={`p-4 rounded-2xl border-2 text-center transition-all ${!isSubBetter ? 'bg-indigo-50 border-indigo-400 shadow-md transform scale-105' : 'bg-slate-50 border-slate-200 opacity-70'}`}>
                <p className="text-xs font-bold text-slate-500 mb-1">売り切りモデル</p>
                <div className="text-xl sm:text-2xl font-black text-indigo-700">
                  {formatCurrency(displayOneTimeLtv)}<span className="text-sm font-bold ml-1">円</span>
                </div>
                <p className="text-[10px] text-slate-400 mt-1">1回売って終了</p>
              </div>

              {/* サブスク */}
              <div className={`p-4 rounded-2xl border-2 text-center transition-all ${isSubBetter ? 'bg-fuchsia-50 border-fuchsia-400 shadow-md transform scale-105' : 'bg-slate-50 border-slate-200 opacity-70'}`}>
                <p className="text-xs font-bold text-slate-500 mb-1">サブスクモデル</p>
                <div className="text-xl sm:text-2xl font-black text-fuchsia-700">
                  {formatCurrency(displaySubLtv)}<span className="text-sm font-bold ml-1">円</span>
                </div>
                <p className="text-[10px] text-slate-400 mt-1">平均 {Math.floor(averageLifespanMonths)}ヶ月継続</p>
              </div>
            </div>

            {/* 結果ジャッジ */}
            <div className={`rounded-2xl p-6 text-center text-white relative overflow-hidden transform transition-all ${isSubBetter ? 'bg-gradient-to-br from-fuchsia-600 to-indigo-700 shadow-lg' : 'bg-slate-600'}`}>
              
              {isSubBetter ? (
                <>
                  <p className="text-sm font-bold text-fuchsia-100 mb-1">最終判定</p>
                  <p className="text-2xl font-black mb-3">サブスク化した方が儲かります</p>
                  <p className="text-sm bg-black/20 inline-block px-4 py-2 rounded-full font-medium">
                    1社あたり <span className="text-yellow-300 font-bold">{formatCurrency(difference)}円</span> の利益増
                  </p>
                </>
              ) : (
                <>
                  <p className="text-sm font-bold text-slate-300 mb-1">最終判定</p>
                  <p className="text-xl font-black mb-3 text-rose-300">今の解約率なら、売り切りの方がマシです</p>
                  <p className="text-xs bg-black/30 inline-block px-4 py-2 rounded-full text-slate-200">
                    サブスク化するなら、解約率を大幅に下げる施策が必要です。
                  </p>
                </>
              )}
            </div>

            {/* 損益分岐点とグラフ */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm font-bold text-slate-500">損益分岐点（クロスオーバー）</p>
                  <p className="text-xs text-slate-400 mt-1">契約から売り切りの売上を超えるまで</p>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-black text-indigo-900">{breakEvenMonths}</span>
                  <span className="text-sm font-bold text-slate-500 ml-1">ヶ月</span>
                  {breakEvenYears > 0 && (
                    <p className="text-xs font-bold text-indigo-600 mt-1">
                      （約 {breakEvenYears}年{breakEvenRemainingMonths > 0 ? `と${breakEvenRemainingMonths}ヶ月` : ''}）
                    </p>
                  )}
                </div>
              </div>

              {/* グラフ描画エリア */}
              <div className="relative w-full h-32 mt-4 bg-slate-50 rounded-lg border border-slate-100 overflow-hidden">
                {/* グラフ目盛り（背景） */}
                <div className="absolute inset-0 flex flex-col justify-between p-2">
                  <div className="w-full border-t border-slate-200 border-dashed"></div>
                  <div className="w-full border-t border-slate-200 border-dashed"></div>
                  <div className="w-full border-t border-slate-200 border-dashed"></div>
                </div>

                <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                  {/* 売り切りの線（横ばい） */}
                  <line 
                    x1="0" 
                    y1={getY(actualOneTimeLtv)} 
                    x2="100%" 
                    y2={getY(actualOneTimeLtv)} 
                    stroke="#4338ca" /* indigo-700 */
                    strokeWidth="3"
                    strokeDasharray="6,4"
                  />
                  {/* サブスクの線（右肩上がり） */}
                  <line 
                    x1="0" 
                    y1="100%" 
                    x2="100%" 
                    y2={getY((subPrice * 10000) * graphMaxMonths)} 
                    stroke="#c026d3" /* fuchsia-600 */
                    strokeWidth="3"
                  />
                  {/* 損益分岐点の交点マーク */}
                  {breakEvenMonths <= graphMaxMonths && (
                    <circle 
                      cx={getX(breakEvenMonths)} 
                      cy={getY(actualOneTimeLtv)} 
                      r="6" 
                      fill="#f59e0b" /* amber-500 */
                      stroke="#fff"
                      strokeWidth="2"
                    />
                  )}
                </svg>
                
                {/* 凡例 */}
                <div className="absolute top-2 left-2 flex flex-col gap-1">
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-1 border-t-2 border-dashed border-indigo-700"></div>
                    <span className="text-[10px] font-bold text-slate-500">売り切り</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-1 bg-fuchsia-600"></div>
                    <span className="text-[10px] font-bold text-slate-500">サブスク</span>
                  </div>
                </div>
                
                {/* 交点のラベル */}
                {breakEvenMonths <= graphMaxMonths && (
                  <div 
                    className="absolute text-[10px] font-black text-amber-600 bg-amber-50 px-1 rounded shadow-sm"
                    style={{ 
                      left: `calc(${getX(breakEvenMonths)} - 10px)`, 
                      top: `calc(${getY(actualOneTimeLtv)} + 10px)` 
                    }}
                  >
                    逆転!
                  </div>
                )}
              </div>
            </div>

            {/* CTA */}
            {isSubBetter && (
              <div className="mt-2 text-center">
                <a href="#download-form" className="inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-black py-4 px-8 rounded-full shadow-lg transition-transform transform hover:-translate-y-1">
                  失敗しないサブスク化・SaaS化の事業計画をDL
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
