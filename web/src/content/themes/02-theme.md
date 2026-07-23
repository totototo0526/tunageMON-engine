---
id: "02"
layout: "template_a"
title: "つなげモン 窓口"
subtitle: "バラバラな問い合わせを、ひとつの画面に。"
description: '<span class="text-green-600 font-bold border-b-2 border-green-600">eメール、LINE、Webフォーム、FAX</span>といったあらゆる窓口からの連絡を、一元化してデータベースへつなげます。FAXのOCR処理による自動データ化も実現します。'
hero_services:
  - "01 各種窓口（LINE/メール等）の一元管理"
  - "02 FAX注文書のAI-OCR自動データ化"
  - "03 顧客対応ステータスのリアルタイム共有"

button:
  type: "link"
  url: "./themes/02-theme/index.html"
  text: "詳細を確認する"
  icon: "external-link"
problems:
  - title: "バラバラな窓口からの入力漏れ"
    description: "メール、LINE、電話など複数の窓口から連絡が来るため、対応履歴が一元管理できず「誰がどこまで対応したか」がブラックボックス化している。"
    image: "theme02_problem1_scattered_1784773814562.png"
  - title: "紙（FAX）の手動パンチ入力"
    description: "FAXで届いた注文書や問い合わせを、担当者が手作業でシステムに打ち直すという非効率な作業が続いている。"
    image: "theme02_problem2_manualfax_1784773822068.png"
  - title: "顧客をお待たせするレスポンスの遅れ"
    description: "情報が分散しているため、過去の履歴を探すのに時間がかかり、結果的に顧客への回答が遅れてクレームに繋がる。"
    image: "theme02_problem3_slowresponse_1784773840134.png"
diagram_html: |
  <div class="flex flex-col gap-2 z-10 w-24">
      <div class="bg-white py-2 px-3 rounded-lg shadow-sm text-center flex items-center justify-center gap-2 border-l-4 border-blue-400">
          <i data-lucide="mail" class="w-4 h-4 text-slate-500"></i><span class="text-[10px] font-bold">Mail</span>
      </div>
      <div class="bg-white py-2 px-3 rounded-lg shadow-sm text-center flex items-center justify-center gap-2 border-l-4 border-green-500">
          <i data-lucide="message-circle" class="w-4 h-4 text-green-500"></i><span class="text-[10px] font-bold">LINE</span>
      </div>
      <div class="bg-white py-2 px-3 rounded-lg shadow-sm text-center flex items-center justify-center gap-2 border-l-4 border-slate-400">
          <i data-lucide="printer" class="w-4 h-4 text-slate-500"></i><span class="text-[10px] font-bold">FAX</span>
      </div>
  </div>
  <div class="h-1 bg-green-200 w-8 flex-shrink-0"></div>
  <div class="bg-orange-500 text-white p-4 rounded-full shadow-lg z-10"><i data-lucide="filter" class="w-6 h-6"></i></div>
  <div class="h-1 bg-slate-300 w-8 flex-shrink-0"></div>
  <div class="bg-slate-800 text-white p-4 rounded-xl shadow-md text-center z-10 w-28 border-b-4 border-slate-900">
      <i data-lucide="database" class="w-8 h-8 text-green-400 mx-auto mb-2"></i><span class="text-[10px] font-bold">対応履歴DB</span>
  </div>
