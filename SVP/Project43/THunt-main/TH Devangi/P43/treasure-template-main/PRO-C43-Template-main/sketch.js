var bg,bg2,form,system,code,security;
var score=0;
var sophia , cup;
var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10;
var wall11,wall12,wall13,wall14,wall15,wall16,wall17,wall18,wall19,wall20;
var wall21,wall22,wall23,wall24,wall25;
var edges;
var key;
var gamestate=1;
var c1,c2,c3,c4,c5,c6;
var c1img,c2img,c4img , cardImg;
var a=0,b=0,c=0,d=0,e=0,f=0;
var score2=0;
var click=0;
var ca=0, cb=0, cc=0, cd=0, ce=0,cf=0;

function preload() {
 
  key = loadImage("images/key.png");
  bg= loadImage("images/aladdin_cave.jpg");
  bg2= loadImage("images/treasure.jpg");
  c1img = loadAnimation("images/1.png");
  c2img =  loadAnimation("images/2.png");
  c4img =  loadAnimation("images/3.png");
  cardImg =  loadAnimation("images/card.png");
  //load image for the treasure background
  
}

function setup() {
  createCanvas(1000,500);
  security = new Security();
  system = new System();

  c1 = createSprite(300,100,40,70);
  c1.addAnimation("c1i",cardImg);
  c1.scale=0.1;
  c1.visible=false;
  
  c2 = createSprite(500,100,40,70);
  c2.addAnimation("c2i",cardImg);
  c2.scale=0.1;
  c2.visible=false;
  
  c3 = createSprite(700,100,40,70);
  c3.addAnimation("c3i",cardImg);
  c3.scale=0.1;
  c3.visible=false;
  
  c4 = createSprite(300,400,40,70);
  c4.addAnimation("c4i",cardImg);
  c4.scale=0.1;
  c4.visible=false;
  
  c5 = createSprite(500,400,40,70);
  c5.addAnimation("c5i",cardImg);
  c5.scale=0.1;
  c5.visible=false;
  
  c6 = createSprite(700,400,40,70);
  c6.addAnimation("c6i",cardImg);
  c6.scale=0.1;
  c6.visible=false;
  
}

function draw() {

  if(gamestate===1) {
  background(bg);
  clues();
  security.display();
  textSize(30);
  fill("white");
  text("Score: " + score, 850, 50);

// add code for changing the background to the treasure background
 edges = createEdgeSprites() ;
 
  if(score === 5) {
  clear()
    background(bg)
    
visible();

if(mousePressedOver(c1)){
  c1.addAnimation("c1",c1img);
  a=1;
  click++
}

if(mousePressedOver(c2)){
  c2.addAnimation("c2",c2img);
  b=1;
  click++
}

if(mousePressedOver(c3)){
  c3.addAnimation("c3",c2img);
  c=1;
  click++
}
 
if(mousePressedOver(c4)){
  c4.addAnimation("c4",c4img);
  d=1;
  click++
}

if(mousePressedOver(c5)){
  c5.addAnimation("c5",c1img);
  e=1;
  click++
}
    
if(mousePressedOver(c6)){
  c6.addAnimation("c6",c4img);
  f=1;
  click++
}

if(a===1 && e===1){
  c1.visible=false;
  c5.visible=false;
  if(ca===0 && ce===0)
    {
    score2=score2+1;
    ca=1;
    ce=1
    }
 }

if(b===1 && c===1){
  c2.visible=false;
  c3.visible=false;
  if(cb===0 && cc===0)
    {
    score2=score2+1;
    cb=1;
    cc=1
    }
  }

if(d===1 && f===1){
  c4.visible=false;
  c6.visible=false;
  if(cd===0 && cf===0)
    {
    score2=score2+1;
    cd=1;
    cf=1
    }
  }

  

  if ((click===2 && score2 < 1) ||(click===4 && score2 <2) ||(click===6 && score2 < 3)  )
  {   
     dontmatch();
}

/*if (sophia.isTouching(cup)) {
  sophia.collide(cup);
 //sophia.x=13;
  //sophia.y=43;
sophia.velocityX=0;
   sophia.velocityY= 0;

gamestate=2;
}*/
fill("black")
textSize(30);
text("Match the cards !!",30,30)
textSize(35);
text("Score "+ score2,850,30);
  }

if (gamestate===2){

  //clear()
    background(bg2)
    hide();
    fill("black")
    textSize(40);
    text("TREASURE UNLOCKED",250, 200);
  
}
  }

  drawSprites()
}

function visible(){
  c1.visible = true;
  c2.visible = true;
  c3.visible = true;
  c4.visible = true;
  c5.visible = true;
  c6.visible = true;
}

function match(){
  c1.visible=false;
  c5.visible=false;

  score2=score2+1;
}

function dontmatch(){
c1.addAnimation("c1img",cardImg);
c2.addAnimation("c2img",cardImg);
c3.addAnimation("c3img",cardImg);
c4.addAnimation("c4img",cardImg);
c5.addAnimation("c5img",cardImg);
c6.addAnimation("c6img",cardImg);

}


