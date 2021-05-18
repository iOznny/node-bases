 const { boolean } = require('yargs');
const { createFile1, createFile2 } = require('./helpers/multiplicar');
const argv = require('yargs')
    .options('b', {
        alias: 'base',
        describe: 'El valor a multiplicar',
        type: 'number',
        demandOption: true
    })
    .options('l', {
        alias: 'listar',
        describe: 'Listar la tabla de multiplicar enviada en la base',
        type: 'boolean',
        demandOption: true,
        default: false
    })
    .check((argv, options) => {
        console.log('Yargs', argv);
        if (isNaN(argv.b)) {
            throw 'La base debe ser un numero.';
        }

        return true;
    })
    .argv;

console.clear();

console.log(argv);

//const base1 = 4;

createFile2(argv.b, argv.l)
.then(nameFile => console.log(nameFile, 'creado.'))
.catch(err => console.log(err));
  