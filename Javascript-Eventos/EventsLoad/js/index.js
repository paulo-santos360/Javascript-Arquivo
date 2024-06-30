/*

the load event is fired when the whole page has loaded, including all
dependent resources auch as stylesheets and images. this is in contrast to 
DOMContentLoaded, whin is fired as soon as the page Dom has been loaded, without 
waiting for resources to finish loading.

window.addEventListener('load', function () {
    // your code goes here
})

*/


window.addEventListener('load', function(){
    console.log('I will run second')
    const img = document.querySelector('img');
    console.log(img);
    console.log(img.width);
   // console.log(img.height);

})

window.addEventListener('DOMContentLoaded', function(){

    console.log('DOMContentLoaded I will run first')

    const img = document.querySelector('img');
    console.log(img);
    console.log(img.width);
    //console.log(img.height);

})