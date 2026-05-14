# gltf-pipeline

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

[
![License](https://img.shields.io/:license-apache-blue.svg)
](LICENSE.md)

<p align="center">
<a href="https://www.khronos.org/gltf"><img src="doc/gltf.png" onerror="this.src='gltf.png'"/></a>
</p>

Content pipeline tools for optimizing [glTF](https://www.khronos.org/gltf) assets by [Richard Lee](http://leerichard.net/) and the [Cesium team](https://cesium.com/).

This is a port of `gltf-pipeline` to Deno as an ES module.

## Features

- Convert glTF to glb (and vice versa)
- Save buffers/textures as embedded or separate files
- Convert glTF 1.0 models to glTF 2.0
- Draco mesh compression support is planned but not yet implemented.

## Getting Started

### Using as a command-line tool

**Install**

```sh
deno install --allow-read --allow-write https://code4fukui.github.io/gltf-pipeline/gltf2glb.js
deno install --allow-read --allow-write https://code4fukui.github.io/gltf-pipeline/glb2gltf.js
```

**Convert a glTF to glb**

```sh
gltf2glb model.gltf
```

**Convert a glb to glTF**

```sh
glb2gltf model.glb
```

### Using as a library

**Convert a glTF to glb**

```javascript
import { gltfToGlb } from "https://code4fukui.github.io/gltf-pipeline/lib/gltfToGlb.js";

const gltf = JSON.parse(await Deno.readTextFile("model.gltf"));
const results = await gltfToGlb(gltf);
// results.glb is a Uint8Array containing the binary glb data
console.log(results.glb);
```

**Convert a glb to glTF**

```javascript
import { glbToGltf } from "https://code4fukui.github.io/gltf-pipeline/lib/glbToGltf.js";

const glb = await Deno.readFile("model.glb");
const results = await glbToGltf(glb);
// results.gltf is a JSON object
console.log(results.gltf);
```

## Running Tests

```sh
deno test -A gltfglb.test.js
```

## Contributions

Pull requests are appreciated. Please use the same [Contributor License Agreement (CLA)](https://github.com/CesiumGS/cesium/blob/main/CONTRIBUTING.md) and [Coding Guide](https://github.com/CesiumGS/cesium/blob/main/Documentation/Contributors/CodingGuide/README.md) as the original [Cesium](https://github.com/CesiumGS/cesium) project.

## License

[Apache 2.0](LICENSE.md)