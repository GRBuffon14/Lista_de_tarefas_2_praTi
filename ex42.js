/*
Crie um objeto chamado dados que contém várias propriedades, incluindo números,
strings e arrays. Escreva uma função que retorne um novo objeto apenas com as
propriedades que são arrays.
 */

const prompt = require("prompt-sync")();

const objectDados = {
  name: 'Gustavo',
  age: 22,
  phone: ['219999999', '21999888'],
  fruits: ['maçã','banana']
};

function elementObject(elements) {
  let newObjectDados = {};

  for (let element in elements) {
      if (Array.isArray(elements[element])) {
      newObjectDados[element] = elements[element];
      }
  }

  return newObjectDados;
}

let a = elementObject(objectDados);

console.log(a);