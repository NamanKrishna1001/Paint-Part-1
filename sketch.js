var currentPath=[];
var drawing=[];

function setup() {
  canvas=createCanvas(800,400);
  
 canvas.mousePressed(start);
}

function draw() {
  background("pink");  
  if(mouseIsPressed){
    var point = {
      x:mouseX,
      y:mouseY
    }
    currentPath.push(point);
  }
  strokeWeight(4);
  noFill();
  stroke("blue");
  for(var i=0; i<drawing.length;i++){
    var path=drawing[i];
    beginShape();
    for(var j=0;j<path.length;j++){
      vertex(path[j].x,path[j].y);
    }
    endShape();
  }
}
function start(){
  currentPath=[];
  drawing.push(currentPath);
}
