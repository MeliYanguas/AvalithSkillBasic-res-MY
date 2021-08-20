const originalA = {
    nombre: 'Sergio',
    edad: 28,
    preferidos: ['Pizza', 'Hamburguesa'],
    madre: {
        nombre: 'Sandra',
        edad: 54,
    },
};
const originalB = '{"nombre":"Damian","edad":26}';
// -------
let edadMadre = 0;
let objetoParseado = null;
let existeClaveMadreA = null;
let existeClaveMadreB = null;
let nombreDelMasJoven = null;
let clavesDelObjeto = [];

edadMadre = originalA.madre.edad;

//objetoParseado = JSON.parse(originalB);
try {
    objetoParseado = JSON.parse(originalB);
} catch (error) {
    console.log(err)
}

existeClaveMadreA = originalA.madre ? true : false;

existeClaveMadreB = objetoParseado.madre ? true : false;

//primera forma de obtener el nombre del mas joven(solo funciona sin son dos)
if(originalA.edad != objetoParseado.edad){
    nombreDelMasJoven = originalA.edad < objetoParseado.edad ? originalA.nombre : objetoParseado.nombre;
} else{
    nombreDelMasJoven = `${originalA.nombre} ${objetoParseado.nombre}`
};

//si fueran mas de dos personas (ordenar por edad)
if(originalA.edad != objetoParseado.edad){
    nombreDelMasJoven2 = ([originalA, objetoParseado].sort( (a,b) => a.edad - b.edad))[0].nombre;
} else {
    nombreDelMasJoven2 = 'Tienen la misma edad';
}

clavesDelObjeto = Object.keys(originalA);

console.log(edadMadre);
console.log(objetoParseado);
console.log(existeClaveMadreA);
console.log(existeClaveMadreB);
console.log(nombreDelMasJoven);
console.log(clavesDelObjeto);

console.log(nombreDelMasJoven2)

