---
id: "15"
layout: "template_a"
title: "謝罪・ミス対応コスト計算機"
subtitle: "1円の利益も生まない「ごめんなさい」の年間総額を可視化"
description: 'FAXの見間違いや、システム間の転記漏れなど、アナログな環境で発生するヒューマンエラー。<br>そのミスを取り返すための「謝罪対応の人件費」や「お詫びの経費」は、実は年間で莫大な金額になっているかもしれません。'
problems:
  - title: "「言った・言わない」の<br>トラブルが絶えない"
    description: "口頭や電話でのやり取りが多く、履歴が残らないため、後になってお客様とトラブルになるケースが多発していませんか？"
    image: "02-memory.webp"
  - title: "手入力の転記ミスによる<br>誤配送や請求間違い"
    description: "システムAからシステムBへ手作業でデータを移す際、必ず発生する転記ミス。これが大きなクレームに直結します。"
    image: "03-manual.webp"
  - title: "ミス対応に追われて<br>本来の業務が進まない"
    description: "一度ミスが起きると、原因究明から謝罪、リカバリまで数時間〜数日が奪われ、チーム全体の生産性が著しく低下します。"
    image: "common-cause.webp"
hidden: true
permalink: "simulators/apology"
blocks:
  - type: BlockCards
    subtitle: "STEP 1"
    title: "計算の前に、以下の数字をご準備ください"
    items:
      - badge: "1"
        title: "月間のミス発生件数"
        desc: "クレームや社内トラブルなど、月にどれくらいヒューマンエラーによるミスが発生しているかの目安です。"
      - badge: "2"
        title: "1件の対応時間と経費"
        desc: "1つのミスを解決するのにかかる時間と、菓子折りや特急便代などのお詫びにかかる経費の平均です。"
  - type: BlockSimulator
    simulatorType: "apology"
  - type: BlockCTA
    theme: "dark"
    align: "center"
    title: "ヒューマンエラー撲滅を相談する"
    desc: "シミュレーターの結果はいかがでしたか？システム連携による転記作業の自動化など、ミスが起きない環境作りのご相談は無料で承っております。"
    button:
      text: "無料相談を申し込む"
      url: "https://www.k-sp.co.jp/admin/std/contact/new"
---
