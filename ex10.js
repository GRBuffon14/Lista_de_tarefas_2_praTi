/*
Crie um programa usando a estrutura “faça enquanto” que leia vários números. A
cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela:
a) O somatório entre todos os valores;
b) Qual foi o menor valor digitado;
c) A média entre todos os valores;
d) Quantos valores são pares.
 */

const prompt = require(`prompt-sync`)();

//Entrada
let continuar = 1;
let numero;
let soma = 0;
let menor = -Infinity;
let media = -0;
let cont = 0;
let par = [ ];

//Processamento
do{
  console.log(par);
  numero = parseInt(prompt('Digite um número: '))
  soma += numero;
  menor = menor < numero ? numero : menor;
  cont++;
  media = soma / cont;
  if(numero % 2 == 0){
    par.push(numero)
  }
  continuar = prompt('Digite 1 para continuar e 0 para parar: ')
  console.log('');
  console.log(par);
}while(continuar != 0)

//Saída
console.log(`A soma total dos valores ${soma}`);
console.log(`O menor dos valores ${menor}`);
console.log(`A média dos valores ${media}`);
console.log(`Os Número pares são ${par}`);