const fs = require('fs');

const createFile1 = (base = 5) => {
    return new Promise((resolve, reject) => {
        let out = '';
    
        console.log('===============');
        console.log('Tabla del: ', base);
        console.log('===============');
    
        for (let i = 1; i <=10; i++) {
            out += `${ base } x ${ i } = ${ base * i }\n`;
        }
    
        console.log(out);
    
        // Grabar archivo.
        /* fs.writeFile(`tabla-${ base }.txt`, out, (err) => {
            if (err) throw err;
    
            console.log(`tabla-${ base }.txt creada.`);
        }); */
    
        fs.writeFileSync(`tabla-${ base }.txt`, out);
        console.log(`tabla-${ base }.txt creada.`);
    });
}

const createFile2 = async(base = 5) => {
    try {
        let out = '';
    
        console.log('===============');
        console.log('Tabla del: ', base);
        console.log('===============');
    
        for (let i = 1; i <=10; i++) {
            out += `${ base } x ${ i } = ${ base * i }\n`;
        }
    
        console.log(out);
        fs.writeFileSync(`tabla-${ base }.txt`, out);
        console.log(`tabla-${ base }.txt creada.`);
    
        return `tabla-${ base }.txt`;
    } catch (err) {
        throw err;
    }
}

module.exports = {
    createFile1,
    createFile2
}