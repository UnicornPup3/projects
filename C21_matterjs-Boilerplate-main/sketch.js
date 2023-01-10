const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var ground, topWall, leftWall, rightWall, ball;


let engine;
let world;


function setup() {
  createCanvas(400, 400);
  engine = Engine.create();

  world = engine.world;
  ground = new Ground(200, 390, 400, 20);
  topWall = new Ground(200, 10, 400, 20);
  leftWall = new Ground(10, 200, 20, 400);
  rightWall = new Ground(390, 200, 20, 400);
  ball.Bodies.circle(3,4)
  var ball_options={
    isStatic: false,
    restitution:0.3,
    friction:0,
    density:1.2
  }
  var a = {
    restitution: 0.95
  }
  //////World.add(world);
  rectMode(CENTER);
  ellipseMode(RADIUS);

}

function draw() {
  background(51);
  Engine.update(engine);
  ground.display();
  topWall.display();
  leftWall.display();
  rightWall.display();
  ball.display();
}

