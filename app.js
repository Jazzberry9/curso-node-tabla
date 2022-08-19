const { crearTablar } = require('./helpers/multiplicar');
const argv = require('./yargs/yargs')







crearTablar( argv.b, argv.l, argv.h)
    .then(aquiVa => console.log(aquiVa, 'Creada'))
    .catch(err => console.log(err));






