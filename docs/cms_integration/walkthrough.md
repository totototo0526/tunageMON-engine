# ウォークスルー: CMSの構築とPDF同期の完了

## 1. Keystaticの検証と撤退
当初、Astroと親和性の高い `Keystatic` の導入を試みたが、Astroの設定 (`output: static`) 下ではAPIエンドポイントが動作せず「真っ白な画面」や「404エラー」が発生。SSRモード (`output: hybrid/server`) に変更すると今度はAstroの開発サーバー自体がクラッシュする問題に直面した。そのため、静的サイト向けに実績のある Decap CMS に舵を切った。

## 2. Decap CMS のセットアップ
`web/public/admin/` ディレクトリに以下の2ファイルを作成：
- `index.html`: Decap CMS を読み込むエントリーポイント
- `config.yml`: コンテンツのスキーマ定義

さらに、ローカルのGitリポジトリを読み書きするために、ルートディレクトリで `npx decap-server` を立ち上げる構成とした。

## 3. ブロックスキーマの完全定義
`07-theme.md` のYAML化に伴い新設したブロック群（ChatDemo, ReasoningGrid, FAQ, BeforeAfter 等）を全て `config.yml` に定義。これにより、赤いエラーを消し去り、CMS上ですべてのコンテンツがフォーム形式で編集可能となった。プレビュー画面はAstroの特性上機能しないため、UX向上のため `preview: false` を設定し、入力フォームを全画面化した。

## 4. PDF（Typst）出力の検証完了
全てがYAMLデータ化された後、`build.sh` を実行してTypstエンジンによるPDF生成をテスト。新ブロック群を含むデータ14点が全て正常にJSON経由でパースされ、エラーなく `presentation.pdf` がビルドされることを確認した。これにより「1つのYAMLからWebとPDFを同時に出力する」というアーキテクチャが完全に実現した。
