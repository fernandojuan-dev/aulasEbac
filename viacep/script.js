// Recupera endereço salvo ao carregar a página
window.addEventListener('load', () => {
    const enderecoSalvo = localStorage.getItem('endereco');

    if (enderecoSalvo) {
        const endereco = JSON.parse(enderecoSalvo);

        document.getElementById('cep').value = endereco.cep;
        document.getElementById('logradouro').value = endereco.logradouro;
        document.getElementById('bairro').value = endereco.bairro;
        document.getElementById('cidade').value = endereco.cidade;
        document.getElementById('estado').value = endereco.estado;
        document.getElementById('numero').value = endereco.numero;
    }
});

// Busca CEP ao sair do campo
document.getElementById('cep').addEventListener('blur', (evento) => {
    const cepInformado = evento.target.value.replace(/\D/g, '');

    if (cepInformado.length !== 8) return;

    fetch(`https://viacep.com.br/ws/${cepInformado}/json/`)
        .then(resposta => resposta.json())
        .then(data => {
            if (!data.erro) {

                const endereco = {
                    cep: cepInformado,
                    logradouro: data.logradouro,
                    bairro: data.bairro,
                    cidade: data.localidade,
                    estado: data.uf
                };

                // Preenche os campos
                document.getElementById('logradouro').value = endereco.logradouro;
                document.getElementById('bairro').value = endereco.bairro;
                document.getElementById('cidade').value = endereco.cidade;
                document.getElementById('estado').value = endereco.estado;

                // Salva no localStorage
                localStorage.setItem('endereco', JSON.stringify(endereco));
            } else {
                alert('CEP não encontrado');
            }
        })
        .catch(erro => console.error('Erro ao buscar o CEP:', erro));
});