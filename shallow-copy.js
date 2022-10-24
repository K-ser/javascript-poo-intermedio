const obj1 = {
  a: 'a',
  b: 'b',
  c: {
    d: 'd',
    e: 'e',
  },

  editA() {
    this.a = 'AAAAA';
  }
};

// const obj2 = {};
// for (prop in obj1) {
//   obj2[prop] = obj1[prop];
// };

//nos permite copiar las propiedades, pero sigue afectando el tema de la clonación anidada, objetos dentro de objetos
// const obj3 = Object.assign({}, obj1);

//clona pero envia las propiedades al proto de la copia, además no modifica las propiedades, crea nuevas y las pone antes de las
//que estan en proto. También, en el tema de clonación anidada, la copia puede afectar al original
// const obj4 = Object.create(obj1);

const stringifiedComplexObj = JSON.stringify(obj1);
const obj2 = JSON.parse(stringifiedComplexObj);