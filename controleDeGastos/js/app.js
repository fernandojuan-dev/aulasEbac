import { Categoria, ListaGastosPorCategoria } from "./classes.js";
import { valorNegativo, atualizarInterface } from "./uteis.js";

const gastoPorCategoria = new ListaGastosPorCategoria(
    new Categoria("Alimentação"),
    new Categoria("Transporte"),
    new Categoria("Lazer"),
    new Categoria("Outros")
);

const formulario = document.querySelector("form");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const valorInformado = parseFloat(formulario.elements.valor.value);
    const categoriaInformada = formulario.elements.categoria.value;

    if (valorNegativo(valorInformado)) {
        alert("Valor inválido.");
        return;
    }

    const categoria = gastoPorCategoria.obterCategoriaPorNome(categoriaInformada);

    if (!categoria) {
        alert("Categoria não encontrada.");
        return;
    }

    categoria.adicionarValor(valorInformado);

    atualizarInterface(gastoPorCategoria);
    formulario.reset();
});