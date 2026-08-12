---
id: "11"
layout: "template_a"
title: "真のムダ時間コスト計算機"
subtitle: "「またこの作業か…」と消耗していませんか？"
description: '「Excelからシステムへの二重入力」「過去の書類探し」「上司のハンコ待ち」など、あなたの貴重な時間が奪われている隠れコストを暴きます。<br>計算結果は上司へのシステム導入提案（稟議）の強力な武器になります。'
problems:
  - title: "「あのファイルどこ？」<br>探し物に毎日時間を奪われる"
    description: "必要なデータや過去の履歴を探すために、社員が毎日数十分〜数時間を費やしていませんか？その時間にも「時給」は発生しています。"
    image: "theme02_problem1_scattered_1784773814562.png"
  - title: "「エクセルからシステムへ」<br>不毛な二重入力・転記作業"
    description: "システム同士が連携していないせいで、手作業でデータを転記する「コピペ職人」になっていませんか？"
    image: "03-manual.png"
  - title: "「誰かの確認待ち」で<br>業務が完全にストップする"
    description: "ワークフローがアナログなため、上司の承認待ちや部署間の連携ミスでムダな「待ち時間」が発生していませんか？"
    image: "06-human-approval.png"
hidden: true
permalink: "simulators/wasted"
blocks:
  - type: BlockSteps
    title: "まずは、あなたの状況を教えてください"
    items:
      - badge: "1"
        title: "あなたの月給（ざっくりでOK）"
        desc: "あなたが本来持っている価値（真の時給）を計算するために使用します。"
      - badge: "2"
        title: "転記・探し物にかかっている時間"
        desc: "「転記・コピペ作業」「探し物」「確認待ち」など、本来不要な作業に1日どれくらい時間を奪われていますか？"

  - type: BlockSimulator
    simulatorType: "wasted-time"

  - type: BlockCards
    title: "上司を説得するためのポイント"
    items:
      - badge: "POINT 1"
        title: "「忙しい」ではなく「会社が損している」と伝える"
        desc: "「業務量が多くて大変です」と言うと「頑張れ」で終わりますが、「私がこの作業をしているせいで、会社は年間〇〇万円損しています」と伝えると、経営陣は無視できなくなります。"
      - badge: "POINT 2"
        title: "削減できた時間で何ができるかを示す"
        desc: "システム化で浮いた時間を使って、「本来やるべきだった売上に繋がる業務」や「顧客満足度を上げるための時間」にどう使えるかを合わせて提案するのが稟議を通すコツです。"

  - type: BlockCTA
    theme: "dark"
    align: "center"
    title: "上司を説得するための武器を手に入れる"
    desc: "シミュレーターで表示された「ムダ時間」をそのまま訴えても上司は動いてくれません。稟議を通しやすくするための説得テンプレート集（PDF）を無料で配布しています。"
    button:
      text: "見えない赤字対策ガイドをDL（無料）"
      url: "/slides/16_presentation.pdf"
---
