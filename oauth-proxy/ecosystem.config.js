module.exports = {
  apps: [{
    name: "tunagemon-oauth",
    script: "./server.js",
    env: {
      NODE_ENV: "production",
      PORT: 3002,
      HOST: "https://tunagemon.totototo0526.xyz",
      OAUTH_CLIENT_ID: "Ov23liQu0j3L0KM1JAPV",
      OAUTH_CLIENT_SECRET: "a87d5d620fda80a402bf22957dde9d1dc8b04389"
    }
  }]
}
