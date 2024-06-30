/* 
setTimeout - runs function once after time

- pass function reference
- duration in ms (1000 ms = 1 second)
- default 0, will cover more extensively in async/await section
- returns unique identifier
- clearTimeout to cancel
- on window object

*/

function sayHello() {
    console.log('hello john')
}

//sayHello()

//setTimeout(sayHello, 1000)

// will not work
//setTimeout(sayHello(), 1000)

// alternative approach, ES6 arrow functions

// setTimeout(function () {
    //console.log('hello john');
//}, 2000)

// pass arguments

function showScore(name, score) {
    console.log(`hello ${name}, you score is ${score}`)
}

//setTimeout(showScore, 1000, 'paulo', 35);
//setTimeout(showScore, 1000, 'zé', 35);

const firstID = setTimeout(showScore, 1000, 'ze', 35);
const secondID = setTimeout(showScore, 1000, 'paulo', 35);

console.log(firstID)
console.log(secondID)

clearTimeout(firstID)

//setTimeout()