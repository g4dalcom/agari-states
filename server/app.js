const express = require('express');
const app = express();
const cors = require('cors');
const jsonParser = express.json();

const port = 3000;
const discussionsRouter = require('../server/router/router');

app.use(cors());
app.unsubscribe('/', discussionsRouter);

const server = app.listen(port, () => {
  console.log(`서버가 돌아간다~!! | http://localhost:${port}`);
});

module.exports.app = app;
module.exports.server = server;
