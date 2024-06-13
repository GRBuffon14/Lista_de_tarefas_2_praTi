/*
Fazer um algoritmo para receber uma matriz 10 x 10 e devolver o resultado pedido no
item:
a) a soma dos elementos acima da diagonal principal;
b) a soma dos elementos abaixo da diagonal principal;
 */

const prompt = require("prompt-sync")();

function matriz(){
  const LINHAS = 10; 
  const COLUNAS = 10;

  let matriz = [];

  for(let i = 0; i < LINHAS; i++){
      matriz[i] = [];
      for(let j = 0; j < COLUNAS; j++){
          matriz[i][j] = (i + 1) * (j + 1);
      }
  }
  console.log(`\nMatriz: `);
  for(let i = 0; i < matriz.length; i++){
      let aux = "";
      for(let j = 0; j < matriz.length; j++){
          aux += matriz[i][j] + " ";
      }
      console.log(aux);
  }

  somaAcima = 0; 
  somaAbaixo = 0;

  for (let i = 0; i < LINHAS; i++) {
      for (let j = 0; j < COLUNAS; j++) {
          if (j > i) { 
              somaAcima += matriz[i][j];
          } else if (j < i) { 
              somaAbaixo += matriz[i][j];
          }
      }
  }
  console.log(`Soma acima da diagonal principal: ${somaAcima}`);
  console.log(`Soma abaixo da diagonal principal: ${somaAbaixo}`);
}

console.log(matriz())