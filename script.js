


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

const LinkPersonagem1P = "url('IMG/PER1parado.png')";
const LinkPersonagem1A = "url('IMG/PER1.gif')";
const LinkPersonagem2P = "url('IMG/PER2parado.png')";
const LinkPersonagem2A = "url('IMG/PER2.gif')";
const LinkPersonagem3P = "url('IMG/PER3parado.png')";
const LinkPersonagem3A = "url('IMG/PER3.gif')";
const LinkPersonagem4P = "url('IMG/PER4parado.png')";
const LinkPersonagem4A = "url('IMG/PER4.gif')";
const LinkPersonagem5P = "url('IMG/PER5parado.png')";
const LinkPersonagem5A = "url('IMG/PER5.gif')";
const LinkPersonagem6P = "url('IMG/PER6parado.png')";
const LinkPersonagem6A = "url('IMG/PER6.gif')";
const LinkPersonagem7P = "url('IMG/PER7parado.png')";
const LinkPersonagem7A = "url('IMG/PER7.gif')";

const Personagem1 = document.getElementById("Personagem1");
const Personagem2 = document.getElementById("Personagem2");
const Personagem3 = document.getElementById("Personagem3");
const Personagem4 = document.getElementById("Personagem4");
const Personagem5 = document.getElementById("Personagem5");
const Personagem6 = document.getElementById("Personagem6");
const Personagem7 = document.getElementById("Personagem7");

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






let posicaox = -2000;
let posicaoy = -900;


resolucao();
CriPersonagens()

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
let movPer = setInterval(MovPersonagem, 4000);
let VaoMov = 15;
let velocidade = 1;

let posicaoPer2x = Personagem2.offsetLeft;
let posicaoPer2y = Personagem2.offsetTop;
let posicaoPer3x = Personagem3.offsetLeft;
let posicaoPer3y = Personagem3.offsetTop;
let posicaoPer4x = Personagem4.offsetLeft;
let posicaoPer4y = Personagem4.offsetTop;
let posicaoPer5x = Personagem5.offsetLeft;
let posicaoPer5y = Personagem5.offsetTop;
let posicaoPer6x = Personagem6.offsetLeft;
let posicaoPer6y = Personagem6.offsetTop;
let posicaoPer7x = Personagem7.offsetLeft;
let posicaoPer7y = Personagem7.offsetTop;



