var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400,100,80,50);
  fixedRect.shapeColor = "green";
  fixedRect.debug = false;
  fixedRect.velocityY = 10
  movingRect = createSprite(400,800,80,50);
  movingRect.shapeColor = "green";
  movingRect.debug = false;
  movingRect.velocityY = -10
  edges = createEdgeSprites();
}

function draw() {
  background(0,0,0); 

  movingRect.bounceOff(edges);
  fixedRect.bounceOff(edges);

 if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2&&fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2){
movingRect.velocityX = movingRect.velocityX*(-1)
fixedRect.velocityX = fixedRect.velocityX*(-1)
movingRect.shapeColor = "red"
fixedRect.shapeColor = "red"
 }

 if(movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2&&fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2){
movingRect.velocityY = movingRect.velocityY*(-1)
fixedRect.velocityY = fixedRect.velocityY*(-1)
 }
else{
movingRect.shapeColor = "green"
fixedRect.shapeColor = "green"
}
  drawSprites();
}