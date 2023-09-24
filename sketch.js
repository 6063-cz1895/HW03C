let lineNumber = 25;
let border = 50; //I created a border here because I do not what the points to sit on the edge of the window

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255); 
  randomSeed(99); //set a randomSeed

 for (let i = 0; i < lineNumber; i++) { //I want the code to loop for the line number that I set
 
    let x1 = random(0 + border, windowWidth - border);//Here I set the random number with the limit: the x/y of the point should be 0+border<x/y<windowWidth/windowHeight
    let y1 = random(0 + border, windowHeight - border);
    let x2 = random(0 + border, windowWidth - border);
    let y2 = random(0 + border, windowHeight - border);

  strokeWeight(0);// Draw circle(dots) on the end points
  fill(0);
  ellipse(x1, y1, 4); 
  ellipse(x2, y2, 4);

  strokeWeight(1);// Draw line with the first point as x1,y1 and second send point as x2,y2
  stroke(0);
  line(x1, y1, x2, y2); 
  }
}