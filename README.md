<h1 align="center">vite-plugin-unused-assets</h1>
<p align="center">Find whether there are unused assets in the project</p>

[简体中文](./READM-ZH.md)

## Configuration Options

| **Configuration Option Name** | **Required** | **Meaning**           | **Default Value** | **Type**  |
| -------------- | ------------ | --------           | ---------- | --------  |
| `path`    | No           | The resource path to search |./src        | `string`  |
| `output`    | No           | The output file path |./unused-files.json   |`string` |
| `exclude`    | No           | The file types to exclude | []      | `string[]` |

## [Installation](https://www.npmjs.com/package/vite-plugin-unused-assets)

```bash
npm install vite-plugin-unused-assets -D
// or
pnpm add vite-plugin-unused-assets -D
```

## Usage

- vite.config.ts

```js
import unusedFiles from 'vite-plugin-unused-assets';

export default defineConfig({
  plugins: [unusedFiles()],
})

```

## Execute Command

```
pnpm build
```
