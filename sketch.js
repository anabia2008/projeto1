function setup() {
  createCanvas(1000, 800);
background("pink");
}

function draw() {
  
fill("lightblue");
  stroke("black");
  if(mouseIsPressed)
  rect(mouseX,mouseY,50,70);
  
}
