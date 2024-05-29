/*
Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. No final,
mostre o total de salário pago aos homens e o total pago às mulheres. O programa vai
perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um
funcionário.
 */

const prompt = require(`prompt-sync`)();

//Entrada
let salário = 0;
let sexo;
let mediaM = 0;
let mediaF = 0;
let continuar = 1;

//Processamento
do{
  
    salário = parseFloat(prompt('Qual o salário do funcionário: '))
    sexo = prompt('Qual o sexo do funcionário: M - Homem e F - Mulher: ')
    sexo.toLowerCase;
    if(sexo == 'm'){
      mediaM += salário
    }else if(sexo == 'f'){
      mediaF += salário
    }
    continuar = prompt('Digite 1 para continuar e 0 para parar: ')
    console.log('');
  
}while(continuar != 0)

//Saída
console.log('---------- TOTAL ----------');
console.log(`o Total pago aos homens é de R$${mediaM.toFixed(2)} e o total pago as mulheres é de R$${mediaF.toFixed(2)}`);