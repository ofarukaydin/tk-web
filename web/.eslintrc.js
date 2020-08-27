module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  root: true,
  extends: [
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:jest/recommended',
    'plugin:promise/recommended',
    'plugin:unicorn/recommended',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
    'react-app',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'eslint-comments', 'jest', 'promise', 'unicorn'],
  rules: {
    'no-console': ['error'],
    'react/forbid-prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'react/state-in-constructor': 0,
    'react/jsx-props-no-spreading': 0,
    'newline-before-return': 'error',
    'import/no-extraneous-dependencies': ['error', { packageDir: './' }],
    'react/prop-types': 0,
    'react/jsx-curly-newline': 0,
    'react/static-property-placement': 0,
    'react/no-unescaped-entities': 0,
    'import/newline-after-import': ['error', { count: 1 }],
    'no-prototype-builtins': 'off',
    // https://basarat.gitbooks.io/typescript/docs/tips/defaultIsBad.html
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'error',
    // Too restrictive: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
    'react/destructuring-assignment': 'off', // Use function hoisting to improve code readability
    // No jsx extension: https://github.com/facebook/create-react-app/issues/87#issuecomment-234627904
    /*     'react/jsx-filename-extension': 'off',
     */ 'no-use-before-define': 0,
    // Makes no sense to allow type inferrence for expression parameters, but require typing the response
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      { allowExpressions: true, allowTypedFunctionExpressions: true },
    ],
    '@typescript-eslint/no-use-before-define': 0,
    // Common abbreviations are known and readable
    'unicorn/no-useless-undefined': 0,
    'unicorn/prevent-abbreviations': 'off',
    'no-param-reassign': [
      'error',
      { props: true, ignorePropertyModificationsForRegex: ['^state'] },
    ],
    'import/no-cycle': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'import/no-default-export': 0,
    'react/require-default-props': 0,
    'max-len': ['error', { ignoreTemplateLiterals: true, ignoreStrings: true, code: 140 }],
    'jsx-a11y/label-has-associated-control': 0,
    'unicorn/no-null': 0,
  },
};
