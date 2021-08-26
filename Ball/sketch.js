var white,orange,red,green;

function setup() {
  //size of the canvas to draw on
  createCanvas(innerWidth, innerHeight);

  // Set the background to white, and move the line to setup();
  background("white");

}


function draw() {
  
  white = new Ball(150, 50, 25, "white");
  white.appear();
  orange = new Ball(150, 100, 50, "orange");
  orange.appear();
  red = new Ball(150, 200, 100,"red");
  red.appear();
  green = new Ball(150, 350, 150, "green");
  green.appear();
    
}
    

