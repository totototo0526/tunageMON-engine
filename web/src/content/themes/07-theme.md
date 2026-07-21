---
id: '07'
layout: template_a
title: つなげモン AI副官（No.2）
subtitle: 事業の判断と実行をスピードアップ。
description: 今までどおりの仕事をAIと進めるだけで、商談の経緯や案件の状況、各業務の手順が、社内で共有できる形に整理されていきます。
hero_services:
- 専用AI（AI副官）の環境構築
- 定期ヒアリングで実行結果を確認し、改善策を一緒に検討
- 社内担当者への運用方法、AI・IT指導
pricing:
  free_trial: トライアル期間中、環境構築や支援にかかる当社への費用は無料です(ChatGPT有料プランなどの実費を除く)。
  initial: '27'
  monthly: '12'
dateAdded: '2026-07-21'
button:
  type: link
  url: ./themes/07-theme/index.html
  text: 特化LPを見る
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
    a: 利用する人数と使い方で変わります。相談時に、御社の場合の目安を具体的にご案内します。
  - q: 本番移行後、途中でやめられますか。
    a: やめられます。定着支援・環境保守とも、いつでも解約いただけます。サーバーやChatGPTなどはお客様名義のご契約のため、解約後も構築した環境はそのままお使いいただけます。
  - q: システムの機能追加や改修は月額に含まれますか。
    a: 標準の環境保守を超える機能追加・外部連携・データ移行・個別開発・24時間対応は、範囲と影響を確認して別途お見積りします。
---


<section data-screen-label="詳細解説" style="background:#FFFFFF;padding:clamp(0px,0vw,0px) 24px">
<div style="max-width:1080px;margin:0 auto">
<div style="max-width:760px;margin:0 auto 72px">
  <h3 data-fade="0" style="margin:0 0 8px;font-size:clamp(19px,2.2vw,23px);font-weight:800;letter-spacing:.04em;color:#1F2430;font-feature-settings:'palt'">たとえば、こんなやり取りです</h3>
  <p data-fade="0" style="margin:0 0 28px;font-size:13px;color:#8A8FA0">※画面はイメージです</p>

  <div class="print-keep-heading" data-fade="0" style="display:flex;align-items:center;gap:10px;margin:0 0 14px">
    <span style="font-size:12px;font-weight:800;letter-spacing:.06em;color:#FFFFFF;background:var(--c-primary);padding:4px 12px">パターン1</span>
    <span style="font-size:15px;font-weight:700;color:#1F2430">案件の現在地を聞く</span>
  </div>
  <div class="print-keep-card" data-fade="0" style="background:#22252E;border-radius:10px;overflow:hidden;box-shadow:0 14px 34px rgba(23,28,44,.16);margin:0 0 36px">
    <div style="display:flex;align-items:center;gap:7px;padding:12px 16px;background:#1B1E26">
      <span style="width:10px;height:10px;border-radius:50%;background:#3A3F4D"></span>
      <span style="width:10px;height:10px;border-radius:50%;background:#3A3F4D"></span>
      <span style="width:10px;height:10px;border-radius:50%;background:#3A3F4D"></span>
      <span style="margin-left:8px;font-size:12.5px;letter-spacing:.06em;color:#8E96A8">社内チャット</span>
    </div>
    <div style="padding:22px 20px 26px;display:flex;flex-direction:column;gap:20px">
      <div style="display:flex;gap:12px;align-items:flex-start">
        <span style="flex:none;width:38px;height:38px;border-radius:50%;background:#3A4152;color:#DDE2EC;display:flex;align-items:center;justify-content:center;font-size:15px;font-weight:700">担</span>
        <div style="min-width:0">
          <div style="margin:0 0 5px;font-size:13.5px;font-weight:700;color:#C8CEDC">担当者</div>
          <div style="font-size:14.5px;line-height:1.85;color:#E7EAF2">A社の見積の件、どうなってたっけ?</div>
        </div>
      </div>
      <div style="display:flex;gap:12px;align-items:flex-start">
        <span style="flex:none;width:38px;height:38px;border-radius:50%;background:var(--c-accent);color:#FFFFFF;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:800">AI</span>
        <div style="min-width:0">
          <div style="margin:0 0 5px;font-size:13.5px;font-weight:700;color:#C8CEDC">AI</div>
          <div style="font-size:14.5px;line-height:1.9;color:#E7EAF2">A社向け見積(6/24ご依頼)の現在地です。</div>
          <div style="font-size:14.5px;line-height:1.9;color:#E7EAF2">・6/26 数量変更の連絡あり(500→800個)</div>
          <div style="font-size:14.5px;line-height:1.9;color:#E7EAF2">・6/27 単価は台帳の判断条件に沿って仮置き済み</div>
          <div style="font-size:14.5px;line-height:1.9;color:#E7EAF2">・未対応:納期の回答(制作部の確認待ち)</div>
        </div>
      </div>
    </div>
  </div>

  <div class="print-keep-heading" data-fade="0" style="display:flex;align-items:center;gap:10px;margin:0 0 14px">
    <span style="font-size:12px;font-weight:800;letter-spacing:.06em;color:#FFFFFF;background:var(--c-primary);padding:4px 12px">パターン2</span>
    <span style="font-size:15px;font-weight:700;color:#1F2430">会議の内容を台帳に残す</span>
  </div>
  <div class="print-keep-card" data-fade="0" style="background:#22252E;border-radius:10px;overflow:hidden;box-shadow:0 14px 34px rgba(23,28,44,.16)">
    <div style="display:flex;align-items:center;gap:7px;padding:12px 16px;background:#1B1E26">
      <span style="width:10px;height:10px;border-radius:50%;background:#3A3F4D"></span>
      <span style="width:10px;height:10px;border-radius:50%;background:#3A3F4D"></span>
      <span style="width:10px;height:10px;border-radius:50%;background:#3A3F4D"></span>
      <span style="margin-left:8px;font-size:12.5px;letter-spacing:.06em;color:#8E96A8">社内チャット</span>
    </div>
    <div style="padding:22px 20px 26px;display:flex;flex-direction:column;gap:20px">
      <div style="display:flex;gap:12px;align-items:flex-start">
        <span style="flex:none;width:38px;height:38px;border-radius:50%;background:#3A4152;color:#DDE2EC;display:flex;align-items:center;justify-content:center;font-size:15px;font-weight:700">担</span>
        <div style="min-width:0">
          <div style="margin:0 0 5px;font-size:13.5px;font-weight:700;color:#C8CEDC">担当者</div>
          <div style="font-size:14.5px;line-height:1.85;color:#E7EAF2"><span style="color:#9BA3B5">(会議の文字起こしを貼り付け)</span>この内容、A社のA案件に議事録としてまとめておいて</div>
        </div>
      </div>
      <div style="display:flex;gap:12px;align-items:flex-start">
        <span style="flex:none;width:38px;height:38px;border-radius:50%;background:var(--c-accent);color:#FFFFFF;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:800">AI</span>
        <div style="min-width:0">
          <div style="margin:0 0 5px;font-size:13.5px;font-weight:700;color:#C8CEDC">AI</div>
          <div style="font-size:14.5px;line-height:1.9;color:#E7EAF2">議事録にまとめ、台帳のA案件に記録しました。要点です。</div>
          <div style="font-size:14.5px;line-height:1.9;color:#E7EAF2">・決定:納期は8月末で回答/追加分の単価は据え置き</div>
          <div style="font-size:14.5px;line-height:1.9;color:#E7EAF2">・宿題:仕様書の修正(担当:営業、期限7/22)</div>
        </div>
      </div>
    </div>
  </div>
