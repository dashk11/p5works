var branches = [];
var leaves = [];
var root;
var angle;
var treeHeight=0;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  angle = PI/4;
  startVector = createVector(width/2, height);
  endVector = createVector(width/2, height-200);
  root = new Branch(startVector,endVector);
  
  branches[0] = root;
  
  
}

function mouseWheel(){
// function mousePressed(){
  for(var i=branches.length-1; i>=0 ; i--){
    if(branches[i].branchSpawned==0){
      branches.push(branches[i].spawnBranches(isRight=1));
      branches.push(branches[i].spawnBranches(isRight=0));
      branches[i].branchSpawned=1;
    }
  }
  treeHeight++;
  
  if(treeHeight>1){
    for(var j=branches.length-1; j>=0 ; j--){
      if(branches[j].branchSpawned==0){
          leaves.push(branches[j].end.copy());
      }
    }
  }
}

function draw() {
  background(1);
  for(var i=0; i < branches.length; i++){
    branches[i].show();
  }
  for(var j=0; j < leaves.length; j++){
    fill(255, 0, 10);
    ellipse(leaves[j].x, leaves[j].y, 10);
  }
  
  
}



function Branch(begin, end){
  this.begin = begin;
  this.end = end;
  this.branchSpawned=0;
  
  this.show = function(){
    stroke(255);
    line(this.begin.x, this.begin.y, this.end.x, this.end.y);
  }
  
  this.spawnBranches = function(isRight=0){
    
    var dir = p5.Vector.sub(this.end, this.begin);
    if(isRight==1){
      dir.rotate(angle);
    }else{
      dir.rotate(-angle);
    }
    dir.mult(0.67);
    var newEnd = p5.Vector.add(this.end, dir)
    var branch = new Branch(this.end, newEnd);
    return branch;
  }
}
