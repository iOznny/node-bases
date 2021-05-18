const argv = require('yargs')
    .options('b', {
        alias: 'base',
        describe: 'Es la base de la tabla de multiplicar',
        type: 'number',
        demandOption: true
    })
    .options('l', {
        alias: 'listar',
        describe: 'Muestra la tabla de multiplicar en consola',
        type: 'boolean',
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

module.exports = argv;