import stylistic from '@stylistic/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import reactRefreshPlugin from 'eslint-plugin-react-refresh';
import globals from 'globals';

export default [
  stylistic.configs.recommended,
  {
    plugins: {
      '@stylistic': stylistic,
      'import': importPlugin,
      'react': reactPlugin,
      'react-hooks': reactHooksPlugin,
      'react-refresh': reactRefreshPlugin,
    },
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parser: typescriptParser,
    },
    rules: {
      ...reactHooksPlugin.configs.recommended.rules,
      '@stylistic/brace-style': ['error', '1tbs'],
      '@stylistic/semi': ['error', 'always'],
      '@stylistic/member-delimiter-style': [
        'error',
        {
          multiline: {
            delimiter: 'semi',
            requireLast: true,
          },
          singleline: {
            delimiter: 'semi',
            requireLast: true,
          },
          multilineDetection: 'brackets',
        },
      ],
      'import/order': [
        'error',
        {
          'groups': [['builtin'], ['external'], ['internal'], ['parent'], ['sibling']],
          'newlines-between': 'never',
          'alphabetize': {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
      'react/jsx-filename-extension': 0,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    },
  },
];
