let llegadas = ['Adri', 'Pepe', 'Carlos', 'David', 'Jose'];

let ganador, segundo, restoCompetidores;
[ganador, segundo, ...restoCompetidores] = llegadas;

console.log('Ganador:', ganador);
console.log('Segundo:', segundo);
console.log('Resto de competidores:', restoCompetidores);
