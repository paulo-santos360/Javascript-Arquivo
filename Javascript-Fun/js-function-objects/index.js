// Array, Functions and Objects
// Objects - Key/Value pairs methods
// dot notation

const person = {
   name: 'john',
   lastName: 'peters',
   age: 32,
   education: true,
   siblings: ['anna', 'susan', 'peter'],

   greeting: function () {
    console.log('Hello my name is JOHN');
   },
};

//user object
const age = person.age;
console.log(age);
person.name = 'bob';
console.log(person.name);
console.log(person.siblings[0]);

person.greeting()

