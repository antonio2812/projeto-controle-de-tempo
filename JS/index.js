function ativarContagem() {
    tempo = setInterval(function () {
        let tempo = document.getElementById("tempo").innerHTML;

        let soma = parseInt(tempo) + 1;

        document.getElementById("tempo").innerHTML = soma;
    }, 1000);
};

function pararContagem () {
    clearInterval(tempo);
}