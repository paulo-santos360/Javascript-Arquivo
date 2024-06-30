/* setTimeout(function() {
    document.write('test')
}, 2000) */

/* var i = 5

setInterval(function(){
    document.write(i) 
    i = i - 1

    if(i === 0){
       // window.location.reload()
    }
}, 1000
) */

var i = 5

 var x = setInterval(function(){
    document.write(i) 
    i = i - 1

    if(i === 0){
        clearInterval(x)
    }
}, 1000
) 


