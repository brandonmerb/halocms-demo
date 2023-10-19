import { defineConfig, splitVendorChunkPlugin, loadEnv, UserConfig, ConfigEnv } from 'vite'

// TSConfig Paths is mostly for package Atomic Singularity, since it uses module paths
// which confuse Vite & SWC during the build
import tsconfigPaths from 'vite-tsconfig-paths'

// This is to generate types, since SWC does not do this
import dts from 'vite-plugin-dts';

// SWC for vite to actually handle the rendering
import swc from 'unplugin-swc'

// We use Vue in this project, so the compiler needs a way to handle that via plugins
import vue from '@vitejs/plugin-vue'

export default defineConfig((config: ConfigEnv): UserConfig => {
  /**
   * Load the env files from our ./config directory so that we can look
   * for ATOMIC_DESIGN_BUILD variables. You can change this flag locally
   * without accidentally comitting it by creating a .env.local file and
   * changing the flag there. It takes priority over the default .env file
   */
  const env = loadEnv(config.mode, "./config", "ATOMIC_DESIGN_BUILD");
  /**
   * If we find ATOMIC_DESIGN_BUILD_USE_TYPESCRIPT_IMPORTS set to true then
   * we'll enable a export condition for "atomicdesign:local". This will trigger
   * vite to look for the atomicdesign:local field on exports. The libraries in
   * this repo are configured to serve source files directly in this mode, for
   * faster development
   */
  let conditions: string[] = [];
  if (env?.ATOMIC_DESIGN_BUILD_USE_TYPESCRIPT_IMPORTS === "true") {
    conditions.push("atomicdesign:local");
  }

  let plugins = [
    tsconfigPaths(),
    splitVendorChunkPlugin(),
    dts({
      rollupTypes: true,
    }),
    swc.vite({
      configFile: './config/.swcrc'
    }),
    vue()
  ]

  return {
    plugins: plugins,
    envDir: "./config",
    resolve: {
      conditions: conditions
    },

    clearScreen: true,
    esbuild: false,
  }
})