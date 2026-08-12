import React, { useState, useEffect } from 'react';

export default function TonosamaCalculator() {
  // STEP 1: コスト入力
  const [hourlyWage, setHourlyWage] = useState<number>(1500); // 円/時
  const [processingMinutes, setProcessingMinutes] = useState<number>(15); // 分/件
  const [shippingCost, setShippingCost] = useState<number>(800); // 円/件 (梱包・送料)
  const [grossMarginRate, setGrossMarginRate] = useState<number>(30); // %

  // STEP 2: 状況入力
  const [totalMonthlyOrders, setTotalMonthlyOrders] = useState<number>(1000); // 件/月
  const [microLotRatio, setMicroLotRatio] = useState<number>(30); // % (赤字ライン以下の割合)
  const [averageMicroLotValue, setAverageMicroLotValue] = useState<number>(2000); // 円 (極小ロットの平均単価)

  // アニメーション用
  const [displayAnnualLoss, setDisplayAnnualLoss] = useState<number>(0);
  const [displayRequiredSales, setDisplayRequiredSales] = useState<number>(0);

  // --- 計算ロジック ---
  // 1件あたりの処理コスト
  const adminCost = hourlyWage * (processingMinutes / 60);
  const totalCostPerOrder = adminCost + shippingCost;

  // 損益分岐単価（この金額以上売らないと赤字）
  const breakEvenValue = Math.ceil(totalCostPerOrder / (grossMarginRate / 100));

  // 極小ロットの件数
  const microLotOrdersPerMonth = Math.floor(totalMonthlyOrders * (microLotRatio / 100));

  // 極小ロット1件あたりの粗利
  const microLotGrossProfit = averageMicroLotValue * (grossMarginRate / 100);
  
  // 極小ロット1件あたりの赤字額
  const lossPerMicroLotOrder = totalCostPerOrder > microLotGrossProfit 
    ? (totalCostPerOrder - microLotGrossProfit) 
    : 0;

  // 年間赤字総額
  const actualAnnualLoss = lossPerMicroLotOrder * microLotOrdersPerMonth * 12;

  // 赤字をカバーするために必要な新規売上（年間）
  const actualRequiredSales = actualAnnualLoss / (grossMarginRate / 100);

  // averageMicroLotValue が breakEvenValue を超えないように制御（UI上の上限）
  const maxMicroLotValue = breakEvenValue > 100 ? breakEvenValue - 1 : 100;

  useEffect(() => {
    // averageMicroLotValue がボーダーを超えていたら自動補正
    if (averageMicroLotValue >= breakEvenValue && breakEvenValue > 100) {
      setAverageMicroLotValue(breakEvenValue - 100);
    }
  }, [breakEvenValue]);

  useEffect(() => {
    const duration = 800; // ms
    const steps = 20;
    const stepTime = Math.abs(Math.floor(duration / steps));
    let currentStep = 0;
    
    const startLoss = displayAnnualLoss;
    const diffLoss = actualAnnualLoss - startLoss;

    const startSales = displayRequiredSales;
    const diffSales = actualRequiredSales - startSales;

    const timer = setInterval(() => {
      currentStep++;
      setDisplayAnnualLoss(startLoss + (diffLoss * (currentStep / steps)));
      setDisplayRequiredSales(startSales + (diffSales * (currentStep / steps)));
      
      if (currentStep >= steps) {
        clearInterval(timer);
        setDisplayAnnualLoss(actualAnnualLoss);
        setDisplayRequiredSales(actualRequiredSales);
      }
    }, stepTime);
    return () => clearInterval(timer);
  }, [actualAnnualLoss, actualRequiredSales]);

  const formatCurrency = (value: number) => Math.floor(value).toLocaleString();

  return (
    <div className="w-full max-w-5xl mx-auto p-4 sm:p-8">
      <div className="bg-white/70 backdrop-blur-xl border border-white/50 shadow-2xl rounded-3xl overflow-hidden relative">
        <div className="bg-gradient-to-r from-rose-900 to-red-800 p-8 sm:p-10 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-red-500/30 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-48 h-48 rounded-full bg-orange-400/20 blur-3xl"></div>
          <h2 className="relative z-10 text-2xl sm:text-3xl font-extrabold mb-4 tracking-tight leading-snug" style={{ fontFeatureSettings: "'palt'" }}>
            バックオフィスの隠れ赤字チェッカー
          </h2>
          <p className="relative z-10 text-rose-100 text-sm sm:text-base opacity-90 leading-relaxed max-w-3xl">
            「お得意様だから」と受けている細かい注文、実は送料と人件費で完全に赤字になっていませんか？<br className="hidden sm:block"/>
            御社の「損益分岐単価（最低注文ライン）」を割り出し、極小ロット発注がもたらす年間赤字額と、それをカバーするために必要な新規売上を計算します。
          </p>
        </div>

        <div className="p-8 sm:p-10 flex flex-col lg:flex-row gap-10">
          
          {/* 入力エリア */}
          <div className="w-full lg:w-1/2 flex flex-col space-y-8">
            
            {/* STEP 1: コストから赤字ラインを逆算 */}
            <div className="space-y-6">
              <h3 className="text-lg font-black text-slate-800 border-b-2 border-rose-500 pb-2 inline-block">
                STEP 1: 処理コストから「赤字ライン」を計算
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2 bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <label className="block text-xs font-bold text-slate-600">事務担当の時給</label>
                  <div className="flex items-baseline gap-1">
                    <span className="text-lg font-black text-slate-800">{formatCurrency(hourlyWage)}</span><span className="text-xs font-bold text-slate-500">円</span>
                  </div>
                  <input type="range" min="1000" max="3000" step="50" value={hourlyWage} onChange={(e) => setHourlyWage(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-rose-600" />
                </div>
                
                <div className="space-y-2 bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <label className="block text-xs font-bold text-slate-600">1件の処理時間</label>
                  <div className="flex items-baseline gap-1">
                    <span className="text-lg font-black text-slate-800">{processingMinutes}</span><span className="text-xs font-bold text-slate-500">分</span>
                  </div>
                  <input type="range" min="1" max="60" step="1" value={processingMinutes} onChange={(e) => setProcessingMinutes(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-rose-600" />
                </div>

                <div className="space-y-2 bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <label className="block text-xs font-bold text-slate-600">梱包資材・送料</label>
                  <div className="flex items-baseline gap-1">
                    <span className="text-lg font-black text-slate-800">{formatCurrency(shippingCost)}</span><span className="text-xs font-bold text-slate-500">円</span>
                  </div>
                  <input type="range" min="0" max="2000" step="100" value={shippingCost} onChange={(e) => setShippingCost(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-rose-600" />
                </div>

                <div className="space-y-2 bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <label className="block text-xs font-bold text-slate-600">商材の粗利率</label>
                  <div className="flex items-baseline gap-1">
                    <span className="text-lg font-black text-slate-800">{grossMarginRate}</span><span className="text-xs font-bold text-slate-500">%</span>
                  </div>
                  <input type="range" min="10" max="80" step="1" value={grossMarginRate} onChange={(e) => setGrossMarginRate(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-rose-600" />
                </div>
              </div>

              <div className="bg-rose-50 border-l-4 border-rose-500 p-4 rounded-r-xl">
                <p className="text-sm font-bold text-slate-700">上記コストを回収するための「損益分岐単価」</p>
                <div className="flex items-end gap-2 mt-1">
                  <span className="text-3xl font-black text-rose-600">{formatCurrency(breakEvenValue)}</span>
                  <span className="text-sm font-bold text-slate-600 mb-1">円</span>
                </div>
                <p className="text-xs font-bold text-rose-500 mt-1">※これ以下の注文は、受けた時点で「赤字（タダ働き）」です。</p>
              </div>
            </div>

            {/* STEP 2: 極小ロット割合 */}
            <div className="space-y-6">
              <h3 className="text-lg font-black text-slate-800 border-b-2 border-orange-500 pb-2 inline-block">
                STEP 2: その「赤字注文」はどれくらい？
              </h3>
              
              <div className="space-y-4 bg-orange-50 p-6 rounded-2xl border border-orange-200">
                <div className="space-y-2">
                  <div className="flex justify-between items-end">
                    <label className="block text-sm font-bold text-slate-700">月間の総受注件数</label>
                    <span className="text-xl font-black text-orange-700">{formatCurrency(totalMonthlyOrders)} <span className="text-sm font-bold text-slate-500">件</span></span>
                  </div>
                  <input type="range" min="100" max="10000" step="100" value={totalMonthlyOrders} onChange={(e) => setTotalMonthlyOrders(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-orange-500" />
                </div>

                <div className="space-y-2 mt-4">
                  <div className="flex justify-between items-end">
                    <label className="block text-sm font-bold text-slate-700">うち、赤字ライン以下の割合</label>
                    <span className="text-xl font-black text-rose-600">{microLotRatio} <span className="text-sm font-bold text-slate-500">%</span></span>
                  </div>
                  <input type="range" min="0" max="100" step="5" value={microLotRatio} onChange={(e) => setMicroLotRatio(Number(e.target.value))} className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-rose-500 shadow-inner" />
                  <p className="text-xs font-bold text-orange-600 text-right">（月に {formatCurrency(microLotOrdersPerMonth)}件 のタダ働き）</p>
                </div>

                <div className="space-y-2 mt-4 pt-4 border-t border-orange-200/50">
                  <div className="flex justify-between items-end">
                    <label className="block text-sm font-bold text-slate-700">その赤字注文の「平均単価」</label>
                    <span className="text-lg font-black text-orange-700">{formatCurrency(averageMicroLotValue)} <span className="text-sm font-bold text-slate-500">円</span></span>
                  </div>
                  <input type="range" min="0" max={maxMicroLotValue} step="10" value={averageMicroLotValue} onChange={(e) => setAverageMicroLotValue(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-orange-500" />
                </div>
              </div>
            </div>

          </div>

          {/* 出力エリア */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-6">
            
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl relative overflow-hidden text-center">
              {/* 装飾背景 */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-rose-500 to-orange-500"></div>
              
              <h3 className="text-sm font-bold text-slate-500 mb-2">極小ロット発注による</h3>
              <h4 className="text-xl font-black text-slate-800 mb-6">年間「赤字」総額</h4>
              
              <div className="flex justify-center items-end gap-2 mb-2">
                <span className="text-5xl sm:text-6xl font-black text-rose-600 tracking-tighter" style={{ fontFeatureSettings: "'tnum'" }}>
                  {formatCurrency(displayAnnualLoss)}
                </span>
                <span className="text-2xl font-bold text-rose-500 mb-1">円</span>
              </div>
              <p className="text-xs font-bold text-slate-400">
                （赤字注文1件につき {formatCurrency(lossPerMicroLotOrder)}円 の損失 × 年間 {formatCurrency(microLotOrdersPerMonth * 12)}件）
              </p>
              
              <div className="w-full h-px bg-slate-200 my-8"></div>
              
              <h3 className="text-sm font-bold text-slate-500 mb-4">この穴の空いたバケツを埋めるために…</h3>
              
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                <p className="text-xs font-bold text-slate-600 mb-2">営業チームが稼ぐ必要のある「新規売上」</p>
                <div className="flex justify-center items-end gap-2">
                  <span className="text-3xl font-black text-slate-800">{formatCurrency(displayRequiredSales)}</span>
                  <span className="text-lg font-bold text-slate-600">円 / 年</span>
                </div>
                <p className="text-xs text-rose-500 font-bold mt-3">
                  ⚠️ 営業努力が、バックオフィスの赤字処理に全て消えています。
                </p>
              </div>
            </div>

            {/* CTA */}
            {actualAnnualLoss > 0 && (
              <div className="mt-4 text-center">
                <a href="#download-form" className="inline-flex w-full items-center justify-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-black py-4 px-6 rounded-xl shadow-lg transition-transform transform hover:-translate-y-1">
                  見えない赤字を止める！受発注システム導入ガイド
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