</div>

<div style="max-width:1080px;margin:0 auto">
  <h3 data-fade="0" style="margin:0 0 clamp(42px,6vw,70px);font-size:clamp(22px,3vw,32px);font-weight:900;line-height:1.5;letter-spacing:.04em;color:#1F2430;font-feature-settings:'palt';word-break:auto-phrase">なぜ、つなげモン No.2で解決できるのか</h3>
  <div class="reason-list">
    <article class="reason-row" data-fade="0">
      <div class="reason-visual"><img src="../../assets/reasons/01-policy.webp" alt="人が会社の方針を説明し、AIが優先順位や確認条件を整理しているイメージ" width="1448" height="1086" loading="lazy" decoding="async"></div>
      <div class="reason-content"><span class="reason-number">POINT 01</span><h4>会社の方針を最初に覚え込ませる</h4><p>導入時に、言葉遣い・優先順位・やってはいけないことをAIへ設定します。誰が話しかけても、会社の方針に沿った同じ振る舞いで応えます。</p></div>
    </article>
    <article class="reason-row is-even" data-fade="0">
      <div class="reason-visual"><img src="../../assets/reasons/02-memory.webp" alt="AIが過去の会話や決定の記録から必要な経緯を探し、人へ渡しているイメージ" width="1448" height="1086" loading="lazy" decoding="async"></div>
      <div class="reason-content"><span class="reason-number">POINT 02</span><h4>記憶が消えない</h4><p>AIは、保存された過去のやり取り・決定・経緯を必要なときに検索して呼び出します。「先月のあの件」も、担当者に聞かずAIに聞けます。人が確認した内容は共有台帳に残るので、担当者が入れ替わっても同じ考え方で仕事が進みます。属人化した記憶が、会社の記憶に変わります。</p></div>
    </article>
    <article class="reason-row" data-fade="0">
      <div class="reason-visual"><img src="../../assets/reasons/03-manual.webp" alt="人が確認した仕事の流れをAIが手順に整理し、別の社員が活用しているイメージ" width="1448" height="1086" loading="lazy" decoding="async"></div>
      <div class="reason-content"><span class="reason-number">POINT 03</span><h4>うまくいったやり方を、自分で手順書にする</h4><p>一度うまく処理できた仕事は、AIが手順として整理し、人の確認を経て共有台帳に残します。次から同じ品質で繰り返せるため、「マニュアルを作る時間がない」会社でも、日々の業務をこなすだけで手順書が育ちます。</p></div>
    </article>
    <article class="reason-row is-even" data-fade="0">
      <div class="reason-visual"><img src="../../assets/reasons/04-ledger.webp" alt="AIが整理した情報を人が確認し、共有台帳へ記録して社員が閲覧するイメージ" width="1448" height="1086" loading="lazy" decoding="async"></div>
      <div class="reason-content"><span class="reason-number">POINT 04</span><h4>整理した結果を、共有台帳に書き込む</h4><p>AIは、集めた経緯・決めたこと・手順を整理し、人の確認を経て共有台帳へ記録します。AIとのやり取りの中に埋もれず、台帳を開けば誰でも同じ情報にたどり着けます。AIが整理し、人が確かめ、台帳に残す——この循環が全体の仕組みです。</p></div>
    </article>
    <article class="reason-row" data-fade="0">
      <div class="reason-visual"><img src="../../assets/reasons/05-schedule.webp" alt="AIが決まった時間に進捗や期限、定例資料を準備して社員へ届けるイメージ" width="1448" height="1086" loading="lazy" decoding="async"></div>
      <div class="reason-content"><span class="reason-number">POINT 05</span><h4>決まった仕事は決まった時間に</h4><p>日次の進捗まとめ、期限前のリマインド、定例前の資料集めなど、繰り返しの仕事はAIが決まった時間に実行し、普段のチャットに届けます。</p></div>
    </article>
    <article class="reason-row is-even" data-fade="0">
      <div class="reason-visual"><img src="../../assets/reasons/06-human-approval.webp" alt="AIが下書きと判断材料を人へ渡し、人が確認して送信や実行を決めるイメージ" width="1448" height="1086" loading="lazy" decoding="async"></div>
      <div class="reason-content"><span class="reason-number">POINT 06</span><h4>勝手に確定しない</h4><p>AIは人に代わって決めるのではなく、判断材料を整え、実行を支える副官のような役割です。AIが独断で外部へメールを送ったり、数字を確定したりすることはありません。送る・決めるは人が行います。</p></div>
    </article>
  </div>
  <div data-fade="0" style="margin:clamp(48px,7vw,78px) 0 0;background:color-mix(in oklab, var(--c-primary) 5%, #FFFFFF);border:1px solid color-mix(in oklab, var(--c-primary) 18%, #FFFFFF);padding:24px 28px">
    <p style="margin:0;font-size:16px;font-weight:700;line-height:2;color:#1F2430">この②〜④が、「判断が頭の中にある」「案件の経緯が担当者しか分からない」「手順書が育たない」「AI活用が個人の工夫で止まる」という悩みを解決できる理由です。</p>
  </div>
  <p data-fade="0" style="margin:18px 0 0;font-size:13.5px;line-height:1.9;color:#767E8C">対象業務の例:案件管理(進行・期限・議事録)、社内管理(申請・会議記録・手順書・社内ルール共有)</p>
