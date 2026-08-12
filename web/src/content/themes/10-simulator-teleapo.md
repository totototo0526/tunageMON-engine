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
permalink: "simulator-teleapo"
blocks:
  - type: BlockCards
    subtitle: "STEP 1"
    title: "計算の前に、以下の3つの数字をご準備ください"
    items:
      - badge: "1"
        title: "架電スタッフの人数と平均月給"
        desc: "現在テレアポ業務に関わっている人数と、そのスタッフの平均的な月給（または時給から換算した月額）です。"
      - badge: "2"
        title: "月間の目標アポ獲得数"
        desc: "チーム全体で1ヶ月間に獲得できている（または目標としている）アポの件数です。"
      - badge: "3"
        title: "採用・教育にかかっているコスト"
        desc: "1人のスタッフを採用し、テレアポができる状態になるまでに投資した金額（求人費＋教育人件費）の目安です。"

  - type: BlockSimulator
    simulatorType: "teleapo"

  - type: BlockCTA
    theme: "dark"
    align: "center"
    title: "自社の最適な営業体制について相談する"
    desc: "シミュレーターの結果はいかがでしたか？より正確なコスト診断や、自社に合ったシステム・外注先のご相談は無料で承っております。"
    button:
      text: "無料診断を申し込む"
      url: "https://www.k-sp.co.jp/admin/std/contact/new"
---
