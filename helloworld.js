const chalk = require('chalk');

console.log(chalk.green('Hello world'));

const multiply = (a, b) => a * b;

const factor = multiply(1, 7);
console.log(chalk.rgb(123, 45, 67)(factor));
