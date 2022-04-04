// Objetos em JS 

//Const array = [1,2,3];
// array.push(4);
// array[0] = 'Luiz';
// array =  'Outra';
// console.log(array)
// criação de um objeto
//const pessoa1 = {
	//nome:'Luiz',
	//sobrenome: 'Miranda',
	//idade: 25,
//};
//  melhor maneira de criar uma um registro de pessoas usando objetos 



// const pessoa1 = criaPessoa(‘Luiz’,’Otávio’,25)
//const pessoa2 = criaPessoa(`Maria`,`Oliveira`,32)


const pessoa1 = {
	nome: 'Pedro',
	sobrenome: 'Miranda',
	idade: 25,

    fala(){
       console.log(`A minha idade atual é ${this.idade}.`)
    },

    incrementaIdade() {
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();



