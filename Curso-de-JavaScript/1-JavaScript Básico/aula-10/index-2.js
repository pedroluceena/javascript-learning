/*
- Operadores Aritméticos 
1 - + = Adição / Concatenação 
2 - - / *
3- ** Potenciação
4- % resto da divisão 
*/

const num1 = 5;
const num2 = 10;
console.log((num1 + num2) * num1);

/*
Ordem de Precedência 
()
**
* / %
+ - 
*/
let contator = 1;
contator++;
contator++; 
contator++;
contator++; 
contator++; 
console.log(contator);

/*
Incremento = ++
Decremento = --
*/

let contador = 1; 
contador++;
console.log(contador);

const passo = 2;
let contador = 0; 

contador = contador + passo;
console.log(contador);
contador = contador + passo;
console.log(contador);
contador = contador + passo;
console.log(contador);

//Multiplicação 
const contator = 2;
contador *= 10; 
console.log(contador);

//Potência 
const contator = 2;
contador **= 10; 
console.log(contador);

//NaN - Not a number parseInt (inteiro), parseFloat(decimais)
const num1 = 10;
const num2 = Number('Luiz');
console.log(num1+num2);
console.log(typeof num2);