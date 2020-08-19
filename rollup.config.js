const importMetaUrl = require('.');
const preserveShebang = require('rollup-plugin-preserve-shebang');

module.exports = [
  {
    input: 'lib/index.mjs',
    output: {
      file: 'build/index.mjs',
      format: 'esm',
    },
    plugins: [
      preserveShebang(),
      importMetaUrl(),
    ],
  },
];
