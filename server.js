const Koa = require('koa');
const handler = require('./src/handler');


const app = new Koa();
const port = 3000;

app.use(handler);

app.listen(port);
console.log('Server listening on port', port);
