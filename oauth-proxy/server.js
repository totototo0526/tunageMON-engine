require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { AuthorizationCode } = require('simple-oauth2');

const app = express();
const port = process.env.PORT || 3001;

// 環境変数からの設定
const client_id = process.env.OAUTH_CLIENT_ID;
const client_secret = process.env.OAUTH_CLIENT_SECRET;
// GitHubのデフォルトのスコープはrepo, user
const scope = process.env.SCOPES || 'repo,user';

// ドメインをハードコードまたは環境変数から取得
const host = process.env.HOST || 'https://tunagemon.totototo0526.xyz';

app.use(cors());

// simple-oauth2 クライアント初期化
const client = new AuthorizationCode({
  client: {
    id: client_id,
    secret: client_secret,
  },
  auth: {
    tokenHost: 'https://github.com',
    tokenPath: '/login/oauth/access_token',
    authorizePath: '/login/oauth/authorize',
  },
});

// Authorization URI の作成
const authorizationUri = client.authorizeURL({
  redirect_uri: `${host}/callback`,
  scope: scope,
  state: 'random-state-string', // 本来はセキュリティのためにランダム生成し検証するべきですが簡易実装
});

// デバッグ用
app.use((req, res, next) => {
  console.log('Incoming request:', req.method, req.originalUrl, req.path);
  next();
});

// 1. /auth エンドポイント: GitHub の認証画面へリダイレクト
app.get('/auth', (req, res) => {
  if (!client_id || !client_secret) {
    return res.status(500).send('OAuth Client ID and Secret are not configured.');
  }
  res.redirect(authorizationUri);
});

// 念のため /api/auth と / も受けるようにする
app.get('/api/auth', (req, res) => {
  if (!client_id || !client_secret) {
    return res.status(500).send('OAuth Client ID and Secret are not configured.');
  }
  res.redirect(authorizationUri);
});

app.get('/', (req, res) => {
  res.send('Root OK');
});

// 2. /callback エンドポイント: GitHub からのコールバックを受け取りトークン交換
app.get('/callback', async (req, res) => {
  const { code } = req.query;

  if (!code) {
    return res.status(400).send('Authorization code is missing.');
  }

  const options = {
    code,
    redirect_uri: `${host}/callback`,
  };

  try {
    const accessToken = await client.getToken(options);
    const token = accessToken.token.access_token;
    
    // Decap CMS の求めるハンドシェイク形式に変更
    const script = `
      <script>
        (function() {
          function receiveMessage(e) {
            console.log("receiveMessage %o", e);
            window.opener.postMessage(
              'authorization:github:success:{"token":"${token}","provider":"github"}',
              e.origin
            );
          }
          window.addEventListener("message", receiveMessage, false);
          
          // 親ウィンドウとのハンドシェイク開始
          console.log("Sending message: authorizing:github");
          window.opener.postMessage("authorizing:github", "*");
        })();
      </script>
      <p>認証に成功しました。このウィンドウを閉じてください。</p>
    `;
    res.send(script);
  } catch (error) {
    console.error('Access Token Error', error.message);
    res.status(500).json('Authentication failed');
  }
});

// Health check
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.listen(port, () => {
  console.log(`OAuth proxy server listening on port ${port}`);
});
