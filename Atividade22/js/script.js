let numero1 = "";
let numero2 = "";
let operador = "";
let resultado;

document.querySelectorAll(".calculadora .botoes a").forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        if(resultado) {
            limpar();
        }
        let valor = link.innerHTML;
        console.log(valor);
        if (!isNaN(valor)  && operador === "") {
            numero1 = numero1 + link.innerHTML;
        }
        if (!isNaN(valor) && operador !== "") {
            numero2 = numero2 + link.innerHTML;
        }
        if (valor === "+" || valor === "-" || valor === "*" || valor === "÷") {
            console.log(valor);
            operador = valor;
        }
        if (valor === "=") {
            switch (operador) {
                case "+":
                    resultado = parseInt(numero1) + parseInt(numero2);
                    break;
                case "-":
                    resultado = parseInt(numero1) - parseInt(numero2);
                    break;
                case "*":
                    resultado = parseInt(numero1) * parseInt(numero2);
                    break;
                case "÷":
                    resultado = parseInt(numero1) / parseInt(numero2);
                    break;
            }
        }
        if (valor === "C") { 
            limpar();
        }
        atulizarPainel();
    });
});

function limpar() {
    numero1 = "";
    numero2 = "";
    operador = "";
    resultado = "";
}

function atulizarPainel() {
    console.log(numero1);
    console.log(numero2);
    console.log(operador);
    let texto = "";
    if (numero1) {
        texto += numero1;
    }
    if (operador) {
        texto += operador;
    }
    if (numero2) {
        texto += numero2;
    }
    let result = "";
    if(resultado){
        result = resultado;
    }
    document.querySelector(".painel .resultado").innerHTML = result;
    document.querySelector(".painel .operacao").innerHTML = texto;
    ;
}