</div>
</div>
</section>

<!-- Web用の詳細テキストをここに記述します。原氏のデザインの「解決策」や「導入シナリオ」など、中間セクションをここに記述することで拡張できます。 -->





<section data-screen-label="導入の流れ" style="background:#FFFFFF;padding:clamp(72px,9vw,110px) 24px">
<div style="max-width:1080px;margin:0 auto">
<div data-fade="0" style="display:flex;align-items:center;gap:14px;margin:0 0 16px">
  <span style="font-size:13px;font-weight:700;letter-spacing:.16em;color:var(--c-accent)">04</span>
  <span style="width:36px;height:1px;background:#C9C4B6"></span>
</div>
<h2 data-fade="0" style="margin:0 0 40px;font-size:clamp(26px,3.6vw,38px);font-weight:900;line-height:1.45;letter-spacing:.03em;color:#1F2430;font-feature-settings:'palt'">導入の流れ</h2>
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:20px;margin:0 0 64px">
  <div data-fade="0" style="background:#FFFFFF;border:1px solid #E4E1D8;padding:28px 26px">
    <div style="display:flex;align-items:baseline;gap:10px;margin:0 0 14px"><span style="font-size:12px;font-weight:800;letter-spacing:.14em;color:var(--c-accent)">STEP</span><span style="font-size:30px;font-weight:900;line-height:1;color:var(--c-primary)">1</span></div>
    <h3 style="margin:0 0 10px;font-size:18px;font-weight:800;color:#1F2430;font-feature-settings:'palt'">相談・設計(無料)</h3>
    <p style="margin:0;font-size:14.5px;line-height:1.95;color:#444B59">困りごとが絞れていなくてもOK。業務の流れと判断が集中している場面を伺い、トライアルの進め方を一緒に設計します。</p>
  </div>
  <div data-fade="100" style="background:#FFFFFF;border:1px solid #E4E1D8;padding:28px 26px">
    <div style="display:flex;align-items:baseline;gap:10px;margin:0 0 14px"><span style="font-size:12px;font-weight:800;letter-spacing:.14em;color:var(--c-accent)">STEP</span><span style="font-size:30px;font-weight:900;line-height:1;color:var(--c-primary)">2</span></div>
    <h3 style="margin:0 0 10px;font-size:18px;font-weight:800;color:#1F2430;font-feature-settings:'palt'">無料トライアル(1ヶ月)</h3>
    <p style="margin:0;font-size:14.5px;line-height:1.95;color:#444B59">実務の中でつなげモン No.2を使い、効果を確かめてから判断できます。対象業務は相談時に一緒に決めます。期間中、環境構築や支援にかかる当社への費用は発生しません(ChatGPT有料プランなどの実費はお客様負担です)。</p>
  </div>
  <div data-fade="200" style="background:#FFFFFF;border:1px solid #E4E1D8;padding:28px 26px">
    <div style="display:flex;align-items:baseline;gap:10px;margin:0 0 14px"><span style="font-size:12px;font-weight:800;letter-spacing:.14em;color:var(--c-accent)">STEP</span><span style="font-size:30px;font-weight:900;line-height:1;color:var(--c-primary)">3</span></div>
    <h3 style="margin:0 0 10px;font-size:18px;font-weight:800;color:#1F2430;font-feature-settings:'palt'">本番移行</h3>
    <p style="margin:0;font-size:14.5px;line-height:1.95;color:#444B59">トライアルの結果をもとに範囲・価格を確定し、本格導入と定着支援を開始します。</p>
  </div>
</div>
</div>
</section>

<section data-screen-label="他の選択肢と比べると" style="background:#F7F5F0;padding:clamp(72px,9vw,110px) 24px">
<div style="max-width:1080px;margin:0 auto">
<div data-fade="0" style="display:flex;align-items:center;gap:14px;margin:0 0 16px">
  <span style="font-size:13px;font-weight:700;letter-spacing:.16em;color:var(--c-accent)">05</span>
  <span style="width:36px;height:1px;background:#C9C4B6"></span>
