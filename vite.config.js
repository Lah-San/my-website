import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolutions: {
    "//": "See https://github.com/facebook/create-react-app/issues/11773",
    "react-error-overlay": "6.0.9",
  },
});
