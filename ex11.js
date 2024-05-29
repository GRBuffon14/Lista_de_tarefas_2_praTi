/*
Desenvolva um programa que leia o primeiro termo e a razão de uma PA (Progressão
Aritmética), mostrando na tela os 10 primeiros elementos da PA e a soma entre todos os
valores da sequência.
 */

const prompt = require(`prompt-sync`)();

//Entrada
const primeiroTermo = parseInt(prompt('Qual o primeiro termo da PA: '))
const razao = parseInt(prompt('Qual a razão da PA: '))
let pa = primeiroTermo;
let soma = primeiroTermo;

//Saída
//Processamento 
for(let i = 1; i < 11; i++){
  console.log(`Termo ${i}: ${pa}`);
  pa = pa + razao;
  soma += pa;
}
console.log(`\nA soma de todos os termos é igual á ${soma}`);
