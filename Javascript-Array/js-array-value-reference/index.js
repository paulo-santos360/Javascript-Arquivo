// reference vs Value
// Primitive Data Type
// String, Number, Symbol, Boolean, Undefined, Null,
// Array, Function, Objects = Object
// typeof

/* when assigning primitive data type value to a variable any 
changes are made directly to that value, without affecting original value */

/* when assigning non-primitive data type value to a 
variable is done by reference so any changes will affect all the references. */

const number = 1;
//const number2 = number;
number2 = 7;
number2.number = { ...number};
console.log(`the first value is ${number}`);
console.log(`the first value is ${number2}`);

let person = { name: 'bob' };
//let person2 = person;
let person2 = { ...person};
person2.name = 'susy';
console.log(`the name of the first person is ${person.name}`);
console.log(`the name of the first person is ${person2.name}`);