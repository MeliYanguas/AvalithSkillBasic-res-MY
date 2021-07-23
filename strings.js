const stringA = 'Rojo,Verde,Amarillo,Azul';
const stringB = 'Sergio';
const stringC = 'Damian';
const stringD = 'Mi nombre es Damian y tengo 28 años';
// -------
let tamanioA = 0;
let cantidadLetraR = 0;
let nombreCompleto = '';
let fraseOtroNombre = '';
let posicionNombre = null;
let arregloParseado = [];

tamanioA = stringA.length;

for(let i=0; i<stringA.length; i++){
    if (stringA[i].includes('R')||stringA[i].includes('r')){
        cantidadLetraR ++;
    }
};

nombreCompleto = `${stringB} ${stringC}`;

fraseOtroNombre = stringD.replace('Damian',stringB);

posicionNombre = stringD.split(" ").indexOf('Damian');

arregloParseado = stringA.split(",");


console.log(tamanioA);
console.log(cantidadLetraR);
console.log(nombreCompleto);
console.log(fraseOtroNombre);
console.log(posicionNombre);
console.log(arregloParseado);