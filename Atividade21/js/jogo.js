let jogadasVencedoras = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
];
let posicoesJogadas = ['','','','','','','','',''];
let jogador = true;
function jogar(link, posicao) {
    if (posicoesJogadas[posicao-1] === '') {
        posicoesJogadas[posicao-1] = jogador?'x':'o';
        let jogou;
        if (jogador) {
            jogou = '<i class="icone fas fa-close"></i>';
        } else {
            jogou = '<i class="icone far fa-circle"></i>';
        }
        link.innerHTML = jogou;
        verificarVencedor();
        jogador = !jogador;
    }
}
function verificarVencedor() {
    for(j in jogadasVencedoras){
        if(posicoesJogadas[jogadasVencedoras[j][0]-1] != ''
            &&
            posicoesJogadas[jogadasVencedoras[j][0]-1] === posicoesJogadas[jogadasVencedoras[j][1]-1] 
            && 
            posicoesJogadas[jogadasVencedoras[j][0]-1] === posicoesJogadas[jogadasVencedoras[j][2]-1]){
                const posicao = parseInt(j) + 1;
                document.querySelector('.traco').classList.add('p'+ posicao);
                document.querySelector('.traco').classList.add('p');

                    document.querySelector('.overlay').classList.toggle('ganhou');
                    document.querySelector('.overlay .ganhador i').classList = '';
                    if(posicoesJogadas[jogadasVencedoras[j][0]-1] === 'x'){
                        document.querySelector('.overlay .ganhador i').classList.add('fas', 'fa-close');
                    } else {
                        document.querySelector('.overlay .ganhador i').classList.add('far', 'fa-circle');
                    }
                    
           }

        }
    }

function limpar(){
    posicoesJogadas.fill('');
    for(let i = 1; i <= 8; i++){
        document.querySelector('.traco').classList.remove('p'+i);
    }
    document.querySelector('.traco').classList.remove('p');
    document.querySelector('.overlay').classList.remove('ganhou');
    document.querySelectorAll(".tabuleiro a").forEach( link => { 
        link.innerHTML = '';
    });
}