var seaImg, shipImg1;

var ship, sea;

function preload(){

  seaImg = loadImage ("sea.png");
  shipImg1 = loadAnimation ("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  

}

function setup(){
  createCanvas(400,400);
  
  sea = createSprite(300,300);

  ship = createSprite(200,300);

  sea.addImage(seaImg);
  
  ship.addAnimation("ship",shipImg1);

  ship.scale = 0.2

  sea.scale = 0.4
}  

function draw() {
  background("blue");
    drawSprites();
 
  sea.velocityX = 2
 
  //código para redefinir O plano de fundo
if(sea.x < 0){
  sea.x = sea.width/2;
 }
}
