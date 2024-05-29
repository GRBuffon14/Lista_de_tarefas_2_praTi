/*
Um programa de vida saudável quer dar pontos por atividades físicas realizadas que
podem ser trocados por dinheiro. Cada hora de atividade física no mês vale pontos. O
sistema funciona assim:
- até 10 h de atividade no mês: ganha 2 pontos por hora
- de 10 h até 20 h de atividade no mês: ganha 5 pontos por hora
- acima de 20 h de atividade no mês: ganha 10 pontos por hora
- A cada ponto ganho, o cliente fatura R$ 0,05 (5 centavos)
Faça um programa que leia quantas horas de atividade uma pessoa teve por mês.
Calcule e mostre quantos pontos ela teve e quanto dinheiro ela conseguiu ganhar.
 */

const prompt = require(`prompt-sync`)();


//Entrada
const horasExercicio = parseInt(prompt('Quantidade de horas de exercício este mês: '));
let pontos = 0;
let dinheiro = 0;

//Processamento
if(horasExercicio > 0 && horasExercicio <= 10){
  pontos = horasExercicio * 2;
  dinheiro = pontos * 0.05;
}else if(horasExercicio > 10 && horasExercicio <= 20){
  pontos = horasExercicio * 5;
  dinheiro = pontos * 0.05;
}else if(horasExercicio > 20){
  pontos = horasExercicio * 10;
  dinheiro = pontos * 0.05;
}

//Saída
if(dinheiro > 0){
  console.log(`Parabéns! você ganhou R$${dinheiro.toFixed(2)} pelos exercícios mensais`);
}else{
  console.log(`Você não ganhou nada este mês, se exercite mais!`);
}