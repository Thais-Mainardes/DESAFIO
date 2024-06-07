document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("form").addEventListener("submit", function(event) {
        event.preventDefault(); // Previne o envio padrão do formulário

        // Aqui você pode adicionar validação se necessário
        const username = document.querySelector("#username").value;
        const password = document.querySelector("#password").value;

        // Simulação de validação simples
        if (username === "Professor" && password === "1234") {
            window.location.href = "../professor/index.html"; // Redireciona para a nova página
        } else {
            alert("Usuário ou senha inválidos!");
        }
    });
});