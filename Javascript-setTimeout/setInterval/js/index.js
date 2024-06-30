/* 
setInterval - runs function repeatedly, at specific intervals

- pass function reference
- duration in ms (1000 ms = 1 second)
- default 0, will cover more extensively in async/await section
- returns unique identifier
- clearTimeout to cancel
*/

//function showScore() {
//    console.log('hello')
//}

//setInterval(showScore, 1000)

function showScore(name, score) {
    console.log(`hello ${name}, you score is ${score}`)
}

//setInterval(showScore, 1000, 'bobo', 34);

const firstID = setInterval(showScore, 1000, 'bobo', 34);
//const secondID = setInterval(showScore, 1000, 'susan', 94);

clearInterval(firstID)