// import html from '@rollup/plugin-html'
import { defineConfig } from 'vite'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

// Does not minify the html but not too relevant for this site
const htmlImport = {
  name: "htmlImport",
  /**
   * Checks to ensure that a html file is being imported.
   * If it is then it alters the code being passed as being a string being exported by default.
   * @param {string} code The file as a string.
   * @param {string} id The absolute path. 
   * @returns {{code: string}}
   */
  transform(code, id) {
    if (/^.*\.html$/g.test(id)) {
      code = `export default \`${code}\``
    }
    return { code }
  }
}

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  root: './',
  publicDir: 'public',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        physics: resolve(__dirname, 'physics/index.html'),
        chatique: resolve(__dirname, 'chatique/index.html'),
      },
    },
  },
})