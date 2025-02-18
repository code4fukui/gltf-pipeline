import { Cesium } from "./Cesium.js";
import { numberOfComponentsForType } from "./numberOfComponentsForType.js";

const ComponentDatatype = Cesium.ComponentDatatype;
const defined = Cesium.defined;

/**
 * Returns the byte stride of the provided accessor.
 * If the byteStride is 0, it is calculated based on type and componentType
 *
 * @param {Object} gltf A javascript object containing a glTF asset.
 * @param {Object} accessor The accessor.
 * @returns {Number} The byte stride of the accessor.
 *
 * @private
 */
export function getAccessorByteStride(gltf, accessor) {
  const bufferViewId = accessor.bufferView;
  if (defined(bufferViewId)) {
    const bufferView = gltf.bufferViews[bufferViewId];
    if (defined(bufferView.byteStride) && bufferView.byteStride > 0) {
      return bufferView.byteStride;
    }
  }
  return (
    ComponentDatatype.getSizeInBytes(accessor.componentType) *
    numberOfComponentsForType(accessor.type)
  );
}