blocks:
  - type: BlockText
    title: "あらゆる入り口をひとつに集約"
    paragraphs:
      - "顧客は自分にとって一番都合の良い方法で連絡してきます。しかし、受ける側の企業にとっては、LINE、メール、FAX、電話と窓口が増えるほど管理が煩雑になります。"
      - "「つなげモン 窓口」は、それらすべての入り口から送られてくるテキスト、画像、音声を統合し、担当者が一つの画面で対応・管理できる「オムニチャネルハブ」として機能します。"

  - type: BlockCards
    subtitle: "02　解決策"
    title: "あらゆる窓口を統合し、手作業をゼロへ"
    items:
      - badge: "LINE/Web"
        title: "デジタル窓口の統合"
        subtitle: "チャットもメールも一つの画面で"
        desc: "公式LINEアカウントやWebフォームからの問い合わせを自動集約。未対応・対応中などのステータス管理で対応漏れを防ぎます。"
      - badge: "AI-OCR"
        title: "アナログ情報のデータ化"
        subtitle: "FAXの手打ちから卒業"
        desc: "受信したFAXをAI-OCRが自動で読み取り、テキストデータに変換。そのまま受注システムへ連携するため、手打ち作業が不要になります。"
      - badge: "DB連携"
        title: "顧客データベース連携"
        subtitle: "過去の履歴を瞬時に表示"
        desc: "問い合わせが来た瞬間に、自社の顧客データベースと連携して過去の取引履歴や対応履歴を表示。スムーズな対応を支援します。"

  - type: BlockTable
    subtitle: "03　比較"
    title: "従来の手作業との違い"
    headers:
      - "従来の窓口対応"
      - "つなげモン 窓口"
    rows:
      - label: "情報管理"
        values:
          - "ツールごとに画面がバラバラ"
          - "全窓口の情報を一つの画面で管理"
      - label: "FAXの処理"
        values:
          - "印刷して目視確認＆手打ち入力"
          - "AI-OCRで自動テキスト化＆システム連携"
      - label: "対応状況の共有"
        values:
          - "担当者本人しか分からない"
          - "対応ステータスをチーム全体でリアルタイム共有"
      - label: "顧客満足度"
        values:
          - "履歴確認に時間がかかり待たせる"
          - "過去の履歴を踏まえた即座の回答が可能"

  - type: BlockBeforeAfter
    subtitle: "04"
    title: "導入するとこう変わります"
    desc: "※以下は支援内容に基づく想定イメージです。"
    items:
      - tag: "不動産業の顧客対応（LINE活用）"
        before: "営業マンの個人のLINEでやり取りが完結"
        after: "会社としてLINE対応を共有・管理"
        desc: "お客様とのLINEでのやり取りを「つなげモン」に集約。担当者が休みの時でも、別のスタッフが履歴を見てスムーズに対応できるようになりました。"
        image: "theme02_beforeafter1.png"
      - tag: "食品卸売のFAX受注処理"
        before: "1日200枚のFAXを3人で手打ち入力"
        after: "AI-OCRが読み取り、確認ボタンを押すだけ"
        desc: "飲食店から届く手書きFAXをAI-OCRで自動データ化。入力ミスがゼロになり、入力にかかっていた数時間がたったの15分に短縮されました。"
        image: "theme02_beforeafter2.png"
      - tag: "製造業の保守サポート窓口"
        before: "電話・メール・FAXでの依頼が混在"
        after: "顧客ごとの対応履歴を一元管理"
        desc: "バラバラな窓口からの問い合わせを自動で紐付け。過去の対応履歴が瞬時に確認できるため、担当者への引き継ぎがスムーズになり、顧客をお待たせしません。"
        image: "theme02_beforeafter3.png"

  - type: BlockFAQ
    subtitle: "05"
    title: "よくある質問"
    items:
      - q: "AI-OCRで手書き文字はどこまで正確に読み取れますか？"
        a: "FAXの画質や文字の書き方によって精度は変動しますが、実績のあるAI-OCRエンジンを採用し業務効率化を支援します。万が一読み取れなかった部分は、画面上で元画像を見ながら簡単に修正できる仕組みをご用意しています。"
      - q: "現在使っている顧客管理システム(CRM)と連動できますか？"
        a: "連携先システムの仕様（APIの有無など）に合わせて最適な連携方法をご提案します。API連携による自動化が難しい場合でも、CSV等を利用した連携など、実務に合わせた運用フローを構築可能です。"
      - q: "LINE公式アカウントの開設からサポートしてもらえますか？"
        a: "もちろん可能です。LINE公式アカウントの開設・初期設定から、効果的なリッチメニューの作成まで一貫してサポートいたします。"

  - type: BlockCTA
    theme: "dark"
    title: "問い合わせ対応の「ブラックボックス」を解消します"
    desc: "2週間の無料デモで、AI-OCRの読み取り精度をお試しください。"
    button:
      text: "無料デモを申し込む"
      url: "https://www.k-sp.co.jp/admin/std/contact/new"
---

