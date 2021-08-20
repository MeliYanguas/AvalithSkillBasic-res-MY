const original = ['Rojo', 'Verde', 'Azul', 'Amarillo'];
// -------
let indiceAmarillo = null;
let cantidadColoresConA = 0;
let arregloSinAzul = [];
let ordenadoPorCantidadLetras = [];
let arregloConNuevoColorInicio = [];
let arregloConNuevoColorFin = [];

indiceAmarillo = original.indexOf("Amarillo");

// for(let i=0; i<original.length; i++){
//         if (original[i].includes('A')||original[i].includes('a')){
//             cantidadColoresConA ++;
//         }
//     };

cantidadColoresConA = original.filter(color => color.toLocaleLowerCase().includes('a')).length

// let copyArr = [...original];
// copyArr.splice(copyArr.indexOf("Azul"),1);
// arregloSinAzul = copyArr;

arregloSinAzul = original.filter(color => color !=='Azul');

ordenadoPorCantidadLetras = original.sort( (a,b) => a.length - b.length);

// copyArr = [...original];
// copyArr.unshift('Naranja');
// arregloConNuevoColorInicio = copyArr;

arregloConNuevoColorInicio = ['Rosa',...original];

// copyArr = [...original];
// copyArr.push('Violeta');
// arregloConNuevoColorFin = copyArr;

arregloConNuevoColorFin = [...original,'Turquesa'];

console.log(indiceAmarillo);
console.log(cantidadColoresConA);
console.log(arregloSinAzul);
console.log(ordenadoPorCantidadLetras);
console.log(arregloConNuevoColorInicio);
console.log(arregloConNuevoColorFin);

