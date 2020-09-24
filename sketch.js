
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,box1,
	box2,box3,paperObject,
	paperIMG,paperSprite,
	dustbinIMG,dustbinS;

function preload(){

dustbinIMG = loadImage("images/dustbingreen.png")
}

function setup() {
	createCanvas(1800, 700);
   
	
	
	dustbinS = createSprite(1100,330,20,20);
    dustbinS.addImage(dustbinIMG);
    



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	//dustbin has been created 
	box1 = Matter.Bodies.rectangle(1237,327,20,330,{isStatic:true});
	World.add(world,box1);
	
	box2 = Matter.Bodies.rectangle(1100,480,297,20,{isStatic:true});
	World.add(world,box2);
	
	box3 =  Matter.Bodies.rectangle(961,327,20,330,{isStatic:true});
	World.add(world,box3);
	//var options for paperball
	var paper_options = {
		isStatic:false,
		restitution:0.3,
		friction:0.5,
		density:2.1
	}
		
		//paperball has been created and has been added to world
	ball1 = new ball(100,200,20,paper_options)
	
  	ground = Matter.Bodies.rectangle(400,500,2800,20,{isStatic:true});
    World.add(world,ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
 
  background(255);

 Engine.update(engine);
 
 
ball1.display(); 
dustbinS.display()

 
 
 
 rectMode(CENTER)
 
 rect(ground.position.x,ground.position.y,2800,30);
 rect(box1.position.x,box1.position.y,20,330);
 rect(box2.position.x,box2.position.y,297,20);
 rect(box3.position.x,box3.position.y,20,330);
 
 

 
}

function keyPressed(){
 if(keyCode === UP_ARROW){


Matter.Body.applyForce(ball1.body,ball1.body.position,{x:85,y:-85}); 



 }
} 





