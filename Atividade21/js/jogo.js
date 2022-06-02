jogadasVencedoras = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
];
posicoesJogadas = ['','','','','','','','',''];
jogador = 'X';
function jogar(link, posicao) {
    if (posicoesJogadas[posicao-1] == '') {
        posicoesJogadas[posicao-1] = jogador;
        let jogou;
        if (jogador == 'X') {
            jogou = '<i class="icone fas fa-close"></i>';
            jogador = 'O';
        } else {
            jogou = '<i class="icone far fa-circle"></i>';
            jogador = 'X';
        }
        link.innerHTML = jogou;
        verificarVencedor();
    }
}
function verificarVencedor() {
    for(j in jogadasVencedoras){
        if(posicoesJogadas[jogadasVencedoras[j][0]-1] != ''
            &&
            posicoesJogadas[jogadasVencedoras[j][0]-1] == posicoesJogadas[jogadasVencedoras[j][1]-1] 
            && 
            posicoesJogadas[jogadasVencedoras[j][0]-1] == posicoesJogadas[jogadasVencedoras[j][2]-1]){
            alert(jogador + ' Ganour');
        }
    }
}