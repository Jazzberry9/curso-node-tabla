const fs = require('node:fs/promises');

const crearTablar = async(base = 3, lista = false, hasta = 10) => {

    try {
        console.clear();
        console.log('+++++++++++++++++++++++++++++');
        console.log(`  Tabla del ${base} creada`);
        console.log('+++++++++++++++++++++++++++++');
        
        let salida = '';

        for (let i = 1; i <= hasta; i++){
            salida += `${base} x ${i} = ${i * base}\n`;
        }

        fs.writeFile(`./salida/Tabla de ${base}.txt`, salida);

        if (lista){
        console.log(salida);
        }

        return `Tabla de ${base}`;

    } catch (error) {
        throw error;
    }
    

}

module.exports = {
    crearTablar
}