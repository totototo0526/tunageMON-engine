---
id: "01"
layout: "template_a"
title: "つなげモン ポータル"
subtitle: "取引先・協力会社とのやり取りをすべてデジタル化。"
description: '電話、FAX、バラバラのメールを廃止し、取引先と自社を直接つなぐ<span class="text-blue-600 font-bold border-b-2 border-blue-600">専用のBtoBマイページ</span>を提供します。お互いの「言った・言わない」や転記ミスをゼロにします。'
hero_services:
  - "01 取引先専用のWebマイページ提供"
  - "02 受注・発注・納期回答のリアルタイム共有"
  - "03 既存の基幹システム・SaaSとの自動データ連携"
pricing:
  free_trial: "1ヶ月のトライアル期間中、当社への費用は発生しません。画面の使い勝手を取引先様にもご確認いただけます。"
  initial: "30"
  monthly: "15"
button:
  type: "link"
  url: "./themes/01-theme/index.html"
  text: "詳細を確認する"
  icon: "external-link"
problems:
  - title: "電話・FAXでの受発注による非効率"
    description: "未だに注文はFAXや電話。自社の担当者が手作業でシステムに入力するため、時間がかかり転記ミスも一向に減らない。"
    image: "01-decision.webp"
  - title: "取引先ごとのフォーマットの乱立"
    description: "得意先や仕入先によって、Excel、PDF、メール本文などフォーマットがバラバラで、個別の確認やデータ整形の作業に多くの時間を奪われている。"
    image: "02-case-history.webp"
  - title: "進捗や納期の「言った・言わない」"
    description: "電話での納期回答や仕様変更の連絡が記録に残らず、後になって「聞いていない」「いつ送ってくれるのか」といったトラブルが絶えない。"
    image: "03-outdated-procedure.webp"
diagram_html: |
  <div class="bg-white p-4 rounded-xl shadow-sm text-center z-10 w-24"><i data-lucide="building-2" class="w-8 h-8 text-blue-500 mx-auto mb-2"></i><span class="text-[10px] font-bold">取引先</span></div>
  <div class="h-1 bg-blue-200 w-12 flex-shrink-0"></div>
  <div class="bg-orange-500 text-white p-4 rounded-full shadow-lg z-10"><i data-lucide="workflow" class="w-6 h-6"></i></div>
  <div class="h-1 bg-slate-300 w-12 flex-shrink-0"></div>
  <div class="bg-slate-800 text-white p-4 rounded-xl shadow-md text-center z-10 w-28 border-b-4 border-slate-900">
      <i data-lucide="database" class="w-8 h-8 text-blue-400 mx-auto mb-2"></i><span class="text-[10px] font-bold">自社DB</span>
  </div>
