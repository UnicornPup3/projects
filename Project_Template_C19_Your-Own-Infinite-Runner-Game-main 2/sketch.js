var cat, ground1, Rock, backgroundground;
var catImg, groundImg, RockImg, galaxyImg;
var catG, groundG, RockG, galaxyImg;
var catTopY = 200;
var catBottomY = 370;
var alreadyJumped = false;

function createCat() {
    if (World.frameCount % 410 == 0) {
        var catImg = loadImage("cat.png");
        cat = createSprite(60, 370, 10, 10);
        cat.addImage(catImg);
        cat.scale = 0.13;
        catG.add(cat);
    }
}

function createGround() {
    var groundImg = loadImage("ground.png");
    ground1 = createSprite(400, 420, 10, 10);
    ground1.addImage(groundImg);
    ground1.scale = 2;
    ground1.x = ground1.width /1;

}

function Rock() {
    var RockImg = loadImges("Rock.png");
    Rock = createSprite(200,200,10,10);
    Rock.addImage(galaxyImg);
    Rock.scale = 2;
    Rock.x = Rock.width /1;
}

function preload() {
    catG = new Group();
    Rock = new Group();
    createCat();
    createGround();
    createRock();
}

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background("galaxy.jpg");
    drawSprites();
    ground1.velocityX = -4
    if(ground1.x < 0){
        ground1.x = 600
        //ground1.x = ground1.width /2;

}
    console.log(`cat pos: ${cat.y}`);
    if (keyDown("space") && !alreadyJumped) {
        alreadyJumped = true;
        cat.velocityY = -12;
    }
    if (alreadyJumped && cat.velocityY < 0) {
        if (cat.y < catTopY) {
            cat.velocityY = 12;
        }
    }
    if (alreadyJumped && cat.velocityY > 0) {
        if (cat.y > catBottomY) {
            cat.velocityY = 0;
            alreadyJumped = false;
        }
    }
}