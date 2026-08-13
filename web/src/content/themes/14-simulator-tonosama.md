---
id: "14"
layout: "template_a"
title: "バックオフィスの隠れ赤字チェッカー"
subtitle: "「お得意様」が会社を潰す？極小ロット・頻回発注の赤字チェッカー"
description: '「送料無料・即日発送」が当たり前になっていませんか？<br>1日に何度も来る小口発注（極小ロット）のたびに、伝票作成と梱包を手作業で行い、自社で送料を負担する…実はこれ、**「売れば売るほど運送会社と段ボール屋だけが儲かり、自社は赤字になる」** という恐怖のサイクルです。'
problems:
  - title: "「ついで買い」がなく<br>1個単位で1日何度も発注が来る"
    description: "在庫を持ちたくない取引先が、自社の倉庫代わりに「必要な時に必要な分だけ」を発注してくるため、処理回数だけが異常に増えています。"
    image: "theme04_prob1.png"
  - title: "「お得意様だから」と<br>送料無料の要求を断れない"
    description: "長年の付き合いがあるVIP顧客に対して、数百円の利益しかない注文でも送料無料で対応し、実質的なタダ働き（または赤字）になっています。"
    image: "01-decision.webp"
  - title: "自社の「損益分岐単価」が<br>現場に共有されていない"
    description: "「いくら以下の注文だと、処理コストと送料で赤字になるのか」を営業マンが把握していないため、悪気なく赤字取引を続けてしまいます。"
    image: "03-outdated-procedure.webp"
hidden: true
permalink: "simulators/tonosama"
blocks:
  - type: BlockSteps
    title: "自社の「赤字ライン（損益分岐単価）」を逆算します"
    items:
      - badge: "1"
        title: "処理コストと送料の把握"
        desc: "1件の注文を処理するのにかかる人件費（時給×時間）と、梱包資材・送料の自社負担分を入力します。"
      - badge: "2"
        title: "損益分岐単価の算出"
        desc: "「この金額以上の注文をもらわないと、確実に赤字になる」という最低ラインが自動で計算されます。"
      - badge: "3"
        title: "赤字注文の割合を入力"
        desc: "月間の全受注のうち、その「赤字ライン」を下回る極小ロット注文が何割くらいあるかを入力し、年間の被害総額を計算します。"
  - type: BlockSimulator
    simulatorType: "tonosama"
  - type: BlockCTA
    theme: "dark"
    align: "center"
    title: "極小ロットの「見えない赤字」を止める"
    desc: "シミュレーションの結果はいかがでしたか？システム導入による処理コストの劇的な削減や、VIP顧客への単価交渉に使えるノウハウをまとめました。"
    button:
      text: "見えない赤字対策ガイドをDL（無料）"
      url: "/slides/21_presentation.pdf"
---
