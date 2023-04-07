const express = require('express');
const app = express();
const cors = require('cors');

const port = 3000;
const discussionsRouter = require('./router/router');

app.use(cors());
app.use(express.json());
app.use('/', discussionsRouter);
app.all('*', (req, res) =>
  res.status(404).send(`<h1>ERROR - 페이지를 찾을 수 없습니다.</h1>`)
);

const server = app.listen(port, () => {
  console.log(`서버가 돌아간다~!! | http://localhost:${port}`);
});

module.exports.app = app;
module.exports.server = server;
