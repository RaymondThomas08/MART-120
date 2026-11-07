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

var MouseObjectX
var MouseObjectY

function setup() {
  createCanvas(800,600); 
  OB1XMovement = Math.floor(Math.random() * 5) + 1;
  OB1YMovement = Math.floor(Math.random() * 5) + 1;
  OB2XMovement = Math.floor(Math.random() * 5) + 1;
  OB2YMovement = Math.floor(Math.random() * 5) + 1;
}

function draw() {
  
  background(16, 23, 65);
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
  
fill(145,159,255);
    //top border
    rect(0,0,width,10);
    // left border
    rect(0,0,10,height);
    // bottom border
    rect(0, height-10,width, 10);
    // right upper border
    rect(width-10,0,10,height-100);
 
 
 fill(255,246,0);
   circle(Playerx,Playery,diameter);
 
fill(255,0,4);
  circle(OB1X,OB1Y,150)

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


fill(0,255,216)
  circle(OB2X,OB2Y,75)

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
   fill(55,255,0);
    circle(MouseObjectX, MouseObjectY, 100);

   if (Playerx > width - 10 && Playery > height - 100) //sets message to appear when playerx and player y reach coordinates of exit
   {
    fill(255,246,0);
    textSize(60);
    text("You Win!", 260, 300);
   }
   else
   {
    fill(255,246,0);
    textSize(25);
    text("Exit -->", 700, 550);
   }
  }
  

function mouseClicked(){
  MouseObjectX = mouseX;
  MouseObjectY = mouseY;
}

