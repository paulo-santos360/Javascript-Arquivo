class Pessoa {
    // Metodo 
    constructor(nome, sobrenome){
    // Parametros 
   this.nome = nome;
   this.sobrenome = sobrenome;
    }
    // Metodo
    falar(){
        console.log(`${this.nome} está falando`)
    }
    comer(){
        console.log(`${this.nome} está comendo`)
    }
    beber(){
        console.log(`${this.nome} está bebendo`)
    }
} 

// Estaciar criar uma pessoa ou alguma coisa atraves ta class
const p1 = new Pessoa('Naruto', 'UZUMAKI')
const p2 = new Pessoa('Gay', 'UZUMAKI')
const p3 = new Pessoa('Renata', 'UZUMAKI')
const p4 = new Pessoa('YAMATO', 'UZUMAKI')

console.log(p1, p2, p3, p4)

p1.falar()
p2.falar()
p3.falar()
p4.falar() 

p1.comer()
p2.comer()
p3.comer()
p4.comer() 

p1.beber() 
p2.beber()
p3.beber()
p4.beber() 

// Function Prototype
// function Pessoa2(nome, sobrenome) {
//    this.nome = nome;
//    this.sobrenome = sobrenome;
//}

// Pessoa2.prototype.falar = function(){
 //   console.log(`${this.nome} está falando.` );
// };

//const p1 = new Pessoa2('Naruto', 'Uzumaki')
//const p2 = new Pessoa2('Rinata', 'Uzumaki')