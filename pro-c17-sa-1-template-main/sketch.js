var box1, box2
function setup() 
{
  createCanvas(400, 400);
  box1 = new Box(200,200,30,30,2);
  box2 = new Box(20,20,30,30,2);
}

function draw() 
{
  background(220);
  box1.show();
  box2.show();
  box1.move();
  box2.move(); 
}

