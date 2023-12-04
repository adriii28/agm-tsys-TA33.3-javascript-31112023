let persona = {
  nombre: 'Adrian',
  apellidos: 'Gallego',
  edad: 20,
  direccion: 'Calle Principal 123',
  ciudad: 'Vila-seca',
  pais: 'España'
};

const nombreCompleto = (persona) => {
  console.log('Nombre completo:',  persona.nombre + ' ' + persona.apellidos);
}

nombreCompleto(persona);
