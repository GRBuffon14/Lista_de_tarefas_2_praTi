/*
Escreva um algoritmo que leia um vetor de 13 elementos inteiros, que é o Gabarito de
um teste da loteria esportiva. Leia, a seguir, para cada um dos 100 apostadores, o número
do seu cartão e um vetor de Respostas de 13 posições. Verifique para cada apostador o
número de acertos, comparando o vetor de Gabarito com o vetor de Respostas. Escreva
o número do apostador e o número de acertos. Se o apostador tiver 13 acertos, mostrar a
mensagem "Parabéns, tu foi o GANHADOR".
 */

const prompt = require("prompt-sync")();

function loteriaEsportiva() {
  const valorMaximoVetor = 13; 
  matriz = [];

  console.log("-- GABARITO --")
  for(let i = 0; i < max; i++){
      matriz.push(parseInt(prompt(`-- Elemento${i+1}: `)));
  }

  const APOSTADORES = 100;
  let cartaoApostador = 0; 
  let respostaApostador = [];
  let acertosApostador = 0;

  for(let i = 0; i < APOSTADORES; i++){
      respostaApostador = [];
      acertosApostador = 0;

      console.log(`Apostador ${i + 1} \n`);
      cartaoApostador = parseInt(prompt(`Número cartão: `));
      
      for(let j = 0; j < valorMaximoVetor; j++){
          respostaApostador.push(parseInt(prompt(`Rsposta ${j+1}: `)));
      }

      for(let i = 0; i < valorMaximoVetor; i++){
          for(let j = 0; j < valorMaximoVetor; j++){
              if(respostaApostador[j] === matriz[i]){
                  acertosApostador++;
                  break;
              }
          }
      }

      console.log(`Apostador ${i+1} - Acertos: ${acertosApostador}`);
      
      if(acertosApostador === valorMaximoVetor){
          console.log("Parabéns, tu foi o GANHADOR")
      }   
  }
}

console.log(loteriaEsportiva())