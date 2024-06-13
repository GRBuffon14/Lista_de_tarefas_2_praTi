/*
Você recebe dois objetos que representam o inventário de duas lojas diferentes:
inventarioLojaA e inventarioLojaB. Cada chave é um item, e o valor é a quantidade desse
item em estoque. Escreva uma função que combine os inventários em um único objeto.
Se um item aparecer em ambas as lojas, some as quantidades.
 */

const prompt = require("prompt-sync")();

function inventario() {
  let lojaA = { mouse: 5, teclado: 3, monitor: 5 };
  let lojaB = { mouse: 10, teclado: 4, monitor: 6};
  let lojaAB = {};

  lojaAB = juntarLojas(lojaA, lojaB);

  console.log(lojaAB);
}
function juntarLojas(lojaA, lojaB) {
  let lojaAB = { ...lojaA };

  for (let element in lojaB) {
    if (lojaAB[element]) {
      lojaAB[element] += lojaB[element];
    } else {
      lojaAB[element] = lojaB[element];
    }
  }
  return lojaAB;
}

console.log(inventario())