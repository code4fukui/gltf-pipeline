import { parseGlb } from "./parseGlb.js";
import { processGltf } from "./processGltf.js";

/**
 * Convert a glb to glTF.
 *
 * @param {Buffer} glb A buffer containing the glb contents.
 * @param {Object} [options] The same options object as {@link processGltf}
 * @returns {Promise} A promise that resolves to an object containing the glTF and a dictionary containing separate resources.
 */
export function glbToGltf(glb, options) {
  const gltf = parseGlb(glb);
  return processGltf(gltf, options);
}
