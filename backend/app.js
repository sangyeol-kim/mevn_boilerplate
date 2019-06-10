const express = require('express');
const history = require('connect-history-api-fallback');

const app = express();

let port = 3000;

const indexRouter = require('./routes/index');

app.use(history());
app.use(express.static('public'));

app.use('/', indexRouter);

app.listen(port, () => {
    console.log(`서버가 ${port}에서 동작중입니다.`);
});