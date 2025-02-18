import { Cesium } from "./Cesium.js";

const defined = Cesium.defined;

/**
 * Removes an extension from gltf.extensionsRequired if it is present.
 *
 * @param {Object} gltf A javascript object containing a glTF asset.
 * @param {String} extension The extension to remove.
 *
 * @private
 */
export function removeExtensionsRequired(gltf, extension) {
  const extensionsRequired = gltf.extensionsRequired;
  if (defined(extensionsRequired)) {
    const index = extensionsRequired.indexOf(extension);
    if (index >= 0) {
      extensionsRequired.splice(index, 1);
    }
    if (extensionsRequired.length === 0) {
      delete gltf.extensionsRequired;
    }
  }
}
