# tunageMON-engine エージェント向け引き継ぎ・ルール文書

この文書は、今後このリポジトリを編集・拡張するAIエージェント（あなた）に向けたプロジェクト固有のルールとアーキテクチャの解説です。
作業を開始する前に必ず一読し、既存の設計思想や特殊なビルドプロセスを壊さないように注意してください。

---

## ⚠️ 作業終了前の必須チェックリスト

作業を終える前に、**必ず以下を確認・実行してください**。

- [ ] **新しいブロックコンポーネントを追加した場合** → このファイル（`AGENTS.md`）のセクション7「利用可能なブロックコンポーネント一覧」に、そのコンポーネントのYAML記法例を追記する。
- [ ] **ビルドプロセスや環境変数の仕様を変更した場合** → 該当するセクション（2〜5）の内容を最新の状態に更新する。
- [ ] **`AGENTS.md` を更新したら** → `git commit` してリポジトリに反映させる。

> **なぜ必要か？** このドキュメントが古くなると、次のエージェントが「存在しないコンポーネントを使おうとする」「すでにある機能を重複して実装する」などの無駄が発生します。ドキュメントの最新化は作業の一部です。

---

## ⚠️ ブランチ運用ルール

このリポジトリは `main` へのプッシュが即座に本番VPSへのデプロイ（GitHub Actions経由）につながります。
**オーナー（リポジトリ管理者）の意図しない変更が `main` に混入しないよう**、以下のルールに従ってください。

### 小さな修正（テキスト・YAML内容の変更など）
`main` への直接プッシュで問題ありません。

### 大きな変更（以下に該当する場合）
以下のような変更は、**必ずフィーチャーブランチを切ってから作業し、オーナーの確認を得てからマージしてください**。

- 新しいAstroコンポーネント（`.astro` ファイル）の追加
- `build.sh` / `build_prod.sh` の変更
- `astro.config.mjs` や `package.json` の変更
- デプロイ設定（`.github/workflows/`）の変更

```bash
# ブランチを切って作業する例
git checkout -b feature/add-new-block
# ... 作業 ...
git push origin feature/add-new-block
# → GitHubでPull Requestを作成し、オーナーにレビューを依頼する
```

---

## 1. プロジェクトの全体像と制約

*   **マスターデータはMarkdown**: LPや提案書の内容はすべて `web/src/content/themes/*.md` で管理されています。Astroのコンポーネント（`*.astro`）側に直接テキストをハードコードせず、必ず Markdown 側から Props として受け取って描画するようにしてください。
*   **Astro + Typst のハイブリッド構成**: Markdownファイルから `scripts/generate-theme-json.mjs` を経由して JSON データが作られ、それを Astro (HTML) と Typst (PDF) の両方がソースとして参照します。
*   **Vite/Astro のビルドキャッシュに注意**: ビルドスクリプトの実行順序や環境変数によって Astro のキャッシュが誤作動することがあります。自動デプロイで意図しない古いコードが残る可能性があるため、キャッシュのクリーニングプロセスを尊重してください。

## 2. 特殊なビルドプロセス (`build.sh`)

このプロジェクトのビルドスクリプトは非常に特殊です。GitHub Actions (`deploy.yml`) からは `build.sh` が呼ばれます。
`build.sh` は内部で以下の順序で処理を行います。

1.  `build_prod.sh` を呼び出し、**本番環境用 (歯車なし, 相対パス置換済み) のビルド** を行う。
2.  生成された本番用 HTML (`web/dist`) を `web/dist_production` に一時退避する。
3.  `npm run build` を直接呼び出し、**プレビュー環境用 (管理者用パネルあり) のビルド** を行う。
    *   この時、`PUBLIC_IS_PREVIEW=true` という環境変数がセットされ、Astroコンポーネント（`AdminPanel.astro` 等）の出し分けが行われます。
    *   ビルド直前に `rm -rf node_modules/.astro` を行い、本番ビルドのキャッシュが混入しないようにしています。（これを消さないこと）
4.  退避しておいた本番用成果物を `dist/production` に配置し、さらにZIP化 (`production-build.zip`) してルート直下に配置する。

**⚠️ 警告**: このビルドプロセス（順序、一時退避の仕組み）は非常に壊れやすいため、明確な理由がない限り `build.sh` や `build_prod.sh` の構造を安易に変更しないでください。

## 3. アセットのパス解決と階層深度の問題

