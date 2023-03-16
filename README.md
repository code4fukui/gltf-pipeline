# glTF Pipeline ES modules

[![License](https://img.shields.io/:license-apache-blue.svg)](https://github.com/CesiumGS/gltf-pipeline/blob/main/LICENSE.md)

<p align="center">
<a href="https://www.khronos.org/gltf"><img src="doc/gltf.png" onerror="this.src='gltf.png'"/></a>
</p>

Content pipeline tools for optimizing [glTF](https://www.khronos.org/gltf) assets by [Richard Lee](http://leerichard.net/) and the [Cesium team](https://cesium.com/).

Supports common operations including:

- Converting glTF to glb (and reverse)
- Saving buffers/textures as embedded or separate files
- Converting glTF 1.0 models to glTF 2.0
- Not supported [Draco](https://github.com/google/draco) mesh compression yet

`gltf-pipeline` is a ES module for browsers and Deno.

## Getting Started

### Using gltf-pipeline as a command-line tool:

#### Install

```sh
deno install --allow-read --allow-write https://code4fukui.github.io/gltf-pipeline/gltf2glb.js
deno install --allow-read --allow-write https://code4fukui.github.io/gltf-pipeline/glb2gltf.js
```

#### Converting a glTF to glb

`gltf2glb model.gltf`

#### Converting a glb to glTF

`glb2gltf model.glb`

### Using gltf-pipeline as a library:

#### Converting a glTF to glb:

```javascript
import { gltfToGlb } from "https://code4fukui.github.io/gltf-pipeline/lib/gltfToGlb.js";
const gltf = JSON.parse(await Deno.readTextFile("model.gltf"));
const results = await gltfToGlb(gltf);
console.log(results.glb);
```

#### Converting a glb to glTF

```javascript
import { glbToGltf } from "https://code4fukui.github.io/gltf-pipeline/lib/glbToGltf.js";
const glb = await Deno.readFile("model.glb");
const results = await glbToGltf(glb);
conosle.log(results.gltf);
```

### Running Test

```
deno test -A gltfglb.test.js
```

## Contributions

Pull requests are appreciated! Please use the same [Contributor License Agreement (CLA)](https://github.com/CesiumGS/cesium/blob/main/CONTRIBUTING.md) and [Coding Guide](https://github.com/CesiumGS/cesium/blob/main/Documentation/Contributors/CodingGuide/README.md) used for [Cesium](https://github.com/CesiumGS/cesium).
