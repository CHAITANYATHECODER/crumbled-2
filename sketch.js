
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground1;
var object;
var dustbinImage;
function preload()
{
	dustbinImage = loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground1 = new Ground(800,670,1800,20)
object = new Ball(200,450,70)
	Engine.run(engine);

  block1 = createSprite(width/2+300,505,280,10)
	block1.shapeColor = "red"
	block1.addImage(dustbinImage)

	
}


function draw() {
  rectMode(CENTER);
  background(255);
  ground1.display();
  object.display();
  drawSprites();
 
}
function keyPressed(){
if(keyCode===UP_ARROW){
Matter.Body.applyForce(object.body,object.body.position,{x:95,y:-195});


}


}



