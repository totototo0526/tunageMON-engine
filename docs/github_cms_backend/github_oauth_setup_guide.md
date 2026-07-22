# Decap CMS GitHub 連携・OAuth認証設定ガイド (Plan A)

本ガイドでは、Decap CMS（管理画面）から GitHub リポジトリへ直接変更を送信・保存するための認証設定手順を解説します。

---

## 💡 全体像と仕組み

Decap CMS は静的HTMLブラウザ上で動作するため、安全に GitHub API へアクセス（コミット・ブランチ作成）するには **OAuth 認証プロキシ** が必要です。

```
[Decap CMS (ブラウザ)] ──> [OAuth 認証プロキシ] ──> [GitHub API]
                                                 │
                                           (直接リポジトリへコミット)
```

---

## 🛠️ 手順 1: `config.yml` のリポジトリ名を更新

[`web/public/admin/config.yml`](file:///media/ksp-zorin-001/WORK_DISK/workspace/tunageMON/lp_v2_work/web/public/admin/config.yml) を開き、ご自身のリポジトリ情報に合わせて書き換えます。

```yaml
backend:
  name: github
  repo: your-github-username/tunageMON  # 例: octocat/tunageMON
  branch: main
```

---

## 🔑 手順 2: GitHub OAuth Application の作成

1. GitHub にログインし、[Developer Settings > OAuth Apps](https://github.com/settings/developers) にアクセスします。
2. **「New OAuth App」** をクリックします。
3. 以下の項目を入力します：
   * **Application name**: `TunageMON Decap CMS`
   * **Homepage URL**: お使いのWebサイトURL（例: `https://your-domain.com`）
   * **Authorization callback URL**:
     * OAuthプロキシ（Vercel / Netlify等）の認証完了URLを入力します。
     * 例: `https://<your-oauth-proxy-domain>/callback`
4. **「Register application」** をクリックします。
5. 生成された **Client ID** と **Client Secret**（Generate a new client secret をクリック）を控えます。

---

## 🌐 手順 3: OAuth 認証プロキシの設定（無料・推奨パターン）

GitHub API はブラウザからの直接 CORS OAuth トークン交換をセキュリティ上制限しているため、以下のいずれかのフリー/オープンソースプロキシを利用します。

### パターン A: Netlify を利用する場合（最も手軽）
1. Netlify にリポジトリを接続します。
2. Netlify の管理画面で **Site settings > Identity > Services > Git Gateway** を有効化します。
3. `config.yml` を以下のように設定します：
   ```yaml
   backend:
     name: git-gateway
     branch: main
   ```

### パターン B: Vercel / Cloudflare Workers（独立した無料プロキシ）
Decap CMS 公式が展開している `decap-cms-oauth-provider` （1クリックデプロイ可能）を使用する場合：
1. [decap-cms-oauth-provider-vercel (GitHub)](https://github.com/vsls/decap-cms-oauth-provider-vercel) などを Vercel に1クリックデプロイ。
2. Vercel の環境変数に GitHub の `OAUTH_CLIENT_ID` と `OAUTH_CLIENT_SECRET` を設定。
3. `config.yml` に以下を追記：
   ```yaml
   backend:
     name: github
     repo: your-github-username/tunageMON
     branch: main
     base_url: https://your-oauth-provider.vercel.app
     auth_endpoint: /api/auth
   ```

---

## 💻 ローカル開発での動作テスト

ローカル環境で開発・動作確認を行う場合は、認証プロキシの設定を行わなくても従来通りテスト可能です。

1. Terminal で以下を実行：
   ```bash
   npx decap-server
   ```
2. Astro デブサーバーを起動（別ターミナル）：
   ```bash
   cd web && npm run dev
   ```
3. `http://localhost:4321/admin/` にアクセスすると、`local_backend: true` が優先適用され、認証なしでローカルの Markdown ファイルを編集・保存できます。
