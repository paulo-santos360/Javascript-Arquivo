/*

## String #8

1. create function FullName
2. accept two parameters "firstName", "lastName"
3. add the together (concat) and return result in uppercase
4. invoke fullName and pass some values
5. log result
6. change the order of arguments
7. refactor to object parameter

*/

/* function fullName(firstName, lastName){
    const fullName = `${firstName} e ${lastName}`
    return fullName.toLocaleUpperCase();
} 

console.log(fullName('Zé', 'Santos'));

*/

function fullName({firstName, lastName}){
    const fullName = `${firstName} e ${lastName}`
    return fullName.toLocaleUpperCase();
}

console.log(fullName({ lastName: 'Paulo', firstName: 'Santos'}));
