/*
Elaborar um algoritmo que leia uma matriz M(6,6) e um valor A. Após a leitura,
multiplicar a matriz M pelo valor A e colocar os valores da matriz multiplicados por A em
um vetor V(36). Escrever o vetor V no final.
 */

const prompt = require("prompt-sync")();

function matriz(){
    const LINHAS = 6; 
    const COLUNAS = 6;

    let matrizM = [];

    for(let i = 0; i < LINHAS; i++){
        matrizM[i] = [];
        for(let j = 0; j < COLUNAS; j++){
            matrizM[i][j] = (i + 1) * (j + 1);
        }
    }
    console.log(`MatrizM original: `);
    for(let i = 0; i < matrizM.length; i++){
        let aux = "";
        for(let j = 0; j < matrizM.length; j++){
            aux += matrizM[i][j] + " ";
        }
        console.log(aux);
    }

    valorA = parseFloat(prompt("\nMultiplicar valor em matriz: "));
    matrizV = [];

    console.log(`Matriz Modificada: `);
    for(let i = 0; i < LINHAS; i++){
        for(let j = 0; j < COLUNAS; j++){
            matrizV.push(matrizM[i][j] * valorA); 
        }
    }

    console.log(matrizV);
}

console.log(matriz())