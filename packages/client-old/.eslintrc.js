module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/multi-word-component-names': 'off',
    semi: ['error', 'never'],
    'comma-dangle': ['error', 'only-multiline'],
    quotes: ['error', 'single', { 'allowTemplateLiterals': true }],
    '@typescript-eslint/no-explicit-any': 'off',
  },
}
