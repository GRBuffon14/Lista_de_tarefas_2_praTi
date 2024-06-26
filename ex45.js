/*
Dado um array de strings, crie um objeto onde cada string é uma chave, e seu valor é
o número de vezes que a string aparece no array.
 */

const prompt = require("prompt-sync")();

function array() {
  let arrayElements = ["lucas", "pedro","lucas", "duda", "lucas","renan"];
  let object1 = {};
  let object2 = {};

  for (element of arrayElements) {
    if (object1[element]) {
      object1[element]++;
    } else {
      object1[element] = 1;
    }
  }
  for (let element in object1) {
    let valor = object1[element];
    object2[valor] = element;
  }

  for (element in object2) {
    console.log(`${element}: ${object2[element]}`);
  }
  return;
}

console.log(array())