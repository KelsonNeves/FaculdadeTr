

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


BtJg.addEventListener("click", function(){
    playMsc.currentTime = 0;
    playMsc.play();
    abertura.style.display = "none";
    BtJg.style.display = "none";
});


let posicaox = -600;
let posicaoy = -600;
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
    {x: -780, y: -1165, width: -50, height: 380},
    {x: -690, y: -947, width: 70, height: 70},
    {x: -775, y: -1155, width: 10, height: 180},
    {x: -500, y: -950, width: -50, height: 300},
    {x: -500, y: -1138, width: -50, height: 140},
    {x: -500, y: -1336, width: -50, height: 170},
    {x: -780, y: -1325, width: -50, height: 120},
    {x: -780, y: -742, width: -50, height: 80},
    {x: -840, y: -675, width: 50, height: 30},
    {x: -694, y: -846, width: 80, height: 150},
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


BtJg.style.left = (TamanhoTelax/2)-(BtJg.offsetWidth/2)+ 5 +"px";
moverArea.style.left = (TamanhoTelax/2)-(TamanhomoverAreax/2)+ 5 +"px";
moverArea.style.top = TamanhoTelay + "px";
caixaBt.style.height = Areay - TamanhoTelay+ "px";
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
    mapa.style.height = 2000+(tela.offsetHeight) + "px";
    mapa.style.width = 2000+(tela.offsetWidth) + "px";
    mapa.style.left = posicaox +"px";
    mapa.style.top = posicaoy +"px";
    Personagem.style.left = (Areax/2) - (Personagem.offsetHeight/2) +  "px";
    Personagem.style.backgroundImage = "url('IMG/PER1parado.webp')";
    Personagem.style.top = (tela.offsetHeight/2-100) +  "px";
    document.getElementById("CxClique").style.left = Areax/2-document.getElementById("CxClique").offsetWidth/2 + 5+  "px";

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

let clique1 = -1;
function Clique1(){

    if(clique1 == -1){
        tela.style.height = tela.offsetHeight - 200 + "px";
        clique1 = 1;
        caixaBt.style.height = Areay - tela.offsetHeight + "px";
        moverArea.style.display = "none";
        
        document.getElementById("Tela2").style.display = "flex";
        document.getElementById("Tela2").style.top = "-40px";
        
    } else {
        moverArea.style.display = "flex";
        tela.style.height = (Areay - 200) + "px";
        clique1 = -1
        caixaBt.style.height = Areay - tela.offsetHeight + "px";
        
        document.getElementById("Tela2").style.display = "none";
        document.getElementById("Tela2").style.top = "10px";
    } 
};

function Clique2(){
    alert("2");
};
