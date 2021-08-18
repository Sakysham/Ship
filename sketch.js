var shipImg,ship,ocean,seaImage,sea;
function preload() {
  
  shipImg=loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png"); 
 seaImage=loadImage("sea.png");

}
function setup() {
  createCanvas(2000,2000);
  
  ocean = createSprite (400,100,200,10);
  ocean.scale=1
  ocean.addAnimation ("sea.png",seaImage);
  ocean.x=ocean.width/2
  ocean.velocityX=-2

  ship=createSprite(70,390,20,20)
  ship.addAnimation("ship",shipImg)
  ship.scale=0.2 

  sea=createSprite(10,400,600,10);
  sea.x=sea.width/2
  sea.velocityX=-2;
  sea.visible=false 
}
function draw() {
  
  background("white")
  
  console.log(ship.y)
  if (keyDown("space")) {
  ship.velocityY = -10;
 }

  ship.velocityY = ship.velocityY + 0.8

 if (sea.x < 0) {
  sea.x = sea.width / 2;
 }
 if (ocean.x < 0) {
  ocean.x = ocean.width / 2;
 }

 ship.collide(sea);
 drawSprites() 
  
}  
  