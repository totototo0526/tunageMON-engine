# 実装計画: 特化LPテンプレートエンジン

## 1. 現状の課題と目的
原氏より受領した「つなげモン No.2」の静的HTMLは、デザインが優れているものの独立した構成（独自のヘッダー・フッター、カスタムタグ）となっている。
これを現在の「つなげモンプラットフォーム（LP v2）」のAstro CMSアーキテクチャに統合し、Markdownからデータ駆動で生成可能にする。
同時に、ヘッダー等のデザインをプラットフォーム側と統一することで、ブランドの一貫性を担保する。

## 2. アーキテクチャ設計

### 2.1 動的ルーティングの確立
- `web/src/pages/themes/[slug].astro` を作成する。
- `getStaticPaths()` を用いて、`src/content/themes/*.md` の各ファイルに対応するURLパス（例: `/themes/02`）を生成する。

### 2.2 デザインテンプレートのコンポーネント化
受領したHTMLを以下のAstroコンポーネントに分割し、再利用可能な構成とする。
- `LPHero.astro` (ヒーローセクション)
- `LPProblems.astro` (悩みセクション)
- `LPSolutions.astro` (解決策セクション)
- `LPScenarios.astro` (導入シナリオセクション)
- `LPWorkflow.astro` (導入の流れセクション)
- `LPComparison.astro` (他社比較表セクション)
- `LPPricing.astro` (料金表セクション)
- ※ ヘッダー・フッターは既存の `Layout.astro` または新規の `LPLayout.astro`（プラットフォーム標準デザインを踏襲）を使用する。

### 2.3 スキーマ（Frontmatter）の拡張
特化LPとして描画するために、`web/src/content.config.ts` のスキーマを拡張する。
- `layout`: 適用するテンプレートパターン（例: `default`, `pattern_a`）
- `lpData`: 各セクションに流し込む詳細データ（例: 料金情報、具体的な悩みリスト、他社比較データなど）

### 2.4 デザインパターン（バリエーション）の切り替え
将来的に「複数パターンのデザインをMarkdownだけで切り替える」機能を見据え、`[slug].astro` 内で `theme.data.layout` の値に応じて描画するコンポーネント群をスイッチできる構造（Factoryパターン的なアプローチ）を採用する。

## 3. 段階的移行アプローチ

### フェーズ1: そのまま配置（即効性確保）
- 受領した `LP.html` などを `web/public/lp/` に配置し、ひとまずポータルからのリンクを有効化する。
- Markdownの `button.url` を使ってリンクを繋ぐ。

### フェーズ2: コンポーネントへの分解（骨組み作成）
- HTMLを `.astro` に変換。
- 独自の `<x-dc>` や `<helmet>` タグを取り除き、Astro標準の記法へ修正する。
- スクリプト（IntersectionObserver等のアニメーション）をAstroの `<script>` に移植。

### フェーズ3: データ連動化（CMS化）
- ハードコーディングされているテキストを、Astroの `props` および Markdown Frontmatter のデータへ置き換える。
- `./build.sh` 実行時に全ページが一括生成されることを確認する。
