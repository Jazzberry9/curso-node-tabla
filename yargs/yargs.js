const argv = require('yargs/yargs')(process.argv.slice(2))
    .options('b',{
        alias: 'base',
        demandOption: 'true',
        describe: 'Valor de la tablar a imprimir, number',
        type: 'number'
    })
    .options('l',{
        alias: 'listar',
        describe: 'Imprime la tabla en consola',
        default: false,
        type: 'boolean'
    })
    .options('h',{
        alias: 'hasta',
        describe: 'Limite de la tabla',
        default: 10,
        type: 'number'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)){
            throw `Please introduce a number`
        } else {
            return true;
        }
    })
    .check((argv, options) => {
        if (isNaN(argv.h)){
            throw `Please introduce a number`
        } else {
            return true;
        }
    })
    .argv;

module.exports = argv;