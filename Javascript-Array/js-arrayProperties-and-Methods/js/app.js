// Array Properties and Methods
let names = [ 'john', 'bob', 'barry', 'olga', 'ben'];

document.getElementById('methods').textContent = names;//.reverse()

//length
console.log(names.length)
console.log(names[names.length -1]);

// concat
//const lastNames = ['pepper', 'onion', 'banana'];
//const allNames = names.concat(lastNames);
//console.log(allNames)

// reverse
//console.log(allNames.reverse());

// unshift
//allNames.unshift('susy');//a function in JavaScript that allows you to add new elements to the beginning of an array, pushing all existing elements to the front
//allNames.unshift('anna');
//console.log(allNames)

// shift
allNames.shift();// remove the element zero in array
allNames.shift();
console.log(allNames)

// push
//allNames.push('susy');// JavaScript that allows you to add an element or multiple elements to the end of an existing array
//console.log(allNames);

// pop
//allNames.pop();//removes the last element of an array and returns that value.
//console.log(allNames);

// splice - mutates original array
const specificNames = allNames.slice(2,1);///
console.log(specificNames)