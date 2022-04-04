//  As string são indicie 0123456
let umaString = "Um \"texto\"";// A barra \ Invertida usado para escape 

console.log(umaString);

console.log(umaString.concat('em' , 'um', 'linda dia.'));
console.log(umaString + 'em um lindo dia.');
console.log(`${umaString} em um lindo dia.`);

let outraString = "O rato roeu a roupa do rei de roma.";

console.log(outraString.split('r'));