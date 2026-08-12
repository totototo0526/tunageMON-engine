---
id: "12"
layout: "template_a"
title: "FAX継続の隠れ負債コスト計算機"
subtitle: "「取引先がFAXだから」と思考停止していませんか？"
description: '「相手が高齢だから」「長年の習慣だから」と、ペーパーレス化を諦める必要はありません。<br>取引先には今まで通りFAXを送らせたまま、**社内の「手打ち入力」だけを自動化**することで生み出せるコスト削減額（利益）をシミュレーションします。'
problems:
  - title: "「ちょっとFAX見てきて」で<br>作業が中断される"
    description: "FAXが届くたびに席を立ち、仕分けて担当者に配る。この「名もなき歩行時間」が全社員の集中力を奪っています。"
    image: "theme04_prob1.png"
  - title: "文字が潰れて読めず<br>手打ち入力が地獄"
    description: "手書きの数字が見えなくて電話確認。その後システムにカタカタと手入力。この二重手間と入力ミスが最大のコストです。"
    image: "01-decision.webp"
  - title: "アナログ環境に絶望して<br>若手社員が辞めていく"
    description: "「タイパが悪い」「昭和の会社だ」と見なされ、せっかく採用した新人がすぐに離職してしまうリスクが高まります。"
    image: "theme02_beforeafter3.png"
hidden: true
permalink: "simulators/fax"
blocks:
  - type: BlockSteps
    title: "手入力の「隠れ負債」と「改善による利益」を計算します"
    items:
      - badge: "1"
        title: "月間のFAX・電話受注件数"
        desc: "紙のFAXや電話など、現在スタッフが手入力で対応している注文件数を入力してください。"
      - badge: "2"
        title: "1件あたりの手入力・確認時間"
        desc: "FAXを見てから、基幹システムへの入力が完了するまでの時間です。探す時間や電話確認の時間も含めてください。"
      - badge: "3"
        title: "スタッフの平均時給"
        desc: "入力担当者の時給を入力します。（※本来は社会保険料等の会社負担分も乗せるため、高めに設定するのがリアルです）"

  - type: BlockSimulator
    simulatorType: "fax"

  - type: BlockCards
    title: "FAXをやめずに、社内だけDXする方法"
    items:
      - badge: "POINT 1"
        title: "クラウドFAXで「紙」をなくす"
        desc: "まずは複合機のFAXをクラウドFAXに切り替え、PCでPDFとして受信します。これで「歩行時間」と「紙代」がゼロになります。"
      - badge: "POINT 2"
        title: "AI-OCRで「手打ち」をなくす"
        desc: "受信したPDFをAI-OCRに読み込ませて自動でデータ化。あとは基幹システムに連携するだけで、手入力がほぼ不要になります。"

  - type: BlockCTA
    theme: "dark"
    align: "center"
    title: "新人採用の前に、システム化の検討を！"
    desc: "人を増やして人海戦術で乗り切るよりも、手打ちを自動化する方が圧倒的に高コスパです。取引先はFAXのままでOK！社内だけこっそりDXする事例集を用意しました。"
    button:
      text: "見えない赤字対策ガイドをDL（無料）"
      url: "/16_presentation.pdf"
---
