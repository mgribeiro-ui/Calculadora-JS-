// Passo 3: Selecione o formulário com document.getElementById()
const formulario = document.getElementById("meuFormulario");
const paragrafoErro = document.getElementById("erro");

// Passo 4: Adicione um addEventListener("submit", ...) no formulário
formulario.addEventListener("submit", function(event) {
    
    // Capturando os valores dos campos
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value;
    const idade = parseInt(document.getElementById("idade").value);
    
    // Variável para armazenar as mensagens de erro
    let mensagemErro = "";

    // Passo 5: Dentro do evento, valide os campos
    if (nome === "") {
        mensagemErro += "O nome não pode estar vazio. ";
    }
    
    if (!email.includes("@")) {
        mensagemErro += "O email deve conter '@'. ";
    }
    
    if (isNaN(idade) || idade <= 0) {
        mensagemErro += "A idade deve ser maior que 0. ";
    }

    // Se houver alguma mensagem de erro acumulada...
    if (mensagemErro !== "") {
        // Passo 6: Use event.preventDefault() para impedir o envio
        event.preventDefault();
        
        // Passo 7: Exiba mensagens de erro no <p id="erro"> usando textContent
        paragrafoErro.textContent = mensagemErro;
    } else {
        // Limpa a mensagem caso tudo esteja correto
        paragrafoErro.textContent = "";
        alert("Formulário enviado com sucesso!");
    }
});
