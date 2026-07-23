---
id: '07'
layout: template_a
title: つなげモン AI副官（No.2）
subtitle: 事業の判断と実行をスピードアップ。
description: 今までどおりの仕事をAIと進めるだけで、商談の経緯や案件の状況、各業務の手順が、社内で共有できる形に整理されていきます。
hero_services:
- 01専用AI(AI副官)の環境構築
- 02定期ヒアリングで実行結果を確認し、改善策を一緒に検討
- 03社内担当者への運用方法、AI・IT指導
# TODO: PDF等の資料の準備ができたら以下のコメントアウトを外してください
# downloads:
# - label: 導入事例集（PDF）
#   file: sample.pdf
# - label: 詳細仕様書（PDF）
#   file: spec.pdf
pricing:
  free_trial: トライアル期間中、環境構築や支援にかかる当社への費用は無料です(ChatGPT有料プランなどの実費を除く)。
  initial: '27'
  monthly: '12'
dateAdded: '2026-07-21'
button:
  type: link
  url: ./themes/07-theme/index.html
  text: 詳細を確認する
  icon: external-link
problems:
- title: 経営・営業状況のブラックボックス化
  description: 日々の業務や商談が担当者の頭の中にしかなく、案件の進捗や判断の経緯が他のメンバーに共有されていない。
  image: 01-decision.webp
- title: 孤立したAIの利用（属人化）
  description: ChatGPTなどのAIを導入しても、使いこなせる一部の社員だけのものになっており、組織全体の業務効率化に繋がっていない。
  image: 04-isolated-ai-use.webp
- title: 引継ぎや過去経緯の調査による負担
  description: 担当者が不在の際や引き継ぎ時に、過去のメールや資料を漁って経緯を確認するのに膨大な時間がかかっている。
  image: 02-case-history.webp
diagram_html: |
  <div class="bg-white p-4 rounded-xl shadow-sm text-center z-10 w-24 border border-slate-200">
      <i data-lucide="users" class="w-8 h-8 text-indigo-400 mx-auto mb-2"></i><span class="text-[10px] font-bold">営業チーム</span>
  </div>
  <div class="h-1 bg-indigo-200 w-8 flex-shrink-0 relative"><i data-lucide="arrow-right-left" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-indigo-500 w-4 h-4"></i></div>
  <div class="bg-slate-800 text-white p-4 rounded-full shadow-lg z-10"><i data-lucide="bot" class="w-6 h-6 text-indigo-300"></i></div>
  <div class="h-1 bg-indigo-200 w-8 flex-shrink-0 relative"><i data-lucide="arrow-right-left" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-indigo-500 w-4 h-4"></i></div>
  <div class="bg-indigo-50 text-indigo-800 p-4 rounded-xl shadow-md text-center z-10 w-28 border-b-4 border-indigo-200">
      <i data-lucide="contact" class="w-8 h-8 text-indigo-500 mx-auto mb-2"></i><span class="text-[10px] font-bold">顧客対応</span>
  </div>
blocks:
- type: BlockCards
  subtitle: 02　解決策
  title: AI × 共有台帳 × 定着支援
  items:
  - badge: AI
    title: AI
    subtitle: 業務の受付・整理役
    desc: チャットから普段どおり依頼するだけで、情報収集・整理・調査・下書きまで進めます。
  - badge: 台
    title: 共有台帳
    subtitle: 会社の記憶が残る場所
    desc: 決定・担当・期限・判断条件を記録する、必要な人が同じ情報を確認できる共有システムです。
  - badge: 支
    title: 定着支援
    subtitle: 使い続けられる形に育てる
    desc: 定期ヒアリングで結果を振り返り、社内責任者と改善策を検討します。運用方法とAI・IT活用の指導まで伴走します。
