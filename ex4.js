/*
    Crie um programa que leia o tamanho de três segmentos de reta. Analise seus
    comprimentos e diga se é possível formar um triângulo com essas retas.
    Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada
    lado deve ser menor que a soma dos outros dois. 
 */

    const prompt = require(`prompt-sync`)();

    //Entrada
    let retaA = parseInt(prompt("Insira o comprimento da primeira reta: "));
    let retaB = parseInt(prompt("Insira o comprimento da segunda reta: "));
    let retaC = parseInt(prompt("Insira o comprimento da terceira reta: "));
    
    //Processamento
    if (retaA + retaB > retaC && retaA + retaC > retaB && retaB + retaC > retaA) {
       //Saída se possível forma um triângulo
      console.log("É possível formar um triângulo com essas medidas.");
    }else{
       ///Saída se não for possível forma um triângulo
      console.log("Não é possível formar um Triângulo");
    }
  
  