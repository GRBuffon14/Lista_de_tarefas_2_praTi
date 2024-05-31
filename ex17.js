/*
Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em
dois vetores, em posições relacionadas. No final, mostre uma listagem contendo apenas
os dados das pessoas menores de idade.
 */

const prompt = require(`prompt-sync`)();

//Entrada
let nome = [];
let idade = [];
let lerNome;
let lerIdade;

//Processamento
for (let i = 0; i <= 9; i++) {
  lerNome = prompt("Qual seu Nome: ");
  nome.push(lerNome);
  lerIdade = parseInt(prompt("Qual Sua Idade: "));
  idade.push(lerIdade);
  console.log('------------------');
}

//Saída
console.log("\n--- Pessoas Menores de idade ---\n");
for (let i = 0; i <= 9; i++) {
  if (idade[i] < 18) {
    console.log(`${idade[i]} anos - ${nome[i]}`);
  }
}
