const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    //platform = new Ground(150, 305, 300, 170);

    bird = new Bird(200,200);
    box1=new Box(800,250,50,50) 
    box2=new Box(850,250,50,50) 
    box3=new Box(900,250,50,50)
    box4=new Box(875,200,50,50)
    box5=new Box(825,200,50,50)
    //box6=new Box(875,200,50,50)
    //box7=new Box(875,200,50,50)
    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:200});
}

function draw(){
    background(0);

    //text(mouseX + ","+ mouseY, 30,45 )
    Engine.update(engine);
   
    bird.display();
    //platform.display();
    //log6.display();
  //  slingshot.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
     if(keyCode===32){
         slingshot.attach(bird.body);
     }
}