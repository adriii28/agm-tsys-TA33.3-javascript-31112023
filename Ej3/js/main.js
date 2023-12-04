let array = ["DOM", "BOM", "Funciones", "Arrays"];

array.splice(array.indexOf("DOM"), 1);

array.splice(array.indexOf("BOM"), 1, "Objetos");
array.splice(array.indexOf("Arrays"), 1);
array.splice(array.indexOf("Funciones") + 1, 0, "ArraysDificiles");
let arrayCopy = array.slice(-2);
let index = array.indexOf("Funciones");

console.log("Array final:", array);
console.log("Copia de los últimos dos elementos:", arrayCopy);
console.log("Índice de 'Funciones':", index);