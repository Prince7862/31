
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine, world;
var division1,division2,plinkos
,plinkos2,plinkos3,plinkos4,
division3,division4,
division5,particle,division6

function preload() {
}

function setup(){
    var canvas = createCanvas(600,796);
    engine = Engine.create();
    world = engine.world;

	

    ground = new Ground(250,780,796,10);
    division1 = new Division(60,625,10,300); 
    division2 = new Division(160,625,10,300);
    division3 = new Division(260,625,10,300);
    division4 = new Division(360,625,10,300);
    division5 = new Division(460,625,10,300);
    division6 = new Division(560,625,10,300);
    particle = new Particle(100,50,10,10);
   

}

var divisionHeight = 300;

var particles = [];
var plinkos = [];
var divisions = [];


function draw(){
    background(0);
    Engine.update(engine);
    
    ground.display();
  division1.display();
    division2.display();
    division3.display();
    division4.display();
    division5.display();
    division6.display();
    particle.display();
 
    if(frameCount % 60 == 0){
        particles.push(new Particle(random(width/2-10,width/2+10),10,10))
       // console.log(particles.length)
    }

    for(var j = 0; j < particles.length; j++){
        particles[j].display();
        console.log(particles[j])
    }
}

