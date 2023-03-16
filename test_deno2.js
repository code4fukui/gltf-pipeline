import { glbToGltf } from "./lib/glbToGltf.js";

const bin = await Deno.readFile("./inoshi1-min_mt.glb");
console.log(await glbToGltf(bin));