blocks:
  - type: BlockCards
    subtitle: "02　解決策"
    title: "取引先マイページ × 一元管理 × システム連携"
    items:
      - badge: "Web"
        title: "取引先マイページ"
        subtitle: "専用のWeb窓口"
        desc: "取引先ごとに専用のWebページを発行。スマホやPCから24時間いつでも発注や納期回答が可能です。"
      - badge: "一元"
        title: "情報の一元管理"
        subtitle: "進捗のリアルタイム共有"
        desc: "注文ステータス、納期、メッセージをポータル上で共有。お互いに今どうなっているかが一目で分かります。"
      - badge: "連携"
        title: "システム連携"
        subtitle: "転記作業をゼロに"
        desc: "ポータルに入力されたデータは、自社の基幹システムやKintoneなどの既存システムへ自動的に連携されます。"

  - type: BlockBeforeAfter
    subtitle: "03"
    title: "導入するとこう変わります"
    desc: "※以下は支援内容に基づく想定イメージです。"
    items:
      - tag: "製造業の受発注（得意先向け）"
        before: "毎朝、大量のFAX注文を事務員がシステムに手打ち"
        after: "得意先がWebから直接発注"
        desc: "得意先からの注文をFAXからマイページ経由の入力に切り替え。システムへ自動連動するため、事務員の手打ち作業と転記ミスが消滅し、当日出荷の締め切り時間を延長できました。"
        image: "01-manufacturing-exception-review.webp"
      - tag: "建設業の図面・工程共有（協力会社向け）"
        before: "最新の図面や工程表がどれか、現場で混乱"
        after: "マイページを見れば常に最新"
        desc: "協力会社ごとに専用ポータルを発行。現場ごとの最新図面、工程変更の連絡をポータルに集約することで、「言った・言わない」のトラブルが激減しました。"
        image: "02-wholesale-shared-status.webp"
      - tag: "卸売業の仕入管理（メーカー向け）"
        before: "納期回答の催促を毎日電話で確認"
        after: "メーカーが直接納期を更新"
        desc: "仕入先メーカーに対してマイページを発行し、確定した納期をメーカー側で直接入力してもらうフローに変更。電話での確認業務が大幅に削減されました。"
        image: "03-service-shared-ai-workflow.webp"

  - type: BlockReasoningGrid
    title: "なぜ、つなげモン ポータルが選ばれるのか"
    items:
      - num: "POINT 01"
        title: "相手のリテラシーを問わないシンプル画面"
        desc: "取引先に使ってもらえなければ意味がありません。マニュアル不要で、スマホからでも直感的に操作できるシンプルな画面設計にこだわっています。"
        image: "01-policy.webp"
      - num: "POINT 02"
        title: "既存の基幹システムを入れ替えずに済む"
        desc: "ポータル機能のために巨大なERPシステムを導入する必要はありません。「つなげモン」がハブとなり、今の自社システムとWebポータルを安全に連携します。"
        image: "02-memory.webp"
      - num: "POINT 03"
        title: "取引先ごとの複雑な単価・条件に対応"
        desc: "BtoB特有の「取引先ごとの特別単価」や「独自の商習慣」をポータル上で柔軟に再現可能。自社の営業ルールに合わせた画面を構築できます。"
        image: "03-manual.webp"
      - num: "POINT 04"
        title: "コミュニケーションも一元化"
        desc: "単なる受発注データだけでなく、「納期を少し早められないか？」といったメッセージのやり取りも注文データと紐付けてポータル上で完結させます。"
        image: "04-ledger.webp"

  - type: BlockSteps
    subtitle: "04"
    title: "導入の流れ"
    items:
      - title: "現状ヒアリングと画面設計(無料)"
        desc: "現在のFAXやメールのやり取りを分析し、取引先にとって最も入力しやすいWeb画面の形を一緒に設計します。"
      - title: "無料トライアル(1ヶ月)"
        desc: "実際に少数の取引先様にテスト利用していただき、使い勝手や自社システムとの連携テストを行います。"
      - title: "本番移行と利用促進"
        desc: "全取引先への展開を開始します。取引先への案内状作成や、利用定着に向けたサポートも伴走します。"

  - type: BlockFAQ
    subtitle: "05"
    title: "よくある質問"
    items:
      - q: "年配の取引先が多く、Webを使ってくれるか不安です。"
        a: "FAXと併用しながら、使いやすい機能（例: 過去の注文履歴からのワンクリック再発注など）をアピールして少しずつ移行を促すステップをご提案します。入力項目を極限まで減らした専用画面も構築可能です。"
      - q: "自社の基幹システム（オンプレミス）と連携できますか？"
        a: "はい、可能です。CSV連携からAPI連携まで、既存システムの仕様に合わせた連携プログラムを構築し、データの二重入力を防ぎます。"
      - q: "セキュリティ対策はどうなっていますか？"
        a: "取引先ごとの強固なアクセス制限、通信の暗号化（SSL/TLS）、および不正アクセス検知システムを標準で導入しております。"

  - type: BlockCTA
    theme: "dark"
    title: "FAXや電話の受発注から、まずは解放されませんか。"
    desc: "1ヶ月の無料トライアルで、取引先とのスムーズなやり取りを実感してください。"
    button:
      text: "無料トライアルを相談する"
      url: "https://www.k-sp.co.jp/admin/std/contact/new"
---

