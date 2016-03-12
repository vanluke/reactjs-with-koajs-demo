import config from './../config';
import dogs from './dogs/dogs.json';

export default async function () {
  try{
    this.body = dogs;
    this.status = 201;
  } catch(e) {
    this.status = 500;
  }
}
