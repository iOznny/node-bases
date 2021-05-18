const { createFile1, createFile2 } = require('./helpers/multiplicar');
console.clear();

//const base1 = 4;
  
// Argumentos desde la consola.
const [,,arg3 = 'base=1'] = process.argv;
const [, base] = arg3.split('=');
console.log(base);

createFile2(base)
    .then(nameFile => console.log(nameFile, 'creado'))
    .catch(err => console.log(err));
  