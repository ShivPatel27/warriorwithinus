var engine, world;

var backgroundImg;


var zombie, zombierunning, zombiedie;
var warrior, warriorrunning,warriorattack, warriordie;
var zombiesGroup;
var ground;
var backgroundImg;
var invisiblewall;
var groundImg;

var score = 0;

function preload() {
   
     zombierunning = loadAnimation("zombie1.png","zombie2.png","zombie3.png","zombie4.png","zombie5.png","zombie6.png","zombie7.png","zombie8.png","zombie9.png");
     warriorrunning = loadAnimation("warrior1.png","warrior2.png","warrior3.png","warrior4.png","warrior5.png","warrior6.png","warrior7.png");
     zombiedie = loadAnimation("zombiedie1.png","zombiedie2.png","zombiedie3.png");

    warriorattack = loadAnimation("warriorattack1.png","warriorattack2.png","warriorattack3.png","warriorattack4.png","warriorattack5.png");
    warriordie = loadAnimation("warriordie1.png","warriordie2.png","warriordie3.png","warriordie4.png");
    backgroundImg = loadImage("daybg.jpg");
    groundImg = loadImage("ground.png");
}

function setup(){
    createCanvas(1000,600);

    

    invisiblewall = createSprite(950,300,20,600);
    invisiblewall.visible = false; 
   
    warrior = createSprite(800,480,20,20);
    warrior.addAnimation("warriorisrunning", warriorrunning);
   
    
    zombiesGroup = createGroup();
    
   
    warrior.scale = 0.8;

    ground = createSprite(500 , 460, 1000, 70);
    ground.addImage(groundImg);
    ground.velocityX = 3;
    
   
   
}

function draw(){
  
        background(backgroundImg);

        noStroke();
        textSize(35)
        fill("black");
        text("Score  " + score, width-300, 50);

        zombiesGroup.collide(invisiblewall);
        warrior.collide(invisiblewall);

        if(ground.x > 600){
            ground.x = 500;
        }

        
        spawnZombies();
       
    
   drawSprites();
}

function spawnZombies(){

    if (frameCount % 120 === 0) {
    zombie = createSprite(100,500,20,20);
    zombie.addAnimation("running", zombierunning);
    zombie.velocityX = 1;
    zombie.depth = warrior.depth;
    zombie.scale = 0.5;
    zombie.x = Math.round(random(0, 120));
    zombie.lifetime = 1000;     
    zombiesGroup.add(zombie);
      }
}
function keyPressed(){
    if(keyCode === 32){
        warrior.addAnimation("warriorisrunning", warriorattack);
    if(warrior.isTouching(zombiesGroup)){
        zombiesGroup.destroyEach();
        score = score+10;

    }
    }else{
        warrior.addAnimation("warriorisrunning", warriorrunning);
    }
    
      
}
