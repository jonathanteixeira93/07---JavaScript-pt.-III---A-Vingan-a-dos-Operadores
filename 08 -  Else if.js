/*


Else if é uma estrutura de controle de fluxo que permite executar um bloco de código diferente se a condição anterior for falsa. 
Ele é usado para testar múltiplas condições em sequência.

A sintaxe básica do else if é a seguinte:
if (condição1) {
    // código a ser executado se condição1 for verdadeira
}   else if (condição2) {
    // código a ser executado se condição1 for falsa e condição2 for verdadeira
} else {
    // código a ser executado se todas as condições anteriores forem falsas
}


*/

const temperature = 40;

if(temperature === 36) {
  console.log("A temperatura é normal");
} else if (temperature > 36 && temperature <= 40) {
  console.log("Está com febre");
} else if (temperature > 40) {
  console.log("Está com febre alta");
}
else {
  console.log("Está com hipotermia");
}
