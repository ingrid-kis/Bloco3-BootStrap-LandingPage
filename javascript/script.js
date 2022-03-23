//Variáveis Principais

let email = document.querySelector("#email");
let apresentacao = document.querySelector("#apresentacao");
let emailOk = false;
let apresentacaoOk = false;

//Funções

function validaEmail() {
    let txtEmail = document.querySelector("#txtEmail");

    if (email.value.indexOf("@") == -1 || email.value.indexOf(".")){
        txtEmail.innerHTML = "E-mail Inválido";
        txtEmail.style.color= "red";
    } else {
        txtEmail.innerHTML = "E-mail Válido";
        txtEmail.style.color = "green";
        emailOk = true;
    }
}

function validaApresentacao() {
    let txtAssunto = document.querySelector("#txtApresentacao");

    if (assunto.value.length >=140) {
        txtAssunto.innerHTML = "Texto grande, digite até 140 caracteres";
        txtAssunto.style.color = "red";
        txtAssunto.style.display = "block";
    } else {
        txtAssunto.style.display = "none";
        assuntoOk = true;
    }
}

function enviar() {
    if (emailOk == true && aapresentacaoOk == true) {
        alert ("Formulário enviado com Sucesso");
    } else {
        alert ("Preencha todos os campos antes de enviar");
    }
}