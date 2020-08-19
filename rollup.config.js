const disablePackages = require('.');
const preserveShebang = require('rollup-plugin-preserve-shebang');

module.exports = [
  {
    input: 'test/index.mjs',
    output: {
      file: 'build/index.mjs',
      format: 'esm',
    },
    plugins: [
      preserveShebang(),
      disablePackages('chalk', 'fsevents'),
    ],
  },
  {
    input: 'test/index.cjs',
    output: {
      file: 'build/index.cjs',
      format: 'cjs',
    },
    plugins: [
      preserveShebang(),
      disablePackages('chalk', 'fsevents'),
    ],
  },
];
