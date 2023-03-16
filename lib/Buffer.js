export class Buffer extends Uint8Array {
  static writeUInt32LE(bin, n, off) {
    bin[off] = n;
    bin[off + 1] = n >> 8;
    bin[off + 2] = n >> 16;
    bin[off + 3] = n >> 24;
  }
  static slice(bin, off, end) {
    const len = end - off;
    const res = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      res[i] = bin[off + i];
    }
    return res;
  }
  static concat(buffers) {
    const len = buffers.reduce((pre, cur) => pre + cur.length, 0);
    const res = new Uint8Array(len);
    let idx = 0;
    for (const buf of buffers) {
      for (let i = 0; i < buf.length; i++) {
        res[idx++] = buf[i];
      }
    }
    return res;
  }
  static alloc(len) {
    return new Uint8Array(len);
  }
  static copy(dst, src, off) {
    for (let i = 0; i < src.length; i++) {
      dst[i + off] = src[i];
    }
  }
  static equals(h, bin) {
    if (h == bin) {
      return true;
    }
    if (!h || !bin) {
      return false;
    }
    if (h.length != bin.length) {
      return false;
    }
    for (let i = 0; i < h.length; i++) {
      if (h[i] != bin[i]) {
        return false;
      }
    }
    return true;
  };

}
