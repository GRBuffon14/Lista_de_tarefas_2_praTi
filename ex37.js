/*
Escreva um algoritmo que leia um vetor G de 20 elementos caractere que representa
o gabarito de uma prova. A seguir, para cada um dos 50 alunos da turma, leia o vetor de
respostas (R) do aluno e conte o número de acertos. Mostre o número de acertos do
aluno e uma mensagem “APROVADO” se a quantidade de acertos for maior ou igual a 12;
e mostre uma mensagem de “REPROVADO”, caso contrário.
 */

const prompt = require("prompt-sync")();

function acertosAluno(){
  const GABARITO = 20; 
  const QTDALUNOS = 50;
  let acertoAluno = 0; 
  let vetorG = [];
  let vetorR = [];

  for(let i = 0; i < GABARITO; i++){
      vetorG.push(prompt(`Caractere${i+1}: `));
  }

  for(let i = 0; i < QTDALUNOS; i++){
      acertoAluno = 0;
      vetorR = [];

      for(let j = 0; j < GABARITO; j++){
          vetorR.push(prompt(`Nota ${j+1}: `));
      }

      for(let l = 0; l < QTDALUNOS; l++){
          for(let k = 0; k < GABARITO; k++){
              if(vetorR[l] === vetorG[k]){
                  acertoAluno++;
                  break;
              }
          }
      }
      console.log(`Aluno ${i+1} - Acertos: ${acertoAluno}`);
      
      if(acertoAluno === 12){ 
          console.log("APROVADO!");
          break;
      }  
      console.log("REPROVADO");
  }
}

console.log(acertosAluno())