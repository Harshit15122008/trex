var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloudimage,cloudgroup;
var obstaclegroup,obstacles1,obstacles2,obstacles3,obstacles4,obstacles5,
    obstacles6;

function preload() {
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadImage("trex_collided.png");
  cloudimage=loadImage("cloud.png");
  obstacles1=loadImage("obstacle1.png");
  obstacles2=loadImage("obstacle2.png");
  obstacles3=loadImage("obstacle3.png");
  obstacles4=loadImage("obstacle4.png");
  obstacles5=loadImage("obstacle5.png");
  obstacles6=loadImage("obstacle6.png");
  groundImage = loadImage("ground2.png");
}

function setup() {
  createCanvas(600, 200);
  
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -2;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
}

function draw() {
  background(10);
  
  if(keyDown("space")) {
    trex.velocityY = -180;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  spawncloudes();
  drawSprites();
}
function spawncloudes() {
 if(frameCount % 60===0) {
 var cloud=createSprite(600,120,40,10);
   cloud.y=Math.round(random(80,120));
    cloud.addImage(cloudimage);
   cloud.scale=0.5;
   cloud.velocityX=-3;
   cloud.lifetime=200;
 
 }
}