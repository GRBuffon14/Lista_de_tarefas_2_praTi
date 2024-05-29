/*
Faça um programa que mostre os 10 primeiros elementos da Sequência de Fibonacci.
Ex.: 1, 1, 2, 3, 5, 8, 13, 21.
 */

const prompt = require(`prompt-sync`)();

//Entrada
let anterior = 0;
let atual = 1;
let proximo;

//Saída
//Processamento
console.log('----- Sequência de Fibonacci -----');
for(let i = 1; i < 11; i++){
  console.log(atual);
  proximo = anterior + atual;
  anterior = atual;
  atual = proximo;
}
