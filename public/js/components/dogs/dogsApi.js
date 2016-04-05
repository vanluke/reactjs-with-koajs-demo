import config from './../../config';

const dogsUrl = `${config.api.url}/dogs`;

const getDogs = function () {
  return fetch(dogsUrl, {
    method: 'get'
  }).then((response) => {
      return response.json();
  }).then((bodyResponse) => {
    return bodyResponse;
  });
};

export { getDogs };
