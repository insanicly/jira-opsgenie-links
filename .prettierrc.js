module.exports = {
  singleQuote: true,
  trailingComma: 'es5',
  endOfLine: 'lf',
  overrides: [
    {
      files: ['**/*.html'],
      options: {
        htmlWhitespaceSensitivity: 'strict',
        parser: 'angular',
      },
    },
    {
      files: ['**/*.{scss,less,css}'],
      options: {
        singleQuote: false,
      },
    },
  ],
};
