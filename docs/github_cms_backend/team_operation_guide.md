# TunageMON LP v2 チーム運用・コンテンツ編集マニュアル

本ドキュメントでは、チームメンバーが Decap CMS（管理画面）および Markdown を利用して、TunageMON LP のコンテンツ更新や新規テーマの追加を行う手順を説明します。

---

## 編集モード（2種類）

Decap CMS は用途に合わせて 2 つのモードで動作します：

1. **ローカル開発モード (`local_backend`)**:
   - エンジニアがローカル PC で動作確認しながら編集する場合。
   - `npx decap-server` を起動しておくことで、ログイン認証なしで直接ローカルのファイルを編集・保存できます。
2. **チームリモート編集モード (`github`)**:
   - チームメンバーがブラウザから CMS 画面にアクセスし、編集結果を直接 GitHub へコミットする場合。
   - 事前に設定した GitHub アカウント（または OAuth 認証）でログインして使用します。

---

## 📝 1. コンテンツの編集手順 (Decap CMS)

1. **管理画面にアクセス**:
   - ローカル: `http://localhost:4321/admin/`
   - 本番環境: `https://<your-domain>/admin/`
2. **テーマを選択**:
   - 左側メニューの **「Themes / LPs」** を選択し、編集したいテーマ（例: `製造業向けLP`, `予約管理向けLP` 等）をクリックします。
3. **ブロックの追加・編集・並び替え**:
   - **Hero**: ファーストビューのテキストやサービスロゴリストを編集。
   - **Blocks (コンポーネント)**:
     - `BlockText` (テキストブロック)
     - `BlockCTA` (コンバージョンエリア)
     - `BlockBeforeAfter` (導入前後比較)
     - `BlockChatDemo` (チャットUIデモ)
     - `BlockReasoningGrid` (選ばれる理由グリッド)
     - `BlockPricing` (料金プラン)
     - `BlockFAQ` (よくある質問)
     - `BlockScenarios` (活用シナリオ)
   - ブロックの「+ Add」で新しいセクションを追加したり、ドラッグ＆ドロップで表示順序を変更できます。
4. **保存と公開**:
   - 画面上部の **「Publish」 (公開)** ボタンをクリックすると、変更内容が GitHub リポジトリに自動コミットされます。

---

## ➕ 2. 新しいLPテーマを追加する手順

新しい業界・用途向けのLPを作成する場合は、ソースコードの変更は不要です。

1. **Markdown ファイルの作成**:
   - `web/src/content/themes/` ディレクトリ配下に `08-new-theme.md` のようなファイルを作成します。
2. **基本構造の記述**:
   - 以下のような YAML フロントマターを記述します：
     ```yaml
     ---
     id: "08-new-theme"
     layout: "template_a"
     title: "新規業界向けAIソリューション"
     subtitle: "業務自動化を劇的に推進"
     description: "新テーマの概要説明文"
     blocks:
       - type: "BlockCTA"
         title: "今すぐ無料でお試し"
         desc: "14日間の無料トライアルを実施中"
     ---
     ```
3. **ビルドと確認**:
   - ビルドスクリプトを実行して、Web用JSONおよびTypst PDFが問題なく更新されるか確認します。
     ```bash
     bash build.sh
     ```

---

## 🛠️ トラブルシューティング

* **Q. CMS画面で「Error loading config」と表示される**
  - [`web/public/admin/config.yml`](file:///media/ksp-zorin-001/WORK_DISK/workspace/tunageMON/lp_v2_work/web/public/admin/config.yml) のインデントや YAML 構文エラーがないか確認してください。
* **Q. 保存した変更がWebサイトに反映されない**
  - GitHub Actions または CI/CD ビルドのステータスを確認してください。
