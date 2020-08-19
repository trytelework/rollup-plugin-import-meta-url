const fsevents = {};
const chalk = {};
const blue = {};
const blueBright = {};
console.log(chalk.blue('hello'));
console.log(blue('test'), blueBright('test'));
const TEST = {
  a: 42,
  b: 42
};
const TEST_COPY = { ...TEST
};
console.log(TEST_COPY);
console.log(fsevents);
