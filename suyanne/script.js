

const botaoComecar = document.getElementById("botao-comecar");

if (botaoComecar) {
    botaoComecar.addEventListener("click", () => {
        const mensagem = document.getElementById("mensagem");

        mensagem.textContent =
            "Tá rindo né";

        botaoComecar.textContent = "CONTINUAR MESMO ASSIM ";

        botaoComecar.onclick = () => {
            window.location.href = "gracinhas.html";
        };
    });
}


// BRINCADEIRAS DA SEGUNDA PÁGINA

const botaoElogio = document.getElementById("botao-elogio");
const botaoInutil = document.getElementById("botao-inutil");
const resultado = document.getElementById("resultado-brincadeira");
const botaoProxima = document.getElementById("botao-proxima");

const elogios = [
    "Análise concluída: bonita demais para ser verdade. Suspeito. ",
    "Resultado: 10/10. O avaliador tentou ser imparcial, mas não conseguiu. ",
    "Detectamos um excesso de beleza. Recomendamos investigação adicional.",
    "Você tem o dom de ficar bonita até quando provavelmente nem está tentando. Isso é injusto.",
    "Elogio desbloqueado: além de bonita, tem um jeito que me ganha facil viu."
];

const inutilidades = [
    "Os polvos têm três corações. E nenhum deles precisou criar um site para chamar alguém para comer sushi. ",
    "Parabéns! Você perdeu 5 segundos lendo isso. Não há reembolso. ",
    "Informação importante: você abriu um site feito por alguém que poderia estar fazendo qualquer outra coisa.",
    "Este botão não melhora sua vida. Mas pelo menos você descobriu isso clicando nele.",
    "Você sabia que agora está oficialmente envolvida numa investigação sem orçamento? "
];

function sortearMensagem(lista) {
    const indice = Math.floor(Math.random() * lista.length);
    return lista[indice];
}

if (botaoElogio && resultado) {
    botaoElogio.addEventListener("click", () => {
        resultado.textContent = sortearMensagem(elogios);
    });
}

if (botaoInutil && resultado) {
    botaoInutil.addEventListener("click", () => {
        resultado.textContent = sortearMensagem(inutilidades);
    });
}

if (botaoProxima) {
    botaoProxima.addEventListener("click", () => {
        window.location.href = "sobre-ela.html";
    });
}

const botaoSushi = document.getElementById("botao-sushi");

if (botaoSushi) {
    botaoSushi.addEventListener("click", () => {
        window.location.href = "sushi.html";
    });
}


const botaoSimSushi = document.getElementById("botao-sim-sushi");
const botaoNaoSushi = document.getElementById("botao-nao-sushi");
const mensagemSushi = document.getElementById("mensagem-sushi");

const confirmacaoSushi = document.getElementById("confirmacao-sushi");
const finalSushi = document.getElementById("final-sushi");

const confirmarSim = document.getElementById("confirmar-sim");
const confirmarNao = document.getElementById("confirmar-nao");

if (
    botaoSimSushi &&
    botaoNaoSushi &&
    mensagemSushi &&
    confirmacaoSushi &&
    finalSushi
) {
    let tentativas = 0;
    let escapando = false;

    function fugirDoClique() {
        if (confirmacaoSushi.hidden === false || tentativas >= 5) {
            return;
        }

        tentativas++;

        mensagemSushi.textContent =
            tentativas >= 5
                ? "Tá bom, agora você pode me pegar. KKKKK 😂"
                : "KKKKKK pegou quase! Tenta de novo. 😈";

        const area = document.getElementById("area-botoes-sushi");
        const larguraMaxima = Math.max(
            0,
            area.clientWidth - botaoSimSushi.offsetWidth
        );

        botaoSimSushi.style.position = "absolute";
        botaoSimSushi.style.left =
            Math.random() * larguraMaxima + "px";

        botaoSimSushi.style.top =
            (Math.random() * 35) + "px";

        escapando = true;
    }

    // Computador: foge quando o cursor se aproxima.
    botaoSimSushi.addEventListener("mouseenter", () => {
        if (window.matchMedia("(hover: hover)").matches) {
            fugirDoClique();
        }
    });

    // Celular: foge ao primeiro toque, mas não fica impossível.
    botaoSimSushi.addEventListener("touchstart", () => {
        if (!window.matchMedia("(hover: hover)").matches) {
            fugirDoClique();
        }
    }, { passive: true });

    // Após algumas fugas, o clique funciona.
    botaoSimSushi.addEventListener("click", () => {
        if (tentativas < 5) {
            fugirDoClique();
            return;
        }

        confirmacaoSushi.hidden = false;
        mensagemSushi.textContent = "Finalmente! Mas espera... 🤨";
        confirmacaoSushi.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    });

    botaoNaoSushi.addEventListener("click", () => {
        mensagemSushi.textContent =
            "Resposta suspeita. O sistema recomenda reconsiderar. 🤨🍣";
    });

    confirmarSim.addEventListener("click", () => {
        confirmacaoSushi.hidden = true;
        finalSushi.hidden = false;
        mensagemSushi.textContent = "";

        botaoSimSushi.textContent = "SUSHI CONFIRMADO 🍣";
        botaoSimSushi.disabled = true;
        botaoNaoSushi.hidden = true;

        finalSushi.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    });

    confirmarNao.addEventListener("click", () => {
        confirmacaoSushi.hidden = true;

        mensagemSushi.textContent =
            "KKKKKK tudo bem, você pode pensar com carinho. 💙";

        // Reposiciona o botão para permitir outra tentativa.
        botaoSimSushi.style.position = "relative";
        botaoSimSushi.style.left = "";
        botaoSimSushi.style.top = "";

        tentativas = 0;
        escapando = false;
    });
}

