/*
Escreva um algoritmo que leia um número inteiro A e uma matriz V 30 x 30 de inteiros.
Conte quantos valores iguais a A estão na matriz. Crie, a seguir, uma matriz X contendo
todos os elementos de V diferentes de A. Mostre os resultados.
 */

const prompt = require("prompt-sync")();

function matriz(){
  const LINHAS = 30; 
  const COLUNAS = 30;

  let matriz = [];

  for(let i = 0; i < LINHAS; i++){
      matriz[i] = [];
      for(let j = 0; j < COLUNAS; j++){
          matriz[i][j] = (i + 1) * (j + 1);
      }
  }
  console.log(`Vamos verificar se o número está na matriz`);    
  valorIntA = parseInt(prompt("Insira um número inteiro: "));
  let existente = 0;
  let diferente = [];

  for(let i = 0; i < LINHAS; i++){
      for(let j = 0; j < COLUNAS; j++){
          if(matriz[i][j] == valorIntA){
              existente += 1;
          }else{
              diferente.push(matriz[i][j]);
          }
      }
  }
  console.log(`Quantidade de vezes que ${valorIntA} está existente na matriz: ${existente}`);
  console.log(`Quantidade de vezes que ${valorIntA} está diferente na matriz: ${diferente.length}`);
}

console.log(matriz())