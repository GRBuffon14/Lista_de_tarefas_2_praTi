/*
Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor. No
final, mostre quais são os números pares que foram digitados e em que posições eles
estão armazenados.
 */

const prompt = require(`prompt-sync`)();

//Entrada
let numero;
let vetorNumero = [];

//Processamento
for(let i = 0; i < 10; i++){
  numero = parseInt(prompt('Digite um número: '))
  vetorNumero.push(numero);
}

//Saída
console.log("\n----- Os número pares e suas posições -----\n");
for(let [key,value] of vetorNumero.entries()){
  if(value % 2 == 0){
    console.log('Número ' + value + ' na posição ' + key);
  }
}
