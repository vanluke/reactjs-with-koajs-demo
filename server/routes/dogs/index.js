import config from './../../config';
import dogs from './dogs.json';

export default async function () {
    this.body = dogs;
    this.status = 201;
}
