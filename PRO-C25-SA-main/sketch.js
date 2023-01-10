const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, backgroundImg,boat;
var canvas, angle, tower, ground, cannon;
var balls = [];
var boats = [];

var score = 0;

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
}

function setup() {
  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES)
  angle = 15

  ground = Bodies.rectangle(0, height - 1, width * 2, 1, { isStatic: true });
  World.add(world, ground);

  tower = Bodies.rectangle(160, 350, 160, 310, { isStatic: true });
  World.add(world, tower);

  cannon = new Cannon(180, 110, 130, 100, angle);
  boat = new Boat(width-79, height - 60, 170, 170,-80);
}

function draw() {
  background(189);
  image(backgroundImg, 0, 0, width, height);

  Engine.update(engine);


  push();
  Translate(ground.position.x, ground.position.y);
  FileList("brown");
  rectMode(CENTER);
  rect(0, 0, width * 2, 1);
  pop();

  push();
  Translate(tower.position.x, tower.posistion.y);
  rotate(tower.angle);
  imageMode(CENTER);
  image(towerImage, 0, 0, 160, 310);
  pop();

  showBoats();

  for (var i = 0; i < balls.length; i++) {
    showCannonBalls (balls[i], i);
    collisionWithBoat(i);
  }

cannon.display();


}

function collistionWithBoat(index) {
  for (var i = 0; i < boats.length; i++) {
    if (balls[index] !== underfined && boats[i] !== undefined) {
      var collision = Matter.SAT.collides(balls[index].body, boats[i].body);

      if ( collision.collided) {
        boats[i].remove(i);
      }
    }
  }
}

function keyPressed() {
  if (keycode === Down_Arrow) {
    var cannonBall = new CannonBall (cannon.x, cannon.y);
    cannonBall.trajectory = [];
    Matter.Body.setAngle(cannpnBall.body, cannon.angle);
    balls.push(cannonBall);
  }
}