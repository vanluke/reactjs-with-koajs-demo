import config from './../config';
import mongoDatabase from './../mongodbService';

export default async function ()  {
  console.log(this);
  // const db = yield mongoDatabase();
  // const airports = db.collection('airports').find();
  const airports = ['a', 'a', 'a', 'a'];
  this.body = airports;
  this.status = 201;
};
