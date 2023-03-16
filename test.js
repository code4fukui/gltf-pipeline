const fs = require("fs");
const parseGlb = require("./lib/parseGlb.js");

console.log(parseGlb);
const bin = fs.readFileSync("./inoshi1-min_mt.glb");
console.log(parseGlb(bin));
