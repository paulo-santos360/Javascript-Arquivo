// Arrow Functions

// A arrow function é um recurso para criar funções de forma mais simples;
// Mas ela não funciona exatamente como uma function em todos os aspectos
// O this da arrow function é relacionado ao elemento pi de quem está a executando

// 2 arrow function
const sum = function sum(a, b){// function normal
    return a + b
}

/* const arrowSum = (a, b) => {
    return a + b
} */

const arrowSum = (a, b) =>  a + b


console.log(sum(5, 5))
console.log(arrowSum(5, 5))

const greeting = (name) => {// arrow how argument
    if (name) {
        return 'Olá ' + name + '!'
    } else {
        return 'Olá!'
    }
}

console.log(greeting('ze'))
console.log(greeting())

const testeArrow = () => console.log('testou!')//not argument
testeArrow()

const user = {
    name: 'Theo',
    sayUserName() {
        var self = this
        setTimeout(function () {
            console.log(self)
            console.log('Username: ' + self.name)
        }, 500)
    },
    sayUserNameArrow(){
        setTimeout(() => {
            console.log(this)
            console.log('Username: ' + this.name)
        }, 700)
    }
}

user.sayUserName()
user.sayUserNameArrow()