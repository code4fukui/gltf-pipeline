import { glbToGltf } from "./lib/glbToGltf.js";

const fn = Deno.args[0];
if (!fn || !fn.endsWith(".glb")) {
  console.log("glb2gltf [glb file]");
  Deno.exit(1);
}
const fn2 = fn.substring(0, fn.length - 3) + "gltf";
const glb = await Deno.readFile(fn);
const res = await glbToGltf(glb);
await Deno.writeTextFile(fn2, JSON.stringify(res.gltf, null, 2));
