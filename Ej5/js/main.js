const joinArray = (array1,array2) => {

    let resultado = []

    for (let i = 0; i < array1.length; i++) {
        resultado.push(array1[i], array2[i]);
    }

    return resultado

}

let array1 = [1,2,3];
let array2 = [4,5,6];

let arraysJoin = joinArray(array1, array2);
console.log(arraysJoin);