</div>
<h2 data-fade="0" style="margin:0 0 36px;font-size:clamp(26px,3.6vw,38px);font-weight:900;line-height:1.45;letter-spacing:.03em;color:#1F2430;font-feature-settings:'palt'">他の選択肢と比べると</h2>
<div data-fade="0" style="overflow-x:auto;-webkit-overflow-scrolling:touch;border:1px solid #E4E1D8">
  <table style="width:100%;min-width:860px;border-collapse:collapse;background:#FFFFFF;font-size:14.5px;line-height:1.75">
    <thead>
      <tr>
        <th style="padding:14px 18px;text-align:left;border-bottom:1px solid #E4E1D8;background:#FBFAF7;width:120px"></th>
        <th style="padding:14px 18px;text-align:left;border-bottom:1px solid #E4E1D8;background:#FBFAF7;font-size:13.5px;font-weight:700;color:#5C6270">AI・DX人材を採用</th>
        <th style="padding:14px 18px;text-align:left;border-bottom:1px solid #E4E1D8;background:#FBFAF7;font-size:13.5px;font-weight:700;color:#5C6270">DXコンサルに依頼</th>
        <th style="padding:14px 18px;text-align:left;border-bottom:1px solid #E4E1D8;background:#FBFAF7;font-size:13.5px;font-weight:700;color:#5C6270">AIツール導入のみ</th>
        <th style="padding:14px 18px;text-align:left;border-bottom:1px solid var(--c-primary);background:var(--c-primary);font-size:14px;font-weight:900;color:#FFFFFF;letter-spacing:.04em">本サービス</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding:14px 18px;border-bottom:1px solid #EDEAE1;font-size:13.5px;font-weight:800;color:#1F2430;white-space:nowrap">費用の目安</td>
        <td style="padding:14px 18px;border-bottom:1px solid #EDEAE1;color:#444B59">月40万円〜(給与+採用費)</td>
        <td style="padding:14px 18px;border-bottom:1px solid #EDEAE1;color:#444B59">月30万円〜</td>
        <td style="padding:14px 18px;border-bottom:1px solid #EDEAE1;color:#444B59">月数千円〜数万円</td>
        <td style="padding:14px 18px;border-bottom:1px solid color-mix(in oklab, var(--c-primary) 20%, #FFFFFF);background:color-mix(in oklab, var(--c-primary) 7%, #FFFFFF);font-weight:700;color:#1F2430">月12万円〜</td>
      </tr>
      <tr>
        <td style="padding:14px 18px;border-bottom:1px solid #EDEAE1;font-size:13.5px;font-weight:800;color:#1F2430;white-space:nowrap">始めるまで</td>
        <td style="padding:14px 18px;border-bottom:1px solid #EDEAE1;color:#444B59">採用できれば(数ヶ月〜)</td>
        <td style="padding:14px 18px;border-bottom:1px solid #EDEAE1;color:#444B59">契約後</td>
        <td style="padding:14px 18px;border-bottom:1px solid #EDEAE1;color:#444B59">すぐ</td>
        <td style="padding:14px 18px;border-bottom:1px solid color-mix(in oklab, var(--c-primary) 20%, #FFFFFF);background:color-mix(in oklab, var(--c-primary) 7%, #FFFFFF);font-weight:700;color:#1F2430">無料トライアル1ヶ月</td>
      </tr>
      <tr>
        <td style="padding:14px 18px;border-bottom:1px solid #EDEAE1;font-size:13.5px;font-weight:800;color:#1F2430;white-space:nowrap">業務の理解</td>
        <td style="padding:14px 18px;border-bottom:1px solid #EDEAE1;color:#444B59">入社後にゼロから</td>
        <td style="padding:14px 18px;border-bottom:1px solid #EDEAE1;color:#444B59">ヒアリングの範囲まで</td>
        <td style="padding:14px 18px;border-bottom:1px solid #EDEAE1;color:#444B59">—</td>
        <td style="padding:14px 18px;border-bottom:1px solid color-mix(in oklab, var(--c-primary) 20%, #FFFFFF);background:color-mix(in oklab, var(--c-primary) 7%, #FFFFFF);font-weight:700;color:#1F2430">業務を知る自社の担当者が使う</td>
      </tr>
      <tr>
        <td style="padding:14px 18px;border-bottom:1px solid #EDEAE1;font-size:13.5px;font-weight:800;color:#1F2430;white-space:nowrap">社内に残るもの</td>
        <td style="padding:14px 18px;border-bottom:1px solid #EDEAE1;color:#444B59">人(辞めれば失われる)</td>
        <td style="padding:14px 18px;border-bottom:1px solid #EDEAE1;color:#444B59">報告書・提案</td>
        <td style="padding:14px 18px;border-bottom:1px solid #EDEAE1;color:#444B59">ツールと個人のコツ</td>
        <td style="padding:14px 18px;border-bottom:1px solid color-mix(in oklab, var(--c-primary) 20%, #FFFFFF);background:color-mix(in oklab, var(--c-primary) 7%, #FFFFFF);font-weight:700;color:#1F2430">台帳・手順書・改善を回せる担当者</td>
      </tr>
      <tr>
        <td style="padding:14px 18px;font-size:13.5px;font-weight:800;color:#1F2430;white-space:nowrap">やめたとき</td>
        <td style="padding:14px 18px;color:#444B59">引き継ぎ問題が再発</td>
        <td style="padding:14px 18px;color:#444B59">改善が止まる</td>
        <td style="padding:14px 18px;color:#444B59">元どおり</td>
        <td style="padding:14px 18px;background:color-mix(in oklab, var(--c-primary) 7%, #FFFFFF);font-weight:700;color:#1F2430">環境と記録はお客様名義で残る</td>
      </tr>
    </tbody>
  </table>
</div>
<p data-fade="0" style="margin:14px 0 0;font-size:12.5px;color:#8A8FA0">※金額は一般的な目安です。</p>
</div>
</section>


