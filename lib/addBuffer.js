import { addToArray } from "./addToArray.js";

/**
 * Adds buffer to gltf.
 *
 * @param {Object} gltf A javascript object containing a glTF asset.
 * @param {Buffer} buffer A Buffer object which will be added to gltf.buffers.
 * @returns {Number} The bufferView id of the newly added bufferView.
 *
 * @private
 */
export function addBuffer(gltf, buffer) {
  const newBuffer = {
    byteLength: buffer.length,
    extras: {
      _pipeline: {
        source: buffer,
      },
    },
  };
  const bufferId = addToArray(gltf.buffers, newBuffer);
  const bufferView = {
    buffer: bufferId,
    byteOffset: 0,
    byteLength: buffer.length,
  };
  return addToArray(gltf.bufferViews, bufferView);
}
