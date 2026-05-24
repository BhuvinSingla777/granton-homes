import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import { cloudflare } from '@cloudflare/vite-plugin'
import { nitro } from 'nitro/vite'

const isVercel = Boolean(process.env.VERCEL)

export default defineConfig({
  plugins: [
    ...(isVercel
      ? [tanstackStart(), nitro(), viteReact(), tailwindcss(), tsconfigPaths()]
      : [
          cloudflare({ viteEnvironment: { name: 'ssr' } }),
          tanstackStart(),
          viteReact(),
          tailwindcss(),
          tsconfigPaths(),
        ]),
  ],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
})
