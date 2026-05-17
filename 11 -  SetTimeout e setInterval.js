/*



SetTimeout & setInterval é uma função nativa do JavaScript que é usada para executar uma função ou um trecho de código após um determinado período de tempo.

A sintaxe básica do setTimeout é a seguinte:
setTimeout(function, delay)
Onde:
- function: é a função ou o trecho de código que será executado após o tempo especificado.
- delay: é o tempo em milissegundos que deve passar antes da execução da função.
Exemplo:
setTimeout(() => {
    console.log("Olá, mundo!");
}, 2000);
Neste exemplo, a função anônima será executada após 2 segundos (2000 milissegundos) e exibirá a mensagem "Olá, mundo!" no console.

SetTimeout é usado para agendar a execução de uma função ou um trecho de código após um determinado período de tempo. Ele é útil para criar atrasos, temporizadores ou para executar algo depois de um certo tempo.

Já o setInterval é usado para executar uma função ou um trecho de código repetidamente em intervalos regulares de tempo. Ele é útil para criar loops de tempo, como atualizações periódicas ou animações.

// setTimeout -> executa uma vez após um determinado tempo
// setInterval -> executa repetidamente em um intervalo de tempo
// clearInterval -> para o setInterval

/*setTimeout(() => {
    
}, timeout);
function myFunction() {
    
}
setTimeout( myFunction, timeout);

clearInterval(intervalId) // para parar o setInterval

*/


