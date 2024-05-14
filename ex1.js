/*
    Escreva um programa para calcular a redução do tempo de vida de um fumante.
    Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou.
    Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de
    vida um fumante perderá e exiba o total em dias.
 */

const prompt = require(`prompt-sync`)();

//Entrada
let cigarros = parseInt(prompt('Quantos cigarros você fuma por dia: '));
let dias = parseInt(prompt('Quantos anos você fuma cigarro: '));
let diasPerdidos;

//Processamento
dias *= 365;
cigarros = cigarros * 10 / 60 / 24;
diasPerdidos = Math.floor(dias * cigarros);


//Saída
console.log(`\nVocê já perdeu ${diasPerdidos} dias de vida!
Pare de fumar cigarro!!!`);