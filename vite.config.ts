import { defineConfig } from "vite";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import autoprefixer from "autoprefixer";

export default defineConfig({
  base: "./",
  build: {
    outDir: path.resolve(__dirname, "assets"),
    emptyOutDir: false,
    sourcemap: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "src/ts/main.ts"),
        style: path.resolve(__dirname, "src/css/global.css") // Changed filename
      },
      output: {
        entryFileNames: "[name].js",
        chunkFileNames: "[name]-[hash].js",
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === "style.css") {
            return "application.css";
          }
          return "[name].[ext]";
        }
      }
    },
    minify: true,
    watch: {
      exclude: [path.resolve(__dirname, "assets/**")]
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  },
  plugins: [tailwindcss()],
  css: {
    postcss: {
      plugins: [autoprefixer]
    }
  }
});
