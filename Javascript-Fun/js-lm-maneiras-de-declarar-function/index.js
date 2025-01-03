// Declaração de função (Function Hoisting) eleva as declaração ao topo do js pelo moto do js, pode executar antes ou depois de criar

// falarOi()

function falarOi(){
    console.log('Oie')
}

falarOi()

// First-Class objects (Objetos de Primeira classe) const recebe uma função como um dado // Função pode ser tratado como um dados
// Function Expression 
const souUMDado = function () { //nomeDaFuncao() se quiser nomear pode mas muito dificil usar
    console.log('Sou um dado')
}

// souUMDado()

// Executar uma função dentro de outra função
function executaFuncao(funcao){
    funcao();
}

executaFuncao(souUMDado)

// Arrow function função nova do js 2015
const funcaoArrow = () => {
    console.log('Sou uma arrow function')
};
funcaoArrow()

// Toda função são dados como dados de primeira class

// Dentro de um objeto
const obj = {
    falar: function() { // pode criar a função dentro do objeto sem a palavra function ex: falar()
        console.log('Estou falando...')
    }
}

obj.falar();