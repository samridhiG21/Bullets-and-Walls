var bullet , wall;
var speed , weight , thickness;
 
function setup() {
  createCanvas(1600,400);
  //createSprite(400, 200, 50, 50);

  speed = random(223,321);
  weight = random(30,52);

  bullet = createSprite(50,200,40,20);
  bullet.shapecolor = "white";
  bullet.velocityX = speed;

  thickness = random(22,83);

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapecolor = (80,80,80);
}

function draw() {
  background("black");  

  bullet.collide(wall);

  if(bullet.collide(wall)){
    
    bullet.velocityX = 0;
    var damage = 0.5*bullet.weight*bullet.speed*bullet.speed / wall.width*wall.width;
    thickness = random(22,83);

    if(damage > 10){
      bullet.shapeColor = "green";
    }

    if(damage < 10){
      bullet.shapeColor = "red";
    }
  }

  drawSprites();
}