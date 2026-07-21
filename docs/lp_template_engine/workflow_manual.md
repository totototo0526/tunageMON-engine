# つなげモン特化LP 追加・編集マニュアル

## 概要
このドキュメントは、「つなげモン」のLPプラットフォームに新しいテーマ（ソリューション）や特化型LPを追加・編集するためのガイドラインです。

## 新しいテーマ（LP）を追加する方法

1. **Markdownファイルの作成**
   `web/src/content/themes/` ディレクトリに新しいMarkdownファイルを作成します。
   （例：`08-new-service.md`）

2. **Frontmatter（YAML）の記述**
   ファイルの上部に以下の必須プロパティを含む設定を記述します。
   
   ```yaml
   ---
   id: "08"
   layout: "template_a"
   title: "つなげモン 新サービス"
   subtitle: "〜 新しい業務を「つなげモン」 〜"
   description: "サービスの詳細な説明文をここに記述します。HTMLタグも使用可能です。"
   button:
     type: "link"
     url: "./themes/08-new-service/index.html"
     text: "特化LPを見る"
     icon: "external-link"
   problems:
     - title: "課題のタイトル1"
       description: "課題の詳細な説明1"
       image: "01-decision.webp"
     - title: "課題のタイトル2"
       description: "課題の詳細な説明2"
       image: "02-case-history.webp"
   ---
   ```

3. **反映の確認**
   上記を保存してビルド（`./build.sh`）を実行すると、以下の2つが自動的に行われます。
   * メインポータルの「〇つの連携ソリューション」の数字が自動で増え、カードが追加されます。
   * `layout: "template_a"` を指定した場合、原氏デザインベースのリッチな特化LPページが自動生成され、ボタンから遷移できるようになります。

## 既存のテーマを編集する方法
* `web/src/content/themes/` 内の該当するファイルをテキストエディタで開き、`title`、`description`、`problems` などのテキストを書き換えるだけで、メインポータルおよび特化LPの両方に即座に反映されます。

## 新しいデザインレイアウトを追加する場合
もし `template_a` 以外の新しいデザイン（例：`template_b`）を追加したい場合は、
1. `web/src/components/lp-templates/` に新しいコンポーネント（例：`TemplateB.astro`）を作成する。
2. `web/src/pages/themes/[slug].astro` にて、`theme.data.layout === 'template_b'` の場合の分岐を追加し、コンポーネントを呼び出すように設定します。
