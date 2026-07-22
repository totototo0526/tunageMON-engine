# [実装計画] Decap CMS & プレビュー環境の実稼働検証

## 目的
Decap CMS (2) および プレビュー・開発サーバー (4) の動作確認を行い、コンテンツ運用を開始できる完全稼働状態を確立する。

## 検証項目

### 1. 開発サーバー (Astro dev)
- `cd web && export PATH="/var/www/tunageMON-engine/bin:$PATH" && npm run dev -- --host 0.0.0.0`
- ポート `4321` でのアクセス疎通およびポータル/テーマページのルーティングチェック

### 2. Decap CMS (ローカルバックエンド)
- `npx decap-server` 起動
- `http://<VPS_HOST>:4321/admin/` または `public/admin/` からアクセスし、ローカルバックエンド経由で Markdown 編集が機能するかテスト

---

## 変更・対象ファイル
- `docs/vps_readiness_verification/task.md`
- `docs/vps_readiness_verification/implementation_plan.md`
- `docs/vps_readiness_verification/walkthrough.md`
- `agent.md`
