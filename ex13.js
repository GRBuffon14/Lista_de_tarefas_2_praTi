/*
Crie um programa que preencha automaticamente (usando lógica, não apenas
atribuindo diretamente) um vetor numérico com 15 posições com os primeiros elementos
da sequência de Fibonacci.
 */

const prompt = require(`prompt-sync`)();

//Entrada
let anterior = 0;
let atual = 1;
let proximo;
let vetor = [];

//Processamento;
for (let i = 0; i < 15; i++) {
  vetor.push(atual)
  proximo = anterior + atual;
  anterior = atual;
  atual = proximo;
}
//Saída
console.log('Vetor com a sequência de Fibonacci: ',vetor);
