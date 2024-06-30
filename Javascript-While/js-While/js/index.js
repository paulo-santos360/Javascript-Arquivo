var x = 1;

document.write('inicio <br/>')

//quando a condição for false vai sai do loop
while (x <= 10) {// x<= 10 && x > 5

    x++
    if(x === 5){
      continue //lupe infinito x++ de que ser antes continue
    }

/*   if(x === 5){
    break
  }//Interrope o laço */
 
  // x += 3 //de 3 e 3

document.write(x + "<br />");

}

document.write('Fim <br />');

