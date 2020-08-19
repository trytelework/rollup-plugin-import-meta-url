'use strict';

const chalk = {};
const chalk1 = {};
const chalk2 = {};
const {
  blue,
  blueBright
} = {};
console.log(chalk.blue('hello'), chalk1.blue('test'), chalk2.blue('test'));
console.log(blue('test'), blueBright('test'));
const TEST = {
  a: 42,
  b: 42
};
const TEST_COPY = { ...TEST
};
console.log(TEST_COPY);

(function () {
  (function () {
    (function () {
      console.log({});
    })();
  })();
})();
