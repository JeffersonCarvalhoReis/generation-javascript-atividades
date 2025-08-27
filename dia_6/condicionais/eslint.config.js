// eslint.config.js
import js from "@eslint/js";

export default [
  js.configs.recommended, // regras recomendadas do ESLint
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        console: "readonly", // diz que console existe
      },
    },
    rules: {
      semi: ["error", "always"], // exige ponto e vírgula
      quotes: ["error", "double"], // exige aspas duplas
      "no-unused-vars": "warn", // alerta se criar variáveis não usadas
    },
  },
];
