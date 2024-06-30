/* the DOMContentLoaded event fires when the initial HTML document has
been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.

window.addEventListener('DOMContentLoaded', function () {
    // your code goes here
});
 document.addEventListener....

 */
/* 
 window.addEventListener('DOMContentLoaded', function () {
    const heading = document.querySelector('h1');
    console.log(heading);
    //heading.style.color = 'red';
  
    setTimeout(function () {
      heading.style.color = 'red'; // Retorna à cor original ou outra cor desejada
    }, 1000);
  }); */

 window.addEventListener('DOMContentLoaded', function () {
    const heading = document.querySelector('h1');
    console.log(heading);
    heading.style.color = 'red'; 
}) 


