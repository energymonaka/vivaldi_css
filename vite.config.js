import { defineConfig } from "vite";
import UnoCSS from "unocss/vite";

const root = "src";
const dir = "./" + root;

process.env.BROWSER =
  "/mnt/c/Program Files/Google/Chrome/Application/chrome.exe";

export default defineConfig({
  base: "/",
  root: root,
  plugins: [UnoCSS()],
  server: {
    open: "index.html",
  },
  build: {
    outDir: "../dist",
    assetsDir: "./assets",
  },
});
