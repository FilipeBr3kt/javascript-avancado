//criar uma nova lista com a mesma quantidade de números, mas cada elemento da nova lista deve ter seu valor dobrado quando for ímpar.

//Ans 1
let numeros = [3, 2, 11, 20, 8, 7];

let numeros2 = numeros.map((item) => {
  if (item % 2) {
    return item + item;
  } else {
    return item;
  }
});

console.log(numeros);
console.log(numeros2);

//Ans2
let numeros3 = [3, 2, 11, 20, 8, 7];

let novosNumeros = numeros3.map((item) => ((item % 2) + 1) * item);
console.log(novosNumeros);
