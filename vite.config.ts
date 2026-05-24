import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import { cloudflare } from '@cloudflare/vite-plugin'
import { nitro } from 'nitro/vite'

const root = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig(({ command }) => {
  // Production builds must use Nitro (Vercel preset). Dev uses Cloudflare for local SSR.
  const isProductionBuild = command === 'build'

  return {
    plugins: [
      ...(isProductionBuild
        ? [tanstackStart(), nitro({ preset: 'vercel' }), viteReact(), tailwindcss(), tsconfigPaths()]
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
        '@': path.resolve(root, 'src'),
      },
    },
    server: {
      port: 3000,
    },
    build: {
      target: 'esnext',
    },
  }
})
