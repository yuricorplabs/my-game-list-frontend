import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  return {
    // vite config
    plugins: [react()],
    define: {
      __APP_ENV__: JSON.stringify(mode),
    },
  }
})


