import { Cesium } from "./Cesium.js";
import { Buffer } from "./Buffer.js";

const RuntimeError = Cesium.RuntimeError;

const equals = (bin, arr) => Buffer.equals(bin, new Uint8Array(arr));

/**
 * Get the image extension from a Buffer containing image data.
 *
 * @param {Buffer} data The image data.
 * @returns {String} The image extension.
 *
 * @private
 */
export function getImageExtension(data) {
  const header = Buffer.slice(data, 0, 2); // data.slice(0, 2);
  const webpHeaderRIFFChars = Buffer.slice(data, 0, 4); // data.slice(0, 4);
  const webpHeaderWEBPChars = Buffer.slice(data, 8, 12); // data.slice(8, 12);

  if (equals(header, [0x42, 0x4d])) {
    return ".bmp";
  } else if (equals(header, [0x47, 0x49])) {
    return ".gif";
  } else if (equals(header, [0xff, 0xd8])) {
    return ".jpg";
  } else if (equals(header, [0x89, 0x50])) {
    return ".png";
  } else if (equals(header, [0xab, 0x4b])) {
    return ".ktx2";
  } else if (equals(header, [0x73, 0x42])) {
    return ".basis";
  } else if (
    equals(webpHeaderRIFFChars, [0x52, 0x49, 0x46, 0x46]) &&
    equals(webpHeaderWEBPChars, [0x57, 0x45, 0x42, 0x50])
  ) {
    // See https://developers.google.com/speed/webp/docs/riff_container#webp_file_header
    return ".webp";
  }

  throw new RuntimeError("Image data does not have valid header");
}
