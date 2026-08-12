---
id: "13"
layout: "template_a"
title: "不要サブスクのチリツモコスト計算機"
subtitle: "放置しているSaaSアカウントの無駄を可視化"
description: '「とりあえず全員分契約したけど、誰も使っていないSaaSアカウント」はありませんか？<br>退職者のアカウント消し忘れや、重複ツールなど、数年間放置するとどれだけの金額になるかを可視化します。'
problems:
  - title: "退職した社員の<br>アカウントが残ったまま"
    description: "社員が辞めるたびに全てのSaaSの権限を削除するのは至難の業。幽霊アカウントに毎月課金していませんか？"
    image: "theme04_prob1.png"
  - title: "同じ機能のツールを<br>部署ごとに契約している"
    description: "営業部はツールA、総務部はツールB。実はどちらも同じ機能なのに、全社で統一されていないため無駄なコストが発生しています。"
    image: "02-memory.webp"
  - title: "「いつか使うかも」で<br>高額プランのまま放置"
    description: "とりあえず最上位プランで契約したものの、実際には基本機能しか使っていない。その差額、年間で見るといくらになりますか？"
    image: "common-cause.webp"
hidden: true
permalink: "simulators/subscription"
blocks:
  - type: BlockCards
    subtitle: "STEP 1"
    title: "計算の前に、以下の数字をご準備ください"
    items:
      - badge: "1"
        title: "使われていないアカウント数"
        desc: "退職者や、全くログインしていない社員のアカウント数です。"
      - badge: "2"
        title: "1アカウントあたりの月額費用"
        desc: "そのSaaS（Chatwork、Kintone、各種ツールなど）の1アカウントあたりの平均月額料金です。"
  - type: BlockSimulator
    simulatorType: "subscription"
  - type: BlockCTA
    theme: "dark"
    align: "center"
    title: "社内システムの最適化を相談する"
    desc: "シミュレーターの結果はいかがでしたか？不要なツールの洗い出しや、システム統合のご相談は無料で承っております。"
    button:
      text: "無料相談を申し込む"
      url: "https://www.k-sp.co.jp/admin/std/contact/new"
---
