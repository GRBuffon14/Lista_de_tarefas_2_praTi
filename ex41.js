/*
Dado o objeto pessoa com propriedades nome e idade, acesse e imprima o valor de
idade. Adicione uma nova propriedade chamada email ao objeto pessoa que já possui
nome e idade.
 */

const prompt = require("prompt-sync")();

function pessoa(){
  const objectPessoa = {
      name: prompt("Insira seu nome: "),
      age: parseInt(prompt("Insira sua idade: ")),
      email: prompt("Insira seu endereço de email: ")
  };
  console.log(`\nNome: ${objectPessoa.name}\nIdade: ${objectPessoa.age}\nEmail: ${objectPessoa.email}`);
}

console.log(pessoa())