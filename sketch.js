var canvas;
var block1,block2,block3,block4;
var ball, edges;
var sound;
var bgImg
function preload(){
    // load sound here
        sound = loadSound("music.mp3")
        bgImg = loadImage("p221.jpg")
}


function setup(){
    canvas = createCanvas(835,600);


    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue";

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "orange";

    //create two more blocks i.e. block3 and block4 here

block3 = createSprite(515,580,200,30);
    block3.shapeColor = "yellow";

    block4 = createSprite(735,580,200,30);
    block4.shapeColor = "pink";

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);

}

function draw() {

    background(bgImg);
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    if(keyCode === 32){
        sound.play();
        ball.velocityX=4
        ball.velocityY=4
    }

    if(ball.isTouching(block1)){
        ball.shapeColor = "blue";
        ball.bounceOff(block1);
    }

    if(block2.isTouching(ball)){
        ball.shapeColor = "orange";
        ball.bounceOff(block2);
    }

    if(block3.isTouching(ball)){
        ball.shapeColor = "yellow";
        ball.bounceOff(block3);
    }

    if(block4.isTouching(ball)){
        ball.shapeColor = "pink";
        ball.bounceOff(block4);
    }

    drawSprites();
}
