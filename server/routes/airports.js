import config from './../config';
import mongoDatabase from './../mongodbService';

const getAirports = function *() => {
  console.log(this);
  const db = yield mongoDatabase();
  const airports = db.collection('airports').find();
  this.body = airports;
  this.status = 201;
};

export default getAirports;