function resolucao(){

    tela.style.width =  Body.offsetWidth + "px";
    tela.style.height = (Body.offsetHeight - 300) + "px";
    mapa.style.height = 2000+(tela.offsetHeight) + "px";
    mapa.style.width = 2500+(tela.offsetWidth) + "px";
    mapa.style.left = posicaox +"px";
    mapa.style.top = posicaoy +"px";
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

        if(touch.clientX <= ((TamanhoTelax/2)+(TamanhomoverAreax/2)) &&
        touch.clientX >= ((TamanhoTelax/2)-(TamanhomoverAreax/2))){

            mover.style.left = (touch.clientX - (TamanhoTelax/2) + (TamanhomoverAreax/2))- (Tamanhomoverx/2) + "px";
        }
        if(touch.clientY <= ((TamanhoTelay+TamanhomoverAreay/2+Tamanhomovery/2)) &&
        touch.clientY >= ((TamanhoTelay-Tamanhomovery/2))){
            mover.style.top = touch.clientY - TamanhoTelay + 20 - (Tamanhomovery/2)+ "px";
        }


//movimento horizontal


        if(parseInt(mover.style.left)<= ((TamanhomoverAreax/2)-(Tamanhomoverx/2)-VaoMov) &&
        parseInt(mover.style.left) >= (0-(TamanhomoverAreax/2)+(Tamanhomoverx/2))){
            pararX();
            Personagem1.style.backgroundImage = LinkPersonagem1A;
            Personagem1.style.transform = "scaleX(-1)";
            iresquerda();
            
            movX = setInterval(iresquerda, 4);
            

        }if(parseInt(mover.style.left)<= (TamanhomoverAreax) &&
        parseInt(mover.style.left) >= ((TamanhomoverAreax/2)-(Tamanhomoverx/2)+VaoMov)){
            pararX();
            Personagem1.style.backgroundImage = LinkPersonagem1A;
            Personagem1.style.transform = "scaleX(1)";
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
            Personagem1.style.backgroundImage = LinkPersonagem1A;
            irCima();
            movY = setInterval(irCima, 4);


        }if(parseInt(mover.style.top)<= (TamanhomoverAreay) &&
        parseInt(mover.style.top) >= ((TamanhomoverAreay/2)-(Tamanhomovery/2)+VaoMov)){
            pararY();
            Personagem1.style.backgroundImage = LinkPersonagem1A;
            irBaixo();
            movY = setInterval(irBaixo, 4);


        }if(parseInt(mover.style.top)< ((TamanhomoverAreay/2)-(Tamanhomovery/2)+VaoMov) &&
        parseInt(mover.style.top) > ((TamanhomoverAreay/2)-(Tamanhomovery/2)-VaoMov)
        ){ 

            pararY();

        }
        if(parseInt(mover.style.top)< ((TamanhomoverAreay/2)-(Tamanhomovery/2)+VaoMov) &&
        parseInt(mover.style.top) > ((TamanhomoverAreay/2)-(Tamanhomovery/2)-VaoMov) &&
        parseInt(mover.style.left)< ((TamanhomoverAreax/2)-(Tamanhomoverx/2)+VaoMov) &&
        parseInt(mover.style.left) > ((TamanhomoverAreax/2)-(Tamanhomoverx/2)-VaoMov)
        ){ 

            Personagem1.style.backgroundImage = LinkPersonagem1P;

        }
});
mover.addEventListener("touchend", function(){
    mover.style.left = ((TamanhomoverAreax/2)-(Tamanhomoverx/2))+"px" ;
    mover.style.top = ((TamanhomoverAreay/2)-(Tamanhomovery/2))+"px" ;
    Personagem1.style.backgroundImage = LinkPersonagem1P;
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

    posicaoPer2x += velocidade;
    posicaoPer3x += velocidade;
    posicaoPer4x += velocidade;
    posicaoPer5x += velocidade;
    posicaoPer6x += velocidade;
    posicaoPer7x += velocidade;
    Redesenhar()
    
    } else{
        posicaox -= velocidade;
    }
}
function irdireita() {
    posicaox -= velocidade;
    if(colisao()==1){
    posicaoPer2x -= velocidade;
    posicaoPer3x -= velocidade;
    posicaoPer4x -= velocidade;
    posicaoPer5x -= velocidade;
    posicaoPer6x -= velocidade;
    posicaoPer7x -= velocidade;
    Redesenhar()
    } else{
        posicaox += velocidade;
    }

}
function irCima() {
    posicaoy += velocidade; 
    if(colisao()==1){
    posicaoPer2y += velocidade;
    posicaoPer3y += velocidade;
    posicaoPer4y += velocidade;
    posicaoPer5y += velocidade;
    posicaoPer6y += velocidade;
    posicaoPer7y += velocidade;
    Redesenhar()
    } else{
        posicaoy -= velocidade;
    }

}
function irBaixo() {
    posicaoy -= velocidade;
      
    if(colisao()==1){
    posicaoPer2y -= velocidade;
    posicaoPer3y -= velocidade;
    posicaoPer4y -= velocidade;
    posicaoPer5y -= velocidade;
    posicaoPer6y -= velocidade;
    posicaoPer7y -= velocidade;
    Redesenhar()
    } else{
        posicaoy += velocidade;
    }
}

function pararX(){
    
    clearInterval(movX);
    movX = null;

}
function pararY(){

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
        posicaox +Personagem1.offsetWidth >= (MalhaColisao[i].x )  &&
        posicaoy  <= MalhaColisao[i].y + MalhaColisao[i].height  &&
        posicaoy  >= (MalhaColisao[i].y )
        ){

        return 0;
            
        }
        
        
    }
