/*

Operador ternário é uma forma de escrever uma expressão condicional de maneira mais concisa. Ele é representado pelo símbolo "?" e é usado 
para avaliar uma condição e retornar um valor com base nessa avaliação. A sintaxe do operador ternário é a seguinte:
condição ? valor_se_verdadeiro : valor_se_falso;
O operador ternário é útil para simplificar código que envolve uma única condição, evitando a necessidade de escrever um bloco completo de if-else. 
Ele pode ser usado para atribuir valores a variáveis ou para retornar valores diretamente em expressões.

Exemplo de uso do operador ternário:

const age = 18;
const canVote = age >= 18 ? "Pode votar" : "Não pode votar";
console.log(canVote); // Output: "Pode votar"
Neste exemplo, a variável canVote recebe o valor "Pode votar" se a condição age >= 18 for verdadeira, caso contrário, recebe "Não pode votar". 
O operador ternário torna o código mais compacto e fácil de ler quando se trata de uma única condição

? if
: else
&& if sem else


const salary = 3000;

if ( salary < 3000) {
    console.log(" O colaborador é Junior");
} else {
    console.log(" O colaborador é Senior");
}
*/

const salary = 3000;


// IF -> salary < 3000 && console.log(" O colaborador é Junior");
// IF/ ELSE -> salary < 3000 ? console.log(" O colaborador é Junior") : console.log(" O colaborador é Senior");
// ELFE IF -> 
salary < 3000 ? console.log(" O colaborador é Junior") : salary >= 3000 && salary < 1000 ? console.log(" O colaborador é Senior") : console.log(" O colaborador é Diretor");