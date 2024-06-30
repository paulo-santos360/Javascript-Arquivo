// Keypress - when key is pressed
// Keydown - when key is down
// Keyup - when key is released

const nameInput = document.getElementById('name');
/* 
nameInput.addEventListener('keypress', function(){
    console.log('you pressed a key');
})  */

/* nameInput.addEventListener('keydown', function() {
    console.log('you pressed a key');
}); */
 
nameInput.addEventListener('Keyup', function(){
    console.log(nameInput.value);
     console.dir(nameInput); 
}) 
 