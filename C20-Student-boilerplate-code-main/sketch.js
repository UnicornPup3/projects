
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var ground2;
var ball2;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
   ground2 = Bodies.rectangle(300,200,200,10,ground_options);
   World.add(world,ground2)
   ground = Bodies.rectangle(200,390,400,20,ground_options);
  ball2 = Bodies.circle(300,10,20,ball_options);
  World.add(world,ground);
  World.add(world,ball2);
  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
  rect(ground2.position.x,ground2.position.y,200,10);
  ellipse(ball2.position.x,ball.position.y,20);
}