本サイトは、ルートディレクトリだけでなく深い階層（例: `/themes/04-theme/detail/`）にもページが生成されます。
そのため、Astro のレイアウトファイル（`LPLayout.astro` など）で CSS や JS などの静的アセットを読み込む際は、**必ずルート相対パス（例: `/assets/js/main.js`）を使用してください**。

`../../` のような相対パスを使用すると、階層が深い動的ルート (`[...slug].astro`) において、アセットの読み込みが 404 になる問題が発生します。
また、Astro の `<script is:inline>` を使用する場合は、ビルド出力後もパスが維持されるように注意してください（本番用の `build_prod.sh` では `sed` による強制的な相対パス置換が走るため、この仕様の違いにも留意すること）。

## 4. アイコン (Lucide) の描画について

本サイトでは、プレビュー環境のUI（右下の歯車やホバーメニュー内）などに [Lucide](https://lucide.dev/) アイコンを使用しています。
*   HTML内では `<i data-lucide="settings"></i>` のように記述します。
*   実際のSVGへの置換は、クライアントサイドの `main.js` (`lucide.createIcons()`) によって実行されます。
*   もしアイコンが表示されないバグが発生した場合は、`main.js` が 404 になっていないか（パスが間違っていないか）、またはデプロイの遅延を疑ってください。

## 5. デプロイに関する注意

GitHub Actions によるデプロイ（VPSへの反映）は、プッシュから完了までに時間がかかる（数分〜）ことがあります。
コードを修正した直後に `curl` 等で検証し、変更が反映されていないように見えても、すぐに「コードが間違っている」と判断せず、Actions の完了を待つか、ローカル（`./build.sh`）でのビルド結果を優先して信頼してください。

---

## 6. Markdownファイル（テーマ）の構造

新しいLPを追加・編集する際は `web/src/content/themes/` にMarkdownファイルを作成します。
既存の `01-theme.md` が最も標準的な実装例なので、新規作成時はこれを参考にしてください。

### 基本 Frontmatter フィールド

```yaml
---
id: "08"                      # 連番。トップ一覧のカードに表示される (必須)
layout: "template_a"          # 現状この固定値のみ (必須)
title: "サービス名"             # ページタイトル (必須)
subtitle: "キャッチコピー"       # サブタイトル (必須)
description: '説明文。HTML可。' # ヒーロー下の説明文 (必須)
hidden: true                  # true にするとトップの一覧に表示されない（裏LPなどに使用）
permalink: "04-theme/detail"  # カスタムURLパス。hidden の裏LPページで使用する
hero_services:                # ヒーローに表示する特徴リスト（省略可）
  - "01 特徴その1"
  - "02 特徴その2"
pricing:                      # 料金セクション（省略するとセクション自体が非表示）
  free_trial: "トライアル説明文"
  initial: "30"               # 初期費用（万円）
  monthly: "15"               # 月額（万円）
links:                        # ヒーローのボタン（hidden ページ向け）
  - text: "親ページに戻る"
    url: "/themes/04-theme/index.html"
problems:                     # 「こんな悩みはありませんか」セクション（省略可）
  - title: "悩みのタイトル"
    description: "悩みの説明"
    image: "01-decision.webp" # /assets/images/ 配下のファイル名
downloads:                    # ヒーロー下に「資料一覧」セクションを追加する（省略可）
  - label: "資料をダウンロード"
    file: "/04_presentation.pdf"
blocks:                       # ページ本体のコンテンツブロック（下記参照）
  - type: BlockCards
    ...
---
```

---

## 7. 利用可能なブロックコンポーネント一覧

`blocks:` 配列に以下の `type` を指定することで、各セクションを組み合わせてLPを構成できます。
`subtitle`, `title`, `desc` は全ブロック共通で省略可能です。

### `BlockCards` — カードグリッド（解決策・機能紹介など）

```yaml
- type: BlockCards
  subtitle: "02　解決策"
  title: "セクションタイトル"
  items:
    - badge: "Web"         # カード右上に薄く表示される大きな文字（省略可）
      title: "カードタイトル"
      subtitle: "小見出し" # 省略可
      desc: "説明文"
```

### `BlockBeforeAfter` — 導入前後の変化（3カラムカード）

```yaml
- type: BlockBeforeAfter
  title: "導入するとこう変わります"
  desc: "注釈テキスト（省略可）"
  items:
    - tag: "シナリオのタグ（省略可）"
      before: "導入前の状態"
      after: "導入後の状態"
      desc: "詳細説明"
      image: "image.webp"   # /assets/images/ 配下（省略可）
```

### `BlockSteps` — ステップ・導入フロー

```yaml
- type: BlockSteps
  title: "導入の流れ"
  items:
    - title: "ステップ名"
      desc: "説明文"
      stepLabel: "STEP"     # 省略可（デフォルト: "STEP"）
      stepNumber: 1          # 省略可（デフォルト: インデックス+1）
```

### `BlockFAQ` — よくある質問（アコーディオン）

```yaml
- type: BlockFAQ
  title: "よくある質問"
  items:
    - q: "質問文"
      a: "回答文"
```

### `BlockCTA` — コール・トゥ・アクション帯

```yaml
- type: BlockCTA
  theme: "dark"             # "dark"（紺地）または省略（ベージュ地）
  align: "center"           # "center" または省略（左寄せ）
  title: "アクション見出し"
  desc: "補足テキスト（省略可）"
  button:
    text: "ボタンテキスト"
    url: "https://..."
```

### `BlockText` — テキスト＋カードのフリーフォームセクション

```yaml
- type: BlockText
  theme: "dark"              # "dark"（紺地）または省略（白地）
  title: "左カラムの大見出し（\\n で改行可）"
  paragraphs:
    - "段落1"
    - "段落2"
  cardsTitle: "カード群の小見出し（省略可）"
  cards:                     # 省略可
    - num: "01"
      title: "カードタイトル"
      desc: "説明文"
```

### `BlockList` — 番号付きリスト

```yaml
- type: BlockList
  title: "セクションタイトル"
  items:
    - num: "01"            # 省略可（デフォルト: 連番）
      title: "項目タイトル"
      desc: "説明文"
```

### `BlockTable` — 比較テーブル

```yaml
- type: BlockTable
  title: "セクションタイトル"
  headers:
    - "比較軸1"
    - "比較軸2"
    - "つなげモン"         # 最後の列がハイライト色になる
  rows:
    - label: "行の項目名"
      values: ["値1", "値2", "値3"]
  note: "テーブル下の注釈（省略可）"
```

### `BlockComparisonCards` — 相性グループカード（○/×形式）

```yaml
- type: BlockComparisonCards
  title: "セクションタイトル"
  groups:
    - type: "positive"     # "positive"（紺枠）または "negative"（グレー枠）
      title: "グループタイトル"
      items:
        - "項目テキスト"
    - type: "negative"
      title: "グループタイトル"
      items:
        - "項目テキスト"
```

### `BlockReasoningGrid` — 理由グリッド（画像＋テキスト交互・左右交互レイアウト）

```yaml
- type: BlockReasoningGrid
  title: "なぜ選ばれるのか"
  summary: "まとめのテキスト（省略可）"
  note: "脚注テキスト（省略可）"
  items:
    - num: "POINT 01"
      title: "理由タイトル"
      desc: "説明文"
      image: "image.webp"       # /assets/images/ 配下
      imageAlt: "代替テキスト"  # 省略可
```

### `BlockChatDemo` — 社内チャット風デモ表示

```yaml
- type: BlockChatDemo
  title: "セクションタイトル"
  note: "注釈テキスト（省略可）"
  patterns:
    - label: "ケースA"
      title: "パターンのタイトル"
      messages:
        - senderName: "田中部長"
          senderType: "user"      # "user"（グレーアイコン）またはそれ以外（アクセント色）
          text: "メッセージ本文\n改行も可"
          prefix: "＞ 引用元テキスト（省略可）"
```

### `BlockStats` — KPI・数字ハイライト（3カラム）

```yaml
- type: BlockStats
  title: "セクションタイトル"
  desc: "補足テキスト（省略可）"
  items:
    - number: "1,200+"
      label: "導入社数"
      desc: "補足説明"
```

### `BlockIntegration` — システム連携図（ハブ＆スポーク）

```yaml
- type: BlockIntegration
  title: "すべてを繋ぐハブになる"
  desc: "説明文（省略可）"
  center: "つなげモン DB"    # 中央に表示されるハブ名
  spokes:
    - name: "Kintone"
      icon: "☁️"             # 絵文字を使う
    - name: "会計ソフト"
      icon: "💰"
```
