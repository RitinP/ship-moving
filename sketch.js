var seaImg ,shipMainImg;
var seaImgSpr,shipSpr;
function preload(){
seaImg=loadImage("sea.png");
shipMainImg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");

}

function setup(){



  createCanvas(600,600)
seaImgSpr= createSprite(200,180,400,20);
seaImgSpr.addImage(seaImg);
if(seaImgSpr.x<0)
{
  seaImgSpr.x=seaImgspr.width/2;
}

shipSpr = createSprite(300, 200, 80, 30);
shipSpr.addAnimation("Ship",shipMainImg);
shipSpr.scale = 0.5
  
}

function draw() {
  background("blue");
 drawSprites();
 
}