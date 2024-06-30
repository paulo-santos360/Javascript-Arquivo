// Blue Print
// Factory Functions and Constructor Functions
// Constructor Functions
// new - creates new object, points to to it, omit return

function Person(firstName, lastName ){
    this.firstName = firstName
    this.lastName = lastName
    this.fullName = function () {
        console.log(`My fulll name is ${this.firstName} ${this.lastName} and I love React`);  
    };
    console.log(this)
}

const john = new Person('john', 'anderson');
john.fullName();

function createPerson (firstName, lastName ){
    return{
        firstName : firstName,
        lastName : lastName ,
        fullName:function(){
/*         console.log(`My fulll name is ${this.firstName} ${this.lastName} and I love JS`);
 */     
    }
}
}