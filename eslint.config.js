import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import svelte from 'eslint-plugin-svelte';

export default [
  js.configs.recommended,
  prettier,
  ...svelte.configs['flat/recommended'],
  ...svelte.configs['flat/prettier'],
  {
    languageOptions: {
      globals: {
        process: 'readonly',
        setTimeout: 'readonly',
        window: 'readonly',

        $derived: 'readonly',
        $state: 'readonly',

        beforeAll: 'readonly',
        describe: 'readonly',
        expect: 'readonly',
        it: 'readonly',

        ROOT_URL: 'readonly',
        page: 'readonly',
      },
    },
  },
  {
    ignores: ['build/', '.svelte-kit/', 'package-lock.json', 'node_modules/', '.github/**/*.yml'],
  },
];
