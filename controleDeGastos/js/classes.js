export class Categoria {
    #nome;
    #valor;

    constructor(nome) {
        this.#nome = nome;
        this.#valor = 0;
    }

    get valor() {
        return this.#valor;
    }

    get nome() {
        return this.#nome;
    }

    adicionarValor(valor) {
        this.#valor += parseFloat(valor);
    }
}

export class ListaGastosPorCategoria {
    #categorias;

    constructor(...categorias) {
        this.#categorias = categorias;
    }

    get categorias() {
        return this.#categorias;
    }

    obterCategoriaPorNome(nome) {
        return this.#categorias.find(categoria => categoria.nome === nome);
    }

    obterTotal() {
        return this.#categorias.reduce(
            (total, categoria) => total + categoria.valor,
            0
        );
    }
}