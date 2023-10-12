function setup() {
  createCanvas(windowWidth, windowHeight);
  background(140,240,240);
   // create the sliders
   ySlide = createSlider(100, 255, 150); // low val, high val, default
   hSlide = createSlider(0, 255, 150);
   pSlide = createSlider(0, 255, 150);
 
   // position the sliders
   ySlide.position(10, 20);
   hSlide.position(10, 40);
   pSlide.position(10, 60);
}
//make varaibles
let a;
let b;
let x;
let y;
let h;
let p;
let t;

function draw() {
  //define varavibe
  a =mouseX;
  b =mouseY;
  x = random(10,100);
  textAlign(LEFT, TOP);
  text('redValue : ' + ySlide.value(), 20 + ySlide.width, 20);
  text('grennvalue: ' + hSlide.value(), 20 + hSlide.width, 40);
  text('bluevalue : ' + pSlide.value(), 20 + pSlide.width, 60);
   // read the value of the slider and store it in a variable
  y = ySlide.value();
  h = hSlide.value();
  p = pSlide.value();
 
  t = random(50,100);
  //draw when key is press
  if(mouseIsPressed){
    fill(y,h,p,t);
    circle(a,b,x);
  }
}