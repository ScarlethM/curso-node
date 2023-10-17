const { crearArchivo } = require('./helpers/multiplicar');
const  argv = require('./config/yargs');
const colors =require('colors');

console.clear();


//Recibir información desde la linea de comando(consola)
//Existen paquetes que hacen esto , paquete yards
// const [ , , arg3 = 'base=5'] =  process.argv;
// const [ , base ]=arg3.split('=');


crearArchivo( argv.b, argv.l , argv.h)
    .then(nombreArchivo => console.log(colors.rainbow(nombreArchivo)))
    .catch(err => console.log(err));