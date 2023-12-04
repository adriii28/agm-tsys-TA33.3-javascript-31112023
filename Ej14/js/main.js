let recetas = [
  {
    nombre: 'Tortilla patatas',
    tiempo: '45 minutos',
    ingredientes: ['Patatas', 'Cebolla', 'Huevo', 'Aceite'],
  },
  {
    nombre: 'Macarrones',
    tiempo: '20 minutos',
    ingredientes: ['macarrones', 'tomate frito', 'carne picada'],
  },
  {
    nombre: 'Tarta manzana',
    tiempo: '1 hora',
    ingredientes: ['manzana', 'harina', 'azucar', 'huevos'],
  },
];

const imprimirRecetas = () => {
  recetas.forEach(receta => {
    console.log('Nombre receta:', receta.nombre);
    console.log('Tiempo preparacion:', receta.tiempo);
    console.log('Ingredientes:');
    receta.ingredientes.forEach(ingrediente => {
      console.log('- ' + ingrediente);
    });
  });
};

imprimirRecetas();
