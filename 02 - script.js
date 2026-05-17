function realizarSorteio() {

const inputMin = document.querySelector(".input-min");
const inputMax = document.querySelector(".input-max");
const resultado = document.querySelector(".resultado");

const min = Math.ceil(inputMin.value);
const max = Math.floor(inputMax.value);

if (min >= max) {
  alert("O valor mínimo deve ser menor que o máximo!");
} else{

const sorteado = Math.floor(Math.random() * (max - min + 1)) + min;

 resultado.innerText = sorteado;
} 
}