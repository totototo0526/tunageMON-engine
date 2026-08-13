---
id: "15"
layout: "template_a"
title: "謝罪・ミス対応コスト計算機"
subtitle: "見えない致命傷を暴く「エラーの氷山モデル」チェッカー"
description: 'FAXの見間違いや、システム間の転記漏れなど、アナログな環境で発生するヒューマンエラー。<br>そのミスを取り返すための「謝罪対応の経費」は、実は氷山の一角にすぎません。海面下に隠れた「内部の尻拭いコスト」と「無言で去る顧客による売上喪失額」の恐ろしさを可視化します。'
problems:
  - title: "「言った・言わない」の<br>トラブルが絶えない"
    description: "口頭や電話でのやり取りが多く、履歴が残らないため、後になってお客様とトラブルになるケースが多発していませんか？"
    image: "02-memory.webp"
  - title: "「1件の重大クレーム」の裏に<br>29件の隠れミス"
    description: "顧客に怒られる前に、社内で気付いてコッソリ修正しているミス。その尻拭いのための人件費が利益を圧迫しています。"
    image: "03-manual.webp"
  - title: "ミスに呆れて無言で去る<br>サイレント離反の恐怖"
    description: "クレームを言ってくれるお客様はまだマシです。一番恐ろしいのは、何も言わずに他社へ乗り換えてしまう顧客の喪失です。"
    image: "common-cause.webp"
hidden: true
permalink: "simulators/apology"
blocks:
  - type: BlockSteps
    title: "自社の「エラーの氷山」の大きさを測ります"
    items:
      - badge: "1"
        title: "表面上のクレームデータ"
        desc: "月に何件くらい顧客からクレームをもらっているかと、対応するスタッフの時給や1件あたりのお詫び経費を入力します。"
      - badge: "2"
        title: "潜在リスク（海面下）"
        desc: "顧客1社あたりの平均年間売上（LTV）と、1件のクレームの裏に何社の「無言で去る顧客（サイレント離反）」がいるかを入力します。"
      - badge: "3"
        title: "真の被害総額の計算"
        desc: "ハインリッヒの法則を用いた「内部の尻拭いコスト」と、サイレント離反による「将来の売上喪失額」の合計をドカンと表示します。"
  - type: BlockSimulator
    simulatorType: "apology"
  - type: BlockCTA
    theme: "dark"
    align: "center"
    title: "見えないダメージを止める"
    desc: "シミュレーターの結果はいかがでしたか？システム連携による転記作業の自動化など、ミスが絶対に起きない環境作りのご相談は無料で承っております。"
    button:
      text: "対策ガイドをDL（無料）"
      url: "/slides/22_presentation.pdf"
    secondaryButton:
      text: "無料で相談する"
      url: "https://www.k-sp.co.jp/admin/std/contact/new"
---
