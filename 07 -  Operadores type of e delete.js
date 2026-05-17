/*



Operadores type of e delete são usados para verificar o tipo de uma variável e para excluir propriedades de objetos, respectivamente.

1. Operador typeof: Retorna uma string indicando o tipo do operando.
    Exemplo: typeof 42 // "number"
2. Operador delete: Remove uma propriedade de um objeto.
    Exemplo: 
    const obj = { nome: "Alice", idade: 30 };
    delete obj.idade; // true
    console.log(obj); // { nome: "Alice" }


*/

const myObject = {
    name: "John",
    age: 30,
    city: "New York"
};
console.log(typeof myObject); // "object"
delete myObject.age; // true
console.log(myObject); // { name: "John", city: "New York" }