const obterElemento = (id) => document.getElementById(id);
const formatarMoeda = (valor) => valor.toFixed(2).replace('.', ',');

export const valorNegativo = (valor) => valor <= 0 || isNaN(valor);

export const atualizarInterface = (gastosPorCategoria) => {
    const categorias = gastosPorCategoria.categorias;

    categorias.forEach(({ nome, valor }) => {
        const elemento = obterElemento(nome);
        elemento.textContent = `${nome}: R$ ${formatarMoeda(valor)}`;
    });

    const elementoTotal = obterElemento("Total");
    elementoTotal.textContent = `Total: R$ ${formatarMoeda(gastosPorCategoria.obterTotal())}`;
};
