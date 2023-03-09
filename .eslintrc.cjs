module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:react/jsx-runtime', 'plugin:@typescript-eslint/recommended', 'plugin:jsx-a11y/recommended', 'plugin:prettier/recommended', 'prettier', 'plugin:import/recommended', 'plugin:storybook/recommended'],
  plugins: ['react', '@typescript-eslint', 'jsx-a11y'],
  settings: {
    react: {
      version: require('react/package.json').version
    }
  },
  rules: {
    '@typescript-eslint/no-var-requires': 'off',
    'prettier/prettier': ['error', {
      endOfLine: 'auto'
    }],
    'import/no-unresolved': 'off',
    'no-console': 'warn',
    'react/prop-types': 'off',
    'react/self-closing-comp': 'warn',
    'padding-line-between-statements': ['error', {
      blankLine: 'always',
      prev: '*',
      next: 'return'
    }, {
      blankLine: 'always',
      prev: ['const', 'let', 'var'],
      next: '*'
    }, {
      blankLine: 'any',
      prev: ['const', 'let', 'var'],
      next: ['const', 'let', 'var']
    }],
    'import/order': ['warn', {
      pathGroups: [{
        pattern: '~/**',
        group: 'external',
        position: 'after'
      }],
      'newlines-between': 'always-and-inside-groups'
    }],
    'react/jsx-sort-props': ['warn', {
      callbacksLast: true,
      shorthandFirst: true,
      noSortAlphabetically: false,
      reservedFirst: true
    }]
  }
};

// module.exports = {
//     "env": {
//         "browser": true,
//         "es2021": true,
//         "node": true
//     },
//     "extends": [
//         "eslint:recommended",
//         "plugin:react/recommended",
//         "plugin:@typescript-eslint/recommended"
//     ],
//     "overrides": [
//     ],
//     "parser": "@typescript-eslint/parser",
//     "parserOptions": {
//         "ecmaVersion": "latest",
//         "sourceType": "module"
//     },
//     "plugins": [
//         "react",
//         "@typescript-eslint"
//     ],
//     "rules": {
//     }
// }