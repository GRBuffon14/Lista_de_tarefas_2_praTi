/*
Faça um algoritmo que leia uma matriz 3 x 3 e após a leitura, multiplique os
elementos da diagonal principal com a média dos elementos da diagonal secundária.
 */

const prompt = require("prompt-sync")();

function matriz() {
  let matriz = [
    [5, 6, 7],
    [8, 9, 10],
    [11, 12, 13],
  ];

  function mediaSecundaria(matriz) {
      let totValor = 0;
      let somaValor = 0;
  
      for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[0].length; j++) {
          if (j === matriz[0].length - 1 - i) {
              somaValor += matriz[i][j];
            totValor++;
          }
        }
      }
      return (somaValor / totValor).toFixed(2);
    }

  let media = mediaSecundaria(matriz);
  console.log("Matriz: ");
  matriz.forEach((linha) => {
    console.log(linha);
  });

  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[0].length; j++) {
      if (j === i) {
        matriz[i][j] *= media;
      }
    }
  }
  console.log("Matriz modificada: ");
  matriz.forEach((linha) => {
    console.log(linha);
});
}

console.log(matriz())