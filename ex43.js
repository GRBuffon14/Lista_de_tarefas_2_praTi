/*
Dado dois objetos, obj1 e obj2, escreva uma função que crie um novo objeto
combinando as propriedades de ambos, onde as propriedades de obj2 têm precedência
sobre as do obj1 em caso de conflitos.
 */

const prompt = require("prompt-sync")();

function mesclarObjetos() {
  let obj1 = { nome: "pericles", idade: 40 };
  let obj2 = { nome: "lucas", idade: "19" };
  let objetoUniao = {};

  objetoUniao = { ...obj1, ...obj2 };

  for (element in objetoUniao) {
    console.log(`${element}: ${objetoUniao[element]}`);
  }
  return;
}