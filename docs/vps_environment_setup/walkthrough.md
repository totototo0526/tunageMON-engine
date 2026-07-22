# [ウォークスルー] VPS環境移行に伴う動作検証およびDecap CMS準備

## 変更内容の概要
TunageMON LP v2 プロジェクトをVPS環境へ移行するにあたり、依存環境のセットアップ、ビルドパイプライン（Astro + Typst）の動作検証、および Decap CMS 運用準備を実施しました。

---

## 実施・検証結果

### 1. 依存環境およびバイナリの整備
- **Node.js 22 (v22.14.0)**: Astro 7.x が要求する Node `>=22.12.0` を満たすため、プロジェクトローカル (`bin/`) にセットアップ。
- **Typst CLI (v0.13.0)**: PDF自動生成を行うため、スタンドアロン Linux musl バイナリを `bin/` に配置。
- **`build.sh` / `build_prod.sh`**: `bin/` を優先参照する環境変数パス指定を追加。

### 2. 統合ビルドパイプラインの動作検証 (`./build.sh`)
- **データ抽出 (`generate-theme-json.mjs`)**: ✅ 7つの Markdown テーマファイルから `data/theme.json` および `web/public/assets/data/theme.json` を正常出力。
- **PDFコンパイル (`Typst`)**: ✅ `simulator_presentation.pdf` および `ai_adjutant_presentation.pdf` を生成し、`web/public/slides/` に配置完了。
- **本番用ZIP生成 (`build_prod.sh`)**: ✅ 社外秘資料（PDF等）を除外し、相対パス変換を行った `production-build.zip` の出力を確認。
- **Astro Webビルド (`npm run build`)**: ✅ 全 8 ページの静的ルート出力がエラーなく完了 (`web/dist/`)。

### 3. Decap CMS (VPS環境) 動作準備
- **ローカルバックエンド (`local_backend: true`)**: `npx decap-server` を起動することで、認証なしでローカルの `web/src/content/themes/` 内 Markdown をリアルタイム編集・更新可能であることを確認。
- **GitHub Backend (Plan A)**: `web/public/admin/config.yml` 内の `backend.name: github` および OAuth 導入ガイド (`docs/github_cms_backend/github_oauth_setup_guide.md`) に基づく設定準備完了。

---

## まとめ
VPS環境におけるすべての動作環境（Node 22, Typst, Astro, Decap CMS）の準備とビルドパイプラインの疎通が確認できました。引き継ぎおよび開発継続の基礎が完全に整いました。
