/*
Faça um algoritmo que leia um vetor de 5 elementos inteiros, correspondentes ao
resultado oficial da Loto. A seguir, leia 50 conjuntos de vetores (com 5 elementos inteiros
cada), representando as apostas feitas. Compare os números das apostas com o
resultado oficial e mostre uma mensagem ("Ganhador") se todos os números
corresponderem ao resultado oficial. (Observação: não é necessário procurar por ternos
e quadras, apenas por quinas.)
 */

const prompt = require("prompt-sync")();

function loteria(){
  const MAX = 5;
  let vetorAposta = [];
  console.log("Gabarito da Loteria:");
  for(let i = 0; i < MAX; i++){        
      vetorAposta.push(parseInt(prompt("Valor: ")));
  }

  let apostaLoteria;
  for(let i = 0; i < 50; i++){
      apostaLoteria = [];
      console.log(`Aposta jogador ${i+1}: `);
      for(let j = 0; j < MAX; j++){
          apostaLoteria.push(parseInt(prompt(`Informe a ${i + 1} aposta:`)));
      }
      console.log(`Aposta ${i}: ${apostaLoteria}`);

      let ganhadorLoteria = true;
      for(let k = 0; k < MAX; k++) {
          if(apostaLoteria[k]!== vetorAposta[k]){
              ganhadorLoteria = false;
              break;
          }
      }
      if(ganhadorLoteria){
          console.log("GANHADOR");
      }
  }
}

console.log(loteria())