// select element
// addEventListener
// what event, what to do

const btn = document.querySelector('.btn');
const heading = document.querySelector('h2')

btn.addEventListener('click', function() {
    //console.log('hey you clicked me');
    heading.classList.add('red');
})

//btn.addEventListener('click', function() {
  // if (heading.classList.contains('red')) {
    // Remove a classe 'red' do elemento h2
   /// heading.classList.remove('red');
  //} else {
    // Adiciona a classe 'red' ao elemento h2
    //heading.classList.add('red');
//}
//})