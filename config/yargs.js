const argv = require('yargs')
    .options('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .options('t', {
        alias: 'tope',
        type: 'number',
        default: 10,
        describe: 'Limite de hasta donde debe multiplicar'
    })
    .options('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla de multiplicar en consola'
    })
    .check((argv, options) => {
        console.log('Yargs', argv);
        if (isNaN(argv.b)) {
            throw 'La base debe ser un numero.';
        }

        return true;
    })
    .argv;

module.exports = argv;