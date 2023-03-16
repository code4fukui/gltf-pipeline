import { Cesium } from "./Cesium.js";

const defined = Cesium.defined;

/**
 * Checks whether the glTF uses the given extension.
 *
 * @param {Object} gltf A javascript object containing a glTF asset.
 * @param {String} extension The name of the extension.
 * @returns {Boolean} Whether the glTF uses the given extension.
 *
 * @private
 */
export function usesExtension(gltf, extension) {
  return (
    defined(gltf.extensionsUsed) && gltf.extensionsUsed.indexOf(extension) >= 0
  );
}
