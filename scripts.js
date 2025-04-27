const form = document.getElementById("calculadora")

form.addEventListener("submit", function (event) {
    event.preventDefault();


    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);

    if (!peso || !altura) {
        alert("Preencha os campos corretamente!");
        return;
    }

    const imc = peso / (altura * altura);
    const resultado = document.getElementById("resultadoImc");
    const classificacaoImc = document.getElementById("classificacaoImc");
    document.getElementById("resultadoImc").textContent = `Seu IMC é: ${imc.toFixed(2)}`;

    let classificacao = "";

    if (imc < 18.5) {
        classificacao = "Abaixo do Peso";
    }
    else if (imc < 24.9) {
        classificacao = "Peso Normal";
    }
    else if (imc < 29.9) {
        classificacao = "Sobrepeso";
    }
    else if (imc < 34.9) {
        classificacao = "Obesidade Grau I";
    }
    else if (imc < 39.9) {
        classificacao = "Obesidade Grau II";
    }
    else {
        classificacao = "Obesidade Grau III";
    }

    document.getElementById("classificacaoImc").textContent = `Classificação: ${classificacao}`;

});