/*
    Crie um jogo de JoKenPo (Pedra-Papel-Tesoura).
 */

    const prompt = require(`prompt-sync`)();

    //Entrada
    let jogador1;
    let jogador2;

    //Processamento
    
      console.log('----- Jogo JoKenPo-----');
      console.log('Jogador 1 Escolha Pedra, papel ou tesoura');
      jogador1 = parseInt(prompt('Digite 1 para Pedra, Digite 2 para papel, Digite 3 para tesoura: '))
      if(jogador1 >= 1 && jogador1 <= 3){
      console.log('\nJogador 2 Escolha Pedra, papel ou tesoura');
      jogador2 = parseInt(prompt('Digite 1 para Pedra, Digite 2 para papel, Digite 3 para tesoura: '))
      if(jogador2 >= 1 && jogador2 <= 3){
        if( jogador1 === 1 && jogador2 === 2){
          console.log('\nO jogador 2 ganhou!');
        } else if(jogador1 === 1 && jogador2 === 3){
          console.log('\nO jogador 1 ganhou!');
        }else if(jogador1 === 2 && jogador2 === 1){
          console.log('\nO jogador 1 ganhou!');
        } else if(jogador1 === 2 && jogador2 === 3){
          console.log('\nO jogador 2 ganhou!');
        }else if(jogador1 === 3 && jogador2 === 1){
          console.log('\nO jogador 2 ganhou!');
        }else if(jogador1 === 3 && jogador2 === 2){
          console.log('\nO jogador 1 ganhou!');
        }else{
          console.log('\nDeu empate');
        }
      } else {
        console.log('Escolha do jogador 2 incorreta!');
      }
       
      } else {
        console.log('Escolha do jogador 1 incorreta!');
      }
      


    //Saída
