const { createFile1, createFile2 } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');

console.clear();

createFile2(argv.b, argv.t, argv.l)
.then(nameFile => console.log(nameFile.rainbow, 'creado.'))
.catch(err => console.log(err));
  