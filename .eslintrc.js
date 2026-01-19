// .eslintrc.js
import js from "@eslint/js";

export default {
  ...js.configs.recommended, // Spread the recommended ESLint rules
  rules: {
    "no-console": "warn", // Example custom rule
    // Add other custom rules here as needed
  },
};
