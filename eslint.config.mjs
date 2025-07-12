// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  {
    files: ['**/*.vue', '**/*.ts'],
    rules: {
      // 'space-before-function-paren': ['error', 'always'],
      'quotes': ['error', 'single'],
      'indent': ['error', 2],
      'comma-dangle': ['error', 'always-multiline'],
      'object-curly-spacing': ['error', 'always'],
      'array-bracket-spacing': ['error', 'never'],
      'vue/multi-word-component-names': ['off'],
      'semi': ['off'],
    },
  },
  {
    files: ['**/*.ts'],
    rules: {
      'no-console': 'off',
    },
  },
)
