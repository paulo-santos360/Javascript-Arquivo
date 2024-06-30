// Local Scope
// can not be access from outside code block
// if - Not Var

let name = 'bobo';
//name = 'peter';

function calculte(){
    
    const name = 'john';
    const age = 25;
    // code goes here
    becomesGlobal = 'global variable';
}
calculte();
console.log(becomesGlobal)

if (true) {
    const name = 'john';
}

console.log(`my name is ${name} and I'm awesome`)