# [実装計画] VPS環境移行に伴う動作検証およびDecap CMS準備

## 目的
TunageMON LP v2 プロジェクトのVPS環境への引き継ぎに伴い、リポジトリの整合性確認、依存関係セットアップ、全自動ビルドパイプライン（Astro + Typst）の疎通確認、および Decap CMS の動作検証を実施する。

## ユーザーレビューが必要な項目

> [!IMPORTANT]
> **Typst（PDF生成ツール）の環境依存**
> `build.sh` で実行される `typst compile` に必要な CLI が本VPS環境に存在するか確認が必要です。未インストールの場合はインストール手順またはバイナリ配置を行います。

> [!NOTE]
> **Decap CMS の運用方式**
> VPSローカルでの編集確認時は `npx decap-server` を利用し、本番/リモート運用時は GitHub OAuth Backend を使用するハイブリッド構成の検証を行います。

## 提案する変更内容

### 1. ドキュメント整備
- `docs/vps_environment_setup/` ディレクトリを作成し、`task.md`, `implementation_plan.md`, `walkthrough.md` を配置。
- `agent.md` に「VPS環境への移行検証フェーズ」を追記し、最新化。

### 2. 環境セットアップ
- `web/` 配下での `npm install` 実行。

### 3. パイプライン検証
- `node web/scripts/generate-theme-json.mjs` による Markdown -> `data/theme.json` 変換。
- `typst compile` の疎通。
- `./build.sh` 実行による最終出力 (`web/dist/`, `production-build.zip`, `simulator_presentation.pdf` 等) の確認。

---

## 変更ファイル一覧
- `docs/vps_environment_setup/task.md`
- `docs/vps_environment_setup/implementation_plan.md`
- `docs/vps_environment_setup/walkthrough.md`
- `agent.md`

---

## 検証手順

1. **ドキュメント確認**: 既存ドキュメントとの整合性確認
2. **パッケージ導入**: `cd web && npm install`
3. **ビルド検証**: `./build.sh`
4. **Decap CMS検証**: `npx decap-server` 起動テスト
