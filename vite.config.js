import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
const ASSET_URL = "" || process.env.ASSET_URL;

export default defineConfig({
  plugins: [react()],
  base: `/${ASSET_URL}/dist/`,
});
