/** @type {import("prettier").Options} */
module.exports = {
  arrowParens: 'always',
  bracketSameLine: false,
  bracketSpacing: true,
  embeddedLanguageFormatting: 'auto',
  endOfLine: 'lf',
  htmlWhitespaceSensitivity: 'css',
  insertPragma: false,
  jsxSingleQuote: false,
  printWidth: 80,
  proseWrap: 'always',
  quoteProps: 'as-needed',
  requirePragma: false,
  semi: false,
  singleAttributePerLine: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  useTabs: true,
  overrides: [
    {
      files: ['**/package.json'],
      options: {
        useTabs: false,
      },
    },
    {
      files: ['**/*.mdx'],
      options: {
        proseWrap: 'preserve',
        htmlWhitespaceSensitivity: 'ignore',
      },
    },
    {
      files: ['*.astro'],
      options: {
        parser: 'astro',
      },
    },
  ],
  plugins: ['prettier-plugin-tailwindcss', 'prettier-plugin-astro'],
  tailwindAttributes: ['class', 'className', 'ngClass', '.*[cC]lassName'],
  tailwindFunctions: ['clsx', 'cn'],
}
