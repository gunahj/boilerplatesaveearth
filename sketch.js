
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball
var ground
var lground
var rground

function preload()
{
	
}

function setup() {
	createCanvas(800, 350);


	engine = Engine.create();
	world = engine.world;

	ground =new Ground(200,335,1200,7);
	lground =new Ground(650,305,5,50);
	rground =new Ground(550,305,5,50);

	var ball_options = {
		isStatic:false,
		restitution:0.3,
		friction:0.01,
		density:1.2,
	  }

	//Create the Bodies Here.
  ball = Bodies.circle(70,10,20,ball_options);
  World.add(world,ball);
  stroke("white");
  fill("white");

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.show();
  lground.show();
  rground.show();
  drawSprites();
  ellipse(ball.position.x,ball.position.y,25);
  keypressed();
}

function keypressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,{x:5,y:2},{x:2,y:1})
	}
}




