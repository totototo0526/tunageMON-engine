#!/bin/bash

# プロジェクトローカルの bin (Node 22, Typst) を優先参照
export PATH="/var/www/tunageMON-engine/bin:$PATH"

echo "🚀 本番公開用 (Production) のビルドを開始します..."

echo "🔄 Markdownからデータ(theme.json)を生成しています..."
cd web
node scripts/generate-theme-json.mjs
cd ..

# 1. プレビュー用フラグをOFFにしてAstroビルド
echo "🌐 本番用Web (Astro) のビルドを実行中..."
cd web

# 本番環境変数設定
# PUBLIC_IS_PREVIEW=false で管理パネルを非表示にする
# BASE_PATH=/ で本番用のルートパスにする
export PUBLIC_IS_PREVIEW=false
export BASE_PATH=/
export SITE_URL=https://www.k-sp.co.jp

npm run build
if [ $? -ne 0 ]; then
  echo "❌ 本番用Webのビルドに失敗しました。"
  exit 1
fi

echo "🧹 社外秘資料（PDF等）を除外しています..."
# dist内にあるスライド(PDF)や不要なモックアップデータなどを本番配布物から消去する
rm -rf dist/slides/
# もし他にも消したい社内用フォルダがあればここに追記

echo "🔗 ローカルでもCSSが効くようにパスを相対パスに変換しています..."
find dist -maxdepth 1 -name "*.html" -exec sed -i 's|href="/|href="./|g' {} +
find dist -maxdepth 1 -name "*.html" -exec sed -i 's|src="/|src="./|g' {} +

# themes/*/ 階層などの深いHTML用
find dist/themes -mindepth 2 -maxdepth 2 -name "*.html" -exec sed -i 's|href="/|href="../../|g' {} +
find dist/themes -mindepth 2 -maxdepth 2 -name "*.html" -exec sed -i 's|src="/|src="../../|g' {} +

# themes/*/*/ 階層 (permalink等で深くなった場合) 用
find dist/themes -mindepth 3 -maxdepth 3 -name "*.html" -exec sed -i 's|href="/|href="../../../|g' {} +
find dist/themes -mindepth 3 -maxdepth 3 -name "*.html" -exec sed -i 's|src="/|src="../../../|g' {} +

# ZIP化
echo "📦 本番用コードをZIP化しています..."
cd dist
zip -r ../../production-build.zip ./*
cd ../..

echo "🎉 本番用ZIP (production-build.zip) の生成が完了しました！"
