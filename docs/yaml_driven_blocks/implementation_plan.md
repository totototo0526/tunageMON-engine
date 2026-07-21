# Implementation Plan: YAML Driven Layout Blocks

## フェーズ1: スキーマの拡張
- `web/src/content.config.ts` のZodスキーマを更新し、`blocks`という配列フィールドを追加する。
- 汎用ブロックに必要な型（`type`, `title`, `subtitle`, `items`, `text`など）を定義する。

## フェーズ2: Markdownデータの移行
- `07-theme.md` の Frontmatter に `blocks` のデータを構築する。
- 「解決策」は `type: "BlockCards"` にマッピング。
- 「導入シナリオ」は `type: "BlockBeforeAfter"` にマッピング。
- 「よくある質問」は `type: "BlockFAQ"` にマッピング。
- `07-theme.md` 本文に残っていた古いHTMLコードを削除する。

## フェーズ3: 汎用ブロックコンポーネントの実装（Web側）
- `web/src/components/lp-blocks/` ディレクトリを作成する。
- `BlockCards.astro`, `BlockBeforeAfter.astro`, `BlockFAQ.astro` を作成する。
- `TemplateA.astro` 内で `theme.data.blocks` を `.map` して、動的に上記のコンポーネントをレンダリングする処理を実装する。

## フェーズ4: PDF生成ロジックの実装（PDF側）
- `pdf/presentation.typ` を編集し、`theme.blocks` をループ処理させる。
- `block.type` に応じてスライドレイアウト（カード型、ビフォーアフター型、FAQリスト型）を分岐して出力するロジックを実装する。

## フェーズ5: 残存HTMLのYAML化（Next Steps）
- `07-theme.md` に残っている「導入の流れ」「他の選択肢との比較表」「セキュリティ」等のセクションを、同様の汎用ブロックとしてYAML化する。
- 必要な新規レイアウトブロック（`BlockFlow`, `BlockTable` 等）をAstroとTypstの両方に追加する。
