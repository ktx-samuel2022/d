
var dados = ["line", 'rain', 'animal_migration', 'smiley_face',"grass"];

var dadosPT = ["linha", "chuva", "migração", "rosto sorridente", "grama"];                

//declaração de variáveis
var desenhoPlayer = '';
var pontos = 0;
var tempo = 0;
//gera um número aleatório entre 0 e 5
var indice = Math.floor(Math.random()*5);
//seleciona um desenho de maneira aleatória
var desenho = dados[indice];
//guarda a tradução em português
var desenhoPT = dadosPT[indice];

//exibe o desenho a se fazer
document.getElementById("desenho2").innerHTML = desenhoPT;

function preload(){
    //carrega o modelo de classificação
   classifier = ml5.imageClassifier("DoodleNet");
}

function setup(){
    canvas = createCanvas(windowWidth,400)
    background("white")
    //chama a função classificar ao soltar o mouse
 canvas.mouseReleased(classificar)
}

//cria a função classificar
function classificar(){
    classifier.classify(canvas, gotResult)
}

//cria a função gotResult
function gotResult(e, result){
    if(e){
        console.log(e)
    }else{
        desenhoPlayer = result[0].label

        document.getElementById("dese").innerHTML = desenhoPlayer
        document.getElementById("precisao").innerHTML = Math.round(result[0].confidence.toFixed(2)*100)  
    }
}
function draw(){
    canvas.position(0,150)
    
    if(mouseIsPressed){
        line(pmouseX, pmouseY, mouseX, mouseY)
    }
    //checa se o desenho do jogador é o desenho aleatório e marca os pontos
    if(desenhoPlayer == desenho){    
        pontos++;
        document.getElementById("score").innerHTML = pontos;
      attCanvas()
    }
       //aumenta o tempo
    tempo++
    //mostra o tempo
   document.getElementById("tempo").innerHTML = tempo
    //checa se tempo é maior que 400 e atualiza o canvas
    if(tempo > 1000){
        attCanvas()
    }
   
} 

function attCanvas(){
    background("white"); 
    tempo = 0;
    //gera um número aleatório
     indice = Math.floor(Math.random()*5);
    //seleciona um desenho com o índice aleatório
    desenho = dados[indice];
    //pega a tradução em português da lista
    desenhoPT = dadosPT[indice];
    //mostra o desenho aleatório em português
    document.getElementById("desenho2").innerHTML = desenhoPT;
}

function limpar(){
    background("white")
}