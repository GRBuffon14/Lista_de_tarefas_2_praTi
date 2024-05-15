/*
    Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai
    tentar descobrir qual foi o valor sorteado.
 */

    const prompt = require(`prompt-sync`)();

    //Entrada
    const numeroSorteado = Math.floor(Math.random() * 5) + 1;
    let tentativa;
    
    //Processamento
    // console.log(numeroSorteado);
    do{
      console.log('\n----- Jogo do número certo de 1 á 5 -----');
      tentativa = parseInt(prompt('Escolha um número de 1 á 5: '))
      if(tentativa !== numeroSorteado){
        console.log('ERROU!, tente novamente');
      }
    }while(tentativa !== numeroSorteado)
      
    //Saída
    console.log('PARABÉNS! você acertou o número');
