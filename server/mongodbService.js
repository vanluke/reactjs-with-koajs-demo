import mongo from 'mongodb';
import conf  from './config';
const MongoClient = mongo.MongoClient;
const mongoLab = conf.get('mongoLab');
const url = `mongodb://${mongoLab.username}:${mongoLab.password}@${mongoLab.server}:${mongoLab.port}/arports`;
console.log(url);

const connect = () => {
  return new Promise ((resolve, reject) => {
    MongoClient.connect(url, (err, database) => {
        if (err) {
          reject(err);
        }
        resolve(database);
      });
  });
};

export default connect;
