var angle;
var rotationAngle=90;

var spiralAngle=0;
var spiral = [];
let radius=0;
let angleIncrement=10;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  angleMode(DEGREES);
  angle = -180;
  frameRate(60);
  
  
  background(0);
  translate(width/2, height/2);
  stroke(255);

  buildSpiral();
  
  
  
}

function draw() {
  translate(width/2, height/2);
  rotate(rotationAngle);
  
  for(var i=0;i<spiral.length;i++){
    stroke(255, 255, 255);
    rotate(spiralAngle);
    spiralAngle+=1;
    strokeWeight(2);
    point(spiral[i].x, spiral[i].y, 1);
  }

}

function buildSpiral(){
  for(var i=0;i<=400;i++){
    radius+=2;
    spiral.push(createVector(radius,radius));
  }
}

























