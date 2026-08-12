---
id: "14"
layout: "template_a"
title: "バックオフィスの隠れ赤字チェッカー"
subtitle: "売上が上がっても儲からない「極小ロットのタダ働き」を可視化"
description: '「注文がたくさん来ているのに、なぜか利益が残らない」<br>その原因は、事務処理にかかる人件費が粗利を上回っている「見えない赤字取引」かもしれません。以下の計算機で、年間どれだけの隠れ赤字が発生しているかチェックしましょう。'
problems:
  - title: "「とりあえず受けて」が<br>積み重なっている"
    description: "少額の注文でも、通常と同じ事務処理の手間がかかります。一件一件の利益を計算せずに受けてしまうことで赤字を垂れ流していませんか？"
    image: "theme04_prob1.png"
  - title: "アナログな受発注処理で<br>手間と時間がかかる"
    description: "電話やFAXでの注文をシステムに手入力する時間が、そのまま人件費として利益を食いつぶしています。"
    image: "03-outdated-procedure.webp"
  - title: "自社の「損益分岐点」が<br>現場に共有されていない"
    description: "「いくら以下の注文だと赤字になるのか」を営業マンや事務担当者が把握していないため、悪気なく赤字取引を続けてしまいます。"
    image: "01-decision.webp"
hidden: true
permalink: "simulators/tonosama"
blocks:
  - type: BlockCards
    subtitle: "STEP 1"
    title: "計算の前に、以下の数字をご準備ください"
    items:
      - badge: "1"
        title: "月間の受注件数と平均単価"
        desc: "1ヶ月間に処理している大まかな受注件数と、1件あたりの平均的な顧客単価です。"
      - badge: "2"
        title: "1件あたりの処理時間と時給"
        desc: "1件の注文を処理するのにかかる時間（入力や確認作業）と、事務担当者の時給目安です。"
  - type: BlockSimulator
    simulatorType: "tonosama"
  - type: BlockCTA
    theme: "dark"
    align: "center"
    title: "利益体質への改善を相談する"
    desc: "シミュレーターの結果はいかがでしたか？受発注システムの導入による事務コストの削減や、利益率改善のご相談は無料で承っております。"
    button:
      text: "無料相談を申し込む"
      url: "https://www.k-sp.co.jp/admin/std/contact/new"
---
