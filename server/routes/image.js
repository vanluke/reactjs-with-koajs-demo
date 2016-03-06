import fs from 'fs';
import mime from 'mime';

const getAll = () => {
  return new Promise((resolve, reject) => {
    fs.readdir('./server/routes/img/', (err, filenames) => {
      if(err) {
        reject(err);
      }
      let xc = [
        `./server/routes/img/${filenames[0]}`,`./server/routes/img/${filenames[1]}`
      ];

      const images = xc.map(e=> {
        const mimeType = mime.lookup(e);
        const body = fs.readFileSync(e);
        return { body: body,
          type: mimeType
        }
      });;
      resolve(images);
    });
  })
};

export default getAll;
