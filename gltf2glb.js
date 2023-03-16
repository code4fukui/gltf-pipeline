import { gltfToGlb } from "./lib/gltfToGlb.js";

const fn = Deno.args[0];
if (!fn || !fn.endsWith(".gltf")) {
  console.log("gltf2glb [gltf file]");
  Deno.exit(1);
}
const fn2 = fn.substring(0, fn.length - 4) + "glb";
const gltf = JSON.parse(await Deno.readTextFile(fn));
const res = await gltfToGlb(gltf);
await Deno.writeFile(fn2, res.glb);
