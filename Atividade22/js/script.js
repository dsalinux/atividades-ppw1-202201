let numero1 = "";
let numero2 = "";
let operador = "";
let resultado;

document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        let valor = link.innerHTML;
        console.log(link.innerHTML);
        if(parseInt(valor) && operador === "") {
            numero1 = numero1 + link.innerHTML;
        }
        if(parseInt(valor) && operador !== "") {
            numero2 = numero2 + link.innerHTML;
        }
        if(valor === "+" || valor === "-" || valor === "*" || valor === "/") {
            console.log(valor);
            operador = valor;
        }
        atulizarPainel();
    });
});


function atulizarPainel(){
    console.log(numero1);
    console.log(numero2);
    console.log(operador);
    let texto = "";
    if(numero1) {
        texto += numero1;
    }
    if(operador) {
        texto += operador;
    }
    if(numero2) {
        texto += numero2;
    }
    document.querySelector(".painel").innerHTML = texto;
    ;
}