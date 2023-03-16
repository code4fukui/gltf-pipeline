import { Cesium } from "./Cesium.js";
import { addExtensionsUsed } from "./addExtensionsUsed.js";
import { addToArray } from "./addToArray.js";

const defined = Cesium.defined;

/**
 * Adds an extension to gltf.extensionsRequired if it does not already exist.
 * Initializes extensionsRequired if it is not defined.
 *
 * @param {Object} gltf A javascript object containing a glTF asset.
 * @param {String} extension The extension to add.
 *
 * @private
 */
export function addExtensionsRequired(gltf, extension) {
  let extensionsRequired = gltf.extensionsRequired;
  if (!defined(extensionsRequired)) {
    extensionsRequired = [];
    gltf.extensionsRequired = extensionsRequired;
  }
  addToArray(extensionsRequired, extension, true);
  addExtensionsUsed(gltf, extension);
}
