import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  base: "/Shady-Portifilio/", // 🔥 EXACT repo name (case-sensitive)
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
