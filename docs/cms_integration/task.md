# タスクリスト: 完全YAML駆動化とCMS導入

## 目的
LPプラットフォームの完全YAML駆動化を完遂し、非エンジニアでも簡単にコンテンツの更新・運用ができるようにローカルCMSを導入する。さらに、Astro (Web) と Typst (PDF) 双方のビルドパイプラインで同一データを完全に同期させる。

## タスク一覧
- [x] `07-theme.md` の完全YAML化（HTML混在の排除）
- [x] Astro側での新規ブロックコンポーネント作成（ChatDemo, ReasoningGrid等）
- [x] Typst側への同ブロックのレンダリングロジック統合
- [x] Keystaticの試験導入とトラブルシューティング（SSR要件によるローカルクラッシュのため破棄）
- [x] Decap CMS (旧Netlify CMS) への方針転換と設定 (`config.yml` 作成)
- [x] Decap CMS上で全ての新規ブロックが編集できるようにスキーマを完全対応
- [x] Decap CMSのAstroプレビュー機能の無効化（フルスクリーン入力UIへの最適化）
- [x] PDFビルドプロセスの検証と成功確認
