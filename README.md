# つなげモン LP & 提案書 生成エンジン (TunageMON Engine)

このリポジトリは、マークダウンファイルから「Web用のランディングページ（HTML）」と「営業用の提案資料（PDF）」を自動的に一括生成するための静的サイトジェネレーター（SSG）環境です。

## アーキテクチャ

このシステムは以下の技術スタックで構成されています。

*   **データソース:** Markdown (Frontmatter + 本文)
*   **Webジェネレーター:** [Astro](https://astro.build/) (v4系)
*   **PDFジェネレーター:** [Typst](https://typst.app/)
*   **スタイリング:** Tailwind CSS (v4)
*   **自動化:** GitHub Actions (ビルド・デプロイ)

## ディレクトリ構成

```text
/
├── web/                  # Astroプロジェクトのルート
│   ├── src/
│   │   ├── content/themes/ # ★マークダウンの保存場所（マスターデータ）
│   │   ├── components/     # Astroコンポーネント（LPの各ブロック）
│   │   ├── layouts/        # ページレイアウト（LPLayoutなど）
│   │   └── pages/          # 動的ルーティング ([...slug].astro)
│   ├── public/           # 画像、CSS、JS、Typst用テンプレートなど
│   ├── scripts/          # MDからJSON、PDFを生成するNodeスクリプト
│   ├── astro.config.mjs  # Astro設定
│   └── package.json
├── build.sh              # 統合ビルドスクリプト（プレビュー＋本番ZIP）
├── build_prod.sh         # 本番用ビルド専用スクリプト
└── .github/workflows/    # 自動デプロイ設定
```

## 使い方

### 1. 記事（テーマ）の追加・編集
新しいLPや提案書を作成するには、`web/src/content/themes/` ディレクトリに新しいMarkdownファイルを作成します（例: `08-theme.md`）。
Frontmatter（ファイルの先頭の `---` で囲まれた部分）に、タイトルや必要なブロック構成を記述します。

### 2. ローカルでの開発とプレビュー
ローカルでプレビューサーバーを立ち上げるには以下のコマンドを実行します。
（※事前に Node.js v22 以上がインストールされている必要があります）

```bash
cd web
npm install
npm run dev
```

### 3. 本番用ビルドとPDF生成
手元で本番と同じビルド（PDF生成、本番用HTML、ZIPファイルの作成）を行うには、プロジェクトルートで以下のコマンドを実行します。

```bash
./build.sh
```
※実行には `typst` コマンドが利用可能である必要があります（リポジトリ内の `bin/typst` に配置済みです）。

## デプロイと成果物について

GitHub にプッシュすると、GitHub Actions が自動的に `build.sh` を実行し、GitHub Pages にデプロイします。
デプロイされた環境には、以下の2つのモードが存在します。

1.  **プレビュー環境 (ルート直下):**
    *   関係者・管理者向けの確認環境です。
    *   画面右下に「歯車アイコン」が表示され、クリックするとPDF版のダウンロードや、本番用コード（ZIP）のダウンロードが可能です。
2.  **本番用環境 (`/production/` 配下):**
    *   実際の顧客のサーバーにアップロードするためのクリーンなHTML群です。
    *   プレビュー用の歯車アイコンや、社外秘の提案書PDFなどはすべて除外されています。
    *   ダウンロード可能なZIPファイル（`production-build.zip`）の中身は、このディレクトリの構成と同じです。
