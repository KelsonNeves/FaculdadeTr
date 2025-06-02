


const BtEsquerda = document.getElementById("BtEsquerda");
const BtDireita = document.getElementById("BtDireita");
const caixaBt = document.getElementById("CxBotao");
const mover = document.getElementById("Cmenor");
const moverArea = document.getElementById("Cmaior");
const tela = document.getElementById("Tela");
const tela3 = document.getElementById("Tela3");
const Body = document.getElementById("body");
const mapa = document.getElementById("mapa");
const playMsc = document.getElementById("musica");
const BtJg = document.getElementById("jogar");
const abertura = document.getElementById("abertura");
const CxClique = document.getElementById("CxClique");
const BlTexto1 = document.getElementById("Tx001").textContent.split('","');
const TelaObj = document.getElementById("TelaObg");

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

const LinkObjeto1 = "url('IMG/OBJ/01.png')";
const LinkObjeto2 = "url('IMG/OBJ/02.png')";
const LinkObjeto3 = "url('IMG/OBJ/03.png')";
const LinkObjeto4 = "url('IMG/OBJ/04.png')";
const LinkObjeto5 = "url('IMG/OBJ/05.png')";
const LinkObjeto6 = "url('IMG/OBJ/06.png')";

const Objeto1 = document.getElementById("Obj1");
const Objeto2 = document.getElementById("Obj2");
const Objeto3 = document.getElementById("Obj3");
const Objeto4 = document.getElementById("Obj4");
const Objeto5 = document.getElementById("Obj5");
const Objeto6 = document.getElementById("Obj6");

//EFEITOS SONOROS
const Video =document.getElementById("VideoIntro");


const EfFundo = new Audio("MSC/FUNDO.m4a");
EfFundo.loop = true;
const EfFundo1 = new Audio("MSC/FUNDO1.m4a");
const EfWalking = new Audio("MSC/EfWalking.m4a");
EfWalking.playbackRate = 1.4;
const EfCreak = new Audio("MSC/EfCreak.m4a");
EfCreak.playbackRate = 1.8

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


//SCORE -----------------
let Inventario = [0,0,0,0,0,0];
let Respostas = [0,0,0,0,0,0,0,0,0,0,0,0];
let Score = 0;

let PerPersonagem = [0,0,0,0,0,0];
let ItensMapa = [1,1,1,1,1,1];






let posicaox = -2000;
let posicaoy = -900;
let Ix = 1.3;
let Iy = 6.5;


resolucao();
let Varx = ((mapa.getBoundingClientRect().width/2)-(Personagem2.getBoundingClientRect().width/2));
let Vary = ((mapa.getBoundingClientRect().height/2)-(Personagem2.getBoundingClientRect().height/2));
CriPersonagens();
CriObjetos();

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
let velocidade = 1.4;



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

let posicaoObj1x = Objeto1.offsetLeft;
let posicaoObj1y = Objeto1.offsetTop;
let posicaoObj2x = Objeto2.offsetLeft;
let posicaoObj2y = Objeto2.offsetTop;
let posicaoObj3x = Objeto3.offsetLeft;
let posicaoObj3y = Objeto3.offsetTop;
let posicaoObj4x = Objeto4.offsetLeft;
let posicaoObj4y = Objeto4.offsetTop;
let posicaoObj5x = Objeto5.offsetLeft;
let posicaoObj5y = Objeto5.offsetTop;
let posicaoObj6x = Objeto6.offsetLeft;
let posicaoObj6y = Objeto6.offsetTop;




function resolucao(){

    tela.style.width =  Body.offsetWidth + "px";
    tela.style.height = (Body.offsetHeight - 300) + "px";
    tela3.style.width =  Body.offsetWidth + "px";
    tela3.style.height = (Body.offsetHeight - 300) + "px";
    mapa.style.height = 2000+(tela.offsetHeight) + "px";
    mapa.style.width = 2500+(tela.offsetWidth) + "px";
    mapa.style.left = posicaox +"px";
    mapa.style.top = posicaoy +"px";
    document.getElementById("CxClique").style.left = Body.offsetWidth/2-document.getElementById("CxClique").offsetWidth/2 +  "px";
    BtJg.style.left = (tela.offsetWidth/2)-(BtJg.offsetWidth/2)+ 5 +"px";
    moverArea.style.left = (tela.offsetWidth/2)-(moverArea.offsetWidth/2)+ 5 +"px";
    moverArea.style.top = tela.offsetHeight + "px";
    caixaBt.style.height = Body.offsetHeight - tela.offsetHeight + "px";
    document.getElementById('BtDir').disabled = true;
    document.getElementById('BtEsq').disabled = true;
    document.getElementById("ScoreFinal").style.left = 70  + "px";
    document.getElementById("ScoreFinal").style.bottom = 50+"px";
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
            mover.style.top = touch.clientY - TamanhoTelay  - (Tamanhomovery/2)+ "px";
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
            EfWalking.pause();
            EfWalking.currentTime = 0;
        }
});
mover.addEventListener("touchend", function(){
    mover.style.left = ((TamanhomoverAreax/2)-(Tamanhomoverx/2))+"px" ;
    mover.style.top = ((TamanhomoverAreay/2)-(Tamanhomovery/2))+"px" ;
    Personagem1.style.backgroundImage = LinkPersonagem1P;
    pararX();
    pararY();
    EfWalking.pause();
    EfWalking.currentTime = 0;
});


