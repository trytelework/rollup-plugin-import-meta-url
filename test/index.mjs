#!/usr/bin/env node
import fsevents from 'fsevents';
import chalk from 'chalk';
import { blue, blueBright } from 'chalk';

console.log(chalk.blue('hello'));
console.log(blue('test'), blueBright('test'));

const TEST = { a: 42, b: 42 };
const TEST_COPY = { ...TEST };
console.log(TEST_COPY);
console.log(fsevents);
