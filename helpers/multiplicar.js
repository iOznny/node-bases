const fs = require('fs');
const colors = require('colors');

const createFile1 = (base = 1, t = 10, l = false) => {
    return new Promise((resolve, reject) => {
        let out = '';
        let consola = '';
    
        for (let i=1; i<=t; i++) {
            consola += `${ base } ${ 'x'.magenta.bold } ${ i } ${ '='.green } ${ base * i }\n`;
            out += `${ base } x ${ i } = ${ base * i }\n`;
        }

        if (l) {
            console.log('==============='.green);
            console.log('Tabla del: ', base);
            console.log('==============='.green);
            console.log(consola);
        }
    
        // Grabar archivo.
        fs.writeFile(`tabla-${ base }.txt`, out, (err) => {
            if (err) throw err;
        });
    });
}

const createFile2 = async(base = 1, t = 10, l = false) => {
    try {
        let out = '';  
        let consola = '';     
    
        for (let i=1; i<=t; i++) {
            consola += `${ base } ${ 'x'.magenta.bold } ${ i } ${ '='.green } ${ base * i }\n`;
            out += `${ base } x ${ i } = ${ base * i }\n`;
        }
    
        if (l) {
            console.log('==============='.green);
            console.log('Tabla del: ', base);
            console.log('==============='.green);
            console.log(consola);
        }

        fs.writeFileSync(`tabla-${ base }.txt`, out);        
        return `tabla-${ base }.txt`;
    } catch (err) {
        throw err;
    }
}

module.exports = {
    createFile1,
    createFile2
}