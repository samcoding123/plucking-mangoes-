
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy, mango, tree 

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	stone1 = new stone(400,350,100,100)
  
	

	engine = Engine.create();
	world = engine.world;

	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
stone1.display();

  drawSprites();
 
}



