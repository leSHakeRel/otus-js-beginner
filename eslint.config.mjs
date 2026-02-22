import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["./src/*.{js}"],
    plugins: { js },
    extends: ["js/recommended"], 
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
    rules: {
      ...js.configs.recommended.rules,
      "semi": ["error", "always"]
    },
  },
  {
    files: [".src/**/*.test.js"],
    ...jest.configs['flat/recommended'],
  },,
]);
