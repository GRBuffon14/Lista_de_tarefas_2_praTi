/*
    Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Km/h-1, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da
multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida.
 */

const prompt = require(`prompt-sync`)();

//Entrada
const velocidade = parseFloat(prompt('Qual a velocidade que você está dirigindo: '))
let multa;

//Processamento
if(velocidade > 80){
multa = (velocidade - 80) * 5;
//Saída se for multado
console.log(`Você foi multado pelo excesso de velocidade, sua multa é de R$${multa.toFixed(2)}`);
}else{
//Saída se não for multado
  console.log('Você está dentro do limite de velocidade');
}
