const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var ground, topWall,leftWall, rightWall;
var ball


let engine;
let world;


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
  ground = new Ground(200,390,400,20);
  topWall = new Ground(200,10,400,20);
leftWall = new Ground(10,200,20,400);
rightWall = new Ground(390,200,20,400);
var a = {
  restitution: 0.95
}
ball = Bodies.circle(200,100,20,a);
World.add(world,ball);
  rectMode(CENTER);
  ellipseMode(RADIUS);

}

function draw() 
{
  background(51);
  Engine.update(engine);
  ground.display();
  topWall.display();
leftWall.display();
rightWall.display();
}

