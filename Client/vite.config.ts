import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";

export default defineConfig({
  plugins: [solidPlugin()],
  server: {
    port: 3172,
    host: true,
    proxy: {
      "/api": "https://james-o-assessment-production.up.railway.app",
    },
  },
  build: {
    target: "esnext",
  },
});
