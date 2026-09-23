import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import tailwind from 'eslint-plugin-tailwindcss'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
      ...tailwind.configs['flat/recommended'], // Добавляем конфиг tailwindcss
    ],
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      // Отключаем требование заменять произвольные значения (вроде py-[14px]) на стандартные (py-3.5)
      'tailwindcss/enforces-shorthand': 'off',
    },
  },
])