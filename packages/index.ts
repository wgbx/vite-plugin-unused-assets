import { promisify } from 'util';
import glob from 'glob';
import path from 'path';
import log from 'picocolors';
import { writeFileSync } from 'fs';

const globPromise = promisify(glob);
const defaultOptions = {
  path: './src',
  output: './unused-files.json',
  exclude: []
}

const getFileExtension = (filename: string) => filename.split('.').pop()?.toLowerCase() ?? ''

async function getAllFiles(options) {
  const pattern = `${options.path}/**/*`
  try {
    const patternFiles = await globPromise(pattern, { nodir: true });
    return patternFiles.map(item => path.normalize(path.resolve(item)).replace(/\\/g, '/')).filter(item => !options.exclude.includes(getFileExtension(item)))
  } catch (error) {
    console.log('getAllFiles Error:', error);
  }
}

function setFile(data, name = './unused-files.json') {
  try {
    writeFileSync(name, JSON.stringify(data, null, 2));
  } catch (err) {
    log.red(`${name} 文件写入失败`);
  }
}

function classificationFile(files) {
  const classifiedFiles = {};
  files.forEach((file) => {
    const extname = path.extname(file)
    if (classifiedFiles[extname]) {
      classifiedFiles[extname].push(file);
    } else {
      classifiedFiles[extname] = [file];
    }
  });
  return classifiedFiles
}

export default function unusedAssets(options) {
  return {
    name: 'vite-plugin-unused-assets',
    async generateBundle() {
      const userOptions = { ...defaultOptions, ...options }
      const { output } = userOptions
      const allFiles = await getAllFiles(userOptions)
      const useFiles = [...this.getModuleIds()].filter((item) => !item.includes('node_modules'))
      const files = allFiles.filter(item => !useFiles.includes(item))
      setFile(classificationFile(files), output)
    }
  };
}