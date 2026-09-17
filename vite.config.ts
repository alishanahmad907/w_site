import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: ["eminently-above-vervet.ngrok-free.app"],
  },
  build: {
    target: "es2020",
    minify: "esbuild",
  },
});
