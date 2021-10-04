// Functions_Transformations_and_Media
function preload() {
  ins = loadImage("ins.jpg");
  photo = loadImage("photo.png");

}

function setup() {
  createCanvas(480,1040);
  ins.loadPixels()
}

function draw() {

  background(230);
  imageMode(CENTER)
  push();
  translate(width/2,height/2);
  image(ins,0,0,width,height);
  pop();

  placeFace(60,173);
  placeFace(169,173);
  placeFace(277.5,173);
  placeFace(387.5,173);
  print (mouseX,mouseY);

  // motionface

  if (mouseIsPressed) {

    var a = random(0,width);
    var b = random (0,height);
    motionFace(a,b)
  }

  // weird mouse position
  var c = get((mouseX-90)%width,(mouseY+60)%height,100,100);
  image(c,mouseX,mouseY);

  // glitch
  if (frameCount%40 == 0){
    var glitch_getX = random (0,width)
    var glitch_getY = random (0,height)
    var glitch_positionX = random (0,width)
    var glitch_positionY = random (0,height)
    var sizeX = random (0,150)
    var sizeY = random (0,100)
    }

  glitch = ins.get(glitch_getX,glitch_getY)

  noStroke()
  fill (100) //<-- bug is here
  rect(glitch_positionX,glitch_positionY,sizeX,sizeY)


}




function placeFace(xPosition,yPosition){
  push();
  translate(xPosition,yPosition)
  image(photo,0,0,photo.width/40,photo.height/40);
  pop();

  print (mouseX,mouseY)
}

function motionFace(xPosition,yPosition){


  for (let j = 1; j <3;j++){
    translate (50,j*100+50)

    for (let i = 1;i<10;i++){
      push();
      translate(10*i+frameCount%width,10*i+frameCount%height);
      rotate(frameCount/100*2*PI);

      image(photo,0,0,photo.width/(40-2*i),photo.height/(40-2*i));
      pop();
    }

  }
}
