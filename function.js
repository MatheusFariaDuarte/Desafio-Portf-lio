function validarFormulario() {
    // Capturar os valores dos campos
    var nome = document.getElementById("input__nome").value;
    var email = document.getElementById("input__email").value;
    var assunto = document.getElementById("input__assunto").value;
    var mensagem = document.getElementById("input__mensagem").value;


    // Campo Nome   

    if (nome === "") {
        alert("Por favor, preencha o campo Nome.");
        return false;
    }

    // Campo E-mail
    var vld = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        alert("Por favor, preencha o campo E-mail.");
        return false;
    }
    if (!vld.test(email)) {
        alert("Por favor, digite um endereço de e-mail válido.");
        return false;
    }

    // Campo Assunto
    if (assunto === "") {
        alert("Por favor, preencha o campo Assunto.");
        return false;
    }

    // Campo Mensagem
    if (mensagem === "") {
        alert("Por favor, preencha o campo Mensagem.");
        return false;
    }

    // Se todos os testes forem aprovados, o formulário pode ser enviado
    alert("Sua mensagem foi enviada!")
}