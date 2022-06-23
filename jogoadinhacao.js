//VARIAVEIS  - BOTAO
const validar = document.querySelector('#btn-verify')
const iniciar = document.querySelector('#new-game')
var numeroSorteado = 0;
let contador = 1;


//FUNÇÕES
function exibir (frase) {
   document.querySelector('#campo-resultado').innerHTML = frase;
}

function AtualizarContador () {
    document.querySelector('.tentativas').innerHTML = `${contador}/5`;
 }

function Iniciar () {
    numeroSorteado = Math.round(Math.random() * 50);
    exibir(`Começou! Digite um número. ${numeroSorteado}`);
    contador = 1;
    AtualizarContador();
    validar.addEventListener('click', Jogo )
}

function Jogo () {
    const chute = document.querySelector('#number').value;

    if(chute == numeroSorteado) {
        exibir('Parabéns, Você Acertou!!');
        validar.removeEventListener('click', Jogo);
    }
    
    if (chute < numeroSorteado) {
        exibir(`Seu número é menor!! Tente novamente.`);
        contador++
    } 
    
    if (chute > numeroSorteado) {
        exibir(`Seu número é maior!! Tente Novamente.`);
        contador++
    }

    AtualizarContador();

    if (contador > 5) {
    // exibir (`Esgotou as tentativas! O número era: ${numeroSorteado}. Incie um novo jogo`)
    validar.removeEventListener('click', Jogo );
}
}

iniciar.addEventListener('click', Iniciar)