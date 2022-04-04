// String, number, undefined , null, boolean

const nome = 'Luiz'; //String 
const nome1 = "Luiz"; //String 
const nome2 = `Luiz`; //String 
const num1 = 10; // number
const num2 = 10.52;// number
let nomeAluno; //undefined -> não aponta pra local nenhum na memória 
const sobrenomeAluno = null; // Nulo -> não aponta pra local nenhuma na memória 
const boolean = true; // ou False 

//typeof para ver o tipo da váriavel e o valor 
console.log(typeof nome, nome)

let a = 2;
const b = a;
console.log(a,b); // 2,2

a = 3;
console.log(a,b);// 3,2 