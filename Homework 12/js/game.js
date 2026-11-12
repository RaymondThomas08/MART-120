var Playerx = 50;
var Playery = 50;
var diameter = 55;

var OB1X = 50;
var OB1Y = 200;
var OB2X = 400;
var OB2Y = 500;

var OB1XMovement
var OB1YMovement
var OB2XMovement
var OB2Ymovement

var exitW = 100;
var exitH = 100;
var exitX = 100;
var exitY = 100;

var MouseObjectX
var MouseObjectY

function setup() {
  createCanvas(800,600); 
  OB1XMovement = Math.floor(Math.random() * 5) + 1;
  OB1YMovement = Math.floor(Math.random() * 5) + 1;
  OB2XMovement = Math.floor(Math.random() * 5) + 1;
  OB2YMovement = Math.floor(Math.random() * 5) + 1;
  
// creates player
  createPlayer(60,50);

//creates exit in right place
generateExit();
}

function draw() {
background(16, 23, 65);

//creates walls
  border(10);

//sets up exit
  exitsign();

//draws character
  drawPlayer();

//allows player to move
  movePlayer();

//draws potential enemies
  createEnemies();

//randomly move enemies and detect their location
  moveOB1();
  moveOB2();

//detects if playerhas passed borders
  winPlayer();

//draws object from mouseClicked
  drawmouseOB();
  }
  

function mouseClicked(){
  MouseObjectX = mouseX;
  MouseObjectY = mouseY;
}
function drawmouseOB(){
fill(55,255,0);
    circle(MouseObjectX, MouseObjectY, 100);
}

function generateExit() {
  exitX = width - exitW;  
  exitY = height - exitH;  
}
function border(thickness){
  fill(145,159,255);
    //top border
    rect(0, 0, width, thickness);
    // left border
    rect(0,0, thickness, height);
    // bottom border
    rect(0, height-thickness, width, thickness);
    // right upper border with exit carved out
    rect(width-thickness, 0, thickness, exitY); 
    rect(width - thickness, exitY + exitH, thickness, height-(exitY+exitH))
}
function exitsign(){
fill(145,159,255)
    rect(690,515,100,50)
fill(16,23,65);
    textSize(25);
    text("Exit -->", 700, 550);
}

function createPlayer(x,y){
  Playerx = x;
  Playery = y;
 
}
function drawPlayer(){
 fill(255,246,0);
 circle(Playerx,Playery,diameter);
}
function movePlayer(){
   //87 = w 83 = s 68 = d 65 = a
  
  if(keyIsDown(68))
  {
      Playerx+=3;
  }
  else
  {
    if(keyIsDown(65))
    {
      Playerx-=3;
    }
    else
    {
      if(keyIsDown(87))
      {
        Playery-=3;
      }
      else
      {
        if(keyIsDown(83))
        {
          Playery+=3;
        }
      }
    }
  }
  
  
  if ((keyIsDown(68)) && (keyIsDown(87)))
  {
    Playerx+=1.5;
    Playery-=1.5;
  }
  
  if ((keyIsDown(65)) && (keyIsDown(87)))
  {
    Playerx-=1.5;
    Playery-=1.5;
  }

  if ((keyIsDown(68)) && (keyIsDown(83)))
  {
    Playerx+=1.5;
    Playery+=1.5;
  }
  
  if ((keyIsDown(65)) && (keyIsDown(83)))
  {
    Playerx-=1.5;
    Playery+=1.5;
  }
}
function winPlayer(){
if (Playerx > width - 10 && Playery > height - 100) //sets message to appear when playerx and player y reach coordinates of exit
   {
    fill(255,246,0);
    textSize(60);
    text("You Win!", 260, 300);
   }
   else
   {
    fill(145,159,255);
    textSize(60);
    text("Reach the exit...", 180, 300);
   }
}

function createEnemies(){
fill(255,0,4);
  circle(OB1X,OB1Y,150)
fill(0,255,216)
  circle(OB2X,OB2Y,75)
}
function moveOB1(){
 OB1XMovement = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
 OB1YMovement = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

   
    OB1X += OB1XMovement;
    OB1Y += OB1YMovement;

     if(OB1X > width)  //106 through 124 sets OB2X and OB2Y to reset on opposite sides
    {
        OB1X = 0;
    }

    if(OB1X < 0)
    {
        OB1X = width;
    }

    if(OB1Y > height)
    {
        OB1Y = 0;
    }

    if(OB1Y < 0)
    {
        OB1Y = height;
    }

}
function moveOB2(){
 OB2XMovement = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
 OB2YMovement = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

   
    OB2X += OB2XMovement;
    OB2Y += OB2YMovement;

 
    if(OB2X > width) //138 through 158 sets OB2X and OB2Y to reset on opposite sides
    {
      OB2X = 0
    }

    if(OB2X < 0)
    {
      OB2X = width
    }

    if(OB2Y > height)
    {
        OB2Y = 0;
    }

    if(OB2Y < 0)
    {
        OB2Y = height;
    }
   
}