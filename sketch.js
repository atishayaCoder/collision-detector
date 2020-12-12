var fixedObj;
var movingObj
var car;
var car2;
var car3;
var car4;
var wall;
var wallColide


function setup() {
  createCanvas(800, 400);

  //declare wall
  wall = createSprite(360, 200, 40, height);

  //declare collide wall
  wallColide = createSprite(400, 200, 2, height);
  wallColide.shapeColor = "white"


  //declare cars
  car = createSprite(25, 50, 20, 10);
  car2 = createSprite(25, 150, 20, 10)
  car3 = createSprite(25, 250, 20, 10)
  car4 = createSprite(25, 350, 20, 10)

}

function draw() {

  //cars behavior
  car.velocityX = 10;
  car2.velocityX = 9;
  car3.velocityX = 10;
  car4.velocityX = 7;


  if (car.isTouching(wall)) {
    speed = Math.round(random(55, 90));
    weight = Math.round(random(400, 1500));
    deformation = 0.5 * weight * speed * speed / 22500;
    console.log(deformation);
  }
  if (car.isTouching(wallColide)) {
    car.velocityX = 0

  }
  if (car2.isTouching(wall)) {
    speed2 = Math.round(random(55, 90));
    weight2 = Math.round(random(400, 1500));
    deformation2 = 0.5 * weight2 * speed2 * speed2 / 22500;
    console.log(deformation2);
  }
  if (car2.isTouching(wallColide)) {
    car2.velocityX = 0

  }
  if (car3.isTouching(wall)) {
    speed3 = Math.round(random(55, 90));
    weight3 = Math.round(random(400, 1500));
    deformation3 = 0.5 * weight3 * speed3 * speed3 / 22500;
    console.log(deformation3);
  }
  if (car3.isTouching(wallColide)) {
    car3.velocityX = 0

  }
  if (car4.isTouching(wall)) {
    speed4 = Math.round(random(55, 90));
    weight4 = Math.round(random(400, 1500));
    deformation4 = 0.5 * weight4 * speed4 * speed4 / 22500;
    console.log(deformation);
  }
  if (car4.isTouching(wallColide)) {
    car4.velocityX = 0

  }



  if (car.isTouching(wall)) {
    //survival chance
    if (deformation > 180) {
      car.shapeColor = "red";
    }

    else if (deformation < 80) {
      car.shapeColor = "lime";
    }

    else if (deforomation => 80 && deformation < 180) {
      car.shapeColor = "yellow";
    }
  }

  if (car2.isTouching(wall)) {
    //survival chance
    if (deformation2 > 180) {
      car2.shapeColor = "red";
    }

    else if (deformation2 < 80) {
      car2.shapeColor = "lime";
    }

    else if (deforomation2 => 80 && deformation < 180) {
      car2.shapeColor = "yellow";
    }
  }

  if (car3.isTouching(wall)) {
    //survival chance
    if (deformation3 > 180) {
      car3.shapeColor = "red";
    }

    else if (deformation3 < 80) {
      car3.shapeColor = "lime";
    }

    else if (deforomation3 => 80 && deformation < 180) {
      car3.shapeColor = "yellow";
    }
  }

  if (car4.isTouching(wall)) {
    //survival chance
    if (deformation4 > 180) {
      car4.shapeColor = "red";
    }

    else if (deformation4 < 80) {
      car4.shapeColor = "lime";
    }

    else if (deforomation4 => 80 && deformation < 180) {
      car4.shapeColor = "yellow";
    }
  }

  background(255, 255, 255);
  drawSprites();

}
function isTouching() {
  if (fixObj.x - movingObj.x < fixObj.width / 2 + movingObj.width / 2 &&
    movingObj.x - fixObj.x < fixObj.width / 2 + movingObj.width / 2 &&
    fixObj.y - movingObj.y < fixObj.height / 2 + movingObj.height / 2 &&
    movingObj.y - fixObj.y < fixObj.height / 2 + movingObj.height / 2) {
    return true;
  }
  else {
    return false;
  }
}

