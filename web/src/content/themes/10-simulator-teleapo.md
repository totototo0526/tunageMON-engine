---
id: "10"
layout: "template_a"
title: "テレアポ外注化の損益分岐点シミュレーター"
subtitle: "自社架電の限界と見えない赤字を可視化"
description: '「とりあえず自社の営業マンに電話させている」状態は、実は毎月大きな赤字（見えないコスト）を生み出している可能性があります。<br>まずは以下の計算機で、御社の「外注すべき境界線」をチェックしてみましょう。'
problems:
  - title: "商談に時間を使いたいのに<br>架電業務に追われている"
    description: "本来ならクロージング（商談）に集中すべき優秀な営業マンが、リストへの架電で1日の大半を消耗していませんか？"
    image: "03-manual.webp"
  - title: "新人を採用・教育しても<br>アポが取れずすぐ辞める"
    description: "テレアポは精神的な負担が大きく、せっかく採用した新人が「断られ続けるストレス」で早期離職するケースが後を絶ちません。"
    image: "theme04_prob1.png"
  - title: "自社架電の「費用対効果」が<br>合っているのか分からない"
    description: "人件費や見えない機会損失まで含めた時、実は「外部委託やツール導入」の方が圧倒的に安上がりになることに気づいていない企業が多く存在します。"
    image: "common-cause.webp"
hidden: true
permalink: "simulators/teleapo"
blocks:
  - type: BlockCards
    subtitle: "STEP 1"
    title: "計算の前に、以下の3つの数字をご準備ください"
    items:
      - badge: "1"
        title: "架電スタッフの時給と稼働時間"
        desc: "アルバイト等、実際に電話をかけているスタッフの平均時給と、月間の架電時間です。"
      - badge: "2"
        title: "管理者の時給とデータ作成・指導時間"
        desc: "リスト作成、スタッフ指導、架電履歴の集計など、マネージャーが費やしている時間と時給です。"
      - badge: "3"
        title: "チーム全体の月間アポ獲得数"
        desc: "現在の体制で、1ヶ月間に獲得できているアポの合計件数です。"

  - type: BlockSimulator
    simulatorType: "teleapo"

  - type: BlockCTA
    theme: "dark"
    align: "center"
    title: "自社の最適な営業体制について相談する"
    desc: "シミュレーターの結果はいかがでしたか？より正確なコスト診断や、自社に合ったシステム・外注先のご相談は無料で承っております。"
    button:
      text: "対策ガイドをDL（無料）"
      url: "/slides/17_presentation.pdf"
    secondaryButton:
      text: "無料で相談する"
      url: "https://www.k-sp.co.jp/admin/std/contact/new"
---
