/*
Crie uma lógica que preencha um vetor de 20 posições com números aleatórios
(entre 0 e 99) gerados pelo computador. Logo em seguida, mostre os números gerados e
depois coloque o vetor em ordem crescente, mostrando no final os valores ordenados.
 */

const prompt = require(`prompt-sync`)();

//Entrada
let vetorNumero = [];
let numeroAleatório;

//Processamento
for(let i = 0; i < 20; i++){
  numeroAleatório = Math.floor(Math.random() * (99 - 0 + 1)) + 0;
  vetorNumero.push(numeroAleatório);
  console.log(vetorNumero[i]);
}
vetorNumero.sort((a,b) =>{
  return a-b;
})
//Saída

console.log("\nNúmeros colocados em ordem crescente");
console.log(vetorNumero);