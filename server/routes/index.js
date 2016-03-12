import router from 'koa-router';
import config from './../config';
import mongoDatabase from './../mongodbService';
import airports from './airports';
import dogs from './dogs';

const routes = new router();
routes.get('/test', airports);
routes.get('/dogs', dogs);

export default routes;
