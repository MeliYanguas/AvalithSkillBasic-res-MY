const original = ['Rojo', 'Verde', 'Azul', 'Amarillo'];
// -------
let indiceAmarillo = null;
let cantidadColoresConA = 0;
let arregloSinAzul = [];
let ordenadoPorCantidadLetras = [];
let arregloConNuevoColorInicio = [];
let arregloConNuevoColorFin = [];

indiceAmarillo = original.indexOf("Amarillo");

for(let i=0; i<original.length; i++){
        if (original[i].includes('A')||original[i].includes('a')){
            cantidadColoresConA ++;
        }
    };

let copyArr = [...original];
copyArr.splice(copyArr.indexOf("Azul"),1);
arregloSinAzul = copyArr;

ordenadoPorCantidadLetras = original.sort( (a,b) => a.length - b.length);

copyArr = [...original];
copyArr.unshift('Naranja');
arregloConNuevoColorInicio = copyArr;

copyArr = [...original];
copyArr.push('Violeta');
arregloConNuevoColorFin = copyArr;

console.log(indiceAmarillo);
console.log(cantidadColoresConA);
console.log(arregloSinAzul);
console.log(ordenadoPorCantidadLetras);
console.log(arregloConNuevoColorInicio);
console.log(arregloConNuevoColorFin);

