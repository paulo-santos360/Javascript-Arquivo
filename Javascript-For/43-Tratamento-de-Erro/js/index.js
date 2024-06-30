
var video = Array()

video[1] = Array()
video[1]['nome'] = 'Fullmental Alchemist'
video[1]['categoria'] = 'Anime'

function getVideo(video){
    //lógica
    //http

    try{
        //lógica
        //http
        console.log(video[0]['nome'])
    }catch(e){
        tratarErro(erro)
        console.log('Agora sim podemos tratar esse erro')
        throw new Error('Houve um erro mas não se preocupe, estamos trabalhando nisso agora!!!')

    }
     finally{
        console.log('Sempre passa por aqui (try / catch)')
    }
    console.log('A aplicação não morreu')
}

function tratarErro(e){
    //logica para registrar o erro no servidor
    console.log()
}

getVideo(video)