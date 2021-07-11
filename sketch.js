const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, ball;
var b1, b2, b3;
var dustbin, dustbinImg;

function preload()
{
	dustbinImg = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1200, 400);
    engine = Engine.create();
	world = engine.world;
    angleMode(RADIANS);

    ground = new Ground(width/2, height-30, width, 10);
    ball = new Ball(100, 200);
    b1 = new Basket(1015, 350, 140, 10, PI*2);
    b2 = new Basket(916, 285, 150, 10, PI/2);
    b3 = new Basket(1085, 285, 150, 10, PI/2);
    dustbin = createSprite(1020, 282, 20, 20);
    dustbin.addImage("dustbinIMAGE", dustbinImg);
    dustbin.scale = 0.5;
    
	Engine.run(engine);  
}


function draw() {
	background(255);
    rectMode(CENTER);
    textSize(30);
    text("Throw the paper into dustbin", 450, 70);
    textSize(15);
  //  text("Tip: Hold the UP ARROW KEY for better throw", 440, 350);
    text("Press SPACEBAR for another chance", 470, 350);

    spacebarPressed();
    ground.display();
    ball.display();
    drawSprites();
  // b1.display();
    //b2.display();
    //b3.display();
  
    
   // keyPressed();
   
 
}

function keyPressed(){
   if(keyCode === UP_ARROW){
       Matter.Body.applyForce(ball.body, ball.body.position,{x:107, y:-97.7});
   }
}

function spacebarPressed(){
    if(keyDown("space")){
        Matter.Body.setPosition(ball.body, {x: 100, y: 200})
    }
}
