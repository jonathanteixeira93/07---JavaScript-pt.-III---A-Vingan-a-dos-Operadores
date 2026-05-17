/*

Operadores de comparação são usados para comparar dois valores e retornar um valor booleano (true ou false) com base na comparação. Aqui estão os principais operadores de comparação em JavaScript:

1. Igual a (==): Verifica se os valores são iguais, ignorando o tipo.
   Exemplo: 5 == '5' // true 
2. Estritamente igual a (===): Verifica se os valores são iguais e do mesmo tipo.
   Exemplo: 5 === '5' // false 
3. Diferente de (!=): Verifica se os valores são diferentes, ignorando o tipo.
   Exemplo: 5 != '5' // false 
4. Estritamente diferente de (!==): Verifica se os valores são diferentes e do mesmo tipo.
   Exemplo: 5 !== '5' // true 
5. Maior que (>): Verifica se o valor da esquerda é maior que o da direita.
   Exemplo: 5 > 3 // true 
6. Menor que (<): Verifica se o valor da esquerda é menor que o da direita.
   Exemplo: 3 < 5 // true 
7. Maior ou igual a (>=): Verifica se o valor da esquerda é maior ou igual ao da direita.
   Exemplo: 5 >= 5 // true 
8. Menor ou igual a (<=): Verifica se o valor da esquerda é menor ou igual ao da direita.
   Exemplo: 3 <= 5 // true 


*/

const firstNumber = "10";
const secondNumber = '10';

if (firstNumber === secondNumber) {
    console.log("Os números são iguais");} 
        else {
    console.log("Os números são diferentes");
}