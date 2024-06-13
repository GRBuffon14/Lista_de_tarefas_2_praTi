/*
Elaborar um algoritmo que leia um conjunto de 30 valores e os coloca em 2 vetores
conforme forem pares ou ímpares. O tamanho do vetor é de 5 posições. Se algum vetor
estiver cheio, escrevê-lo. Terminada a leitura, escrever o conteúdo dos dois vetores. Cada
vetor pode ser preenchido quantas vezes forem necessárias.
 */

const prompt = require("prompt-sync")();

function trintaValoresImparPar(){
  aux = 0;
  valorPar = [];
  valorImpar = [];

  for(let i = 0; i < 30; i++){
      let valores = parseInt(prompt("Insira valor: "));
      if(valores % 2 === 0){
          if(valorPar.length >= 5){
              console.log(`Vetor par está cheio: ${valorPar}`);
          }else{
              valorPar.push(valores);
          }        
      }else{
          if(valorImpar.length >= 5){
              console.log(`Vetor ímpar está cheio: ${valorImpar}`);
          }else{
              valorImpar.push(valores);
          }
      }
  }
  console.log(`Par: ${valorPar}\nìmpar: ${valorImpar}`);
}

console.log(trintaValoresImparPar())