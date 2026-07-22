# VPS環境移行に伴う検証・セットアップタスク

## 概要
TunageMON LP v2 プロジェクトのVPS環境への移行に伴い、依存関係のセットアップ、ビルドパイプラインの動作検証、および Decap CMS の運用準備を実施する。

## タスク一覧

### 1. ドキュメント確認 & 初期整理
- [x] `agent.md` および `docs/github_cms_backend/` 配下の既存ドキュメント一式の確認
- [x] `docs/vps_environment_setup/` ディレクトリおよび管理ドキュメント (`task.md`, `implementation_plan.md`, `walkthrough.md`) の作成
- [x] `agent.md` のタスクリスト・ステータス更新

### 2. 依存関係のセットアップ
- [x] Node.js 22 (v22.14.0) および `web/` ディレクトリでの `npm install` 実行・完了確認

### 3. ビルドパイプライン動作テスト
- [x] `node scripts/generate-theme-json.mjs` によるデータ抽出動作確認
- [x] VPS上の `typst` CLI (v0.13.0) のセットアップおよび PDF コンパイル検証
- [x] `./build.sh` 実行による完全ビルド (Typst PDF + 本番ZIP + Astro プレビュー) の検証完了

### 4. Decap CMS 動作確認・VPS準備
- [x] Decap CMS のローカルバックエンド (`npx decap-server`) および GitHub バックエンド設定の検証
- [x] VPS環境での検証・公開手順および運用の整理完了
