#!/bin/bash

echo "🚀 つなげモン 統合ビルドを開始します..."

echo "🔄 Markdownからデータ(theme.json)を生成しています..."
cd web
node scripts/generate-theme-json.mjs
cd ..

# 1. Typst (PDF) のビルド
# ※ 現状はまだJSONとの完全な動的バインディング（Rust等）ではなく、
# モックアップの .typ をコンパイルするのみのプレースホルダーです。
echo "📄 プレゼン用PDF (Typst) のビルドを実行中..."
cd pdf
# CI環境でダウンロードしたフォントを読み込むために --font-path を追加
typst compile --root .. --font-path fonts presentation.typ
if [ $? -eq 0 ]; then
  mkdir -p ../web/public/slides
  cp presentation.pdf ../web/public/slides/simulator_presentation.pdf
  cp presentation.pdf ../web/public/slides/ai_adjutant_presentation.pdf
  echo "✅ PDFのビルドに成功しました。"
else
  echo "❌ PDFのビルドに失敗しました。"
  exit 1
fi
cd ..

# 2. 本番用エクスポート (ZIP) の生成
echo "📦 本番公開用ZIPの生成を実行中..."
./build_prod.sh
if [ $? -ne 0 ]; then
  echo "❌ 本番用ZIPの生成に失敗しました。"
  exit 1
fi

# 3. Astro (Web/Preview) のビルド
echo "🌐 Web (プレビュー用Astro) のビルドを実行中..."
cd web
export PUBLIC_IS_PREVIEW=true
npm run build
if [ $? -eq 0 ]; then
  echo "✅ Webのビルドに成功しました。"
  # 生成された本番用ZIPをプレビューサイトのルートに配置してダウンロード可能にする
  mv ../production-build.zip dist/
else
  echo "❌ Webのビルドに失敗しました。"
  exit 1
fi
cd ..

echo "🎉 すべてのビルドが完了しました！"
