let earth;
var angle = 10;
var flag = 1;

function preload(){
  earth = loadModel('earth-3d-model/earth.obj', true);
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight, WEBGL);
  angleMode(DEGREES); 
}

function mouseClicked(){
  flag=-flag;
}

function draw() {
  background(0);
  rotateX(angle);
  rotateY(angle*1.3);
  rotateZ(angle*0.7);
  box(100);
  model(earth);
  if(flag==1){
    angle+=1;
  }

}




