- type: BlockBeforeAfter
  subtitle: '03'
  title: 導入するとこう変わります
  desc: ※以下は実在の事例ではなく、支援内容に基づく想定イメージです。
  items:
  - tag: 製造業A社(従業員20名)
    before: 見積の判断基準が社長・管理職の頭の中にあった
    after: 例外案件だけ確認
    desc: 見積のたびに社長や管理職へ電話やチャットで確認していた条件を、AIが過去の経緯から判断条件の候補として整理し、社長・管理職が確認して共有台帳に記録。担当者が判断条件と例外の確認順をたどれるようになり、上への確認は例外案件だけに。
    image: 01-manufacturing-exception-review.webp
  - tag: 卸売業B社(従業員10名)
    before: 案件情報が営業担当者の頭とノートの中にあった
    after: 誰でも現在地を追える
    desc: 本人に聞かないと経緯も次の一手も分からなかった案件を、AIが依頼のたびに資料・共有台帳・過去のやり取りから集めて現在地を整理。「あの件どうなってた?」を本人に聞かなくても追える状態になり、急な不在や引き継ぎにも対応できるように。
    image: 02-wholesale-shared-status.webp
  - tag: サービス業C社(従業員15名)
    before: AIをチームで使える仕組みがなかった
    after: チームの型として残る
    desc: 各自がバラバラにChatGPTを試し、うまくいった使い方も共有されないままだった。AIへの依頼の型・確認した根拠・修正内容を共有台帳に残し、誰が使っても同じ流れで仕事が進むように。月2回の定例で振り返り、チームの使い方として育てていく。
    image: 03-service-shared-ai-workflow.webp
- type: BlockFAQ
  subtitle: '12'
  title: よくある質問
  items:
  - q: ITに詳しい社員がいませんが、できますか。
    a: 本サービスは、IT専任の担当者を置くことが難しい会社を想定して設計しています。社内AI担当者に求められるのは開発スキルではなく、自社の業務を理解していることです。担当者の方が自分で改善を回せるようになるまで伴走し、ChatGPTのプラン選びやDiscordのアカウント作成も手順からご案内します。
  - q: AIが間違ったことを言ったら、どうなりますか。
    a: 数字や顧客対応などの重要な内容は、AIが独断で確定せず、必ず人の確認を通します。確認の場で直した内容は記録に残るため、同じ間違いは繰り返されにくくなります。
  - q: 顧客情報や社内の数字をAIに渡して大丈夫ですか。
    a: 渡す情報・渡さない情報を、始める前に一緒に決めます。閲覧・更新・承認できる人もあわせて決め、AIがシステムへ行える操作は、あらかじめ許可した範囲に限定されます。AIサービス側の設定は、入力内容がAIの学習に使われないよう学習オフで運用します。より強固なセキュリティが必要な場合は、外部にデータを出さないローカルLLM環境のご提案も承ります。
  - q: トライアルだけで終わってもいいですか。
    a: 構いません。期間中に当社への費用は発生しないので(ChatGPT有料プラン等の実費のみお客様負担)、効果を見てから判断してください。トライアル中に蓄積した記録が必要な場合は、テキストデータでの納品も承ります(出力工数として有料)。なお、納品対象は台帳の記録などの業務データで、つなげモン
      No.2の設定・構成は対象外です。
  - q: ChatGPTの費用は月いくらくらいかかりますか。
    a: 利用する人数と使い方で変わります。相談時に、貴社の場合の目安を具体的にご案内します。
  - q: 本番移行後、途中でやめられますか。
    a: やめられます。定着支援・環境保守とも、いつでも解約いただけます。サーバーやChatGPTなどはお客様名義のご契約のため、解約後も構築した環境はそのままお使いいただけます。
  - q: システムの機能追加や改修は月額に含まれますか。
    a: 標準の環境保守を超える機能追加・外部連携・データ移行・個別開発・24時間対応は、範囲と影響を確認して別途お見積りします。
