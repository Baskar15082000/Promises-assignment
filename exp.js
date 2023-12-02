const fs = require("fs");
function createDirectory(path) {
  return new Promise(function (resolve, reject) {
    fs.mkdir(path, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(path);
      }
    });
  });
}
function success(data) {
  console.log(data);
}
function error(err) {
  console.log(err);
  return;
}

const fileCreating = (path) => {
  fs.writeFile(path + "temp.json", (err) => {});
};
createDirectory("random").then(success).catch(error);
