/*
    Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O aluguel de um
carro popular custa R$ 90,00 por dia e um carro de luxo custa R$ 150,00. Além disso, o
cliente paga por Km percorrido. Faça um programa que leia o tipo de carro alugado
(popular ou luxo), quantos dias de aluguel e quantos Km foram percorridos. No final,
mostre o preço a ser pago de acordo com os dados a seguir:
Carros populares
- Até 100 Km percorridos: R$ 0,20 por Km
- Acima de 100 Km percorridos: R$ 0,10 por Km
Carros de luxo
- Até 200 Km percorridos: R$ 0,30 por Km
- Acima de 200 Km percorridos: R$ 0,25 por Km
 */

    const prompt = require(`prompt-sync`)();

    //Entrada
    console.log("----- Buffon's Aluguéis de Carros -----");
    console.log('Escolha seu tipo de carro: luxo ou popular');
    const carro = prompt('')
    console.log('\nQuantos dias ficou com o carro');
    const dias = prompt('')
    console.log('\nQuantos Km foram percorridos');
    const km = prompt('')
    let totalPagar;

    //Processamento
    if(carro == 'luxo'){
      totalPagar = 150 * dias;
      if(km <= 200){  
        totalPagar += (km * 0.3);
      } else{
        totalPagar += (km * 0.25);
      }
    }else if(carro == 'popular'){
      totalPagar = 90 * dias;
      if(km <= 100){  
        totalPagar += (km * 0.2);
      } else{
        totalPagar += (km * 0.1);
      }
    }
      
    //Saída
    console.log(`O Valor total do Aluguel do carro ficou R$${totalPagar.toFixed(2)}`);
  
