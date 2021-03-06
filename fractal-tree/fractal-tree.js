var branches = [];
var leaves = [];
var root;
var angle;
var treeHeight=0;
var leafSize = 25;
var dropLeaves= 0;
var lineWidth = 1000;
var jitter=0;
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  angleMode(DEGREES);
  angle = 40;
  startVector = createVector(width/2, height);
  endVector = createVector(width/2, height-200);
  root = new Branch(startVector,endVector);
  
  branches[0] = root;
  
  
}

// function mouseWheel(){
function mousePressed(){
  for(var i=branches.length-1; i>=0 ; i--){
    if(branches[i].branchSpawned==0){
      branches.push(branches[i].spawnBranches(isRight=1));
      branches.push(branches[i].spawnBranches(isRight=0));
      branches[i].branchSpawned=1;
    }
  }
  treeHeight++;
  
  // if(treeHeight>1){
  //   for(var j=branches.length-1; j>=0 ; j--){
  //     if(branches[j].branchSpawned==0){
  //         leaves.push(branches[j].end.copy());
  //     }
  //   }
    
  // }
}


function mouseClicked(){
  jitter=1;
   
}

function draw() {
  background(1);
  for(var i=0; i < branches.length; i++){
    branches[i].show();
    if (jitter==1){
      branches[i].jitter();
      dropLeaves = 1;
    }
    
  }
  for(var j=0; j < leaves.length; j++){
    fill(255, 20, 100);
    strokeWeight(1);
    ellipse(leaves[j].x, leaves[j].y, leafSize);
  }
  
  // if(dropLeaves==1){
  //   for(var j=0; j < leaves.length; j++){
  //     if (leaves[j].y<height-leafSize){
  //           leaves[j].y +=random(1,5);
  //       }
  //   }
  // }
  
  
}



function Branch(begin, end){
  this.begin = begin;
  this.end = end;
  this.branchSpawned=0;
  
  
  
  this.show = function(){
    stroke(255);
    strokeWeight(lineWidth);
    line(this.begin.x, this.begin.y, this.end.x, this.end.y);
    if (lineWidth>8){
        lineWidth-=5;
    }
    
  }
  
  this.jitter = function(){
    this.end.x+=random(-0.1,0.1);
    this.end.y+=random(-0.1,0.1);
  }
  
  this.spawnBranches = function(isRight=0){
    
    var dir = p5.Vector.sub(this.end, this.begin);
    if(isRight==1){
      dir.rotate(angle);
    }else{
      dir.rotate(-angle);
    }
    angle = angle * 0.99
    dir.mult(0.68);
    var newEnd = p5.Vector.add(this.end, dir)
    var branch = new Branch(this.end, newEnd);
    return branch;
  }
}
