/*
Primitivos(imutáveis) - string, number, boolean, undefined,
null (bigint,symbol) - valor 

Referência(mutável) - array, object, funcion - Passados por referência
 */

const a = {
    nome: 'Pedro',
    sobrenome: 'Lucena'
};

const b = {...a};

a.nome = 'João';
console.log(b);




/*let a = [1,2,3];
let b = [...a];
let c = b;

console.log(a, b);

a.push(4);
console.log(a, b);

b.pop();
console.log(b, c);*/


/*let a = 'A';
let b = a; // Cópia 
console.log(a,b);

a = 'Outra coisa';
console.log(a,b);*/
