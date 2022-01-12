var ship , shipImg;
var obstacle1Img , obstacle2Img;
var obstacle , obstacleGroup;
var ground , groundImg;
var gameState;
var score;

function preload(){
  shipImg=loadImage("spaceship.png")
  obstacle1Img=loadImage("obstacle1.png")
  obstacle2Img=loadImage("obstacle2.png")
  groundImg = loadImage("background.png")
}


function setup() {
  createCanvas(800,400);
  ground=createSprite(400,200 , 800 , 400);
  ground.addImage(groundImg);
  ground.scale=2.5;

  ship=createSprite(400, 350, 50, 50);
  ship.addImage(shipImg);
}

function draw() {
  background(0);
  
  if(keyDown("right")){
    ship.x+=7;
  }
  if(keyDown("left")){
    ship.x-=7;
  }
  if(keyDown("up")){
    ship.y-=7;
  }
  if(keyDown("down")){
    ship.y+=7;
  }
  drawSprites();
}