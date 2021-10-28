//Observação1: Eu não criei uma "energyDrink" porquê eu não sabia como eu poderia usar ela no jogo, eu estava pensando em fazer ela deixar o jogador mais rápido por um curto período de tempo. Mas eu não sei como criar um timer para isso, nem como fazer o jogador voltar ao normal depois de certo tempo.
//Observação2: As instruções que foram passadas no projeto não coincidiram com a template que foi mandada, pelo o quê eu entendi, o código ja viria feito porém estaria comentado com várias opções, algumas erradas e outras certas e eu teria que descomenta-lo de maneira correta. Porém, quando eu abri a template só tinha algumas funções escritas (draw, preload e setup) então eu acabei fazendo o código inteiro do jogo. Não sei se era pra ser assim mas tudo bem, estou muito feliz que eu consegui. São 02:43 da manhã agora então eu vou dormir.

//Declara as variáveis
var bomb1,bomb2,bomb3,bombImg,coin1,coin2,coin3,coinImg,energyDrink,energyDrinkImg,path,pathImg,power,powerImg,runner,runnerImg,parede1,parede2,parede3,parede4;
var estadoJogo = "jogando";
var moedas = 0;


//Carrega as imagens e animações
function preload(){
  bomb1Img = loadImage("bomb.png");

  bomb2Img = loadImage("bomb.png");

  bomb3Img = loadImage("bomb.png");

  coinImg = loadImage("coin.png");

  energyDrinkImg = loadImage("energyDrink.png");

  pathImg = loadImage("path.png");

  powerImg = loadImage("power.png");

  runnerImg = loadAnimation("Runner-1.png","Runner-2.png");
}


//Cria as variáveis
function setup(){
  createCanvas(400,400);

  path = createSprite(200,200,150,100);
  path.addImage(pathImg);
  path.velocityY = 5;

  bomb1 = createSprite(205,-500,10,10);
  bomb1.addImage(bomb1Img);
  bomb1.scale = 0.1;
  bomb1.velocityY = 5;

  bomb2 = createSprite(305,-1400,10,10);
  bomb2.addImage(bomb2Img);
  bomb2.scale = 0.1;
  bomb2.velocityY = 5;

  bomb3 = createSprite(105,-900,10,10);
  bomb3.addImage(bomb3Img);
  bomb3.scale = 0.1;
  bomb3.velocityY = 5;

  runner = createSprite(200,360,30,30);
  runner.addAnimation("running", runnerImg);
  runner.scale = 0.05;
  

  coin1 = createSprite(205,-1000,10,10);
  coin1.addImage(coinImg);
  coin1.velocityY = 5;
  coin1.scale = 0.5;

  coin2 = createSprite(305,-1600,10,10);
  coin2.addImage(coinImg);
  coin2.velocityY = 5;
  coin2.scale = 0.5;

  coin3 = createSprite(105,-700,10,10);
  coin3.addImage(coinImg);
  coin3.velocityY = 5;
  coin3.scale = 0.5;

  parede1 = createSprite(200,0,400,5)
  parede1.visible = false;

  parede2 = createSprite(200,400,400,5)
  parede2.visible = false;

  parede3 = createSprite(50,200,5,400)
  parede3.visible = false;

  parede4 = createSprite(350,200,5,400)
  parede4.visible = false;

}


