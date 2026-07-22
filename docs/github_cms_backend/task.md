# タスクリスト: Decap CMS GitHub Backend移行 & 開発ロードマップ

## 目的
 TunageMON LP v2 の既存運用・ビルド環境に影響を与えない範囲で、安全にフェーズ分けを行い、チーム協調編集に向けた GitHub Backend (Plan A) 移行および運用基盤の強化を実施する。

## タスク一覧

### フェーズ 1: ドキュメント整理 & ロードマップ確定
- [x] ロードマップ作成およびユーザー承認プロセスの実施
- [x] `docs/github_cms_backend/` ディレクトリ作成および管理ドキュメント (`task.md`, `implementation_plan.md`) の配置
- [x] `agent.md` のステータス・ロードマップ更新

### フェーズ 2: アセット整理とビルド同期検証
- [x] `web/public/assets/` およびテーマ画像パスの整合性チェック
- [x] `generate-theme-json.mjs` による 7 テーマ分の JSON 自動生成・配置の動作確認完了（※Typst PDFコンパイルは環境依存のため手動/CI実行を前提）

### フェーズ 3: Decap CMS GitHub Backend (Plan A) 設定設計
- [x] `web/public/admin/config.yml` への `name: github` バックエンド設定追記（`local_backend` との共存設計完了）
- [x] GitHub OAuth 認証セットアップガイド ([`github_oauth_setup_guide.md`](file:///media/ksp-zorin-001/WORK_DISK/workspace/tunageMON/lp_v2_work/docs/github_cms_backend/github_oauth_setup_guide.md)) の作成完了

### フェーズ 4: 動作検証 & チーム運用ドキュメント作成
- [x] ローカル環境での動作検証用構成とフォールバック確認 (`local_backend: true`)
- [x] チーム運用・コンテンツ編集マニュアル ([`team_operation_guide.md`](file:///media/ksp-zorin-001/WORK_DISK/workspace/tunageMON/lp_v2_work/docs/github_cms_backend/team_operation_guide.md)) の作成完了
