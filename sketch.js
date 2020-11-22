var car , wall ;
var speed , weight ;



function setup() {
  createCanvas(1600,400);
  speed = random(55,90);
  weight = random(400, 1500);

  car = createSprite(50, 200, 50, 50);
  car.shapeColor = "white";
  wall = createSprite(1500, 200, 60, height/2);
  wall.shapeColor = "grey";

  car.velocityX = speed;





}

function draw() {
  background(0);  

  if (wall.x - car.x < car.width/2 + wall.x/2){
    var deformation = 0.5 * weight * speed * speed / 22500 ; 
    if (deformation < 100){
      car.shapeColor = "green" ;

  }

  else if (deformation > 100 && deformation < 180){
    car.shapeColor = "yellow" ;
  }

  else if (deformation > 180){
    car.shapeColor = "red";
  }
}
  drawSprites();

  
}