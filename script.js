

const Personagem = document.getElementById("Personagem");
const BtEsquerda = document.getElementById("BtEsquerda");
const BtDireita = document.getElementById("BtDireita");
const mover = document.getElementById("Cmenor");
const moverArea = document.getElementById("Cmaior");
const tela = document.getElementById("Tela");

let TamanhoTelax = tela.offsetWidth;
let TamanhoTelay = tela.offsetHeight;
let TamanhomoverAreax = moverArea.offsetWidth;
let TamanhomoverAreay = moverArea.offsetHeight;
let Tamanhomoverx = mover.offsetWidth;
let Tamanhomovery = mover.offsetHeight;
let posicaox = tela.offsetWidth/2;
let posicaoy = tela.offsetHeight/2;
let movX = null;
let movY = null;
let VaoMov = 10;


moverArea.style.left = (TamanhoTelax/2)-(TamanhomoverAreax/2)+ +(Tamanhomoverx/2) +"px";
moverArea.style.top = tela.offsetHeight + "px";
mover.addEventListener("touchmove", function(e){
    
        e.preventDefault();
        const touch = e.touches[0];

        if(touch.clientX <= ((TamanhoTelax/2)+(TamanhomoverAreax/2)+(Tamanhomoverx/2)) &&
        touch.clientX >= ((TamanhoTelax/2)-(TamanhomoverAreax/2)+(Tamanhomoverx/2))){

            mover.style.left = (touch.clientX - (TamanhoTelax/2) + (TamanhomoverAreax/2))- (Tamanhomoverx) + "px";
        }
        if(touch.clientY <= ((TamanhoTelay+TamanhomoverAreay)) &&
        touch.clientY >= ((TamanhoTelay))){
            mover.style.top = touch.clientY - TamanhoTelay - (Tamanhomovery/2)+ "px";
        }
//movimento horizontal
        if(parseInt(mover.style.left)<= ((TamanhomoverAreax/2)-(Tamanhomoverx/2)-VaoMov) &&
        parseInt(mover.style.left) >= (0-(TamanhomoverAreax/2)+(Tamanhomoverx/2))){
            pararX();
            iresquerda();
            movX = setInterval(iresquerda, 4);


        }if(parseInt(mover.style.left)<= (TamanhomoverAreax) &&
        parseInt(mover.style.left) >= ((TamanhomoverAreax/2)-(Tamanhomoverx/2)+VaoMov)){
            pararX();
            irdireita();
            movX = setInterval(irdireita, 4);



        }if(parseInt(mover.style.left)< ((TamanhomoverAreax/2)-(Tamanhomoverx/2)+VaoMov) &&
        parseInt(mover.style.left) > ((TamanhomoverAreax/2)-(Tamanhomoverx/2)-VaoMov)){
            pararX();

        }


//movimento vertical


        if(parseInt(mover.style.top)<= ((TamanhomoverAreay/2)-(Tamanhomovery/2)-VaoMov) &&
        parseInt(mover.style.top) >= (0-(TamanhomoverAreay/2)+(Tamanhomovery/2))){
            pararY();
            irCima();
            movY = setInterval(irCima, 4);


        }if(parseInt(mover.style.top)<= (TamanhomoverAreay) &&
        parseInt(mover.style.top) >= ((TamanhomoverAreay/2)-(Tamanhomovery/2)+VaoMov)){
            pararY();
            irBaixo();
            movY = setInterval(irBaixo, 4);


        }if(parseInt(mover.style.top)<= ((TamanhomoverAreay/2)-(Tamanhomovery/2)-VaoMov) &&
        parseInt(mover.style.top) >= ((TamanhomoverAreay/2)-(Tamanhomovery/2)+VaoMov)){
            pararY();
        }
        
    

});

mover.addEventListener("touchend", function(){
    mover.style.left = ((TamanhomoverAreax/2)-(Tamanhomoverx/2))+"px" ;
    mover.style.top = ((TamanhomoverAreay/2)-(Tamanhomovery/2))+"px" ;
    pararX();
    pararY();
});






function iresquerda() {
    posicaox -= 1;  
    Personagem.style.left = posicaox + 'px';
}
function irdireita() {

    posicaox += 1;  
    Personagem.style.left = posicaox + 'px';
}
function irCima() {

    posicaoy -= 1;  
    Personagem.style.top = posicaoy + 'px';
}
function irBaixo() {

    posicaoy += 1;  
    Personagem.style.top = posicaoy + 'px';
}

function pararX(){
    clearInterval(movX);
    movX = null;
}
function pararY(){
    clearInterval(movY);
    movY = null;
}

