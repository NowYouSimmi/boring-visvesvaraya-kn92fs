import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      "localhost",
      ".csb.app", // allow ALL CodeSandbox hosts
      /\.csb\.app$/, // Regex fallback for safety
    ],
    host: true, // ensure host checking works
  },
});