- type: BlockChatDemo
  title: たとえば、こんなやり取りです
  note: ※画面はイメージです
  patterns:
  - label: パターン1
    title: 案件の現在地を聞く
    messages:
    - senderName: 担当者
      senderType: user
      text: A社の見積の件、どうなってたっけ?
    - senderName: AI
      senderType: ai
      text: 'A社向け見積(6/24ご依頼)の現在地です。

        ・6/26 数量変更の連絡あり(500→800個)

        ・6/27 単価は台帳の判断条件に沿って仮置き済み

        ・未対応:納期の回答(制作部の確認待ち)'
  - label: パターン2
    title: 会議の内容を台帳に残す
    messages:
    - senderName: 担当者
      senderType: user
      prefix: (会議の文字起こしを貼り付け)
      text: この内容、A社のA案件に議事録としてまとめておいて
    - senderName: AI
      senderType: ai
      text: '議事録にまとめ、台帳のA案件に記録しました。要点です。

        ・決定:納期は8月末で回答/追加分の単価は据え置き

        ・宿題:仕様書の修正(担当:営業、期限7/22)'
- type: BlockReasoningGrid
  target: web
  title: なぜ、つなげモン No.2で解決できるのか
  items:
  - num: POINT 01
    title: 会社の方針を最初に覚え込ませる
    desc: 導入時に、言葉遣い・優先順位・やってはいけないことをAIへ設定します。誰が話しかけても、会社の方針に沿った同じ振る舞いで応えます。
    image: /assets/images/01-policy.webp
    imageAlt: 人が会社の方針を説明し、AIが優先順位や確認条件を整理しているイメージ
  - num: POINT 02
    title: 記憶が消えない
    desc: AIは、保存された過去のやり取り・決定・経緯を必要なときに検索して呼び出します。「先月のあの件」も、担当者に聞かずAIに聞けます。人が確認した内容は共有台帳に残るので、担当者が入れ替わっても同じ考え方で仕事が進みます。属人化した記憶が、会社の記憶に変わります。
    image: /assets/images/02-memory.webp
    imageAlt: AIが過去の会話や決定の記録から必要な経緯を探し、人へ渡しているイメージ
  - num: POINT 03
    title: うまくいったやり方を、自分で手順書にする
    desc: 一度うまく処理できた仕事は、AIが手順として整理し、人の確認を経て共有台帳に残します。次から同じ品質で繰り返せるため、「マニュアルを作る時間がない」会社でも、日々の業務をこなすだけで手順書が育ちます。
    image: /assets/images/03-manual.webp
    imageAlt: 人が確認した仕事の流れをAIが手順に整理し、別の社員が活用しているイメージ
  - num: POINT 04
    title: 整理した結果を、共有台帳に書き込む
    desc: AIは、集めた経緯・決めたこと・手順を整理し、人の確認を経て共有台帳へ記録します。AIとのやり取りの中に埋もれず、台帳を開けば誰でも同じ情報にたどり着けます。AIが整理し、人が確かめ、台帳に残す——この循環が全体の仕組みです。
    image: /assets/images/04-ledger.webp
    imageAlt: AIが整理した情報を人が確認し、共有台帳へ記録して社員が閲覧するイメージ
  - num: POINT 05
    title: 決まった仕事は決まった時間に
    desc: 日次の進捗まとめ、期限前のリマインド、定例前の資料集めなど、繰り返しの仕事はAIが決まった時間に実行し、普段のチャットに届けます。
    image: /assets/images/05-schedule.webp
    imageAlt: AIが決まった時間に進捗や期限、定例資料を準備して社員へ届けるイメージ
  - num: POINT 06
    title: 勝手に確定しない
    desc: AIは人に代わって決めるのではなく、判断材料を整え、実行を支える副官のような役割です。AIが独断で外部へメールを送ったり、数字を確定したりすることはありません。送る・決めるは人が行います。
    image: /assets/images/06-human-approval.webp
    imageAlt: AIが下書きと判断材料を人へ渡し、人が確認して送信や実行を決めるイメージ
  summary: この②〜④が、「判断が頭の中にある」「案件の経緯が担当者しか分からない」「手順書が育たない」「AI活用が個人の工夫で止まる」という悩みを解決できる理由です。
  note: 対象業務の例:案件管理(進行・期限・議事録)、社内管理(申請・会議記録・手順書・社内ルール共有)
