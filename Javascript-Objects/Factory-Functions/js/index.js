// Blue Print
// Factory Functions and Constructor Functions 
// Factory Functions

/* const john = {
    firstName : 'john',
    lastName : 'anderson',
    fullName:function(){
        console.log(this)
        console.log(`My fulll name is ${this.firstName} ${this.lastName} and I love JS`);
    },
};

const bob = {
    firstName : 'bob',
    lastName : 'sanders',
    fullName:function(){
        console.log(`My full name is ${this.firstName} ${this.lastName}`);
    },
}; */

function createPerson (firstName, lastName ){
    return{
        firstName : firstName,
        lastName : lastName ,
        fullName:function(){
/*         console.log(`My fulll name is ${this.firstName} ${this.lastName} and I love JS`);
 */     console.log(`My fulll name is ${this.firstName} ${this.lastName} and I love JS`);  
},
    }
}

const john = createPerson('john', 'anderson');
john.fullName();

const bob = createPerson('bob', 'anderson');
bob.fullName();

const susy = createPerson('susy', 'anderson');
susy.fullName();