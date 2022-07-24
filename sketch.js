
var trex ,trex_running;

var ground;

var groundimage;

var invisground;

var cloudimage;

function preload(){
  
trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");

groundimage = loadImage("ground2.png");

cloudimage = loadImage("cloud.png");
}

function setup(){
  createCanvas(600,200)
  
  //console.log(random(1,100));
  var rand = Math.round(random(1, 100));
  console.log(rand);
  //create a trex sprite
  trex = createSprite(50, 160, 20, 50);
  trex.addAnimation("running", trex_running)
  trex.scale = 0.5;
  ground = createSprite(10, 180, 600, 20);
  ground.addImage(groundimage);
  ground.velocityX = -3;
  invisground = createSprite(200, 185, 400, 10)
  invisground.visible = false
}

function draw(){
  background("white")
  spawnClouds();
  console.log(frameCount);
  if (ground.x < 600) {
    ground.x = ground.width/2
  }
  

if (keyDown("SPACE")&&trex.y>150) {
  trex.velocityY = -10;
  

}
trex.velocityY = trex.velocityY+0.5


trex.collide(invisground);
drawSprites();
}

function spawnClouds() {
  if(frameCount%60===0) {
cloud = createSprite(600, 100, 40, 10)
cloud.velocityX = -3
cloud.addImage(cloudimage);
cloud.scale = 0.7
cloud.y = Math.round(random(10,60));
}
}