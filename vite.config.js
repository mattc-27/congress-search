import * as path from 'path'
import { defineConfig } from 'vite'
import 'dotenv/config'
import react from '@vitejs/plugin-react'
import rollupReplace from "@rollup/plugin-replace";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // Build two separate bundles, one for each app.
      input: {
        main: path.resolve(__dirname, "index.html"),
        search: path.resolve(__dirname, "search/index.html"),
      },
    },
  },
})