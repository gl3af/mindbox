import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import stylistic from "@stylistic/eslint-plugin";
import pluginSimpleImportSort from "eslint-plugin-simple-import-sort";

export default tseslint.config({
  extends: [
    js.configs.recommended,
    ...tseslint.configs.strict,
    ...tseslint.configs.stylistic,
  ],
  files: ["**/*.{ts,tsx}"],
  ignores: ["dist"],
  languageOptions: {
    ecmaVersion: 2020,
    globals: globals.browser,
  },
  plugins: {
    "react-hooks": reactHooks,
    "react-refresh": reactRefresh,
    "@stylistic": stylistic,
    "plugin-simple-import-sort": pluginSimpleImportSort,
  },
  rules: {
    ...reactHooks.configs.recommended.rules,
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "sort-imports": "off",
    "plugin-simple-import-sort/exports": "error",
    "plugin-simple-import-sort/imports": [
      "error",
      {
        groups: [
          ["^react", "^@?\\w"],
          ["^@(([\\/.]?\\w)|assets|test-utils)"],
          ["^\\u0000"],
          ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
          ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
          ["^.+\\.s?css$"],
        ],
      },
    ],
    "@stylistic/indent": ["error", 2, { SwitchCase: 1 }],
    "@stylistic/quotes": ["error", "double"],
    "@stylistic/space-before-blocks": "error",
    "@stylistic/comma-dangle": ["error", "only-multiline"],
    "@stylistic/multiline-ternary": "off",
    "@stylistic/jsx-curly-newline": "off",
    "@stylistic/jsx-one-expression-per-line": "off",
    "@stylistic/member-delimiter-style": "off",
    "@stylistic/quote-props": "off",
    "@stylistic/operator-linebreak": "off",
    "@stylistic/brace-style": "off",
    "@stylistic/max-len": [
      "error",
      120,
      2,
      {
        ignoreComments: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    "@stylistic/jsx-quotes": ["error", "prefer-double"],
    "@stylistic/semi": ["error", "always"],
    "@stylistic/no-tabs": "error",
    "@stylistic/linebreak-style": ["error", "unix"],
    "@stylistic/arrow-parens": ["error", "always"],
  },
});
