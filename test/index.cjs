#!/usr/bin/env node
const chalk = require( 'chalk' );
const chalk1 = require( 'chalk' );
const chalk2 = require( 'chalk' );

const { blue, blueBright } = require( 'chalk' );

console.log(chalk.blue('hello'), chalk1.blue('test'), chalk2.blue('test'));
console.log(blue('test'), blueBright('test'));

const TEST = { a: 42, b: 42 };
const TEST_COPY = { ...TEST };
console.log(TEST_COPY);

(function() {
  (function() {
    (function() {
      console.log(require('chalk'));
    })();
  })();
})();
