let array = [
  {
    nombre: 'Adrian',
    apellidos: 'Gallego',
    edad: 20,
    direccion: 'Calle Principal 123',
    ciudad: 'Vila-seca',
    pais: 'España',
  },
  {
    nombre: 'Pepe',
    apellidos: 'Gonzalez',
    edad: 18,
    direccion: 'Calle Principal 1234',
    ciudad: 'Vila-seca',
    pais: 'España',
  },
  {
    nombre: 'Marcos',
    apellidos: 'Perez',
    edad: 30,
    direccion: 'Calle Principal 1235',
    ciudad: 'Vila-seca',
    pais: 'España',
  }
];

const imprimirEdad = (array) => {
  array.forEach(persona => {
    console.log(persona.edad);
  });
}

imprimirEdad(array);
