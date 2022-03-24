
var pointsArr = []
var temp=1;
var play;


function setup() {
  createCanvas(windowWidth, windowHeight);
  translate(windowWidth/2, windowHeight/2);
  play = new playButton();
  
  for(var i=0;i<=400;i++){
    var x = random(-windowWidth, windowWidth);
    var y = random(-windowHeight, windowHeight);
    pointsArr.push([x, y, temp]);
  }
}

function draw() {
  translate(windowWidth/2, windowHeight/2);
  background(1);
  stroke(255);
  mouseOver();
  
  // beginShape();
  // vertex(-20,50);
  // vertex(60,0);
  // vertex(-20,-50);
  // endShape();
  
  play.drawButton();
  
  stroke(255);
  for(var i=0;i<pointsArr.length;i++){
    point(pointsArr[i][0], pointsArr[i][1], pointsArr[i][2]);
    pointsArr[i][0]+=1;
    pointsArr[i][1]-=1;
    if(pointsArr[i][0]>windowWidth || pointsArr[i][1]>windowHeight){
      pointsArr[i][0]=random(-windowWidth, windowWidth);
      pointsArr[i][1]= random(-windowHeight, windowHeight);
    }
    
  } 
}

function mouseOver(){
  var translatedMouseX = mouseX-windowWidth/2
  var translatedMouseY = mouseY-windowHeight/2
  
  play.clicked(translatedMouseX, translatedMouseY);
}

function playButton(){
  // introduce scale to this
  this.p1 = createVector(-20,50);
  this.p2 = createVector(60,0);
  this.p3 = createVector(-20,-50);
  
  this.triagColor = [255, 255,255];
  
  this.drawButton = function(){
    noStroke();
    fill(this.triagColor[0],
        this.triagColor[1],
        this.triagColor[2]);
    beginShape();
    vertex(this.p1.x, this.p1.y);
    vertex(this.p2.x, this.p2.y);
    vertex(this.p3.x, this.p3.y);
    endShape();
  }
  
  this.clicked = function(px, py) {

  // get the area of the triangle
  var areaOrig = floor(abs((this.p2.x - this.p1.x) * (this.p3.y - this.p1.y) - (this.p3.x - this.p1.x) * (this.p2.y - this.p1.y)));
  //console.log("totalArea: " + areaOrig);

  // get the area of 3 triangles made between the point and the corners of the triangle
  var area1 = floor(abs((this.p1.x - px) * (this.p2.y - py) - (this.p2.x - px) * (this.p1.y - py)));
  var area2 = floor(abs((this.p2.x - px) * (this.p3.y - py) - (this.p3.x - px) * (this.p2.y - py)));
  var area3 = floor(abs((this.p3.x - px) * (this.p1.y - py) - (this.p1.x - px) * (this.p3.y - py)));
  //console.log("areaSum: " + (area1 + area2 + area3));

  // if the sum of the three areas equals the original, we're inside the triangle
  if (area1 + area2 + area3 <= areaOrig) {
    this.triagColor[0]=128
    this.triagColor[1]=128
    this.triagColor[2]=128
  }else{
    this.triagColor[0]=255
    this.triagColor[1]=255
    this.triagColor[2]=255
  }
  
}
  
  
}
















