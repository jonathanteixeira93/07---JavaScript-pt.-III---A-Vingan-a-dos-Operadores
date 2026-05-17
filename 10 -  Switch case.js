/*


Switch case -> controlador de fluxo de código, onde o valor de uma variável é comparada com um valor específico, e se for igual, o código dentro do bloco case é executado.
Se não for igual, o código dentro do bloco default é executado.

Exemplo: 
let dia = "Segunda-feira";

switch (dia) {
    case "Segunda-feira":
        console.log("Hoje é segunda-feira");
        break;
    case "Terça-feira":
        console.log("Hoje é terça-feira");
        break;
    default:
        console.log("Dia da semana não reconhecido");
}

Neste exemplo, a variável "dia" é comparada com os valores "Segunda-feira" e "Terça-feira". Se o valor de "dia" for igual a "Segunda-feira",
 o código dentro do bloco case será executado e a mensagem "Hoje é segunda-feira" será exibida. Se o valor de "dia" for igual a "Terça-feira", o código dentro do bloco case será 
 executado e a mensagem "Hoje é terça-feira" será exibida. Se o valor de "dia" não for igual a nenhum dos casos, o código dentro do bloco default será executado e a mensagem "Dia da semana 
 não reconhecido" será exibida.

O switch case é uma alternativa ao uso de múltiplos if-else, e pode tornar o código mais legível e organizado quando se tem várias condições a serem verificadas.

*/

const temparature = 30;
switch (temparature) {
    case 10:
        console.log("Está frio");
        break;
         case 20:
        console.log("Está normal");
        break;
         case 30:
        console.log("Está quente");
        break;
        default:
        console.log("Não sei te dizer");
}