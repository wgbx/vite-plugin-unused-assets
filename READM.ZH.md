<h1 align="center">vite-plugin-unused-assets</h1>
<p align="center">查找项目中是否存在是否未使用的资源</p>

[简体中文](./READM-ZH.md)

## 配置项

| **配置项名称** | **是否必须** | **含义**           | **默认值** | **类型**  |
| -------------- | ------------ | --------           | ---------- | --------  |
| `path`    | 否           | 查找的资源路径 | ./src        | `string`  |
| `output`    | 否           | 输出的文件路径 | ./unused-files.json   |`string` |
| `exclude`    | 否           | 排除的文件类型 | []      | `string[]` |

## [安装](https://www.npmjs.com/package/vite-plugin-unused-assets)

```bash
npm install vite-plugin-unused-assets -D
// or
pnpm add vite-plugin-unused-assets -D
```

## 用法

- vite.config.ts

```js
import unusedFiles from 'vite-plugin-unused-assets';

export default defineConfig({
  plugins: [unusedFiles()],
})

```
- 执行命令
```
pnpm build
```