<section data-screen-label="CTA帯" style="background:var(--c-primary);padding:clamp(48px,6vw,64px) 24px">
<div style="max-width:1080px;margin:0 auto;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:24px">
<div style="max-width:660px">
  <p style="margin:0 0 8px;font-size:clamp(20px,2.6vw,26px);font-weight:900;line-height:1.6;letter-spacing:.03em;color:#FFFFFF;font-feature-settings:'palt'">まずは1ヶ月の無料トライアルから始められます。</p>
  <p style="margin:0;font-size:13.5px;line-height:1.9;color:rgba(255,255,255,.72)">期間中、環境構築や支援にかかる当社への費用は発生しません(ChatGPT有料プランなどの実費はお客様負担です)。</p>
</div>
<a href="https://www.k-sp.co.jp/admin/std/contact/new" style="flex:none;display:inline-block;background:var(--c-accent);color:#FFFFFF;font-size:16px;font-weight:700;letter-spacing:.06em;padding:16px 38px;border-radius:3px;text-decoration:none;transition:filter .2s ease,transform .2s ease" style-hover="filter:brightness(.92);transform:translateY(-1px);color:#FFFFFF">無料トライアルを相談する</a>
</div>
</section>

<section data-screen-label="セキュリティ" style="background:#FFFFFF;padding:clamp(72px,9vw,110px) 24px">
<div style="max-width:1080px;margin:0 auto">
<div data-fade="0" style="display:flex;align-items:center;gap:14px;margin:0 0 16px">
  <span style="font-size:13px;font-weight:700;letter-spacing:.16em;color:var(--c-accent)">07</span>
  <span style="width:36px;height:1px;background:#C9C4B6"></span>
</div>
<h2 data-fade="0" style="margin:0 0 36px;font-size:clamp(26px,3.6vw,38px);font-weight:900;line-height:1.45;letter-spacing:.03em;color:#1F2430;font-feature-settings:'palt'">セキュリティとデータの扱い</h2>
<div class="security-grid">
  <div class="security-card" data-fade="0"><h3>AIの学習に使われません</h3><p>入力内容がAIの学習に使われない設定(学習オフ)で運用します</p></div>
  <div class="security-card" data-fade="80"><h3>渡す情報を決めてから始めます</h3><p>AIに渡す情報・渡さない情報、閲覧・更新・承認できる人を、初期整理で一緒に決めます</p></div>
  <div class="security-card" data-fade="160"><h3>環境はお客様名義です</h3><p>サーバーやChatGPTの契約はお客様名義。解約後も、環境と記録はお客様の手元に残ります</p></div>
  <div class="security-card" data-fade="240"><h3>より強固な構成もご提案できます</h3><p>外部にデータを出さないローカルLLM環境のご提案も承ります(別途お見積り)</p></div>
</div>
</div>
</section>

<section data-screen-label="うまくいかないこと" style="background:#F7F5F0;padding:clamp(72px,9vw,110px) 24px">
<div style="max-width:1080px;margin:0 auto">
<div data-fade="0" style="display:flex;align-items:center;gap:14px;margin:0 0 16px">
  <span style="font-size:13px;font-weight:700;letter-spacing:.16em;color:var(--c-accent)">08</span>
  <span style="width:36px;height:1px;background:#C9C4B6"></span>
</div>
<h2 data-fade="0" style="margin:0 0 40px;font-size:clamp(26px,3.6vw,38px);font-weight:900;line-height:1.45;letter-spacing:.03em;color:#1F2430;font-feature-settings:'palt';word-break:auto-phrase">AIだから、うまくいかないことも先にお伝えします</h2>
<div style="max-width:760px">
  <div data-fade="0" style="display:flex;gap:20px;padding:24px 0;border-top:1px solid #DDD8CB">
    <span style="flex:none;font-size:14px;font-weight:800;letter-spacing:.12em;color:#9AA0AC;line-height:2">01</span>
    <div>
      <h3 style="margin:0 0 8px;font-size:17px;font-weight:800;line-height:1.7;color:#1F2430;font-feature-settings:'palt'">AIに教えたルールが、いつの間にか効かなくなることがあります</h3>
      <p style="margin:0;font-size:15px;line-height:1.95;color:#5C6270">AIの更新や会話の状況により、以前守れていた書き方や確認手順が崩れる場合があります。重要なルールは記録として残し、結果を人が確認します。</p>
    </div>
  </div>
  <div data-fade="0" style="display:flex;gap:20px;padding:24px 0;border-top:1px solid #DDD8CB">
    <span style="flex:none;font-size:14px;font-weight:800;letter-spacing:.12em;color:#9AA0AC;line-height:2">02</span>
    <div>
      <h3 style="margin:0 0 8px;font-size:17px;font-weight:800;line-height:1.7;color:#1F2430;font-feature-settings:'palt'">AIの「できました」は、そのまま信用できません</h3>
      <p style="margin:0;font-size:15px;line-height:1.95;color:#5C6270">登録・修正の報告があっても、一部しか反映されていない場合があります。完了報告ではなく、実際の台帳・ファイル・画面を確認してから完了と判断します。</p>
    </div>
  </div>
  <div data-fade="0" style="display:flex;gap:20px;padding:24px 0;border-top:1px solid #DDD8CB">
    <span style="flex:none;font-size:14px;font-weight:800;letter-spacing:.12em;color:#9AA0AC;line-height:2">03</span>
    <div>
      <h3 style="margin:0 0 8px;font-size:17px;font-weight:800;line-height:1.7;color:#1F2430;font-feature-settings:'palt'">記録場所を増やしすぎると、かえって分からなくなります</h3>
      <p style="margin:0;font-size:15px;line-height:1.95;color:#5C6270">同じ内容が複数の場所に残ると、どれが最新か判断しにくくなります。最初は案件・確認待ち・判断を確認できる場所へ絞ります。</p>
    </div>
  </div>
  <div data-fade="0" style="display:flex;gap:20px;padding:24px 0;border-top:1px solid #DDD8CB">
    <span style="flex:none;font-size:14px;font-weight:800;letter-spacing:.12em;color:#9AA0AC;line-height:2">04</span>
    <div>
      <h3 style="margin:0 0 8px;font-size:17px;font-weight:800;line-height:1.7;color:#1F2430;font-feature-settings:'palt'">自動化を増やしても、運用が楽になるとは限りません</h3>
      <p style="margin:0;font-size:15px;line-height:1.95;color:#5C6270">自動化や連携が増えるほど、サービス更新・設定変更・停止の影響も増えます。最初は人が確認できる半手動から始め、繰り返し使える部分だけを自動化します。</p>
    </div>
  </div>
  <div data-fade="0" style="display:flex;gap:20px;padding:24px 0;border-top:1px solid #DDD8CB;border-bottom:1px solid #DDD8CB">
    <span style="flex:none;font-size:14px;font-weight:800;letter-spacing:.12em;color:#9AA0AC;line-height:2">05</span>
    <div>
      <h3 style="margin:0 0 8px;font-size:17px;font-weight:800;line-height:1.7;color:#1F2430;font-feature-settings:'palt'">仕組みを作るだけでは、業務に定着しません</h3>
      <p style="margin:0;font-size:15px;line-height:1.95;color:#5C6270">忙しい時期には記録が後回しになります。すべてを細かく入力するのではなく、最低限残す情報を決め、AIで記録負担を減らしながら定期的に見直します。</p>
    </div>
  </div>
