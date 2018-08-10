const fs = require('fs');

module.exports = (path) => {
  // wrap fs.readFile in a promise
  return new Promise( (resolve, reject) => {
    fs.readFile(path, {}, (err, data) => {
      if (err) reject(err);
      resolve(data.toString());
    });
  });
}
