let tortilla = {
  nombre: 'Tortilla patatas',
  tiempo: '45 minutos',
  ingredientes: ['Patatas', 'Cebolla', 'Huevo', 'Aceite'],
};

console.log('Nombre de la receta:', tortilla.nombre);
console.log('Tiempo preparacion:', tortilla.tiempo);
console.log('Ingredientes:');
tortilla.ingredientes.forEach(element => {
  console.log(element);
});
