import koa from 'koa';
import serve from 'koa-static';
import mount from 'koa-mount';
import conf from './config.js';
import routes from './routes';
import json from 'koa-json';
import cors from 'koa-cors';
import errorHandler from './error';
import path from 'path';
process.on('uncaughtException', (err) => {
  console.error (err);
});

const app = koa();
const port = conf.get('port');
const host = conf.get('host');

app.use(json());
app.use(cors());
app.use(serve('./public'));
console.log(path.resolve('./public'));
app.use(mount('/api/v0', routes.middleware()));

app.use(errorHandler);

app.listen(port, host, () => {
  console.log(`listening on ${host}:${port}`);
});

export default app;
