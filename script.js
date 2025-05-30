

const Personagem = document.getElementById("Personagem");
const BtEsquerda = document.getElementById("BtEsquerda");
const BtDireita = document.getElementById("BtDireita");
const caixaBt = document.getElementById("CxBotao");
const mover = document.getElementById("Cmenor");
const moverArea = document.getElementById("Cmaior");
const tela = document.getElementById("Tela");
const Body = document.getElementById("body");
const mapa = document.getElementById("mapa");
const playMsc = document.getElementById("musica");
const BtJg = document.getElementById("jogar");
const abertura = document.getElementById("abertura");
const CxClique = document.getElementById("CxClique");
const BlTexto1 = document.getElementById("Tx001").textContent.split('","');

const LinkPersonagem1P = "url('IMG/PER4parado.png')";
const LinkPersonagem1A = "url('IMG/PER4.gif')";

//OBJETOS --------------
const MalhaColisao = [
    {x: -2220, y: -1830, width: 0, height: 2000},
    {x: -2240, y: -330, width: 2300, height: 30},
    {x: -180, y: -1830, width: 0, height: 2000},
    {x: -2240, y: -1780, width: 2300, height: 30},
    {x: -1510, y: -820, width: 5, height: 500},
    {x: -1510, y: -1562, width: 5, height: 500},
    {x: -1510, y: -1542, width: 750, height: 80},
    {x: -1570, y: -1596, width: 130, height: 220},
    {x: -1670, y: -516, width: 90, height: 220},
    {x: -1980, y: -414, width: 400, height: 220},
    {x: -1780, y: -1500, width: 300, height: 400},
    {x: -1680, y: -1560, width: 50, height: 100},
    {x: -1280, y: -1750, width: 540, height: 270},
    {x: -700, y: -1750, width: -5, height: 760},
    {x: -700, y: -1750, width: 800, height: 40},
    {x: -700, y: -1030, width: 35, height: 60},
    {x: -220, y: -1770, width: 75, height: 760},
    {x: -505, y: -1030, width: 800, height: 60},
    {x: -495, y: -1530, width: 800, height: 210},
    {x: -550, y: -1750, width: 800, height: 120},
    {x: -490, y: -1225, width: 0, height: 70},
    {x: -270, y: -1225, width: 0, height: 70},
    {x: -325, y: -430, width: -10, height: 300},
    {x: -1440, y: -570, width: 220, height: 300},



];






let posicaox = -500;
let posicaoy = -800;

resolucao();

let Areax = Body.offsetWidth;
let Areay = Body.offsetHeight;
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
let velocidade = 1;



function resolucao(){

    tela.style.width =  Body.offsetWidth + "px";
    tela.style.height = (Body.offsetHeight - 300) + "px";
    mapa.style.height = 2000+(tela.offsetHeight) + "px";
    mapa.style.width = 2500+(tela.offsetWidth) + "px";
    mapa.style.left = posicaox +"px";
    mapa.style.top = posicaoy +"px";
    Personagem.style.left = (Body.offsetWidth/2) - (Personagem.offsetHeight/2) +  "px";
    Personagem.style.backgroundImage = LinkPersonagem1P;
    Personagem.style.top = (tela.offsetHeight/2-100) +  "px";
    document.getElementById("CxClique").style.left = Body.offsetWidth/2-document.getElementById("CxClique").offsetWidth/2 + 5+  "px";
    BtJg.style.left = (tela.offsetWidth/2)-(BtJg.offsetWidth/2)+ 5 +"px";
    moverArea.style.left = (tela.offsetWidth/2)-(moverArea.offsetWidth/2)+ 5 +"px";
    moverArea.style.top = tela.offsetHeight + "px";
    caixaBt.style.height = Body.offsetHeight - tela.offsetHeight + "px";
};




// FUNÇÕES DO CONTROLE------------
mover.addEventListener("touchmove", function(e){
    
        e.preventDefault();
        const touch = e.touches[0];

        if(touch.clientX <= ((TamanhoTelax/2)+(TamanhomoverAreax/2)+(Tamanhomoverx/2)) &&
        touch.clientX >= ((TamanhoTelax/2)-(TamanhomoverAreax/2)+(Tamanhomoverx/2))){

            mover.style.left = (touch.clientX - (TamanhoTelax/2) + (TamanhomoverAreax/2))- (Tamanhomoverx/2) + "px";
        }
        if(touch.clientY <= ((TamanhoTelay+TamanhomoverAreay)) &&
        touch.clientY >= ((TamanhoTelay))){
            mover.style.top = touch.clientY - TamanhoTelay + 20 - (Tamanhomovery/2)+ "px";
        }


//movimento horizontal


        if(parseInt(mover.style.left)<= ((TamanhomoverAreax/2)-(Tamanhomoverx/2)-VaoMov) &&
        parseInt(mover.style.left) >= (0-(TamanhomoverAreax/2)+(Tamanhomoverx/2))){
            pararX();
            Personagem.style.backgroundImage = LinkPersonagem1A;
            Personagem.style.transform = "scaleX(-1)";
            iresquerda();
            
            movX = setInterval(iresquerda, 4);
            

        }if(parseInt(mover.style.left)<= (TamanhomoverAreax) &&
        parseInt(mover.style.left) >= ((TamanhomoverAreax/2)-(Tamanhomoverx/2)+VaoMov)){
            pararX();
            Personagem.style.backgroundImage = LinkPersonagem1A;
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
            Personagem.style.backgroundImage = LinkPersonagem1A;
            irCima();
            movY = setInterval(irCima, 4);


        }if(parseInt(mover.style.top)<= (TamanhomoverAreay) &&
        parseInt(mover.style.top) >= ((TamanhomoverAreay/2)-(Tamanhomovery/2)+VaoMov)){
            pararY();
            Personagem.style.backgroundImage = LinkPersonagem1A;
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
let clique1 = -1;
function Clique1(){

    if(clique1 == -1){
        tela.style.height = tela.offsetHeight - 300 + "px";
        clique1 = 1;
        caixaBt.style.height = Areay - tela.offsetHeight + "px";
        moverArea.style.display = "none";
        
        document.getElementById("Tela2").style.display = "flex";
        document.getElementById("Tela2").style.top = "-40px";
        
    } else {
        moverArea.style.display = "flex";
        tela.style.height = (Areay - 300) + "px";
        clique1 = -1
        caixaBt.style.height = Areay - tela.offsetHeight + "px";
        
        document.getElementById("Tela2").style.display = "none";
        document.getElementById("Tela2").style.top = "10px";
    } 
};
let clique2 = -1;
function Clique2(){
   
    alert("2");
};



//FUNÇÕES DO PERSONAGEM --------------
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
    Personagem.style.backgroundImage = LinkPersonagem1P;
    clearInterval(movX);
    movX = null;

}
function pararY(){
    Personagem.style.backgroundImage = LinkPersonagem1P;
    clearInterval(movY);
    movY = null;

}



//DEMAIS FUNÇÕES ---------------------------
BtJg.addEventListener("click", function(){
    playMsc.currentTime = 0;
    playMsc.play();
    abertura.style.display = "none";
    BtJg.style.display = "none";
});

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