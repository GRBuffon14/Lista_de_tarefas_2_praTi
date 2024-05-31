/*
Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em
dois vetores, em posições relacionadas. No final, mostre uma listagem contendo apenas
os dados das pessoas menores de idade.
 */

const prompt = require(`prompt-sync`)();

//Entrada
const funcionario = {};

//Processamento
funcionario.nome = prompt('Digite seu nome: ')
funcionario.cargo = prompt('Digite seu cargo: ')
funcionario.salario = prompt('Digite seu salário: ')

//Saída
console.log('');
console.log(`Seu nome é: ${funcionario.nome}`);
console.log(`Seu Cargo é: ${funcionario.cargo}`);
console.log(`Seu Salário é: ${funcionario.nome}`);
