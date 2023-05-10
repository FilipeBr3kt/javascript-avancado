//Para evitar de chamarmos a função duas vezes, uma vez para cada lista, podemos juntar uma lista na outra. Implemente o código que cria uma nova lista que é a junção dos elementos de listaDeNomes1 e listaDeNomes2.

function exibeNoConsole(lista) {
  lista.forEach((item) => console.log(item));
}

let lista1 = ["Flávio", "Rogers", "Júlia"];
let lista2 = ["Vieira", "Fernanda", "Gerson"];
let lista = lista1.concat(lista2);

// lista1.forEach((item) => lista.push(item));
// lista2.forEach((item) => lista.push(item));

exibeNoConsole(lista);
