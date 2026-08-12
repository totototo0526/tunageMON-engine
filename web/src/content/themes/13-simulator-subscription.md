---
id: "13"
layout: "template_a"
title: "ビジネスモデル変革（売り切り vs サブスク）診断"
subtitle: "「売り切り」と「サブスク」、本当に儲かるのはどっち？"
description: '「世の中サブスクが流行っているからウチも…」と安易に考えていませんか？<br>実は、解約率（チャーンレート）によっては**「売り切りの方がマシだった」**というケースも多々あります。自社の商材の「損益分岐点」と「LTV（生涯顧客価値）」を正しく計算してみましょう。'
problems:
  - title: "毎月リセットされる<br>新規営業がツラい"
    description: "売り切りモデルの宿命。「今月1000万売っても、来月はまたゼロからスタート」という自転車操業に疲弊していませんか？"
    image: "theme04_prob1.png"
  - title: "不景気になると<br>ピタッと売れなくなる"
    description: "単価の高い売り切り商材は、顧客の予算が削られると真っ先にカットされます。安定した「ベース収益」がありません。"
    image: "01-decision.webp"
  - title: "サブスク化の適正価格が<br>わからない"
    description: "「とりあえず月額〇万円にしよう」と適当に値付けをして、結局売り切りの利益を下回ってしまう失敗が後を絶ちません。"
    image: "theme02_beforeafter3.png"
hidden: true
permalink: "simulators/subscription"
blocks:
  - type: BlockSteps
    title: "自社の「LTV」と「損益分岐点」を診断します"
    items:
      - badge: "1"
        title: "現状の販売単価"
        desc: "現在、売り切りで販売している場合の単価（10万円〜など）を入力してください。"
      - badge: "2"
        title: "想定サブスク月額"
        desc: "もし月額課金（保守やSaaS形式）にしたらいくら取れるか、想定額を入力してください。"
      - badge: "3"
        title: "月次解約率（重要）"
        desc: "毎月何%の顧客が解約するか。この数字次第で、サブスクが「金の卵」になるか「赤字の垂れ流し」になるかが決まります。"
  - type: BlockSimulator
    simulatorType: "subscription"
  - type: BlockCards
    title: "売り切り商材を「ストック型」に変えるヒント"
    items:
      - badge: "POINT 1"
        title: "IoTで「ハード＋保守」のサブスクへ"
        desc: "機械などのハードウェアも、通信機能をつけて「遠隔監視＋保守」をセットにすることで、月額課金モデルへ移行できます。"
      - badge: "POINT 2"
        title: "システムを「SaaS」へ"
        desc: "納品型のシステム開発も、クラウド上の共通基盤に切り替えることで、初期費用を下げつつLTVを最大化できます。"
  - type: BlockCTA
    theme: "dark"
    align: "center"
    title: "自社に最適なビジネスモデルを設計する"
    desc: "シミュレーションの結果はいかがでしたか？自社に合ったモデルを見極めるための、価格設定とシステム構築のノウハウをまとめました。"
    button:
      text: "見えない赤字対策ガイドをDL（無料）"
      url: "/16_presentation.pdf"
---
