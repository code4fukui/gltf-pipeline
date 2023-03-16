import { parseGlb } from "./parseGlb.js";
import { gltfToGlb } from "./gltfToGlb.js";

/**
 * Run a glb through the gltf-pipeline.
 *
 * @param {Buffer} glb A buffer containing the glb contents.
 * @param {Object} [options] The same options object as {@link processGltf}
 * @returns {Promise} A promise that resolves to an object containing the glb and a dictionary containing separate resources.
 */
export function processGlb(glb, options) {
  const gltf = parseGlb(glb);
  return gltfToGlb(gltf, options);
}
