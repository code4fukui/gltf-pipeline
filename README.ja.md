# gltf-pipeline

[
![License](https://img.shields.io/:license-apache-blue.svg)
](LICENSE.md)

<p align="center">
<a href="https://www.khronos.org/gltf"><img src="doc/gltf.png" onerror="this.src='gltf.png'"/></a>
</p>

[Richard Lee](http://leerichard.net/) および [Cesiumチーム](https://cesium.com/) による、[glTF](https://www.khronos.org/gltf) アセットを最適化するためのコンテンツパイプラインツールです。

これは `gltf-pipeline` を ES モジュールとして Deno に移植したものです。

## 機能

- glTF から glb への変換（およびその逆）
- バッファ/テクスチャを埋め込み、または個別のファイルとして保存
- glTF 1.0 モデルを glTF 2.0 に変換
- Draco メッシュ圧縮のサポートは計画されていますが、未実装です。

## はじめに

### コマンドラインツールとしての使用

**インストール**

```sh
deno install --allow-read --allow-write https://code4fukui.github.io/gltf-pipeline/gltf2glb.js
deno install --allow-read --allow-write https://code4fukui.github.io/gltf-pipeline/glb2gltf.js
```

**glTF を glb に変換**

```sh
gltf2glb model.gltf
```

**glb を glTF に変換**

```sh
glb2gltf model.glb
```

### ライブラリとしての使用

**glTF を glb に変換**

```javascript
import { gltfToGlb } from "https://code4fukui.github.io/gltf-pipeline/lib/gltfToGlb.js";

const gltf = JSON.parse(await Deno.readTextFile("model.gltf"));
const results = await gltfToGlb(gltf);
// results.glb はバイナリの glb データを含む Uint8Array です
console.log(results.glb);
```

**glb を glTF に変換**

```javascript
import { glbToGltf } from "https://code4fukui.github.io/gltf-pipeline/lib/glbToGltf.js";

const glb = await Deno.readFile("model.glb");
const results = await glbToGltf(glb);
// results.gltf は JSON オブジェクトです
console.log(results.gltf);
```

## テストの実行

```sh
deno test -A gltfglb.test.js
```

## コントリビューション

プルリクエストを歓迎します。オリジナルの [Cesium](https://github.com/CesiumGS/cesium) プロジェクトと同じ [Contributor License Agreement (CLA)](https://github.com/CesiumGS/cesium/blob/main/CONTRIBUTING.md) および [Coding Guide](https://github.com/CesiumGS/cesium/blob/main/Documentation/Contributors/CodingGuide/README.md) を使用してください。

## ライセンス

[Apache 2.0](LICENSE.md)
