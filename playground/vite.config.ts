import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// @ts-ignore
import unusedFiles from '../packages';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),unusedFiles({})],
})
