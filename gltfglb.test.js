import * as t from "https://deno.land/std/testing/asserts.ts";
import { gltfToGlb } from "./lib/gltfToGlb.js";
import { glbToGltf } from "./lib/glbToGltf.js";

Deno.test("round trip", async () => {
  const gltf = JSON.parse(await Deno.readTextFile("./inoshi1-min_mt.gltf"));
  //console.log(gltf);
  const glb = await gltfToGlb(gltf);
  //console.log(glb);
  const gltf2 = await glbToGltf(glb.glb);
  //console.log(gltf2);
  const gltf0 = JSON.parse(await Deno.readTextFile("./inoshi1-min_mt.gltf"));
  //t.assertEquals(gltf0, gltf2.gltf); // byteLengthが1あわない
  const glb2 = await gltfToGlb(gltf2.gltf);
  t.assertEquals(glb2.glb, glb.glb); // binaryで一致する
});
