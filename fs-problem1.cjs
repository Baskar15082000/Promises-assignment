const { error } = require("console");
const { default: path } = require("path");
const fs = require("fs").promises;

function createDirectory(path) {
  return fs
    .mkdir(path)
    .then(() => {
      console.log("success");
    })
    .catch((error) => {
      console.log("error");
    });
}
function createFile(path, count) {
  return fs
    .writeFile(path + "/temp_" + count + ".json", "")
    .then(() => {
      console.log("file_" + count + " created");
    })
    .catch((error) => console.log(error));
}

function deleteFile(path, count) {
  return fs
    .unlink(path + "/temp_" + count + ".json")
    .then(() => {
      console.log("file_" + count + " deleted");
    })
    .catch((error) => console.log(error));
}

let n = 1;

function recursive(n, num, directoryPath) {
  if (n > num) {
    return "file ";
  }
  createFile(directoryPath, n)
    .then(() => deleteFile(directoryPath, n))
    .then(() => {
      n++;
      recursive(n, num, directoryPath);
    })
    .catch((error) => console.log(error));
}
function problem1(directoryPath, num) {
  createDirectory(directoryPath)
    .then(recursive(n, num, directoryPath))
    .catch((error) => console.log(error));
}
module.exports = problem1;
