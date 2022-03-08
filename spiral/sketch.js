 
var spiral = [];
let radius=0;
let angle=0;
let radiusIncrement=2;
let angleIncrement=10;
var r = 0.7;
var g = 0.4;
var b = 0.5;
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  frameRate(50);
  angleMode(DEGREES);
  buildSpiral();
  
  
}

function draw() {
  
  background(0);

  // Strive.drawTickAxes();
  translate(width/2, height/2);
  for(var i=0;i<spiral.length;i++){
    stroke(map(spiral[i].z*r, 0, 255, 10, 250), map(spiral[i].z*g, 0, 255, 10, 250), spiral[i].z*b);
    rotate(angle);
    angle+=angleIncrement;
    strokeWeight(6);
   
    point(spiral[i].x, spiral[i].y, 2)
  }
}

function mouseWheel(event){
   if(event.delta>0){
     angleIncrement+=0.01;
     r+=0.01;
     g-=0.03;
     b+=0.04;
   }else{
     angleIncrement-=0.01;
     r-=0.01;
     g+=0.03;
     b-=0.04;
   }
   
}


function buildSpiral(){
  var hue=2000;
  for(var i=0;i<=500;i++){
    radius+=radiusIncrement;
    spiral.push(createVector(radius, 0, hue));
    hue*=0.99;
  }
}
