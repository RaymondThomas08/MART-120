var armLX = 160;
var armRX = 280;

var earLY = 270;
var earRY = 270;

var pupilLX = 204;
var pupilLY = 240;
var pupilRX = 296;
var pupilRY = 240;

var armLmovement;
var armRmovement;
var earLmovement;
var earRmovement;
var pupilLXmovement = 1;
var pupilLYmovement = 1;
var pupilRXmovement = 1;
var pupilRYmovement = 1;

var size = 17;
var count = 0;
var sizeDirection = 2;
var sizeDelay = 0; 

var headSize = 200;
var headCount = 0;
var headsizeDirection = 2;
var headsizeDelay = 0;

function setup() {
  createCanvas(600,600); //made the canvas wider than orginal so full signature could be seen
  armLmovement = Math.floor(Math.random() * 10) + 1;
  armRmovement = Math.floor(Math.random() * 10) + 1;
  earLmovement = Math.floor(Math.random() * 10) + 1;
  earRmovement = Math.floor(Math.random() * 10) + 1;
}

function draw() {
  background(43,83,139);
  stroke(22,0,8);
  strokeWeight(1.5);
  
//back hair
fill(74,52,40);
stroke(42,24,14);
  triangle(130,230,250,400,370,230);
  triangle(150,320,250,140,350,320);
  triangle(130,160,250,120,370,160);
  rect(150,320,200,70);
  rect(130,160,240,70);
  stroke(22,0,8);

  //arms
fill(44,86,34);
  ellipse(180,420,60,50);
  ellipse(320,420,60,50);
fill(236,200,164);
  rect(armLX,420,60,200); 
   
    if(armLX >= 170 || armLX <= 155)
    {
        armLmovement *= -1;
    }
    armLX += armLmovement;
fill(44,86,34);
  rect(150,420,60,60);
fill(236,200,164);
  rect(armRX,480,60,200);
  
   if(armRX >= 290 || armRX <= 270)
    {
        armRmovement *= -1;
    }
    armRX += armRmovement;
fill(44,86,34);
  rect(290,420,60,60);
  ellipse(170,480,70,35);
  ellipse(330,480,70,35);
    

  //sweater body
  triangle(170,420,250,360,330,420);
  triangle(170,520,250,630,330,520);
  rect(170,420,160,100);
fill(103,130,150)
  rect(180,560,140,60);
 
  //Pants + belt
  stroke(60,93,116);
  line(250,580,250,600);
  stroke(22,0,8);
fill(31,27,25);
  rect(180,540,140,20);
fill(195,207,216);
stroke(45,71,127);
  square(230,530,40);
  strokeWeight(1);
fill(32,27,25);
  rect(240,540,20,20);
  strokeWeight(1.5);
  stroke(22,0,8);
  
  //sweater neck
fill(236,200,164);
  rect(225,330,50,60);
fill(44,86,34);
  ellipse(250,380,90,40);
  strokeWeight(1);
  stroke(22,49,16);
  line(250,360,250,400);
  line(225,364,225,396);
  line(275,364,275,396);
  stroke(22,0,8);
 
  //ears
fill(236,200,164);
  strokeWeight(1.5);
  circle(150,earLY,60);
    if(earLY >= 280 || earLY <=260)
    {
      earLmovement *= -1;
    }
    earLY += earLmovement;
  circle(350,earRY,60);
  if(earRY >= 280 || earRY <=260)
    {
      earRmovement *= -1;
    }
    earRY += earRmovement;
    
  strokeWeight(1);
  stroke(139,106,73);
  line(130, 260, 180, 300);
  line(370,260,320,300);
  stroke(22,0,8);
  
  //head
  strokeWeight(1.5);
  circle(250,250,headSize);
  headsizeDelay++;
    if(headsizeDelay >= 24)
    {
      headSize += headsizeDirection
      headCount++;
      if( headCount >= 3)
      {
        headsizeDirection *= -1;
        headCount = 0;
      }
      headsizeDelay = 0;
    }
  
  //nose bridge
  strokeWeight(1);
  stroke(139,106,73);
  line(240,240,238,266);
  
  //smile
  line(230,320,270,320);
  line(220,310,230,320);
  line(280,310,270,320);
  
  //nose tip
  strokeWeight(1.5);
  ellipse(240,278,30,16);
  ellipse(260,278,30,16);
  circle(250,280,20);
  stroke(22,0,8);
 
  //eye whites
fill(253,252,248);
  ellipse(200,240,60,35);
  ellipse(300,240,60,35);

  //pupils
  strokeWeight(16);
  stroke(29,18,12);
  point(pupilLX,pupilLY);
   pupilLX+=pupilLXmovement;
   pupilLY+=pupilLYmovement
    if(pupilLX >= 214 || pupilLX <= 194 || pupilLY >= 260 || pupilLY <= 230)
    {
        pupilLXmovement *= -1; 
        pupilLYmovement *= -1;
    }

  point(pupilRX,pupilRY);
   pupilRX+=pupilRXmovement;
   pupilRY+=pupilRYmovement
    if(pupilRX >= 306 || pupilRX <= 286 || pupilRY >= 260 || pupilRY <= 230)
    {
        pupilRXmovement *= -1; 
        pupilRYmovement *= -1;
    }
  stroke(22,0,8);

  //front hair
fill(74,52,40);
  strokeWeight(1.5);
  stroke(42,24,14);
  triangle(155,350,155,230,170,365);
  triangle(345,350,345,230,330,365);
  triangle(145,245,255,145,140,170);
  triangle(355,245,245,145,360,170);
  stroke(22,0,8);

  //eyebrows
  strokeWeight(4);
  line(160,220,180,210);
  line(180,210,220,205);
  line(340,220,320,210);
  line(320,210,280,205);

  //title
fill(11,35,69);
  strokeWeight(0); 
  textSize(45);
  textFont('Courier New');
  text('My Self Portrait!', 25, 55)

  //signiture
  textSize(size);
   sizeDelay++;
  if (sizeDelay >= 24) 
  {        
    size += sizeDirection;
    count++;
    if (count >= 5) 
    {
      sizeDirection *= -1;
      count = 0;
    }
    sizeDelay = 0;
  }
  text('Raymond Thomas', 350, 595);
}

