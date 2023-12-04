const elementosRepetidos = (array1, array2) => {
    const elementosRepetidos = array1.filter(elemento => array2.includes(elemento));

    if (elementosRepetidos.length > 0) {
        console.log("Elementos repetidos:", elementosRepetidos);
    } else {
        console.log("No hay elementos repetidos.");
    }
}

const javascript1 = ["DOM", "BOM", "Funciones", "Arrays"];
const javascript2 = ["Objetos", "Arrays", "ParseInt"];

elementosRepetidos(javascript1, javascript2);