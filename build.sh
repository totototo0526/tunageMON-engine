#!/bin/bash

echo "🚀 つなげモン 統合ビルドを開始します..."

# 1. Typst (PDF) のビルド
# ※ 現状はまだJSONとの完全な動的バインディング（Rust等）ではなく、
# モックアップの .typ をコンパイルするのみのプレースホルダーです。
echo "📄 プレゼン用PDF (Typst) のビルドを実行中..."
cd pdf
typst compile --root .. presentation.typ
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

# 2. Astro (Web) のビルド
echo "🌐 Web (Astro) のビルドを実行中..."
cd web
npm run build
if [ $? -eq 0 ]; then
  echo "✅ Webのビルドに成功しました。"
else
  echo "❌ Webのビルドに失敗しました。"
  exit 1
fi
cd ..

echo "🎉 すべてのビルドが完了しました！"
