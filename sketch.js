let building; 
//let building_brown; 
let building2;

let building3;
let building4; 
let building5; 
let trees; 

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  building = loadImage('building.jpg');
  building2 = loadImage('building2.jpg');
  building3 = loadImage('building3.jpg'); 
  building4 = loadImage('building4.jpg'); 
  building5 = loadImage('building5.jpg');
  trees = loadImage('forest.gif')
}

function draw() {
  background(40, 0, 92);
  orbitControl();
   let locX = mouseX - height / 2;
  let locY = mouseY - width / 2;

  ambientLight(50);
  directionalLight(255, 0, 0, 0.25, 0.25, 0);
  pointLight(0, 0, 255, locX, locY, 250);
  
  
  ambientLight(118, 65, 217);
  noStroke();
  camera(0, 0, 0 , 0, 0, 0, 0, 1, 0);  camera(0,-80, 440, 0, 0, 1, 0, 1, 0);
  
  //landscape
  push();
  translate(-80,0,0);
  fill(112, 112, 112);
  box(1000, 10, 700);
  pop();
  
  //street1
  push();
  translate(-80,0,100);
  fill(26, 26, 26);
  box(1000,15,50);
  pop();
  
  //street2
  push();
  translate(-80,0,-100);
  fill(26, 26, 26);
  box(1000,15,50);
  pop();
  
  //street3
  push();
  translate(-100,0,0);
  fill(26, 26, 26);
  box(50,15,700);
  pop();
  
  //street4
  push();
  translate(-300,0,0);
  fill(26, 26, 26);
  box(50,15,700);
  pop();
  
  //street4
  push();
  translate(100,0,0);
  fill(26, 26, 26);
  box(50,15,700);
  pop();
  
  //building_brown
//  translate(0,-94,0);
  push();
  translate(0,-86,0);
  texture(building);
  box(70, 160, 50);
  pop();
  
  //building_brown
//  translate(0,-94,0);
  push();
  translate(200,-86,-200);
  texture(building);
  box(70, 160, 50);
  pop();
  
  //building_brown
//  translate(0,-94,0);
  push();
  translate(-200,-86,200);
  texture(building);
  box(70, 160, 50);
  pop();
  
  //building2
 // push();
 // translate(100,-290,0);
 // texture(building2);
//  box(275, 450, 50);
//  pop();
  
  //building3_red
  
  push();
  translate(200,-130,0);
  texture(building3);
  box(115, 250, 50);
  pop();
  
  //building3_red
  
  push();
  translate(-400,-130,200);
  texture(building3);
  box(115, 250, 50);
  pop();
  
  //building3_red
  
  push();
  translate(-200,-130,-200);
  texture(building3);
  box(115, 250, 50);
  pop();
  
  //building4_
  push();
  translate(-200,-140,0);
  texture(building4);
  box(95, 270, 50);
  pop();
  
  //building4_
  push();
  translate(200,-140,200);
  texture(building4);
  box(95, 270, 50);
  pop();
  
  //building4_
  push();
  translate(-400,-140,-200);
  texture(building4);
  box(95, 270, 50);
  pop();
  
  //building5
  push();
  translate(0,-60,-200);
  texture(building5);
  box(75, 100, 50);
  pop();
  
  //building5
  push();
  translate(-400,-60,0);
  texture(building5);
  box(75, 100, 50);
  pop();
  
  //building5
  push();
  translate(0,-60,200);
  texture(building5);
  box(75, 100, 50);
  pop();
  
  
  
  //building1
 // push();
 // translate(100,-60,0);
 // texture(building5);
//  box(75, 100, 50);
//  pop();
}