import Task from './task.js';

console.log("Webpack4");

const task1 = new Task();
const task2 = new Task("primes generator");

task1.run();
task2.run();
