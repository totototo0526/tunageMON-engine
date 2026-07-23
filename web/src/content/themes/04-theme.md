---
id: "04"
layout: "template_a"
title: "つなげモン ハブ"
subtitle: "バラバラのExcelを、全社でつながるデータベースへ。"
description: '社内に点在する<span class="text-blue-600 font-bold border-b-2 border-blue-600">数十個のExcelやスプレッドシート</span>を統合し、一つのデータベースとして機能させます。基幹システムを入れ替えることなく、部署間の情報分断を解消します。'
hero_services:
  - "01 脱Excel・スプレッドシートの完全データベース化"
  - "02 既存の基幹システムや会計ソフトとのハブ機能"
  - "03 経営状況をリアルタイムで可視化するダッシュボード"
button:
  type: "link"
  url: "./themes/04-theme/index.html"
  text: "詳細を確認する"
  icon: "external-link"
problems:
  - title: "「最新版」がどれか分からないExcel"
    description: "各部署が独自のフォーマットでExcelを作成。ファイル名に「最新版」「最終版２」が付き、本当のデータがどれか分からない。"
    image: "theme04_prob1.png"
  - title: "手作業のシステム間転記"
    description: "販売管理から出力したCSVを、経理が別のExcelにコピペして会計ソフトにアップロードする、虚無な作業が毎日発生している。"
    image: "theme04_prob2.png"
  - title: "経営数字が出るのが翌月中旬"
    description: "データがバラバラなため、経営会議用の資料をまとめるのに膨大な工数がかかり、スピーディな意思決定ができない。"
    image: "theme04_prob3.png"
diagram_html: |
  <div class="flex flex-col gap-2 z-10 w-24">
      <div class="bg-white py-2 px-2 rounded-lg shadow-sm text-center flex flex-col items-center justify-center border border-slate-200">
          <i data-lucide="cloud" class="w-5 h-5 text-blue-400 mb-1"></i><span class="text-[9px] font-bold">Salesforce等</span>
      </div>
      <div class="bg-white py-2 px-2 rounded-lg shadow-sm text-center flex flex-col items-center justify-center border border-slate-200">
          <i data-lucide="layers" class="w-5 h-5 text-yellow-500 mb-1"></i><span class="text-[9px] font-bold">Kintone等</span>
      </div>
  </div>
  <div class="h-1 bg-purple-200 w-8 flex-shrink-0 relative"><i data-lucide="arrow-right-left" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-purple-500 w-4 h-4"></i></div>
  <div class="bg-orange-500 text-white p-4 rounded-full shadow-lg z-10"><i data-lucide="cable" class="w-6 h-6 transform rotate-90"></i></div>
  <div class="h-1 bg-purple-200 w-8 flex-shrink-0 relative"><i data-lucide="arrow-right-left" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-purple-500 w-4 h-4"></i></div>
  <div class="bg-slate-800 text-white p-4 rounded-xl shadow-md text-center z-10 w-28 border-b-4 border-slate-900">
      <i data-lucide="database" class="w-8 h-8 text-purple-400 mx-auto mb-2"></i><span class="text-[10px] font-bold">基幹システム</span>
  </div>
blocks:
  - type: BlockStats
    subtitle: "01"
    title: "圧倒的な導入効果"
    desc: "「つなげモン DB」によるデータの一元化は、社内に劇的な変化をもたらします。※以下は支援内容に基づく想定イメージです。"
    items:
      - number: "95%"
        label: "入力工数の削減"
        desc: "各システム間での手打ち作業やコピペがなくなり、本来の業務に集中できます。"
      - number: "0件"
        label: "転記ミスの発生"
        desc: "システム間の自動データ連携により、ヒューマンエラーによる数え間違いや入力漏れを撲滅します。"
      - number: "1/3"
        label: "システム維持費"
        desc: "巨大で高額なERPを導入するのではなく、「つなげモン」がハブになることでコストを抑えます。"

  - type: BlockIntegration
    subtitle: "02"
    title: "すべてを繋ぐハブになる"
    desc: "「つなげモン DB」が社内システムの中央に立ち、お使いのあらゆるツールをシームレスに連携させます。"
    center: "つなげモン DB"
    spokes:
      - name: "Excel/CSV"
        icon: "📄"
      - name: "販売管理"
        icon: "🏢"
      - name: "会計システム"
        icon: "💰"
      - name: "Kintone"
        icon: "☁️"
      - name: "チャットツール"
        icon: "💬"

  - type: BlockCards
    subtitle: "03"
    title: "つなげモン DBの3つの特長"
    items:
      - badge: "統合"
        title: "Excelの乱立をストップ"
        subtitle: "1つのシステムで共有"
        desc: "これまで部署ごとに管理していたExcelを廃止。ブラウザからアクセスできるデータベースに統合し、常に最新のデータを全員が見れるようにします。"
      - badge: "連携"
        title: "レガシーシステムとの共存"
        subtitle: "入れ替え不要"
        desc: "現在使っている販売管理や生産管理システムを入れ替える必要はありません。APIやRPA、CSV連携など最適な方法でデータをつなぎます。"
      - badge: "可視化"
        title: "経営ダッシュボード"
        subtitle: "今月の売上をリアルタイムに"
        desc: "バラバラだったデータが集まることで、経営者が見たい「今日の売上」「各部署の進捗」がリアルタイムにグラフ化されます。"

  - type: BlockFAQ
    subtitle: "04"
    title: "よくある質問"
    items:
      - q: "現在使っているExcelのフォーマットがかなり複雑ですが、移行できますか？"
        a: "はい、可能です。複雑なマクロや計算式が組まれている場合でも、業務の目的を整理し、Webシステム上で再現（またはより効率的な形に再設計）いたします。"
      - q: "連携できるシステムに制限はありますか？"
        a: "APIが公開されているSaaSはもちろん、オンプレミスのシステムや、APIがないシステムでもCSV連携やRPAを駆使してデータをつなぐことが可能です。"
      - q: "セキュリティやバックアップ体制はどうなっていますか？"
        a: "AWSなどの堅牢なクラウド基盤を利用し、データの暗号化および1日1回の自動バックアップを標準提供しています。"

  - type: BlockCTA
    theme: "dark"
    title: "Excel集計で徹夜するのは、もう終わりにしませんか。"
    desc: "貴社の業務フローや既存のExcelファイルをヒアリングのうえ、最適なデータベース統合プランとお見積りをご提案いたします。"
    button:
      text: "DB統合を相談する"
      url: "https://www.k-sp.co.jp/admin/std/contact/new"
---
