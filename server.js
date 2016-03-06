import koa from 'koa';
import serve from 'koa-static';
import mount from 'koa-mount';
import conf from './server/config.js';
import routes from './server/routes';
import json from 'koa-json';

process.on('uncaughtException', (err) => {
  console.log(err)
});

const app = koa();
const port = conf.get('port');
const host = conf.get('host');

app.use(json());

app.use(serve(__dirname + '/public'));

app.use(mount('/api/v0', routes.middleware()));

app.use(function* (next) {
  try {
    yield next;
    let status = this.status || 404;
    if (status === 404) {
      this.throw(404);
    }
  } catch (err) {
    err.status = err.status || 500;
    err.message = err.expose ? err.message : 'Error!';
    this.status = err.status;
    this.body = {code: err.status, message: err.message};
    this.app.emit('error', err, this);
  }
});

app.listen(port, host,() => {
  console.log(`listening on ${port}`);
});

export default app;
