// Escreva um código que altere dataString para que seu conteúdo fique compatível com o formato ano/mes/dia. No final, instancie uma Date, exibindo no console seu valor.

//Ans 1
let dataString = "17-05-2016";

dataString = dataString.split("-").reverse().join("/");

let data = new Date(dataString);
console.log(data);

//Ans 2
let dataString2 = "17-05-2016";

let data2 = new Date(dataString2.split("-").reverse().join("/"));
console.log(data2);
