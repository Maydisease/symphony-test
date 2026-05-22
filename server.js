const express = require('express');

const app = express();
const port = 3000;

app.get('/', (_request, response) => {
  response.json({ message: 'Hello from Symphony!' });
});

app.get('/health', (_request, response) => {
  response.json({ status: 'ok' });
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`服务器正在监听端口 ${port}`);
  });
}

module.exports = app;
