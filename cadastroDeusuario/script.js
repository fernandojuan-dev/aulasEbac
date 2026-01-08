// Seleciona a ul com a lista de clientes no HTML
const clientes = document.getElementById("clientesCadastrados");

// URL base do CrudCrud
const API_URL = "https://crudcrud.com/api/cfa28e4c7d4d437e9a48dd7d3cfd002e/clientes";

// Função para criar item da lista
function criarItemCliente(cliente) {
    const usuario = document.createElement("li");

    const botaoRemover = document.createElement("button");
    botaoRemover.textContent = "X";

    // Evento de remover cliente
    botaoRemover.addEventListener("click", () => {
        fetch(`${API_URL}/${cliente._id}`, {
            method: "DELETE"
        })
        .then(() => {
            clientes.removeChild(usuario);
        })
        .catch(erro => console.error("Erro ao remover cliente:", erro));
    });

    usuario.textContent = `${cliente.nomeCliente} | ${cliente.emailCliente} `;
    usuario.appendChild(botaoRemover);

    clientes.appendChild(usuario);
}

// Buscar clientes cadastrados (GET)
fetch(API_URL)
    .then(resposta => resposta.json())
    .then(clientesCadastrados => {
        clientesCadastrados.forEach(cliente => {
            criarItemCliente(cliente);
        });
    })
    .catch(erro => console.error("Erro ao buscar clientes:", erro));

// Evento de cadastrar cliente
document.getElementById("cadastrar").addEventListener("click", () => {
    const nomeCliente = document.getElementById("nomeCliente").value;
    const emailCliente = document.getElementById("emailCliente").value;

    fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nomeCliente: nomeCliente,
            emailCliente: emailCliente
        })
    })
    .then(resposta => resposta.json())
    .then(cliente => {
        criarItemCliente(cliente);

        document.getElementById("nomeCliente").value = "";
        document.getElementById("emailCliente").value = "";
    })
    .catch(erro => console.error("Erro ao cadastrar cliente:", erro));
});
