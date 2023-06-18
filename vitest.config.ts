import { defineConfig } from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    browser: {
      enabled: true,
      headless: true,
      name: 'chrome',
    },
    globals: true,
    reporters: ["default", "html"],
    setupFiles: ["./vitest.setup.ts"],
  },
});
