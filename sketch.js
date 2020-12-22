
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

function preload(){

}
function setup(){
    createCanvas(1500, 500);
	engine = Engine.create();
    world = engine.world;
    Engine.run(engine)

    ball=new ball(10,5,50)

    base1= new Base(700,300,150,20)
    box1= new Box(620,100)
    box2=new Box(650,100)
    box3=new Box(680,100)
    box4=new Box(710,100)
    box5= new Box(740,100)
    box7=new Box(650,20)
    box8=new Box(680,20)
    box10=new Box(680,2)
    box11=new Box(710,2)
    sling= new Slingshot(ball.body,{x:150,y:370})
Engine.run(engine)
}

function draw(){
    background("red")
   
    ball.display();
    sling.display();
    base1.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box7.display();
    box8.display();
    box10.display();
    box11.display();
}
function mouseReleased(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    sling.fly();
}