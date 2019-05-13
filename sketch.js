let objArray = [];
let objNum =35;

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('header')
  colorMode(HSB);
  angleMode(DEGREES)
  for (let i = 0; i<objNum; i++){
    objArray[i] = new impRect ();
    
  }
  
}

function draw() {
  background(326,0,32);
  
//grid
  stroke(0,0,0);
  strokeWeight(2);
    
  for (let i = 101; i<height; i= i+97){
    line (0,i,width,i);
  }
  
  for (let i = 80; i<width; i = i + 86){
    line (i,0,i,height);
    
  }

  
  for (let i = 0; i<objNum; i++){
    objArray[i].display();
    objArray[i].move();
  }
 
}


//the rotation, placement, and color of imprect
class impRect {
  constructor() {
    this.x = random(0,width);
    this.y = random(0,height);
    this.fallSpeed=random(.3,1);
    this.fillH = random(360);
    this.fillS = 45;
    this.fillB = 100;
    this.rotation = random(360);
    
    
    
    
    
  }

    
 //the speed that the imprects fall
   move() {
    this.y = this.y +this.fallSpeed;
    if(this.y>height+100){
      
      this.y = -100;

      this.x = random(width);
  }
    
  }

    
    //setup for variables
  display() {
    
    let x = -66;
    let y = -44;
    
    let fillH = this.fillH;
    let fillS = this.fillS;
    let fillB = this.fillB;
    

    
    
 
      
    fill(fillH,fillS,fillB);
    stroke(0,0,0);
    strokeWeight(1);
    
    push();
    translate(this.x,this.y); 
    rotate(this.rotation)
    
    
    //4 shapes
    beginShape();
      vertex(x+98,y+45);
      vertex(x+113,y+54);
      vertex(x+94,y);
      vertex(x+84,y+2);
    endShape(CLOSE);
    
    beginShape();
      vertex(x,y);
      vertex(x+87,y-27);
      vertex(x+104,y-17);
      vertex(x+16,y+10);
      vertex(x+35,y+64);
      vertex(x+98,y+45);
      vertex(x+112,y+54);
      vertex(x+27,y+80); 
    endShape(CLOSE);
   
    beginShape();
      vertex(x+17,y+10);
      vertex(x+32,y+18);
      vertex(x+94,y);
      vertex(x+113,y+54);
      vertex(x+27,y+80);
      vertex(x+42,y+88);
      vertex(x+131,y+61); 
      vertex(x+104,y-18);
    endShape(CLOSE);
  
    beginShape();
      vertex(x+35,y+64);
      vertex(x+46,y+61);
      vertex(x+32,y+18);
      vertex(x+16,y+10);
    endShape(CLOSE);

    pop();

//text
   textSize(72);
    fill(0,0,100)
    stroke(0,0,0)
    strokeWeight(2)
  text('Into the mind of...', width/6, height/2);
  fill(0, 0, 100);
  text('Alex Hudock', width/4-100, height/2+75);
    
  }
}

//rearrange shapes when clicked
function mouseClicked(){
  for (let i = 0; i<objNum; i++){
    objArray[i].x = random(width)
    objArray[i].y = random(height);
  }


}
//allows window to be resized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}