let Resp = [0,0,0];

let CliquePers = 0;
let clique1 = -1;
function Clique1(){

    if(clique1 == -1){
        tela.style.height = tela.offsetHeight - 300 + "px";
        clique1 = 1;
        caixaBt.style.height = Areay - tela.offsetHeight + "px";
        moverArea.style.display = "none";
        
        
        document.getElementById("BtEsq").textContent="PULAR";
        document.getElementById("Tela2").style.display = "inline-block";
        document.getElementById("Tela2").style.top = "-40px";

        if (CliquePers == 0 && PerPersonagem[0]==0){
            Quest1();
        } else if (CliquePers == 0 && PerPersonagem[0]==1){
            Quest2();
        } else if (CliquePers == 1 && PerPersonagem[1]==0){
            Quest3();
        } else if (CliquePers == 1 && PerPersonagem[1]==1){
            Quest4();
        } else if (CliquePers == 2 && PerPersonagem[2]==0){
            Quest5();
        } else if (CliquePers == 2 && PerPersonagem[2]==1){
            Quest6();
        } else if (CliquePers == 3 && PerPersonagem[3]==0){
            Quest7();
        } else if (CliquePers == 3 && PerPersonagem[3]==1){
            Quest8();
        } else if (CliquePers == 4 && PerPersonagem[4]==0){
            Quest9();
        } else if (CliquePers == 4 && PerPersonagem[4]==1){
            Quest10();
        } else if (CliquePers == 5 && PerPersonagem[5]==0){
            Quest11();
        } else if (CliquePers == 5 && PerPersonagem[5]==1){
            Quest12();
        }else{
            
        }

        
    } else {
        moverArea.style.display = "flex";
        tela.style.height = (Areay - 300) + "px";
        clique1 = -1
        caixaBt.style.height = Areay - tela.offsetHeight + "px";
        
        document.getElementById("BtEsq").textContent="CONVERSAR";
        document.getElementById("Tela2").style.display = "none";
        document.getElementById("Tela2").style.top = "10px";
    } 
};
let clique2 = 0;
function Clique2(){
    
    for(let x=0;x<5;x++){
            Score += Inventario[x]*10;
    
    };
    if(clique2 == 6){  

        Inventario[clique2-1]=-1;
        Objeto6.style.display ="none";
        ItensMapa[clique2-1]=-1
        
    } else if(clique2 == 5){  

        Inventario[clique2-1]=-1;
        Objeto5.style.display ="none";
        ItensMapa[clique2-1]=-1
        
    }else if(clique2 == 4){  

        Inventario[clique2-1]=1;
        Objeto4.style.display ="none";
        ItensMapa[clique2-1]=-1
        
    }else if(clique2 == 3){  

        Inventario[clique2-1]=-1;
        Objeto3.style.display ="none";
        ItensMapa[clique2-1]=-1
        
    }else if(clique2 == 2){  

        Inventario[clique2-1]=1;
        Objeto2.style.display ="none";
        ItensMapa[clique2-1]=-1
        
    }else if(clique2 == 1){  

        Inventario[clique2-1]=1;
        Objeto1.style.display ="none";
        ItensMapa[clique2-1]=-1
        
    } else {
   
        

    }
    TelaObj.style.display = "none";
    
    document.getElementById("Inventario").style.display ="flex";
    
    EfCreak.play();

};



