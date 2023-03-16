import { Base64 } from "https://code4fukui.github.io/Base64/Base64.js";

/**
 * Read a data uri string into a buffer.
 *
 * @param {String} dataUri The data uri.
 * @returns {Buffer}
 *
 * @private
 */
export function dataUriToBuffer(dataUri) {
  const data = dataUri.slice(dataUri.indexOf(",") + 1);
  if (dataUri.indexOf("base64") >= 0) {
    //return Buffer.from(data, "base64");
    return Base64.decode(data);
  }
  //return Buffer.from(data, "utf8");
  return new TextDecoder().decode(data);
}
