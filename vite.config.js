import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the
  // `VITE_` prefix.
  return {
    plugins: [react()],
    define: {
      // eslint-disable-next-line no-undef
      'process.env': {...process.env, ...loadEnv(mode, process.cwd())}
    },
  }
});
