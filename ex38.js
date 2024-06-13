/*
Elabore um algoritmo que leia um vetor de 6 posições e após sua leitura leia outra
variável identificadora que calcule a operação conforme a informação contida nesta
variável:
1- soma dos elementos;
2- produto dos elementos;
3- média dos elementos;
4- ordene os elementos em ordem crescente;
5- mostre o vetor.
 */

const prompt = require("prompt-sync")();

function leitorVetor(){
  const MAX = 6;
  matriz = [];

  for(let i = 0; i < MAX; i++){
      matriz.push(parseInt(prompt(`Valor${i+1}: `)));
  }
  console.log("1 - Soma\n2 - Produto\n3 - Média\n4 - Ordenar de forma Crescente\n5 - Exibir valores digitados");
  choice = parseInt(prompt("Insira sua escolha: "));
  switch(choice){
      case 1:
          soma = 0;
          for(let i = 0; i < MAX; i++){
              soma += matriz[i];
          }
          console.log(`Soma: ${soma}`);
          break;
      case 2:
          produto = 1;
          for(let i = 0; i < MAX; i++){
              produto *= matriz[i];
          }
          console.log(`Produto: ${produto}`);
          break;
      case 3:
          soma = 0;
          for(let i = 0; i < MAX; i++){
              soma += matriz[i];
          }
          media = soma / MAX;
          console.log(`Média: ${media}`);
          break;
      case 4:
          let matrizOrdenada = [...matriz].sort((a, b) => a - b);
          console.log(`Vetor ordenado: ${matrizOrdenada}`);
          break;
      case 5:
          console.log(`${matriz}`);
          break;
      default:
          console.log("Opção inválida");
          break;
  }
}

console.log(leitorVetor())