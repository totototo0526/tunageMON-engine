---
id: "12"
layout: "template_a"
title: "FAX継続の隠れ負債コスト計算機"
subtitle: "「紙代」「インク代」だけじゃない隠れコストを診断"
description: '「長年の習慣だから」と使い続けているFAX。実は目に見えない「トナー交換」「歩行時間」「再送対応」などで、毎月数万円単位の損失を出しているかもしれません。<br>まずは以下の計算機で、御社の「FAXの真のコスト」をチェックしてみましょう。'
problems:
  - title: "「ちょっとFAX見てきて」で<br>作業が中断される"
    description: "FAXが届くたびに席を立ち、仕分けて担当者に配る。この「名もなき歩行時間」が全社員の集中力を奪っています。"
    image: "theme04_prob1.png"
  - title: "インク切れや紙詰まりの<br>対応に追われている"
    description: "なぜか忙しい時に限って発生するトラブル。「IT担当」が本来の業務を止めて修理やトナー交換に走っていませんか？"
    image: "03-outdated-procedure.webp"
  - title: "文字が潰れて読めず<br>確認の電話をしている"
    description: "手書きの数字が見えなくて「これ1ですか？7ですか？」と電話確認。この二度手間が互いの生産性を大きく下げています。"
    image: "01-decision.webp"
hidden: true
permalink: "simulators/fax"
blocks:
  - type: BlockCards
    subtitle: "STEP 1"
    title: "計算の前に、以下の数字をご準備ください"
    items:
      - badge: "1"
        title: "1日の平均受信・送信枚数"
        desc: "大まかで構いません。1日に送受信しているFAXの総枚数を入力してください。"
      - badge: "2"
        title: "担当者の平均時給"
        desc: "FAXの確認や仕分け、送信作業を行っているスタッフの平均時給です。"
  - type: BlockSimulator
    simulatorType: "fax"
  - type: BlockCTA
    theme: "dark"
    align: "center"
    title: "自社に合ったペーパーレス化を相談する"
    desc: "シミュレーターの結果はいかがでしたか？より正確なコスト診断や、自社に合ったシステム化のご相談は無料で承っております。"
    button:
      text: "無料相談を申し込む"
      url: "https://www.k-sp.co.jp/admin/std/contact/new"
---
