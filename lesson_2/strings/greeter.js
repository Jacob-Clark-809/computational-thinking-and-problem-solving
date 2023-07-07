let readlineSync = require('readline-sync');

console.log('What is your name?');
let name = readlineSync.prompt();

if (name[name.length - 1] === '!') {
  console.log(`HELLO ${name.toUpperCase().slice(0, -1)}. WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${name}.`);
}