- type: BlockSteps
  subtitle: '04'
  title: 導入の流れ
  items:
  - title: 相談・設計(無料)
    desc: 困りごとが絞れていなくてもOK。業務の流れと判断が集中している場面を伺い、トライアルの進め方を一緒に設計します。
  - title: 無料トライアル(1ヶ月)
    desc: 実務の中でつなげモン No.2を使い、効果を確かめてから判断できます。対象業務は相談時に一緒に決めます。期間中、環境構築や支援にかかる当社への費用は発生しません(ChatGPT有料プランなどの実費はお客様負担です)。
  - title: 本番移行
    desc: トライアルの結果をもとに範囲・価格を確定し、本格導入と定着支援を開始します。
- type: BlockTable
  subtitle: '05'
  title: 他の選択肢と比べると
  headers:
  - AI・DX人材を採用
  - DXコンサルに依頼
  - AIツール導入のみ
  - 本サービス
  rows:
  - label: 費用の目安
    values:
    - 月40万円〜(給与+採用費)
    - 月30万円〜
    - 月数千円〜数万円
    - 月12万円〜
  - label: 始めるまで
    values:
    - 採用できれば(数ヶ月〜)
    - 契約後
    - すぐ
    - 無料トライアル1ヶ月
  - label: 業務の理解
    values:
    - 入社後にゼロから
    - ヒアリングの範囲まで
    - —
    - 業務を知る自社の担当者が使う
  - label: 社内に残るもの
    values:
    - 人(辞めれば失われる)
    - 報告書・提案
    - ツールと個人のコツ
    - 台帳・手順書・改善を回せる担当者
  - label: やめたとき
    values:
    - 引き継ぎ問題が再発
    - 改善が止まる
    - 元どおり
    - 環境と記録はお客様名義で残る
  note: ※金額は一般的な目安です。
- type: BlockCTA
  theme: dark
  title: まずは1ヶ月の無料トライアルから始められます。
  desc: 期間中、環境構築や支援にかかる当社への費用は発生しません(ChatGPT有料プランなどの実費はお客様負担です)。
  button:
    text: 無料トライアルを相談する
    url: https://www.k-sp.co.jp/admin/std/contact/new
- type: BlockCards
  subtitle: '07'
  title: セキュリティとデータの扱い
  items:
  - title: AIの学習に使われません
    desc: 入力内容がAIの学習に使われない設定(学習オフ)で運用します
  - title: 渡す情報を決めてから始めます
    desc: AIに渡す情報・渡さない情報、閲覧・更新・承認できる人を、初期整理で一緒に決めます
  - title: 環境はお客様名義です
    desc: サーバーやChatGPTの契約はお客様名義。解約後も、環境と記録はお客様の手元に残ります
  - title: より強固な構成もご提案できます
    desc: 外部にデータを出さないローカルLLM環境のご提案も承ります(別途お見積り)
- type: BlockList
  subtitle: '08'
  title: AIだから、うまくいかないことも先にお伝えします
  items:
  - title: AIに教えたルールが、いつの間にか効かなくなることがあります
    desc: AIの更新や会話の状況により、以前守れていた書き方や確認手順が崩れる場合があります。重要なルールは記録として残し、結果を人が確認します。
  - title: AIの「できました」は、そのまま信用できません
    desc: 登録・修正の報告があっても、一部しか反映されていない場合があります。完了報告ではなく、実際の台帳・ファイル・画面を確認してから完了と判断します。
  - title: 記録場所を増やしすぎると、かえって分からなくなります
    desc: 同じ内容が複数の場所に残ると、どれが最新か判断しにくくなります。最初は案件・確認待ち・判断を確認できる場所へ絞ります。
  - title: 自動化を増やしても、運用が楽になるとは限りません
    desc: 自動化や連携が増えるほど、サービス更新・設定変更・停止の影響も増えます。最初は人が確認できる半手動から始め、繰り返し使える部分だけを自動化します。
  - title: 仕組みを作るだけでは、業務に定着しません
    desc: 忙しい時期には記録が後回しになります。すべてを細かく入力するのではなく、最低限残す情報を決め、AIで記録負担を減らしながら定期的に見直します。
