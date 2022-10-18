const kev = {
  name: 'Kevin',
  age: 25,
  aprovedCourses: ['Curso 1'],

  addCourse(newCourse) {
    console.log('This', this);
    console.log('This.aprovedCourses', this.aprovedCourses);
    this.aprovedCourses.push(newCourse);
  }
}

console.log(Object.keys(kev)); //devuelve un array con las propiedades de un objeto
console.log(Object.getOwnPropertyNames(kev)); //lo mismo que el anterior, pero de una manera mas "profunda"
console.log(Object.entries(kev)); //devuelve un array con otros arrays. en cada array interior encontramos dos posiciones con el
//key/value, o sea, con el nombre de la propiedad y su valor


// Definimos propiedades en un objeto o modificamos las existentes. Los parametros son el objeto objetivo, la propiedad a crear o
//modificar y un objeto con el valor y atributos de la propiedad.
Object.defineProperty(kev, 'pruebaNASA', {
  value: 'extraterrestres',
  writable: false,
  enumerable: true,
  configurable: true,
});
Object.defineProperty(kev, 'navigator', {
  value: 'Chrome',
  enumerable: true,
  writable: true,
  configurable: true,
});
Object.defineProperty(kev, 'editor', {
  value: 'VSCode',
  enumerable: true,
  writable: false,
  configurable: true,
});
Object.defineProperty(kev, 'terminal', {
  value: 'WSL',
  enumerable: true,
  writable: true,
  configurable: false,
});

//Este metodo nos devuelve la lista de propiedades dentro del objeto pero junto con sus atributos
console.log(Object.getOwnPropertyDescriptors(kev));
