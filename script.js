let posicao = 200;
let posicao2 = 200;
let ativo = 0;
let intervalId = null;

const Personagem = document.getElementById("Personagem");
const BtEsquerda = document.getElementById("BtEsquerda");
const BtDireita = document.getElementById("BtDireita");
const mover = document.getElementById("Cmaior");





BtEsquerda.addEventListener("mousedown", function(){
    clearInterval(intervalId);
    iresquerda();
    intervalId = setInterval(iresquerda, 100);
});
BtEsquerda.addEventListener("mouseup", parar);
BtEsquerda.addEventListener("mouseleave", parar);

BtDireita.addEventListener("mousedown", function(){
    clearInterval(intervalId);
    irdireita();
    intervalId = setInterval(irdireita, 100);
});
BtDireita.addEventListener("mouseup", parar);
BtDireita.addEventListener("mouseleave", parar);

mover.addEventListener("mousemove", function(e){
    posicao2 +=1;
    mover.style.left = (e.clientX - 20)+ "px";

    //mover.style.left = e.clientx + "px";
});
BtEsquerda.addEventListener("touchstart", function(e){
    clearInterval(intervalId);
    e.preventDefault();
    iresquerda();
    intervalId = setInterval(iresquerda, 100);
});
BtEsquerda.addEventListener('touchend', parar);
BtDireita.addEventListener("touchstart", function(e){
    clearInterval(intervalId);
    e.preventDefault();
    irdireita();
    intervalId = setInterval(irdireita, 100);
});
BtDireita.addEventListener('touchend', parar);





function iresquerda() {
    posicao -= 10;  
    Personagem.style.left = posicao + 'px';
}
function irdireita() {
    posicao += 10;  
    Personagem.style.left = posicao + 'px';
}

function parar(){
    clearInterval(intervalId);

}