</div>
</div>
</section>

<section data-screen-label="御社の中に残す" style="background:#FFFFFF;padding:clamp(72px,9vw,110px) 24px">
<div style="max-width:1080px;margin:0 auto">
<div data-fade="0" style="display:flex;align-items:center;gap:14px;margin:0 0 16px">
  <span style="font-size:13px;font-weight:700;letter-spacing:.16em;color:var(--c-accent)">09</span>
  <span style="width:36px;height:1px;background:#C9C4B6"></span>
</div>
<h2 data-fade="0" style="margin:0 0 20px;font-size:clamp(26px,3.6vw,38px);font-weight:900;line-height:1.45;letter-spacing:.03em;color:#1F2430;font-feature-settings:'palt';word-break:auto-phrase">私たちへの依存ではなく、御社の中に残す</h2>
<div class="handoff-layout">
  <div class="handoff-visual" data-fade="0"><img src="../../assets/visuals/in-house-handoff.webp" alt="社内担当者がつなげモン No.2と台帳を自ら運用し、支援者が一歩引いて見守るイメージ" width="960" height="720" loading="lazy" decoding="async"></div>
  <div class="handoff-copy">
    <p data-fade="0" style="margin:0 0 32px;font-size:15.5px;line-height:2;color:#444B59">本番環境では、原則として御社名義のサーバーとアカウントを使います。契約終了後も、その時点の環境と記録を御社側で使い続けられる構成にします。</p>
    <p data-fade="0" style="margin:0 0 18px;font-size:14px;font-weight:800;letter-spacing:.1em;color:var(--c-accent)">御社に残るもの</p>
    <div style="display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;margin:0 0 30px">
      <div data-fade="0" style="display:flex;gap:10px;align-items:center;background:#F7F5F0;border:1px solid #E4E1D8;padding:16px"><span style="flex:none;width:8px;height:8px;background:var(--c-primary)"></span><p style="margin:0;font-size:14px;font-weight:700;color:#1F2430">案件・対応履歴</p></div>
      <div data-fade="60" style="display:flex;gap:10px;align-items:center;background:#F7F5F0;border:1px solid #E4E1D8;padding:16px"><span style="flex:none;width:8px;height:8px;background:var(--c-primary)"></span><p style="margin:0;font-size:14px;font-weight:700;color:#1F2430">確認待ち・担当・期限</p></div>
      <div data-fade="120" style="display:flex;gap:10px;align-items:center;background:#F7F5F0;border:1px solid #E4E1D8;padding:16px"><span style="flex:none;width:8px;height:8px;background:var(--c-primary)"></span><p style="margin:0;font-size:14px;font-weight:700;color:#1F2430">判断理由・会議の決定</p></div>
      <div data-fade="180" style="display:flex;gap:10px;align-items:center;background:#F7F5F0;border:1px solid #E4E1D8;padding:16px"><span style="flex:none;width:8px;height:8px;background:var(--c-primary)"></span><p style="margin:0;font-size:14px;font-weight:700;color:#1F2430">報告・依頼テンプレート</p></div>
    </div>
    <p data-fade="0" style="margin:0;font-size:15.5px;line-height:2;color:#444B59">残すのは、環境だけではありません。業務を整理し、AIへ渡し、結果を確認し、次回の手順へ反映する——御社の中で改善を続けるための考え方と進め方まで引き継ぐことを目指します。</p>
  </div>
  <p class="handoff-note" data-fade="0" style="margin:0;padding:14px 18px;background:#F7F5F0;border:1px solid #E4E1D8;font-size:12.5px;line-height:1.9;color:#767E8C">契約終了後も、構築した環境・設定・記録は引き続きご利用いただけます。ただし、AIサービスの仕様変更に伴う修正、障害復旧、追加構築、CodexやVPSなどの利用料は、必要に応じて別途ご相談・ご負担となります。</p>
</div>
</div>
</section>

