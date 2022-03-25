//PASSO 1 CRIAR AS VARIÁVEIS
var solo, soloimagem;
var trex, trex_correndo;

function preload() {
    //carregar a imagem do solo
    soloimagem = loadImage("solo.png");
    //carregar a animação do t-rex


}

function setup() {

    createCanvas(600, 200);
    //criar a sprite solo;
    solo = createSprite(300, 190, 600, 20);
    //adicionar a imagem para a sprite
    solo.addImage(soloimagem);
    //dar velocidade ao solo
    solo.velocityX = -3;




}

function draw() {
    background("white");
    //reiniciar a posição do solo automaticamente

    drawSprites();

}