const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ball;
var ground;

function setup() {
  var canvas =  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  var ground_options ={
    isStatic:true
  }
  var ball_options ={
    restution:1.0
  }
  ball=Bodies.circle(200,100,20,ball_options);
  World.add(world,ball);
  //ball=new Box(200,300,50,50);
  //box2=new Box(240,100,50,100);
  ground=new Ground(200,height,400,20);
  /* var object_options = {
    isstatic:2
  }*/
 // object = Bodies.rectangle(200,100,50,50);
  //World.add(world,object);
}

function draw() {
  background(0);  
  /*rectMode(CENTER);
  rect(object.position.x,object.position.y,50,50);*/
  Engine.update(engine);
  //rectMode(CENTER);
  //rect(ground.position.x,ground.position.y,400,20);
 /* console.log(box2.body.position.x);
  console.log(box2.body.position.y);
  console.log(box2.body.angle);*/
  //box1.display();
  //box2.display();
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
  //ground.display();
  drawSprites();
}