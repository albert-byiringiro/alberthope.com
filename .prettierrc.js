export default {
  // Basic formatting
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  printWidth: 100, // Increased from 80 for modern widescreen monitors
  tabWidth: 2,
  useTabs: false,

  // Bracket spacing
  bracketSpacing: true,
  bracketSameLine: false,

  // JSX formatting
  jsxSingleQuote: false,

  // Arrow functions
  arrowParens: 'always',

  // Quotes
  quoteProps: 'as-needed',

  // Line endings
  endOfLine: 'lf',

  // Pragmas
  requirePragma: false,
  insertPragma: false,

  // Prose wrapping
  proseWrap: 'preserve',

  // HTML
  htmlWhitespaceSensitivity: 'css',

  // Vue
  vueIndentScriptAndStyle: false,

  // Embedded formatting
  embeddedLanguageFormatting: 'auto',

  // Plugins
  plugins: [],

  // Override specific file types
  overrides: [
    {
      files: '*.{json,md}',
      options: {
        tabWidth: 2,
      },
    },
  ],
}