//FUNÇÕES DO PERSONAGEM --------------
function iresquerda() {
    posicaox += velocidade;

   
    EfWalking.play();
    if(colisao()==1){

    posicaoPer2x += velocidade;
    posicaoPer3x += velocidade;
    posicaoPer4x += velocidade;
    posicaoPer5x += velocidade;
    posicaoPer6x += velocidade;
    posicaoPer7x += velocidade;

    posicaoObj1x += velocidade;
    posicaoObj2x += velocidade;
    posicaoObj3x += velocidade;
    posicaoObj4x += velocidade;
    posicaoObj5x += velocidade;
    posicaoObj6x += velocidade;

 

    Redesenhar()
    
    } else{
        posicaox -= velocidade;
    }
}
function irdireita() {
    posicaox -= velocidade;
    EfWalking.play();
    if(colisao()==1){
    posicaoPer2x -= velocidade;
    posicaoPer3x -= velocidade;
    posicaoPer4x -= velocidade;
    posicaoPer5x -= velocidade;
    posicaoPer6x -= velocidade;
    posicaoPer7x -= velocidade;

    posicaoObj1x -= velocidade;
    posicaoObj2x -= velocidade;
    posicaoObj3x -= velocidade;
    posicaoObj4x -= velocidade;
    posicaoObj5x -= velocidade;
    posicaoObj6x -= velocidade;



    Redesenhar()
    } else{
        posicaox += velocidade;
    }

}
function irCima() {
    posicaoy += velocidade;
    EfWalking.play();
    if(colisao()==1){
    posicaoPer2y += velocidade;
    posicaoPer3y += velocidade;
    posicaoPer4y += velocidade;
    posicaoPer5y += velocidade;
    posicaoPer6y += velocidade;
    posicaoPer7y += velocidade;

    posicaoObj1y += velocidade;
    posicaoObj2y += velocidade;
    posicaoObj3y += velocidade;
    posicaoObj4y += velocidade;
    posicaoObj5y += velocidade;
    posicaoObj6y += velocidade;



    Redesenhar()
    } else{
        posicaoy -= velocidade;
    }

}
function irBaixo() {
    posicaoy -= velocidade;
    EfWalking.play();
    if(colisao()==1){
    posicaoPer2y -= velocidade;
    posicaoPer3y -= velocidade;
    posicaoPer4y -= velocidade;
    posicaoPer5y -= velocidade;
    posicaoPer6y -= velocidade;
    posicaoPer7y -= velocidade;

    posicaoObj1y -= velocidade;
    posicaoObj2y -= velocidade;
    posicaoObj3y -= velocidade;
    posicaoObj4y -= velocidade;
    posicaoObj5y -= velocidade;
    posicaoObj6y -= velocidade;
    

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
    EfFundo.currentTime = 0;
    EfFundo.play();
    abertura.style.display = "none";
    BtJg.style.display = "none";
    setTimeout(() => {
        finalizarPartida();
    }, 300000);
});
function IniciarVideo(){
    Video.play();
}
function PularVideo(){
    Video.pause()
    document.getElementById("VideoIntro").style.display="none";
}

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


    Personagem2.style.left = Varx-2390 +  "px";
    Personagem2.style.top = Vary -600 +  "px";
    Personagem2.style.backgroundImage = LinkPersonagem2P;

    Personagem3.style.left = Varx -2100 +  "px";
    Personagem3.style.top = Vary-1450 +  "px";
    Personagem3.style.backgroundImage = LinkPersonagem3P;


    Personagem4.style.left = Varx -1600+  "px";
    Personagem4.style.top = Vary -250+  "px";
    Personagem4.style.backgroundImage = LinkPersonagem4P;


    Personagem5.style.left = Varx -2900 +  "px";
    Personagem5.style.top = Vary -1500 +  "px";
    Personagem5.style.backgroundImage = LinkPersonagem5P;


    Personagem6.style.left = Varx -1200 +  "px";
    Personagem6.style.top = Vary -1500 +  "px";
    Personagem6.style.backgroundImage = LinkPersonagem6P;


    Personagem7.style.left = Varx -2850 +  "px";
    Personagem7.style.top = Vary -800 +  "px";
    Personagem7.style.backgroundImage = LinkPersonagem7P;


    
}
function CriObjetos(){
    Objeto1.style.left = Varx -1750 +  "px";
    Objeto1.style.top = Vary -1300 +  "px";
    Objeto1.style.backgroundImage = LinkObjeto1;

    Objeto2.style.left = Varx  -2850 +  "px";
    Objeto2.style.top = Vary -330+  "px";
    Objeto2.style.backgroundImage = LinkObjeto2;

    Objeto3.style.left = Varx  -2920 +  "px";
    Objeto3.style.top = Vary -1570 +  "px";
    Objeto3.style.backgroundImage = LinkObjeto3;

    Objeto4.style.left = Varx  -1790 +  "px";
    Objeto4.style.top = Vary -290 +  "px";
    Objeto4.style.backgroundImage = LinkObjeto4;

    Objeto5.style.left = Varx  -1750+  "px";
    Objeto5.style.top = Vary -720+  "px";
    Objeto5.style.backgroundImage = LinkObjeto5;

    Objeto6.style.left = Varx -1100 +  "px";
    Objeto6.style.top = Vary -350 +  "px";
    Objeto6.style.backgroundImage = LinkObjeto6;
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
    Objeto1.style.left = posicaoObj1x + "px"
    Objeto1.style.top = posicaoObj1y + "px"
    Objeto2.style.left = posicaoObj2x + "px"
    Objeto2.style.top = posicaoObj2y + "px"
    Objeto3.style.left = posicaoObj3x + "px"
    Objeto3.style.top = posicaoObj3y + "px"
    Objeto4.style.left = posicaoObj4x + "px"
    Objeto4.style.top = posicaoObj4y + "px"
    Objeto5.style.left = posicaoObj5x + "px"
    Objeto5.style.top = posicaoObj5y + "px"
    Objeto6.style.left = posicaoObj6x + "px"
    Objeto6.style.top = posicaoObj6y + "px"



//PROX OBJETOS ----------
    if(posicaox>=-2130 - 50&&
       posicaox<=-2130 +50&&
       posicaoy>=-1540 -50&&
       posicaoy<=-1540 +50&&
       ItensMapa[5]==1
    ){
        TelaObj.style.display = "block";
        TelaObj.style.backgroundImage = LinkObjeto6;
        clique2 = 6;
        acionarBtDir();
        
    } else if(posicaox>=-1440 - 50&&
       posicaox<=-1440 +50&&
       posicaoy>=-1610 -50&&
       posicaoy<=-1610 +50&&
       ItensMapa[3]==1
    ){
        TelaObj.style.display = "block";
        TelaObj.style.backgroundImage = LinkObjeto4;
        clique2 = 4;
        acionarBtDir();
    } else if(posicaox>=-1480 - 50&&
       posicaox<=-1480 +50&&
       posicaoy>=-1180 -50&&
       posicaoy<=-1180 +50&&
       ItensMapa[4]==1
    ){
        TelaObj.style.display = "block";
        TelaObj.style.backgroundImage = LinkObjeto5;
        clique2 = 5;
        acionarBtDir();
    } else if(posicaox>=-1480 - 50&&
       posicaox<=-1480 +50&&
       posicaoy>=-600 -50&&
       posicaoy<=-600 +50&&
       ItensMapa[0]==1
    ){
        TelaObj.style.display = "block";
        TelaObj.style.backgroundImage = LinkObjeto1;
        clique2 = 1;
        acionarBtDir();
    } else if(posicaox>=-380 - 50&&
       posicaox<=-380 +50&&
       posicaoy>=-1575 -50&&
       posicaoy<=-1575 +50&&
       ItensMapa[1]==1
    ){
        TelaObj.style.display = "block";
        TelaObj.style.backgroundImage = LinkObjeto2;
        clique2 = 2;
        acionarBtDir();
    } else if(posicaox>=-305 - 50&&
       posicaox<=-305 +50&&
       posicaoy>=-330 -50&&
       posicaoy<=-330 +50&&
       ItensMapa[2]==1
    ){
        TelaObj.style.display = "block";
        TelaObj.style.backgroundImage = LinkObjeto3;
        clique2 = 3;
        acionarBtDir();
    } else {
        TelaObj.style.display = "none";
        clique2 = 0;
        DesacionarBtDir();
    }


//PROX PERSONAGENS ----------
    if(Personagem1.getBoundingClientRect().left>= Personagem2.getBoundingClientRect().left- 100&&
       Personagem1.getBoundingClientRect().left<= Personagem2.getBoundingClientRect().left +100&&
       Personagem1.getBoundingClientRect().top>= Personagem2.getBoundingClientRect().top -100&&
       Personagem1.getBoundingClientRect().top<= Personagem2.getBoundingClientRect().top +100
    ){
        CliquePers = 0;
        document.getElementById('BtEsq').disabled = false;
        acionarBtEsq();
    } else if(Personagem1.getBoundingClientRect().left>= Personagem3.getBoundingClientRect().left- 100&&
       Personagem1.getBoundingClientRect().left<= Personagem3.getBoundingClientRect().left +100&&
       Personagem1.getBoundingClientRect().top>= Personagem3.getBoundingClientRect().top -100&&
       Personagem1.getBoundingClientRect().top<= Personagem3.getBoundingClientRect().top +100
    ){
        CliquePers = 1;
        document.getElementById('BtEsq').disabled = false;
        acionarBtEsq();
    } else if(Personagem1.getBoundingClientRect().left>= Personagem4.getBoundingClientRect().left- 100&&
       Personagem1.getBoundingClientRect().left<= Personagem4.getBoundingClientRect().left +100&&
       Personagem1.getBoundingClientRect().top>= Personagem4.getBoundingClientRect().top -100&&
       Personagem1.getBoundingClientRect().top<= Personagem4.getBoundingClientRect().top +100
    ){
        CliquePers = 2;
        document.getElementById('BtEsq').disabled = false;
        acionarBtEsq();
    } else if(Personagem1.getBoundingClientRect().left>= Personagem5.getBoundingClientRect().left- 100&&
       Personagem1.getBoundingClientRect().left<= Personagem5.getBoundingClientRect().left +100&&
       Personagem1.getBoundingClientRect().top>= Personagem5.getBoundingClientRect().top -100&&
       Personagem1.getBoundingClientRect().top<= Personagem5.getBoundingClientRect().top +100
    ){
        CliquePers = 3;
        document.getElementById('BtEsq').disabled = false;
        acionarBtEsq();
    } else if(Personagem1.getBoundingClientRect().left>= Personagem6.getBoundingClientRect().left- 100&&
       Personagem1.getBoundingClientRect().left<= Personagem6.getBoundingClientRect().left +100&&
       Personagem1.getBoundingClientRect().top>= Personagem6.getBoundingClientRect().top -100&&
       Personagem1.getBoundingClientRect().top<= Personagem6.getBoundingClientRect().top +100
    ){
        CliquePers = 4;
        document.getElementById('BtEsq').disabled = false;
        acionarBtEsq();
    } else if(Personagem1.getBoundingClientRect().left>= Personagem7.getBoundingClientRect().left- 100&&
       Personagem1.getBoundingClientRect().left<= Personagem7.getBoundingClientRect().left +100&&
       Personagem1.getBoundingClientRect().top>= Personagem7.getBoundingClientRect().top -100&&
       Personagem1.getBoundingClientRect().top<= Personagem7.getBoundingClientRect().top +100
    ){
        CliquePers = 5;
        document.getElementById('BtEsq').disabled = false;
        acionarBtEsq();
    }else{
        
        document.getElementById('BtEsq').disabled = true;
        DesacionarBtEsq();
    }

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

function acionarBtDir(){
    const botao = document.getElementById("BtDir");
    botao.style.backgroundColor= "#028eb1";
    botao.style.color= "#dbe0e0";
    botao.disabled = false;
    document.getElementById("Inventario").style.display ="none";
}
function DesacionarBtDir(){
    const botao = document.getElementById("BtDir");
    botao.style.backgroundColor= "#0b5163";
    botao.style.color= "#515555";
    botao.disabled = true;

}
function acionarBtEsq(){
    const botao = document.getElementById("BtEsq");
    botao.style.backgroundColor= "#028eb1";
    botao.style.color= "#dbe0e0";
    botao.disabled = false;
    document.getElementById("Inventario").style.display ="none";
}
function DesacionarBtEsq(){
    const botao = document.getElementById("BtEsq");
    botao.style.backgroundColor= "#0b5163";
    botao.style.color= "#515555";
    botao.disabled = true;

}
function abaixarTela2(){
        moverArea.style.display = "flex";
        tela.style.height = (Areay - 300) + "px";
        clique1 = -1
        caixaBt.style.height = Areay - tela.offsetHeight + "px";
        
        document.getElementById("BtEsq").textContent="CONVERSAR";
        document.getElementById("Tela2").style.display = "none";
        document.getElementById("Tela2").style.top = "10px";
}


document.getElementById("A").addEventListener("click", function(){
    if(Resp[0] == 1){
        Score += 10;
    } else {
        Score -= 5;
    }

    if(CliquePers == 0 && PerPersonagem[CliquePers]==0){
        abaixarTela2()
        PerPersonagem[CliquePers]+=1;
    } else if (CliquePers == 0){
        abaixarTela2()
        Personagem2.style.display="none";

    }
    if(CliquePers == 1 && PerPersonagem[CliquePers]==0){
        abaixarTela2()
        PerPersonagem[CliquePers]+=1;
    } else if (CliquePers == 1){
        abaixarTela2()
        Personagem3.style.display="none";

    }
    if(CliquePers == 2 && PerPersonagem[CliquePers]==0){
        abaixarTela2()
        PerPersonagem[CliquePers]+=1;
    } else if (CliquePers == 2){
        abaixarTela2()
        Personagem4.style.display="none";

    }
    if(CliquePers == 3 &&PerPersonagem[CliquePers]==0){
        abaixarTela2()
        PerPersonagem[CliquePers]+=1;
    } else if (CliquePers == 3){
        abaixarTela2()
        Personagem5.style.display="none";

    }
    if(CliquePers == 4 &&PerPersonagem[CliquePers]==0){
        abaixarTela2()
        PerPersonagem[CliquePers]+=1;
    } else if (CliquePers == 4){
        abaixarTela2()
        Personagem6.style.display="none";

    }
    if(CliquePers == 5 &&PerPersonagem[CliquePers]==0){
        abaixarTela2()
        PerPersonagem[CliquePers]+=1;
    } else if (CliquePers == 5){
        abaixarTela2()
        Personagem7.style.display="none";

    }
    alert(Score);
});
document.getElementById("B").addEventListener("click", function(){
    if(Resp[1] == 1){
        Score += 10;
    } else {
        Score -= 5;
    }

    if(CliquePers == 0 && PerPersonagem[CliquePers]==0){
        abaixarTela2()
        PerPersonagem[CliquePers]+=1;
    } else if (CliquePers == 0){
        abaixarTela2()
        Personagem2.style.display="none";

    }
    if(CliquePers == 1 && PerPersonagem[CliquePers]==0){
        abaixarTela2()
        PerPersonagem[CliquePers]+=1;
    } else if (CliquePers == 1){
        abaixarTela2()
        Personagem3.style.display="none";

    }
    if(CliquePers == 2 && PerPersonagem[CliquePers]==0){
        abaixarTela2()
        PerPersonagem[CliquePers]+=1;
    } else if (CliquePers == 2){
        abaixarTela2()
        Personagem4.style.display="none";

    }
    if(CliquePers == 3 &&PerPersonagem[CliquePers]==0){
        abaixarTela2()
        PerPersonagem[CliquePers]+=1;
    } else if (CliquePers == 3){
        abaixarTela2()
        Personagem5.style.display="none";

    }
    if(CliquePers == 4 &&PerPersonagem[CliquePers]==0){
        abaixarTela2()
        PerPersonagem[CliquePers]+=1;
    } else if (CliquePers == 4){
        abaixarTela2()
        Personagem6.style.display="none";

    }
    if(CliquePers == 5 &&PerPersonagem[CliquePers]==0){
        abaixarTela2()
        PerPersonagem[CliquePers]+=1;
    } else if (CliquePers == 5){
        abaixarTela2()
        Personagem7.style.display="none";

    }
    alert(Score);
});
document.getElementById("C").addEventListener("click", function(){
    if(Resp[2] == 1){
        Score += 10;
    } else {
        Score -= 5;
    }

    if(CliquePers == 0 && PerPersonagem[CliquePers]==0){
        abaixarTela2()
        PerPersonagem[CliquePers]+=1;
    } else if (CliquePers == 0){
        abaixarTela2()
        Personagem2.style.display="none";

    }
    if(CliquePers == 1 && PerPersonagem[CliquePers]==0){
        abaixarTela2()
        PerPersonagem[CliquePers]+=1;
    } else if (CliquePers == 1){
        abaixarTela2()
        Personagem3.style.display="none";

    }
    if(CliquePers == 2 && PerPersonagem[CliquePers]==0){
        abaixarTela2()
        PerPersonagem[CliquePers]+=1;
    } else if (CliquePers == 2){
        abaixarTela2()
        Personagem4.style.display="none";

    }
    if(CliquePers == 3 &&PerPersonagem[CliquePers]==0){
        abaixarTela2()
        PerPersonagem[CliquePers]+=1;
    } else if (CliquePers == 3){
        abaixarTela2()
        Personagem5.style.display="none";

    }
    if(CliquePers == 4 &&PerPersonagem[CliquePers]==0){
        abaixarTela2()
        PerPersonagem[CliquePers]+=1;
    } else if (CliquePers == 4){
        abaixarTela2()
        Personagem6.style.display="none";

    }
    if(CliquePers == 5 &&PerPersonagem[CliquePers]==0){
        abaixarTela2()
        PerPersonagem[CliquePers]+=1;
    } else if (CliquePers == 5){
        abaixarTela2()
        Personagem7.style.display="none";

    }
    alert(Score);
});


// FUNÇÕES DE PERGUNTA
function Quest1(){
    document.getElementById("Per").textContent = "Trabalho desde menina nas terras do barão... Dou parte da colheita, pago tributo, rezo como mandam. Mas quando meu filho adoeceu, usei um chá de raízes que minha avó me ensinou. Agora dizem que sou bruxa! A mulher do feitor jura que me viu falando com corujas à noite — e isso basta pra me levarem à forca. Não tenho quem fale por mim, nem moedas pra pagar confessor. Dizei-me, por caridade: O que posso fazer pra não morrer por algo que nem sei explicar?";
    document.getElementById("R1").textContent = "A)Ofereça suas terras ao senhor feudal como sinal de arrependimento. Se ele lucrar com tua entrega, talvez te perdoe.";
    document.getElementById("R2").textContent = "B)Confesse logo e diga que foi seduzida pelo demônio. Talvez se comovam e troquem a forca pelo convento.";
    document.getElementById("R3").textContent = "C)Fuja da aldeia com teu filho. Nos caminhos entre as montanhas, ninguém te perguntará por feitiços nem rezas erradas.";
    

    Resp[0]=1;
    Resp[1]=0;
    Resp[2]=0;

}
function Quest2(){
    document.getElementById("Per").textContent = "Trabalho desde menina nas terras do barão... Dou parte da colheita, pago tributo, rezo como mandam. Mas quando meu filho adoeceu, usei um chá de raízes que minha avó me ensinou. Agora dizem que sou bruxa! A mulher do feitor jura que me viu falando com corujas à noite — e isso basta pra me levarem à forca. Não tenho quem fale por mim, nem moedas pra pagar confessor. Dizei-me, por caridade: O que posso fazer pra não morrer por algo que nem sei explicar?";
    document.getElementById("R1").textContent = "A)Ofereça suas terras ao senhor feudal como sinal de arrependimento. Se ele lucrar com tua entrega, talvez te perdoe.";
    document.getElementById("R2").textContent = "B)Confesse logo e diga que foi seduzida pelo demônio. Talvez se comovam e troquem a forca pelo convento.";
    document.getElementById("R3").textContent = "C)Fuja da aldeia com teu filho. Nos caminhos entre as montanhas, ninguém te perguntará por feitiços nem rezas erradas.";
    

    Resp[0]=0;
    Resp[1]=1;
    Resp[2]=0;

}

function Quest3(){
    document.getElementById("Per").textContent = "Irmão, meu coração está em agonia... Alterei uma escritura de doação para aumentar as terras do mosteiro. Agora o bispo descobriu e ameaça entregar-me ao tribunal secular! Se confessar ao abade, serei punido com anos de penitência. Mas se o tribunal me pegar... ah, o fogo eterno me espera! Diga-me, pelo amor de Cristo: Como escapar da forca sem mentir à Santa Igreja?";
    document.getElementById("R1").textContent = "A)Confesse tudo ao abade agora! A penitência da Igreja é sua única salvação.";
    document.getElementById("R2").textContent = "B)Fuja do mosteiro esta noite. Enquanto livre, poderá buscar perdão em Roma.";
    document.getElementById("R3").textContent = "C)Destrua a escritura falsa. Sem prova, o bispo nada poderá fazer. A igreja não precisa saber dessa atitude.";
    

    Resp[0]=1;
    Resp[1]=0;
    Resp[2]=0;

}

function Quest4(){
    document.getElementById("Per").textContent = "Amigo, corrija meu erro! Queimei um livro de missas na praça, gritando: ‘A razão liberta mais que dogmas!’ Agora o bispo exige minha morte na fogueira. Se me retrato, traio o pensamento livre. Se não, ardo como herege. Diga-me: Há algum jeito de salvar minha pele sem calar a verdade que me queima por dentro?";
    document.getElementById("R1").textContent = "A)Defenda suas ideias perante o tribunal! A verdade precisa de mártires.";
    document.getElementById("R2").textContent = "B)Fuja para Genebra. Lá, protestantes protegerão sua coragem!";
    document.getElementById("R3").textContent = "C)Retrate-se publicamente. Alegue ‘loucura juvenil’ e jure obediência à Igreja.";
    

    Resp[0]=0;
    Resp[1]=0;
    Resp[2]=1;

}

function Quest5(){
    document.getElementById("Per").textContent = "Meu amigo, salve-me! Estudei os astros e vi: o Rei não viverá além do próximo eclipse... Um servo me denunciou. Agora, os guardas reais batem à minha porta! Se confirmo a previsão, serei esquartejado por traição. Se a nego, chamarão meu saber de fraude. Diga-me, pelo amor dos céus: Como sair desta cela sem perder a cabeça?";
    document.getElementById("R1").textContent = "A)Afirme que os astros não mentem! Um verdadeiro sábio não teme a verdade.";
    document.getElementById("R2").textContent = "B)Fuja da corte e busca abrigo em terras longínquas. Só longe do poder real escaparás da forca ou da fogueira.";
    document.getElementById("R3").textContent = "C)Negue tudo, queime seus mapas celestes e diga que foi enganado por espíritos malignos. Talvez aceitem tua confissão e te deixem vivo.";
    

    Resp[0]=0;
    Resp[1]=0;
    Resp[2]=1;

}

function Quest6(){
    document.getElementById("Per").textContent = "Não fui eu quem roubou o cálice da capela... Mas disseram que viram alguém da minha idade fugindo de noite. Chamaram os homens da guarda, me arrastaram da oficina, e agora... agora querem que eu confesse. Me bateram, me queimaram com ferro... e disseram que, se eu disser que fui eu, tudo acaba. Mas se eu disser, serei enforcado! E se eu não disser... vão continuar. Por tudo que é santo… O que devo fazer?";
    document.getElementById("R1").textContent = "A)Aguente firme. Deus sabe da tua inocência e pode enviar um milagre antes que seja tarde.";
    document.getElementById("R2").textContent = "B)cuse outro rapaz. Com sorte, desviarás a ira dos guardas e ganharás tempo para fugir.";
    document.getElementById("R3").textContent = "C)Confesse logo. É melhor morrer enforcado do que viver sendo torturado todos os dias.";
    

    Resp[0]=0;
    Resp[1]=0;
    Resp[2]=1;

}

function Quest7(){
    document.getElementById("Per").textContent = "Há vinte anos copio palavras que não são minhas… Faço confissões que nunca foram ditas, selos que jamais foram vistos, e sentenças que já nascem sujas. Ontem mesmo, o juiz me mandou escrever que um homem era culpado antes mesmo do julgamento começar. E o pior… o pobre nem falava nossa língua. Sinto o peso das mentiras que assinei. Mas se nego, me acusam de traição. Dizei-me então, com sinceridade: Existe algum caminho que me livre disso sem que eu vá parar na masmorra?";
    document.getElementById("R1").textContent = "A)Escreva cartas anônimas aos senhores da Igreja, denunciando os abusos. Se Deus quiser, alguém ouvirá.";
    document.getElementById("R2").textContent = "B)Continue calado e escreva o que mandarem. A verdade não alimenta a boca nem protege do açoite.";
    document.getElementById("R3").textContent = "C)Fuja com os registros e leve as provas a outra cidade. Talvez algum bispo justo te ouça… ou talvez morras no caminho.";
    

    Resp[0]=0;
    Resp[1]=1;
    Resp[2]=0;

}

function Quest8(){
    document.getElementById("Per").textContent = "Disseram que sou homem honrado, por isso me chamaram pra julgar o padeiro... Dizem que ele misturou pó de osso na farinha dos monges. Mas ele jura que é inocente… e tem três filhos pequenos que choram quando o veem preso. O senhor do vilarejo quer que eu diga ‘culpado’, e já mandou avisar que minha terra pode ser tomada se eu contrariá-lo. Mas... se eu condenar um inocente, que será da minha alma? Senhor, diga-me… Como pode um homem pobre decidir entre a justiça de Deus e a ira dos poderosos?";
    document.getElementById("R1").textContent = "A)Condene o padeiro. Se o senhor feudal quiser assim, resistir é cavar tua própria cova.";
    document.getElementById("R2").textContent = "B)Diga que não podes decidir. Deixe que o juiz decida sozinho e salve tua consciência.";
    document.getElementById("R3").textContent = "C)Declara o padeiro inocente. A verdade precisa de coragem, mesmo que ela te custe tudo.";
    

    Resp[0]=1;
    Resp[1]=0;
    Resp[2]=0;

}

function Quest9(){
    document.getElementById("Per").textContent = "Ai de mim! Usei ervas raras para salvar uma criança doente... Agora a família grita que é bruxaria! Querem que a Inquisição me julgue. Mas eu sou um homem da ciência, não um feiticeiro! Por piedade, diga-me: Como posso provar minha inocência sem desafiar a Santa Igreja?";
    document.getElementById("R1").textContent = "A)Peça julgamento pela Inquisição. Só assim, se absolvido, limpará seu nome perante Deus e o povo!";
    document.getElementById("R2").textContent = "B)Fuja da cidade esta noite. Enquanto vivo, poderá continuar a curar em segredo.";
    document.getElementById("R3").textContent = "C)Exija um exame perante doutores da universidade! A ciência refutará essas superstições.";
    

    Resp[0]=1;
    Resp[1]=0;
    Resp[2]=0;

}

function Quest10(){
    document.getElementById("Per").textContent = "Sou um pintor que retrata nus inspirados nos antigos mestres... Mas agora me acusam de obscenidade e querem me levar ao Colégio dos Costumes. Receio perder meu trabalho e minha reputação. Dizei-me, por favor: Como posso provar que minhas pinturas são arte e não simples provocação à moral?";
    document.getElementById("R1").textContent = "A)Convide estudiosos de humanidades para defenderem que segues a tradição dos antigos mestres e, assim, falarem em teu favor no Colégio.";
    document.getElementById("R2").textContent = "B)Retire do público as obras mais ousadas e apresente uma pintura religiosa para mostrar respeito às regras da Igreja.";
    document.getElementById("R3").textContent = "C)Busque o apoio de um protetor influente, quem sabe algum membro dos Médici, para interceder por ti junto aos juízes eclesiásticos.";
    

    Resp[0]=0;
    Resp[1]=1;
    Resp[2]=0;

}

function Quest11(){
    document.getElementById("Per").textContent = "Meu marido era mercador de tecidos — homem honrado, pagava tributos e ajudava até os monges com doações. Morreu de febre súbita, e logo um nobre tomou seus armazéns, dizendo que estavam em dívida com a coroa. Mas não há papel, nem selo, nem prova! Apenas a palavra dele... Procurei o juiz da cidade, mas ele nem me ouviu. Disse que uma mulher sozinha não pode falar contra um fidalgo. Dizei-me, por justiça: O que pode fazer uma viúva de boa família contra a vontade dos poderosos?";
    document.getElementById("R1").textContent = "A)Vá até a praça e grite sua história ao povo. Se todos ouvirem, talvez se levantem contra o nobre.";
    document.getElementById("R2").textContent = "B)Ofereça ao juiz um dote ou presente generoso. A moeda muitas vezes pesa mais que a verdade no tribunal.";
    document.getElementById("R3").textContent = "C)Procure um confessor influente. Se ele mover preces e cartas, o juiz pode reconsiderar por temor de pecar.";
    

    Resp[0]=0;
    Resp[1]=1;
    Resp[2]=0;

}

function Quest12(){
    document.getElementById("Per").textContent = "Por anos, costurei para donas ricas e humildes. Aprendi com minha mãe a usar agulhas não só pra fechar roupas, mas pra aliviar dores — espetando pontos certos do corpo, as dores de cabeça passavam, o estômago melhorava… Mas agora a filha do intendente disse que eu fiz encantamento nela. Disse que viu o demônio em meus olhos enquanto eu curava sua febre! Vieram me buscar com cordas, dizendo que nenhuma mulher honesta sabe tanto sobre o corpo assim… Senhor, diga-me com franqueza: O que pode uma costureira fazer pra escapar da fogueira?";
    document.getElementById("R1").textContent = "A)Diga que aprendeu os métodos com um monge antigo. Se associar teus saberes à Igreja, talvez te perdoem.";
    document.getElementById("R2").textContent = "B)Destrua tuas agulhas diante do povo e jura nunca mais tocar em corpo de ninguém. Mostre obediência e arrependimento.";
    document.getElementById("R3").textContent = "C)Nega tudo e desafia os acusadores. Se Deus estiver contigo, nada poderão provar.";
    

    Resp[0]=0;
    Resp[1]=1;
    Resp[2]=0;

}

function finalizarPartida(){

    tela3.style.height = Body.offsetHeight + "px";
    tela3.style.display = "inline-block";
    tela.style.display = "none";
    caixaBt.style.display = "none";

    pararX();
    pararY();
    EfWalking.pause();
    EfWalking.currentTime = 0;


for(let x;x<=5;x++){
    if(Inventario[x]=1){
        Score += 5;
    }else if(Inventario[x]=-1){
        Score -= 5;
    }
};
        
    if(Inventario[0]==1){
        document.getElementById("Item1").textContent = "HOMEM VITRUVIANO - CORRETO";
        document.getElementById("Item1").style.display = "flex";
    } else {}
    if(Inventario[1]==1){
        document.getElementById("Item2").textContent = "MONALIZA - CORRETO";
        document.getElementById("Item2").style.display = "flex";
    } else {}
    if(Inventario[2]==-1){
        document.getElementById("Item3").textContent = "MICROSCÓPIO - ERRADO";
        document.getElementById("Item3").style.display = "flex";
    } else {}
    if(Inventario[3]==1){
        document.getElementById("Item4").textContent = "LUPA - CORRETO";
        document.getElementById("Item4").style.display = "flex";
    } else {}
    if(Inventario[4]==-1){
        document.getElementById("Item5").textContent = "ODISSÉIA - ERRADO";
        document.getElementById("Item5").style.display = "flex";
    } else {}
    if(Inventario[5]==-1){
        document.getElementById("Item6").textContent = "ROMA - ERRADO";
        document.getElementById("Item6").style.display = "flex";
    }

        document.getElementById("ScoreFinal").textContent = Score;
        document.getElementById("ScoreFinal").style.display = "flex";
    
    EfFundo1.play();


};
