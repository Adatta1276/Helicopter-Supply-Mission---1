var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var PB_options;
var BS1,BS2,BS3,drop_arrow; 

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

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6;

	BS1 = createSprite(250,610,10,100);
	BS1.shapeColor = "red";
	 
	BS2 = createSprite(375,660,250,10);
	BS2.shapeColor = "red";

	BS3 = createSprite(500,610,10,100);
	BS3.shapeColor = "red";

	/* drop_arrow = createSprite(470,340,1.5,80);
	drop_arrow.rotation = 18;
	drop_arrow.shapeColor = "white"; */

	

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);


	engine = Engine.create();
	world = engine.world;


	

	PB_options = {

		'restitution' : 0.0,
		'isStatic' : true
	}
	 packageBody = Bodies.circle(width/2 , 200 , 5,PB_options );
	World.add(world, packageBody); 
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  packageSprite.x = packageBody.position.x;
  packageSprite.y = packageBody.position.y;
  drawSprites();

  keyPressed(); 
 
  console.log(packageSprite.x);//370
  console.log(packageSprite.y);//640
}



function keyPressed(){
   if (keyCode === DOWN_ARROW) { 
	   Matter.Body.setStatic(packageBody,false); 
   }
}