- type: BlockText
  subtitle: '09'
  title: 私たちへの依存ではなく、貴社の中に残す
  paragraphs:
  - 本番環境では、原則として貴社名義のサーバーとアカウントを使います。契約終了後も、その時点の環境と記録を貴社側で使い続けられる構成にします。
  - 残すのは、環境だけではありません。業務を整理し、AIへ渡し、結果を確認し、次回の手順へ反映する——貴社の中で改善を続けるための考え方と進め方まで引き継ぐことを目指します。
  cardsTitle: 貴社に残るもの
  cards:
  - title: 案件・対応履歴
    desc: ''
  - title: 確認待ち・担当・期限
    desc: ''
  - title: 判断理由・会議の決定
    desc: ''
  - title: 報告・依頼テンプレート
    desc: ''
- type: BlockComparisonCards
  subtitle: '10'
  title: 相性の確認
  groups:
  - type: positive
    title: 合いやすい会社
    items:
    - 判断や情報が一部の人に集まっている
    - 社内にAI活用の担当者を育てたい
    - 今ある仕組みを生かして改善したい
    - 退職や異動のたびに、引き継ぎで業務が止まった経験がある
    - ChatGPTを個人では使っているが、会社の仕事に定着していない
  - type: negative
    title: 合いにくいご要望
    items:
    - 重要判断をAIへ任せきりにしたい
    - 社内で確認・実行する人を置けない
    - 短期間で全社を自動化したい
    - 日々の実作業まで丸ごと外注したい
    - ツールだけ導入して、業務の整理はしたくない
- type: BlockText
  theme: dark
  subtitle: '11'
  title: 'なぜ、私たちがこの

    サービスをつくったのか'
  paragraphs:
  - 私たちケーエスピー株式会社は、中小企業のシステム運用に携わるなかで、同じ光景を何度も見てきました。判断は社長の頭の中、案件の経経緯は担当者のノートの中。責任感の強い人ほど仕事を抱え、その人が休むと、業務が止まってしまいます。
  - これまで現場を支えてきたからこそ、経験や判断が、自然と特定の人に集まってきたのだと思います。AIが身近になった今、その大切な経験を、会社の中で無理なく共有できる形に変えていける。私たちはそう考えました。AIは導入するだけで力を発揮するものではありません。現場に合う形で使い続けられて、初めて会社の力になります。
  cardsTitle: このサービスに込めた思い
  cards:
  - num: '01'
    title: 誰か一人に、仕事を背負わせない
    desc: 責任感のある人ほど休めず、いつも判断を求められる。そんな働き方を、仕組みから変えたい。
  - num: '02'
    title: 人の経験を、次の人へつなぐ
    desc: 積み重ねた判断や工夫を、その人だけのものにしない。会社の記憶として残し、次の人へ渡したい。
  - num: '03'
    title: AIで、人の力をもっと引き出す
    desc: 人を置き換えるためではなく、考える時間と余裕を取り戻すためにAIを使いたい。
- type: BlockCTA
  align: center
  title: まずは、一緒に改善する最初の業務を決めましょう
  desc: 実際に動いている画面を見ながら、貴社の業務に合うかを確認します。その場で本番導入を決める必要はありません。
  button:
    text: お問い合わせ
    url: https://www.k-sp.co.jp/admin/std/contact/new
---

