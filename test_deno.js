import { parseGlb } from "./lib/parseGlb.js";

console.log(parseGlb);
const bin = await Deno.readFile("./inoshi1-min_mt.glb");
console.log(parseGlb(bin));
