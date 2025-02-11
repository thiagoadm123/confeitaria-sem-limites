// Função para simular um pedido de produto
function fazerPedido(produto) {
    alert(`Você pediu: ${produto}. Em breve entraremos em contato!`);
}

// Função para enviar o formulário de contato
function enviarFormulario(event) {
    event.preventDefault(); // Evita que a página recarregue
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let mensagem = document.getElementById("mensagem").value;

    if (nome && email && mensagem) {
        alert("Pedido enviado com sucesso! Responderemos em breve.");
        document.querySelector("form").reset(); // Limpa o formulário
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}
