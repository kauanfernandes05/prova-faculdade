$(document).ready(function () {
    $(".btn").click(function (evento){
        evento.preventDefault();
        verificar();


    });
});

function verificar() {
    let anoN = parseInt($("#input-ano").val()); // Obtém o ano digitado e converte para número
    let radioM = $("#radio-m").prop("checked"); // Verifica se o masculino está marcado
    let radioF = $("#radio-f").prop("checked"); // Verifica se o feminino está marcado
    let container = $(".container-result"); // Seleciona o container para resultados

    // Valida o ano de nascimento
    if (isNaN(anoN) || anoN <= 1900 || anoN > 2024) {
        container.html("<p style='color: red;'>Por favor, insira um ano válido!</p>");
        return;
    }

    // Verifica se o ano inserido é maior que o ano atual
    let anoAtual = new Date().getFullYear();
    if (anoN > anoAtual) {
        container.html("<p style='color: red;'>Por favor, insira um ano de nascimento válido (não pode ser no futuro)!</p>");
        return;
    }

    let idade = anoAtual - anoN; // Calcula a idade
    let imagemSrc = ""; // Caminho da imagem

    // Verifica se nenhum gênero foi selecionado
    if (!radioM && !radioF) {
        container.html("<p style='color: red;'>Por favor, selecione o gênero!</p>");
        return;
    }

    // Lógica para masculino
    if (radioM) {
        if (idade >= 64) {
            imagemSrc = "img/idoso-homem.jpg";
        } else if (idade >= 18) {
            imagemSrc = "img/adulto-homem.jpg";
        } else {
            imagemSrc = "img/crianca-menino.jpg";
        }
    }

    // Lógica para feminino
    if (radioF) {
        if (idade >= 64) {
            imagemSrc = "img/idosa-mulher.jpg";
        } else if (idade >= 18) {
            imagemSrc = "img/adulto-mulher.jpg";
        } else {
            imagemSrc = "img/crianca-menina.jpg";
        }
    }

    // Atualiza o conteúdo do container com a imagem
    if (imagemSrc) {
        container.html(`<div class="container-img"><img src="${imagemSrc}" alt="Resultado da verificação" style="width: 200px; height: auto;"></div>`);
    }
}


