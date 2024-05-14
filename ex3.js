/*
    Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em Km. 
    Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e
    R$ 0.45 para viagens mais longas.
 */

const prompt = require(`prompt-sync`)();

//Entrada
const distancia = parseFloat(prompt('Quantos km você deseja percorrer: '))
let precoPassagem;

//Processamento
precoPassagem = distancia < 200 ? distancia * 0.5 : distancia * 0.45;

//Saída
console.log(`O preço da passagem ficou R$${precoPassagem.toFixed(2)}`);