//Desenha as coisas na tela
function draw(){
  background(0);

//Declaram as condicionais

if(estadoJogo === "jogando"){
  path.velocityY = 5;
  runner.visible = true;
  bomb1.visible = true;
  bomb2.visible = true;
  bomb3.visible = true;
  path.visible = true;
  bomb1.velocityY = 5;
  bomb2.velocityY = 5;
  bomb3.velocityY = 5;
  coin1.velocityY = 5;
  coin2.velocityY = 5;
  coin3.velocityY = 5;
  coin1.visible = true;
  coin2.visible = true;
  coin3.visible = true;

  
}

//Movimentação do cenário e dos objetos do jogo
if(path.y > 400){
  path.y = path.width / 10;
}

if(bomb1.y > 420){
  bomb1.y = -500;
}

if(bomb2.y > 420){
  bomb2.y = -1400;
}

if(bomb3.y > 420){
  bomb3.y = -900;
}

if(coin1.y > 420){
  coin1.y = -1000;
}

if(coin2.y > 420){
  coin2.y = -1600;
}

if(coin3.y > 420){
  coin3.y = -700;
}

//Movimentação do jogador
if(keyDown("D")){
  runner.x += 5;
}

if(keyDown("A")){
  runner.x -= 5;
}

if(keyDown("W")){
  runner.y -= 2;
}

if(keyDown("S")){
  runner.y += 5;
}

//Se o jogador tocar em alguma das bombas ele perde e o jogo se prepara para reiniciar
if(runner.isTouching(bomb1) && estadoJogo === "jogando"){
  estadoJogo = "derrota";
  path.visible = false;
  runner.visible = false;
  bomb1.visible = false;
  bomb2.visible = false;
  bomb3.visible = false;
  bomb1.y = -500;
  bomb2.y = -1400;
  bomb3.y = -900;
  bomb1.velocityY = 0;
  bomb2.velocityY = 0;
  bomb3.velocityY = 0;
  coin1.visible = false;
  coin2.visible = false;
  coin3.visible = false;
  coin1.velocityY = 0;
  coin2.velocityY = 0;
  coin3.velocityY = 0;
  coin1.y = -1000;
  coin2.y = -1600;
  coin3.y = -700;
  runner.x = 200;
  runner.y = 360;
}

if(runner.isTouching(bomb2) && estadoJogo === "jogando"){
  estadoJogo = "derrota";
  path.visible = false;
  runner.visible = false;
  bomb2.visible = false;
  bomb3.visible = false;
  bomb1.visible = false;
  bomb1.y = -500;
  bomb2.y = -1400;
  bomb3.y = -900;
  bomb1.velocityY = 0;
  bomb2.velocityY = 0;
  bomb3.velocityY = 0;
  coin1.visible = false;
  coin2.visible = false;
  coin3.visible = false;
  coin1.velocityY = 0;
  coin2.velocityY = 0;
  coin3.velocityY = 0;
  coin1.y = -1000;
  coin2.y = -1600;
  coin3.y = -700;
  runner.x = 200;
  runner.y = 360;
}

if(runner.isTouching(bomb3) && estadoJogo === "jogando"){
  estadoJogo = "derrota";
  path.visible = false;
  runner.visible = false;
  bomb3.visible = false;
  bomb2.visible = false;
  bomb1.visible = false;
  bomb1.y = -500;
  bomb2.y = -1400;
  bomb3.y = -900;
  bomb1.velocityY = 0;
  bomb2.velocityY = 0;
  bomb3.velocityY = 0;
  coin1.visible = false;
  coin2.visible = false;
  coin3.visible = false;
  coin1.velocityY = 0;
  coin2.velocityY = 0;
  coin3.velocityY = 0;
  coin1.y = -1000;
  coin2.y = -1600;
  coin3.y = -700;
  runner.x = 200;
  runner.y = 360;
}
//Condição para resetar o jogo
if(keyDown ("R") && estadoJogo === "derrota"){
  estadoJogo = "jogando";
  moedas = 0;
}

//Se o jogador tocar nas moedas ele ganha 1 moeda
if(runner.isTouching(coin1)){ 
  moedas += 1;
  coin1.y = -1000;
}

if(runner.isTouching(coin2)){
  moedas += 1;
  coin2.y = -1600;
}

if(runner.isTouching(coin3)){
  moedas += 1;
  coin3.y = -700;
}

//Impede o jogador de sair da tela e da rua
if(runner.y < 0){
  runner.y = runner.y + 6;
}

if(runner.y > 390){
  runner.y = runner.y - 6;
}

if(runner.x > 330){
  runner.x = runner.x - 6;
}

if(runner.x < 80){
  runner.x = runner.x + 6;
}

//Textos
text("Você perdeu, pressione (R) para recomeçar.", 80,200);
text(moedas,250,220);
text("Seu total de moedas:", 130,220);


drawSprites();
}