<section data-screen-label="相性の確認" style="background:#F7F5F0;padding:clamp(72px,9vw,110px) 24px">
<div style="max-width:1080px;margin:0 auto">
<div data-fade="0" style="display:flex;align-items:center;gap:14px;margin:0 0 16px">
  <span style="font-size:13px;font-weight:700;letter-spacing:.16em;color:var(--c-accent)">10</span>
  <span style="width:36px;height:1px;background:#C9C4B6"></span>
</div>
<h2 data-fade="0" style="margin:0 0 36px;font-size:clamp(26px,3.6vw,38px);font-weight:900;line-height:1.45;letter-spacing:.03em;color:#1F2430;font-feature-settings:'palt'">相性の確認</h2>
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:20px">
  <div data-fade="0" style="background:#FFFFFF;border:1px solid #E4E1D8;border-top:2px solid var(--c-primary);padding:28px 30px">
    <h3 style="margin:0 0 20px;font-size:18px;font-weight:800;color:var(--c-primary);font-feature-settings:'palt'">合いやすい会社</h3>
    <div style="display:flex;flex-direction:column;gap:14px">
      <div style="display:flex;gap:12px;align-items:flex-start"><span style="flex:none;font-size:16px;font-weight:800;color:var(--c-primary);line-height:1.8">○</span><p style="margin:0;font-size:15px;line-height:1.9;color:#1F2430">判断や情報が一部の人に集まっている</p></div>
      <div style="display:flex;gap:12px;align-items:flex-start"><span style="flex:none;font-size:16px;font-weight:800;color:var(--c-primary);line-height:1.8">○</span><p style="margin:0;font-size:15px;line-height:1.9;color:#1F2430">社内にAI活用の担当者を育てたい</p></div>
      <div style="display:flex;gap:12px;align-items:flex-start"><span style="flex:none;font-size:16px;font-weight:800;color:var(--c-primary);line-height:1.8">○</span><p style="margin:0;font-size:15px;line-height:1.9;color:#1F2430">今ある仕組みを生かして改善したい</p></div>
      <div style="display:flex;gap:12px;align-items:flex-start"><span style="flex:none;font-size:16px;font-weight:800;color:var(--c-primary);line-height:1.8">○</span><p style="margin:0;font-size:15px;line-height:1.9;color:#1F2430">退職や異動のたびに、引き継ぎで業務が止まった経験がある</p></div>
      <div style="display:flex;gap:12px;align-items:flex-start"><span style="flex:none;font-size:16px;font-weight:800;color:var(--c-primary);line-height:1.8">○</span><p style="margin:0;font-size:15px;line-height:1.9;color:#1F2430">ChatGPTを個人では使っているが、会社の仕事に定着していない</p></div>
    </div>
  </div>
  <div data-fade="100" style="background:#F1EFE9;border:1px solid #DDD8CB;border-top:2px solid #A9A294;padding:28px 30px">
    <h3 style="margin:0 0 20px;font-size:18px;font-weight:800;color:#5C6270;font-feature-settings:'palt'">合いにくいご要望</h3>
    <div style="display:flex;flex-direction:column;gap:14px">
      <div style="display:flex;gap:12px;align-items:flex-start"><span style="flex:none;font-size:16px;font-weight:800;color:#9AA0AC;line-height:1.8">×</span><p style="margin:0;font-size:15px;line-height:1.9;color:#5C6270">重要判断をAIへ任せきりにしたい</p></div>
      <div style="display:flex;gap:12px;align-items:flex-start"><span style="flex:none;font-size:16px;font-weight:800;color:#9AA0AC;line-height:1.8">×</span><p style="margin:0;font-size:15px;line-height:1.9;color:#5C6270">社内で確認・実行する人を置けない</p></div>
      <div style="display:flex;gap:12px;align-items:flex-start"><span style="flex:none;font-size:16px;font-weight:800;color:#9AA0AC;line-height:1.8">×</span><p style="margin:0;font-size:15px;line-height:1.9;color:#5C6270">短期間で全社を自動化したい</p></div>
      <div style="display:flex;gap:12px;align-items:flex-start"><span style="flex:none;font-size:16px;font-weight:800;color:#9AA0AC;line-height:1.8">×</span><p style="margin:0;font-size:15px;line-height:1.9;color:#5C6270">日々の実作業まで丸ごと外注したい</p></div>
      <div style="display:flex;gap:12px;align-items:flex-start"><span style="flex:none;font-size:16px;font-weight:800;color:#9AA0AC;line-height:1.8">×</span><p style="margin:0;font-size:15px;line-height:1.9;color:#5C6270">ツールだけ導入して、業務の整理はしたくない</p></div>
    </div>
  </div>
</div>
</div>
</section>

<section data-screen-label="想い" style="background:var(--c-primary);padding:clamp(80px,10vw,120px) 24px">
<div style="max-width:1080px;margin:0 auto">
<div data-fade="0" style="display:flex;align-items:center;gap:14px;margin:0 0 18px">
  <span style="font-size:13px;font-weight:700;letter-spacing:.16em;color:rgba(255,255,255,.55)">11</span>
  <span style="width:36px;height:1px;background:rgba(255,255,255,.3)"></span>
</div>
<div class="purpose-intro">
  <h2 data-fade="0"><span style="display:block">なぜ、私たちがこの</span><span style="display:block">サービスをつくったのか</span></h2>
  <div class="purpose-story" data-fade="0">
    <p>私たちケーエスピー株式会社は、中小企業のシステム運用に携わるなかで、同じ光景を何度も見てきました。判断は社長の頭の中、案件の経経緯は担当者のノートの中。責任感の強い人ほど仕事を抱え、その人が休むと、業務が止まってしまいます。</p>
    <p>これまで現場を支えてきたからこそ、経験や判断が、自然と特定の人に集まってきたのだと思います。AIが身近になった今、その大切な経験を、会社の中で無理なく共有できる形に変えていける。私たちはそう考えました。AIは導入するだけで力を発揮するものではありません。現場に合う形で使い続けられて、初めて会社の力になります。</p>
  </div>
