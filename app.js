const fs = require('fs');

console.clear();
console.log('===============');
console.log('Tabla del:  5');
console.log('===============');

const base = 5;
let out = '';

for (let i = 1; i <=10; i++) {
    out += `${ base } x ${ i } = ${ base * i }\n`;
}

console.log(out);

// Grabar archivo.
fs.writeFile(`tabla-${ base }.txt`, out, (err) => {
    if (err) throw err;

    console.log(`tabla-${ base }.txt creada.`);
});

