import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import legacy from "@vitejs/plugin-legacy";
import { defineConfig } from "vite";
import { obfuscator } from "rollup-obfuscator";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  const isBuild = command === "build";

  return {
    // Production site is served from /KT-N/, so set the base for correct asset URLs
    base: "/KT-N/",
    plugins: [
      react(),
      tailwindcss(),
      legacy({
        targets: [
          "defaults",
          "safari >= 11",
          "ios_saf >= 11",
          "chrome >= 49",
          "edge >= 18",
          "firefox >= 60",
          "samsung >= 4",
        ],
        modernPolyfills: true,
      }),
      // Obfuscate bundles only during production builds
      isBuild &&
        obfuscator({
          compact: true,
          controlFlowFlattening: false,
          deadCodeInjection: false,
          debugProtection: false,
          disableConsoleOutput: true,
          identifierNamesGenerator: "hexadecimal",
          simplify: true,
          sourceMap: false,
          stringArray: true,
          stringArrayThreshold: 0.75,
        }),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    // Emit the built site into /docs so it can be served directly from the main branch
    build: {
      outDir: "docs",
      emptyOutDir: true,
      sourcemap: false,
      minify: "esbuild",
    },
    esbuild: {
      drop: ["console", "debugger"],
      legalComments: "none",
    },
  };
});
