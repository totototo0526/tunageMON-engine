---
id: "05"
layout: "template_a"
title: "つなげモン IoT"
subtitle: "工場の「勘と経験」を、圧倒的な「データ」に変える。"
description: '工場の生産設備やセンサー等の<span class="text-red-600 font-bold border-b-2 border-red-600">ハードウェア（IoT）</span>と自社システムを直結させます。古い機械でも後付けセンサーでデータを収集し、目視確認なしに工場の稼働状況をリアルタイムで可視化します。'
hero_services:
  - "01 古い生産設備への後付けセンサー対応"
  - "02 異常発生時のスマホへの即時アラート通知"
  - "03 稼働率や歩留まりのリアルタイム・ダッシュボード"
button:
  type: "link"
  url: "./themes/05-theme/index.html"
  text: "詳細を確認する"
  icon: "external-link"
problems:
  - title: "機械がいつ止まったか分からない"
    description: "工場の機械がチョコ停（一時停止）しても、担当者が現場に行くまで気づかず、生産計画に遅れが生じている。"
    image: "theme05_prob1.png"
  - title: "紙の稼働日報によるタイムラグ"
    description: "機械の稼働時間や生産個数を、作業員がストップウォッチで計って紙に記録しており、正確性に欠ける。"
    image: "theme05_prob2.png"
  - title: "職人の「勘」に依存した異常検知"
    description: "「機械の音がいつもと違う」というベテランの感覚に頼っており、若手では故障の予兆に気づけない。"
    image: "theme05_prob3.png"
diagram_html: |
  <div class="bg-slate-700 text-white p-4 rounded-xl shadow-sm text-center z-10 w-24 border-b-4 border-slate-900">
      <i data-lucide="factory" class="w-8 h-8 text-red-400 mx-auto mb-2"></i><span class="text-[10px] font-bold">制御装置等</span>
  </div>
  <div class="border-t-2 border-dashed border-red-300 w-12 flex-shrink-0 relative"><i data-lucide="rss" class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-red-500 w-4 h-4 bg-slate-50"></i></div>
  <div class="bg-orange-500 text-white p-4 rounded-full shadow-lg z-10"><i data-lucide="radio" class="w-6 h-6"></i></div>
  <div class="h-1 bg-slate-300 w-12 flex-shrink-0"></div>
  <div class="bg-slate-800 text-white p-4 rounded-xl shadow-md text-center z-10 w-28 border-b-4 border-slate-900">
      <i data-lucide="database" class="w-8 h-8 text-red-400 mx-auto mb-2"></i><span class="text-[10px] font-bold">生産管理DB</span>
  </div>
blocks:
  - type: BlockStats
    subtitle: "01"
    title: "期待できる現場改善"
    desc: "※以下は支援内容に基づく想定イメージです。"
    items:
      - number: "大幅減"
        label: "ダウンタイム"
        desc: "故障の予兆を事前に検知し、機械が完全に停止する前にメンテナンスを行います。"
      - number: "即時"
        label: "異常の通知"
        desc: "ランプやアラームだけでなく、担当者のスマホ・スマートウォッチに直接通知します。"
      - number: "24h"
        label: "無人監視"
        desc: "夜間や休日でもセンサーが工場の状態を監視し続け、異常があれば即座に管理者を呼び出します。"

  - type: BlockIntegration
    subtitle: "02"
    title: "古い機械も最新システムとつながる"
    desc: "「つなげモン IoT」は、特殊なプロトコルを持つ工場設備と、クラウドシステムを繋ぐ強力な架け橋になります。"
    center: "つなげモン IoT"
    spokes:
      - name: "温度・振動センサー"
        icon: ""
      - name: "PLC（制御装置）"
        icon: ""
      - name: "生産管理システム"
        icon: ""
      - name: "Kintone/AWS"
        icon: ""
      - name: "LINE WORKS"
        icon: ""

  - type: BlockBeforeAfter
    subtitle: "03"
    title: "現場のビフォー・アフター"
    desc: "※以下は支援内容に基づく想定イメージです。"
    items:
      - tag: "異常検知のスピード"
        before: "パトランプが回っても、広い工場では誰も気づかない"
        after: "異常発生から0.5秒で、担当者のスマホにプッシュ通知"
        desc: "これまでは機械のパトランプを目視で確認する必要がありましたが、システム直結により、設備の異常信号をキャッチした瞬間にチャットツールへ自動通知。対応スピードが劇的に向上しました。"
        image: "theme05_case1.png"
      - tag: "歩留まり・品質の安定"
        before: "不良品が多発してから、数時間後にようやく機械を止める"
        after: "振動センサーの異常値で、不良が出る前にアラート通知"
        desc: "後付けの振動・温度センサーが「いつもと違う波形」を検知。熟練工の勘に頼っていた故障の予兆をデータで捉え、不良品を大量生産してしまう前に対策が打てるようになりました。"
        image: "theme05_case2.png"
      - tag: "稼働日報の自動化"
        before: "作業員が手書きで日報を作成し、翌日にExcelへ手打ち"
        after: "PLCから直接データを取得し、リアルタイムにグラフ化"
        desc: "各機械の稼働時間や生産個数を、制御装置（PLC）から直接データベースへ送信。事務所のモニターに工場の「今」が常に表示され、日報作成の手間もゼロになりました。"
        image: "theme05_case3.png"

  - type: BlockSteps
    subtitle: "04"
    title: "導入までの3ステップ"
    items:
      - title: "【Step1】センサーの後付け（1日）"
        desc: "既存の機械を改造する必要はありません。外付けの電流センサーや振動センサーを後付けするだけで、データ収集の準備が完了します。"
      - title: "【Step2】データの収集と分析（2週間）"
        desc: "センサーから上がってくるデータを蓄積し、「正常時」の波形をシステムに学習させます。"
      - title: "【Step3】リアルタイム監視の開始"
        desc: "ダッシュボードによる稼働状況の可視化と、異常値が出た際のアラート通知の運用をスタートします。"

  - type: BlockCTA
    theme: "dark"
    title: "工場の「今」を、手元のスマホで確認しませんか。"
    desc: "まずは1台の機械から。貴社の設備環境に合わせた最適なIoT化プランをご提案いたします。"
    button:
      text: "IoT導入を相談する"
      url: "https://www.k-sp.co.jp/admin/std/contact/new"
---

