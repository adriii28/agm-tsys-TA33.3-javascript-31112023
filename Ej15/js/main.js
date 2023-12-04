class Receta {
  constructor(nombre, tiempo, ingredientes) {
    this.nombre = nombre;
    this.tiempo = tiempo;
    this.ingredientes = ingredientes;
  }
}

const recetaTortilla = new Receta('Tortilla patatas', '45 minutos', ['Patatas', 'Cebolla', 'Huevo', 'Aceite']);
const recetaMacarrones = new Receta('Macarrones', '20 minutos', ['macarrones', 'tomate frito', 'carne picada']);
const recetaTartaManzana = new Receta('Tarta manzana', '1 hora', ['manzana', 'harina', 'azucar', 'huevos']);

const arrayDeRecetas = [recetaTortilla, recetaMacarrones, recetaTartaManzana];

const imprimirRecetas = (recetas) => {
  recetas.forEach(receta => {
    console.log('Nombre receta:', receta.nombre);
    console.log('Tiempo preparacion:', receta.tiempo);
    console.log('Ingredientes:');
    receta.ingredientes.forEach(ingrediente => {
      console.log('- ' + ingrediente);
    });
  });
};

imprimirRecetas(arrayDeRecetas);