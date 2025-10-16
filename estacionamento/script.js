class Parquimetro {
    constructor() {
        this.valorInserido = 0;
    }

    depositarValor() {
        const depositado = parseFloat(document.getElementById("deposito").value);
        const saida = document.getElementById("tempoDisponivel");

        if (isNaN(depositado) || depositado < 1) {
            saida.textContent = "⚠️ Valor insuficiente. Insira no mínimo R$ 1,00.";
            return;
        }

        let tempo = 0;
        let troco = 0;

        if (depositado >= 1 && depositado < 1.75) {
            tempo = 30;
            troco = depositado - 1;
        } else if (depositado >= 1.75 && depositado < 3) {
            tempo = 60;
            troco = depositado - 1.75;
        } else if (depositado >= 3) {
            tempo = 120;
            troco = depositado - 3;
        }

        saida.textContent = `🕒 Tempo disponível: ${tempo} minutos | 💰 Troco: R$ ${troco.toFixed(2)}`;
    }
}

const parquimetro1 = new Parquimetro();