const express = require("express");

const app = express();
const port = 3000;

app.get("/", (_req, res) => {
  res.json({ message: "Hello from Symphony!" });
});

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`服务器正在监听 ${port} 端口`);
  });
}

module.exports = app;
