
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var dustbinImage
var paper;
var paperimage;
function preload(){
paperimage=loadImage("paper.png");
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
var paperoptions={
	isStatic:false,
	restitution:0.1,
	density:1.3,
	friction:0.5
}
	paper=Bodies.circle(200,620,15,paperoptions);
	World.add(world, paper)

}


function draw() {
	Engine.update(engine)
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  
	//ellipse(paper.position.x,paper.position.y,20,20)
imageMode(CENTER)
image(paperimage,paper.position.x,paper.position.y,45,45)
dustbinObj.display();
}
function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paper,paper.position,{x:50,y:-70});
  
	}
}

