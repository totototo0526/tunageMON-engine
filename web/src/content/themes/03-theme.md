---
id: "03"
layout: "template_a"
title: "つなげモン モバイル"
subtitle: "現場のスマホが、最強の入力ツールになる。"
description: '倉庫や工場での仕入・出荷・棚卸作業を、<span class="text-yellow-600 font-bold border-b-2 border-yellow-600">お持ちのスマホやタブレットのカメラ（バーコード読取）</span>で完結させます。現場から直接データベースを更新し、事務所での「Excelへの打ち直し」を撲滅します。'
hero_services:
  - "01 スマホカメラによる高速バーコード/QR読取"
  - "02 現場から基幹システムへのリアルタイム在庫反映"
  - "03 電波が届かない倉庫でも安心のオフラインモード"
pricing:
  free_trial: "まずは1台のスマホで、実際の倉庫での読み取りスピードと使い勝手をお試しいただけます。"
  initial: "20"
  monthly: "10"
links:
  - text: "詳細を確認する"
    url: "./themes/03-theme/index.html"
    type: "link"
    icon: "external-link"
  - text: "利用イメージを見る"
    url: "./themes/03-theme/usecase/index.html"
    type: "link"
    icon: "image"
problems:
  - title: "終わらない「事務所での打ち直し」"
    description: "現場では紙の野帳（バインダー）に手書き。夕方事務所に戻ってから、疲れた体で数時間かけてExcelやシステムに手打ちしている。"
    image: "theme03_prob1.png"
  - title: "ハンディターミナルが高額すぎる"
    description: "専用のバーコードリーダー（ハンディターミナル）を導入しようとしたが、1台数十万円もするため全従業員に配れない。"
    image: "theme03_prob2.png"
  - title: "「今、在庫ある？」が誰にも分からない"
    description: "紙のデータがシステムに入力されるのは翌日。営業から「在庫ある？」と聞かれても、現場に見に行かないと確実な数字が出せない。"
    image: "theme03_prob3.png"
diagram_html: |
  <div class="bg-slate-800 p-4 rounded-2xl shadow-sm text-center z-10 w-24 border-2 border-slate-700">
      <i data-lucide="scan-barcode" class="w-8 h-8 text-yellow-400 mx-auto mb-2"></i><span class="text-[10px] font-bold text-white">スマホアプリ</span>
  </div>
  <div class="h-1 bg-yellow-200 w-12 flex-shrink-0 relative"><i data-lucide="wifi" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-yellow-500 w-4 h-4 transform rotate-90"></i></div>
  <div class="bg-orange-500 text-white p-4 rounded-full shadow-lg z-10"><i data-lucide="smartphone-nfc" class="w-6 h-6"></i></div>
  <div class="h-1 bg-slate-300 w-12 flex-shrink-0"></div>
  <div class="bg-slate-800 text-white p-4 rounded-xl shadow-md text-center z-10 w-28 border-b-4 border-slate-900">
      <i data-lucide="database" class="w-8 h-8 text-yellow-400 mx-auto mb-2"></i><span class="text-[10px] font-bold">在庫管理DB</span>
  </div>
blocks:
  - type: BlockText
    paragraphs:
      - "「現場の作業が終わってからが、本当の残業の始まり」"
      - "そんな状態から抜け出しましょう。"
      - "「つなげモン モバイル」は、高価な専用端末を必要としません。現場スタッフが普段から使い慣れているスマートフォンを、そのまま業務用の最強スキャナに変えます。"

  - type: BlockTable
    subtitle: "02"
    title: "現場入力ツールの比較"
    headers:
      - "従来の紙・手入力"
      - "専用ハンディターミナル"
      - "つなげモン モバイル"
    rows:
      - label: "導入コスト"
        values:
          - "無料（紙代のみ）"
          - "1台 15万〜30万円"
          - "手持ちのスマホで0円"
      - label: "リアルタイム性"
        values:
          - "×（翌日反映）"
          - "〇（即時反映）"
          - "〇（即時反映）"
      - label: "画面の柔軟性"
        values:
          - "紙なので自由"
          - "白黒で文字が小さく変更不可"
          - "フルカラーでボタンも大きくカスタマイズ自在"
      - label: "教育コスト"
        values:
          - "不要"
          - "専用の操作説明が必要"
          - "直感的なアプリ操作で不要"

  - type: BlockSteps
    subtitle: "03"
    title: "現場での新しい作業フロー"
    items:
      - title: "【現場】スマホでQR/バーコードをスキャン"
        desc: "商品や棚に貼られたバーコードをスマホのカメラで読み取ります。連続スキャンにも対応し、サクサク読み取れます。"
      - title: "【現場】数量を入力して「完了」をタップ"
        desc: "大きなテンキー画面で数量を入力。軍手をしていても押しやすいようにボタンを極大化しています。"
      - title: "【事務所】リアルタイムに在庫が更新される"
        desc: "現場で完了を押した瞬間に、事務所の在庫管理システムが更新されます。事務員は画面を見ているだけで作業完了です。"

  - type: BlockReasoningGrid
    title: "現場スタッフに嫌がられない4つの工夫"
    items:
      - num: "POINT 01"
        title: "「老眼でも見える」デカ文字設計"
        desc: "現場の年齢層に合わせて、文字やボタンのサイズを極限まで大きく設計。見間違いや押し間違いを防ぎます。"
        image: "theme03_feat1.png"
      - num: "POINT 02"
        title: "圏外の倉庫でも動くオフラインモード"
        desc: "奥の倉庫や冷蔵庫の中など、Wi-Fiや電波が届かない場所でもアプリはサクサク動きます。電波が復活した瞬間に自動送信します。"
        image: "theme03_feat2.png"
      - num: "POINT 03"
        title: "写真や音声でもメモを残せる"
        desc: "「箱が破損していた」などのイレギュラー事態には、スマホのカメラで写真をパシャリ。文字を打つのが面倒なら音声入力も可能です。"
        image: "theme03_feat3.png"
      - num: "POINT 04"
        title: "多言語対応（外国人スタッフ向け）"
        desc: "ログインするユーザーごとに、画面の言語を英語やベトナム語などにワンタップで切り替え。言葉の壁によるミスを減らします。"
        image: "theme03_feat4.png"

  - type: BlockBeforeAfter
    subtitle: "04"
    title: "劇的な変化をもたらした事例"
    desc: "※以下は支援内容に基づく想定イメージです。"
    items:
      - tag: "製造業の部品ピッキング・棚卸し"
        before: "月末の棚卸しは工場を止めて2日がかりの紙作業"
        after: "通常業務の合間にスマホでスキャン、半日で完了"
        desc: "これまで2人がかりで読み上げとバインダー記入を行っていた棚卸し作業が、1人1台のスマホスキャンに変更。ペーパーレス化により集計の手間がゼロになり、棚卸しにかかる工数が75%削減されました。"
        image: "theme03_case1.png"

  - type: BlockCTA
    theme: "dark"
    title: "現場のスマホを、今すぐ業務端末へ"
    desc: "アプリのインストールとカメラでの読み取りテストは、今すぐ無料でお試しいただけます。"
    button:
      text: "スマホ活用を相談する"
      url: "https://www.k-sp.co.jp/admin/std/contact/new"
---

