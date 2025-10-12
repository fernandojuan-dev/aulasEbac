//definindo variaveis
let numeroSorteado = Math.floor(Math.random() * 100) + 1;
let tentativas = 10;

// funcao para comprar o numero
function chutarPalpite() {

    // capturando o valor do usuario
    let palpite = document.getElementById("palpite").value;

    // validando numero
    if (palpite < 1 || palpite > 100) {
        alert("Por favor, insira um número entre 1 e 100.");
    }

    // conferindo palpite eo resultado
    if (palpite < numeroSorteado) {
        document.getElementById("resultado").textContent = "Resultado: O número secreto é maior";
        tentativas--;
        document.getElementById("tentativas").textContent = "Tentativas restantes: " + tentativas;
    } else if (palpite > numeroSorteado) {
        document.getElementById("resultado").textContent = "Resultado: O número secreto é menor";
        tentativas--;
        document.getElementById("tentativas").textContent = "Tentativas restantes: " + tentativas;
    } else {
        document.getElementById("resultado").textContent = "Resultado: Parabéns! Você acertou!";
    }

    if (tentativas == 0) {
        alert("Você perdeu! O número secreto era " + numeroSorteado);
    }

}

