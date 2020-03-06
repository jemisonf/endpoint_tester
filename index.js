const express = require('express');
const pino = require('express-pino-logger');

const app = express();

app.use(pino());
app.use(express.json());
app.use(express.urlencoded());

const port = 3000;

app.all("/*", (req, res) => {
  req.log.info({
    body: req.body,
    params: req.params,
  });
  res.send('success');
});

app.listen(port, () => console.log(`listening on port ${port}`));
