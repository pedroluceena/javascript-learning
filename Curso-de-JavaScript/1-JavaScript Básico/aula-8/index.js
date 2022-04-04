const nameFirst = 'Luiz Otávio';
const nameSecond = 'Miranda';
const Idade = 30;
const kg = 84;
const alturaemM = 1.80;
let IMC = kg / (alturaemM * alturaemM);
let anoNascimento = 2019 - Idade;

console.log(`${nameFirst} ${nameSecond} tem ${Idade} anos, pesa ${kg} kg`);
console.log(`tem ${alturaemM} de altura e seu IMC é de ${IMC} `);
console.log(`${nameFirst} nasceu em ${anoNascimento}`);