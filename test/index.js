const dupR = require("dup-r");
const join = require("path").join;
const fs = require("fs");
const assert = require("assert");

const removeRf = require("..");

let source = join(__dirname, "d1");
let dest = join(__dirname, "d2");

dupR(source, dest);

if (!fs.existsSync(join(__dirname, "d2/f1"))) {
  assert.fail("first copy failed!");
}

removeRf(dest);

if (fs.existsSync(join(__dirname, "d2/f1"))) {
  assert.fail("remove -rf failed!");
}

console.log("Passed!");
