/*
Suponha que você tem um array de objetos onde cada objeto representa uma venda
com vendedor e valor. Escreva uma função que retorne um objeto que sumarize o total
de vendas por vendedor.
 */

const prompt = require("prompt-sync")();

function array() {
  let object = [
    { vendedor: "Gustavo", valor: 200 },
    { vendedor: "Laura", valor: 300 },
    { vendedor: "Renato", valor: 500 },
    { vendedor: "Laura", valor: 110 },
    { vendedor: "Renato", valor: 30 },
  ];

  let totalValor = [];

  totalValor = object.reduce((valorSoma, valor) => {
    if (!valorSoma[valor.vendedor]) valorSoma[valor.vendedor] = 0;

    valorSoma[valor.vendedor] += valor.valor;
    return valorSoma;
  }, {});

  for (valores in totalValor) {
    console.log(`${valores}: ${totalValor[valores]}`);
  }
  return;
}

console.log(array())