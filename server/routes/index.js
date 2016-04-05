import router from 'koa-router';
import config from './../config';
import dogs from './dogs';

const routes = new router();
routes.get('/dogs', dogs);

export default routes;
