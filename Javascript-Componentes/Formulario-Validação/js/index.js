const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const jobSelect = document.querySelector("#job");
const messageTextarea = document.querySelector("#message");

//console.log(form, nameInput, emailInput, passwordInput);
form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Verificar se o nome está vazio
    if(nameInput.value === "") {
        alert("Por favor, preencha o seu nome");
        return;
    }

    // Verificar se o  e-mail está preenchido e se é válido
    if(emailInput.value === "" || !isEmailValid(emailInput.value)) {
        alert("Por favor, preencha o seu e-mail");
        return;
    }

    if(!validaPassword(passwordInput.value, 8)){
        alert("A senha precisa ser de no minimo 8 digitos.");
        return;
    }

    // Verificar se a situação foi selecionada
    if(jobSelect.value === ""){
        alert("Por favor, selecione a sua situação");
        return
    }

    // Verificar se a mensagem está preenchida
    if(messageTextarea.value === ""){
        alert("Por favor, escreva uma mensagem");
        return
    }

    // Se todos os campos estiverem corretamente preenchidos, envie o form
    form.submit();
    
});

// função que vida e-mail
function isEmailValid(email){

    // cria uma regex para validar email
    const emailRegex = new RegExp(
        // usuario12@host.com.br
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );

    if(emailRegex.test(email)) {
        return true;
    }

    return false;

}

//Função que valida a senha
function validaPassword(password, minDigits){
    if(password.length >= minDigits){
        // Senha válida
        return true
    }
        // Senha Invalida
    return false
}