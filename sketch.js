var jaxon_running
var groundImg , ground
function preload(){
  
  jaxon_running = loadImage("Runner-1.png", "Runner-2.png")
  groundImg = loadImage("path.png")
}

function setup(){
  createCanvas(400,400);
  
  

  ground = createSprite(200,200,50,80);
  ground.addImage(groundImg);
  ground.velocityY = 4;
  ground.scale = 1.2;

  jaxon = createSprite(200,200,20,50);
  jaxon.addImage(jaxon_running);
  jaxon.scale = 0.05

}

function draw() {
  background(0);

  if(ground.y > 400){
    ground.y = height/2
  }

  jaxon.x = World.mouseX

  drawSprites();

}
