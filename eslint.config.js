import eslintPluginAstro from 'eslint-plugin-astro'
export default [
  // add more generic rule sets here, such as:
  // js.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    rules: {
      'no-console': 'warn',
      semi: ['error', 'never'],
      indent: ['error', 2],
      quotes: ['error', 'single'],
      // override/add rules settings here, such as:
      // "astro/no-set-html-directive": "error"
    },
  },
]
