import router from 'koa-router';

var routes = new router();
routes.get('/test', function *() {
    this.body = { k: 1, k1: 2, k2: 3 };
});

export default routes;
