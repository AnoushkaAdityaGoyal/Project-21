var bullet,wall;
var lbullet,lwall;
var speed,thickness,weight;
var damage;
function setup() {
  createCanvas(1600,400);

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(20,80);

  bullet=createSprite(100,200,50,15);
  wall=createSprite(1200,200,thickness,height/2);

  bullet.velocityX=speed/10

}

function draw() {
  background("black");

  damage=(0.5*weight*speed*speed)/(thickness*thickness*thickness);

  if(hascollided(lbullet,lwall)){
    bullet.velocityX=0;
if (damage<10){
  wall.shapeColor=color(0,255,0)
} else{
  wall.shapeColor=color(255,0,0)
}
  }

  drawSprites(); 
}

function hascollided(lbullet,lwall){
if(bullet.x>wall.x-(thickness+0.1)){
  return true;
}
else{
  return false;
}
}

