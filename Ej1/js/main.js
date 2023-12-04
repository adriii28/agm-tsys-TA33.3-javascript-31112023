const longitud = (letras) => {
    console.log(letras.length);
}

const elemAleatorio = (letras) => {
    let letraAleatoria = letras[Math.floor(Math.random() * letras.length)];
    console.log(letraAleatoria);
}

let letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];

longitud(letras);
elemAleatorio(letras);
