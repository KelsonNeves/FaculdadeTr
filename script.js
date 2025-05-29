

const Personagem = document.getElementById("Personagem");
const BtEsquerda = document.getElementById("BtEsquerda");
const BtDireita = document.getElementById("BtDireita");
const mover = document.getElementById("Cmenor");
const moverArea = document.getElementById("Cmaior");
const tela = document.getElementById("Tela");
const Body = document.getElementById("body");
const mapa = document.getElementById("mapa");
const playMsc = document.getElementById("musica");
const BtMsc = document.getElementById("tocar");
const abertura = document.getElementById("abertura");


BtMsc.addEventListener("click", function(){
    playMsc.currentTime = 0;
    playMsc.play();
    abertura.style.display = "none";
    BtMsc.style.display = "none";
});


let posicaox = -100;
let posicaoy = -500;
let Areax = Body.offsetWidth;
let Areay = Body.offsetHeight;
resolucao();


let TamanhoTelax = tela.offsetWidth;
let TamanhoTelay = tela.offsetHeight;
let TamanhomoverAreax = moverArea.offsetWidth;
let TamanhomoverAreay = moverArea.offsetHeight;
let Tamanhomoverx = mover.offsetWidth;
let Tamanhomovery = mover.offsetHeight;
let Sentido = 1;

let movX = null;
let movY = null;
let VaoMov = 10;
let velocidade = 0.6;

const MalhaColisao = [
    {x: 0, y: 0, width: 200, height: 200},
    {x: -270, y: -420, width: 170, height: 130},
    {x: -380, y: -730, width: 30, height: 280,}
];



function colisao(){


    for(let i=0; i< MalhaColisao.length; i++){
        
        if(posicaox <= MalhaColisao[i].x + MalhaColisao[i].width  &&
        posicaox +Personagem.offsetWidth >= (MalhaColisao[i].x )  &&
        posicaoy  <= MalhaColisao[i].y + MalhaColisao[i].height  &&
        posicaoy  >= (MalhaColisao[i].y )
        ){

        return 0;
            
        }
        
        
    }
return 1;

}

moverArea.style.left = (TamanhoTelax/2)-(TamanhomoverAreax/2)+ +(Tamanhomoverx/2) +"px";
moverArea.style.top = TamanhoTelay + "px";
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
            Personagem.style.backgroundImage = "url('IMG/PER1.gif')";
            Personagem.style.transform = "scaleX(-1)";
            iresquerda();
            
            movX = setInterval(iresquerda, 4);
            

        }if(parseInt(mover.style.left)<= (TamanhomoverAreax) &&
        parseInt(mover.style.left) >= ((TamanhomoverAreax/2)-(Tamanhomoverx/2)+VaoMov)){
            pararX();
            Personagem.style.backgroundImage = "url('IMG/PER1.gif')";
            Personagem.style.transform = "scaleX(1)";
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
            Personagem.style.backgroundImage = "url('IMG/PER1.gif')";
            irCima();
            movY = setInterval(irCima, 4);


        }if(parseInt(mover.style.top)<= (TamanhomoverAreay) &&
        parseInt(mover.style.top) >= ((TamanhomoverAreay/2)-(Tamanhomovery/2)+VaoMov)){
            pararY();
            Personagem.style.backgroundImage = "url('IMG/PER1.gif')";
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

function resolucao(){

    tela.style.width =  Areax + "px";
    tela.style.height = (Areay - 200) + "px";
    mapa.style.width = "2000px";
    mapa.style.height = "2000px";
    mapa.style.left = posicaox + "px";
    mapa.style.top = posicaoy + "px";
    Personagem.style.left = (Areax/2) - (Personagem.offsetHeight/2) +  "px";
    Personagem.style.backgroundImage = "url('IMG/PER1parado.webp')";
};


function iresquerda() {
    posicaox += velocidade;
    if(colisao()==1){
      
    mapa.style.left = posicaox + 'px';
    } else{
        posicaox -= velocidade;
    }
}
function irdireita() {
    posicaox -= velocidade;
    if(colisao()==1){
     
    mapa.style.left = posicaox + 'px';
    } else{
        posicaox += velocidade;
    }

}
function irCima() {
    posicaoy += velocidade; 
    if(colisao()==1){
      
    mapa.style.top = posicaoy + 'px';
    } else{
        posicaoy -= velocidade;
    }

}
function irBaixo() {
    posicaoy -= velocidade;  
    if(colisao()==1){
    mapa.style.top = posicaoy + 'px';
    } else{
        posicaoy += velocidade;
    }
}

function pararX(){
    Personagem.style.backgroundImage = "url('IMG/PER1parado.webp')";
    clearInterval(movX);
    movX = null;

}
function pararY(){
    Personagem.style.backgroundImage = "url('IMG/PER1parado.webp')";
    clearInterval(movY);
    movY = null;

}