return 1;

}

function CriPersonagens(){

    Personagem1.style.left = (Body.offsetWidth/2) - (Personagem1.offsetHeight/2) +  "px";
    Personagem1.style.top = (tela.offsetHeight/2-100) +  "px";
    Personagem1.style.backgroundImage = LinkPersonagem1P;

    Personagem2.style.left = -1000 +  "px";
    Personagem2.style.top = 570 +  "px";
    Personagem2.style.backgroundImage = LinkPersonagem2P;


    Personagem3.style.left = -700 +  "px";
    Personagem3.style.top = -200 +  "px";
    Personagem3.style.backgroundImage = LinkPersonagem3P;


    Personagem4.style.left = -350 +  "px";
    Personagem4.style.top = 900 +  "px";
    Personagem4.style.backgroundImage = LinkPersonagem4P;


    Personagem5.style.left = -1510 +  "px";
    Personagem5.style.top = -230 +  "px";
    Personagem5.style.backgroundImage = LinkPersonagem5P;


    Personagem6.style.left = 0 +  "px";
    Personagem6.style.top = -300 +  "px";
    Personagem6.style.backgroundImage = LinkPersonagem6P;


    Personagem7.style.left = -1430 +  "px";
    Personagem7.style.top = 410 +  "px";
    Personagem7.style.backgroundImage = LinkPersonagem7P;


    
}

function Redesenhar(){
    mapa.style.left = posicaox + 'px';
    mapa.style.top = posicaoy + 'px';
    Personagem2.style.left = posicaoPer2x + 'px';
    Personagem2.style.top = posicaoPer2y + 'px';
    Personagem3.style.left = posicaoPer3x + 'px';
    Personagem3.style.top = posicaoPer3y + 'px';
    Personagem4.style.left = posicaoPer4x + 'px';
    Personagem4.style.top = posicaoPer4y + 'px';
    Personagem5.style.left = posicaoPer5x + 'px';
    Personagem5.style.top = posicaoPer5y + 'px';
    Personagem6.style.left = posicaoPer6x + 'px';
    Personagem6.style.top = posicaoPer6y + 'px';
    Personagem7.style.left = posicaoPer7x + 'px';
    Personagem7.style.top = posicaoPer7y + 'px';
}

let vel = 1;
function MovPersonagem(){

let movPer = setInterval(MovPer, 1);

let ContPer1 = 80;
    function MovPer(){

        if(ContPer1>0){
            posicaoPer2x += vel;
            posicaoPer2y += vel/2 ;
            posicaoPer3x += -vel/3;
            posicaoPer3y += -vel ;
            posicaoPer4x += vel;
            posicaoPer4y += -vel/4;
            posicaoPer5x += vel/2;
            posicaoPer5y += vel*0.9 ;
            posicaoPer6x += vel;
            posicaoPer6y += vel/2 ;
            posicaoPer7x += vel/2;
            posicaoPer7y += vel/2 ;

            ContPer1 -= 1;
            Personagem2.style.backgroundImage = LinkPersonagem2A;
            Personagem3.style.backgroundImage = LinkPersonagem3A;
            Personagem4.style.backgroundImage = LinkPersonagem4A;
            Personagem5.style.backgroundImage = LinkPersonagem5A;
            Personagem6.style.backgroundImage = LinkPersonagem6A;
            Personagem7.style.backgroundImage = LinkPersonagem7A;
            Redesenhar();
        }else{
            clearInterval(movPer);
            movPer = null;
            vel *= -1;
            Personagem2.style.backgroundImage = LinkPersonagem2P;
            Personagem3.style.backgroundImage = LinkPersonagem3P;
            Personagem4.style.backgroundImage = LinkPersonagem4P;
            Personagem5.style.backgroundImage = LinkPersonagem5P;
            Personagem6.style.backgroundImage = LinkPersonagem6P;
            Personagem7.style.backgroundImage = LinkPersonagem7P;
        }
    };
}