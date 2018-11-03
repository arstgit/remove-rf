let fs = require("fs");
let join = require("path").join;

module.exports = function deleteDirRecursive(path) {
  if (fs.existsSync(path)) {
    fs.readdirSync(path).forEach(function(file) {
      let curPath = join(path, file);
      if (fs.lstatSync(curPath).isDirectory()) {
        deleteDirRecursive(curPath);
      } else {
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(path);
  }
};
