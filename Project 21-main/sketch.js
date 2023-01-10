var ball, leftGround,rightGround,groundObject;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	  var ball_options={
		  isStatic:false,
		  restitution:0.3,
		  friction:0,
		  density:1.2
	  }

	  ball = Matter.Bodies.circle(260,100,20,ball_options);
	  Matter.World.add(world,ball);
	  groundObject = new Ground(width/2,670,width,20);
	  leftGround = new Ground(1100,600,20,120);
	  rightGround = new Ground(1350,600,20,120);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,20,20);
  groundObject.display();
  leftGround.display();
  rightGround.display();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{
			x:95,y:-85
		});
	}
}