</div>
<div class="purpose-goals" data-fade="0">
  <p class="purpose-kicker">このサービスに込めた思い</p>
  <div class="purpose-goal-grid">
    <article class="purpose-goal-card">
      <span class="purpose-goal-number">01</span>
      <h3>誰か一人に、仕事を背負わせない</h3>
      <p>責任感のある人ほど休めず、いつも判断を求められる。そんな働き方を、仕組みから変えたい。</p>
    </article>
    <article class="purpose-goal-card">
      <span class="purpose-goal-number">02</span>
      <h3>人の経験を、次の人へつなぐ</h3>
      <p>積み重ねた判断や工夫を、その人だけのものにしない。会社の記憶として残し、次の人へ渡したい。</p>
    </article>
    <article class="purpose-goal-card">
      <span class="purpose-goal-number">03</span>
      <h3>AIで、人の力をもっと引き出す</h3>
      <p>人を置き換えるためではなく、考える時間と余裕を取り戻すためにAIを使いたい。</p>
    </article>
  </div>
</div>
<div class="purpose-closing" data-fade="0">
  <div>
    <span class="purpose-closing-label">私たちの約束</span>
    <h3>主役は、<br>現場で働く人です。</h3>
  </div>
  <div class="purpose-closing-copy">
    <p>AIに判断を任せきるのではなく、重要な判断は必ず人が確認します。私たちは、「全部お任せください」とは言いません。業務を一番よく知っているのは、御社の皆さまだからです。皆さまが力を発揮し、無理なく使い続けられる仕組みができるまで、私たちは伴走します。</p>
  </div>
</div>
</div>
</section>



<section id="contact" data-screen-label="クロージング" style="background:#F7F5F0;padding:clamp(80px,10vw,120px) 24px;scroll-margin-top:70px">
<div style="max-width:800px;margin:0 auto;text-align:center">
<h2 data-fade="0" style="margin:0 0 18px;font-size:clamp(26px,3.6vw,38px);font-weight:900;line-height:1.5;letter-spacing:.03em;color:#1F2430;font-feature-settings:'palt';word-break:auto-phrase">まずは、一緒に改善する最初の業務を決めましょう</h2>
<p data-fade="0" style="margin:0 0 40px;font-size:15.5px;line-height:2;color:#444B59">実際に動いている画面を見ながら、御社の業務に合うかを確認します。<br>その場で本番導入を決める必要はありません。</p>
<div data-fade="0" style="background:#FFFFFF;border:1px solid #E4E1D8;padding:32px clamp(22px,4vw,40px);text-align:left;margin:0 0 40px">
  <div style="display:flex;flex-wrap:wrap;align-items:center;gap:10px;margin:0 0 24px;padding:0 0 18px;border-bottom:1px solid #EDEAE1">
    <span style="font-size:12px;font-weight:800;letter-spacing:.06em;color:#FFFFFF;background:var(--c-primary);padding:4px 12px">デモミーティング</span>
    <span style="font-size:15px;font-weight:700;color:#1F2430">実画面で確認</span>
  </div>
  <div style="display:flex;flex-direction:column;gap:16px">
    <div style="display:flex;gap:14px;align-items:flex-start"><span style="flex:none;width:26px;height:26px;border:1px solid var(--c-primary);color:var(--c-primary);display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:800">1</span><p style="margin:0;font-size:15px;line-height:1.85;color:#1F2430">何が一番重い業務かを確認</p></div>
    <div style="display:flex;gap:14px;align-items:flex-start"><span style="flex:none;width:26px;height:26px;border:1px solid var(--c-primary);color:var(--c-primary);display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:800">2</span><p style="margin:0;font-size:15px;line-height:1.85;color:#1F2430">台帳とAIの流れを実画面でデモ</p></div>
    <div style="display:flex;gap:14px;align-items:flex-start"><span style="flex:none;width:26px;height:26px;border:1px solid var(--c-primary);color:var(--c-primary);display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:800">3</span><p style="margin:0;font-size:15px;line-height:1.85;color:#1F2430">現在の進め方との違いを確認</p></div>
    <div style="display:flex;gap:14px;align-items:flex-start"><span style="flex:none;width:26px;height:26px;border:1px solid var(--c-primary);color:var(--c-primary);display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:800">4</span><p style="margin:0;font-size:15px;line-height:1.85;color:#1F2430">最初に改善する業務を1つ選ぶ</p></div>
    <div style="display:flex;gap:14px;align-items:flex-start"><span style="flex:none;width:26px;height:26px;border:1px solid var(--c-primary);color:var(--c-primary);display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:800">5</span><p style="margin:0;font-size:15px;line-height:1.85;color:#1F2430">トライアルで見る指標を決める</p></div>
  </div>
</div>
<a data-fade="0" href="https://www.k-sp.co.jp/admin/std/contact/new" style="display:inline-block;background:var(--c-accent);color:#FFFFFF;font-size:17px;font-weight:700;letter-spacing:.08em;padding:19px 64px;border-radius:3px;text-decoration:none;box-shadow:0 8px 20px rgba(176,84,60,.28);transition:filter .2s ease,transform .2s ease" style-hover="filter:brightness(.92);transform:translateY(-1px);color:#FFFFFF">お問い合わせ</a>
<p data-fade="0" style="margin:48px 0 0;font-size:12px;line-height:2;color:#8A8FA0;text-align:left">記載内容・料金・契約条件・保守範囲は、打ち合わせおよび双方の確認を経て最終決定します。実データを扱う場合は、秘密保持、外部AI利用条件、個人情報・顧客情報の取り扱いを事前に文書で確認します。</p>
</div>
</section>


