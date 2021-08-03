var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var stick1;
var stick2;
var stick3;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}


function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2; 

	var packageBody_options = {
		isStatic: true
	}

	stick1 = createSprite(width/2, 650, 200, 20);
	stick1.scale = 1.8;
	stick1.shapeColor= "red";

	stick2 = createSprite(206, 590, 20, 100);
	stick2.scale = 1.5;
	stick2.shapeColor = "red";

    stick3 = createSprite(594, 590, 20, 100);
	stick3.scale = 1.5;
	stick3.shapeColor = "red";


	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width, 10);
	groundSprite.shapeColor=color(255)

	//
	//Matter.Body.setStatic(false);

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
	World.add(world, packageBody);
	
	

	//Math.max(bodyA.restitution, bodyB.restitution)

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  
  drawSprites();
}


function Pressed() {
 if (keyPressed(DOWN_ARROW)) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
    
	var packageBody_options = {
		isStatic: false
	}

	packageBody.velocityY = 2;
     
	 var packageBody_options = {
        restitution: 3
	 }

     if (restitution * 3) {
		var packageBody_options = {
			isStatic: false
		}
	 }

	}


}



