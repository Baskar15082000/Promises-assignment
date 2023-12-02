const { error } = require("console");
const { default: path } = require("path");
const fs = require("fs").promises;
function readFile1(path) {
  return fs
    .readFile(path, "utf-8")
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
}

function writeFile(path, data) {
  return fs
    .writeFile(path, data)
    .then((data) => {
      console.log(path + "writed");
    })
    .catch((error) => {
      console.log(error);
    });
}
writeNames = (path, data) => {
  return fs
    .appendFile(path, data)
    .then((data) => {})
    .catch((error) => {
      console.log(error);
    });
};

function problem2() {
  conversion = (data, type) => {
    if (type == "upper") {
      return data.toUpperCase();
    } else if (type == "lower") {
      return data.toLowerCase().replaceAll(".", ".\n");
    } else {
      return (data = data.split(".").sort().join(""));
    }
  };
  readFile1("./lipsum.txt")
    .then((data) => conversion(data, "upper"))
    .then((convertedData) => writeFile("./upper.txt", convertedData))
    .then(() => writeNames("./fileName.txt", "upper.txt"))
    .then(() => readFile1("./upper.txt"))
    .then((data) => conversion(data, "lower"))
    .then((convertedData) => writeFile("./lower.txt", convertedData))
    .then(() => writeNames("./fileName.txt", "\nlower.txt"))
    .then(() => readFile1("./lower.txt"))
    .then((data) => conversion(data, "sort"))
    .then((data) => writeFile("./sort.txt", data))
    .then(() => writeNames("./fileName.txt", "\nsort.txt"))

    .then(() => readFile1("./fileName.txt"))
    .then((data) => {
      console.log(data);
      const deleteFile = data.split("\n");
      deleteFile.forEach((element) => {
        fs.unlink(element);
      });
    })
    .catch(error);
}
module.exports = problem2;
