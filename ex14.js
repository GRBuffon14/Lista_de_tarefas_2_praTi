/*
Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No final,
mostre uma listagem com todos os nomes informados, na ordem inversa daquela em
que eles foram informados.
 */

const prompt = require(`prompt-sync`)();


//Entrada
let nome;
let vetorNome = [];

//Processamento
for(let i = 0; i < 7; i++){
  nome = prompt('Insira um nome aqui: ')
  vetorNome.push(nome);
}

//Saída
vetorNome.reverse();
console.log(`Os nomes informados na ordem inversa: ${vetorNome}`);