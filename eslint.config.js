import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import solid from 'eslint-plugin-solid/configs/recommended';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
  {
    ignores: ['dist/**', 'build/**', 'node_modules/**']
  },
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    languageOptions: { globals: { ...globals.browser, ...globals.node } }
  },
  { files: ['**/*.{js,mjs,cjs,ts}'], plugins: { js }, extends: ['js/recommended'] },
  tseslint.configs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    ...solid
  },
  {
    plugins: {
      'simple-import-sort': simpleImportSort
    },
    rules: {
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'no-console': 'warn',
      'prefer-const': 'warn',
      // 优先使用 interface 而不是 type
      '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
      // 优先使用 import type 引入类型
      '@typescript-eslint/consistent-type-imports': 'warn'
    }
  }
]);
