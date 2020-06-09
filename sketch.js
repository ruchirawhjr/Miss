
var canvas;
var veggie, veggie1, veggie2, veggie3, veggie4, veggie5, veggie6, veggie7, veggie8, veggie9, veggie10
var scope;
var img;
var veggie; 
var liner;
var linel;
var edges


function preload() {

  img = loadImage("scope.PNG");
  veggieImg = loadImage("an10.png");
  tomatoImg = loadImage("tomato1.png");
  BroccoImg = loadImage("ANgrBRoccolli.png");
  StrawbImg = loadImage("AnStrawberry.png");
  PearssImg = loadImage("AnPear.png");
  AAppleImg = loadImage("AnApple.png");


}

function setup() {
canvas = createCanvas(displayWidth-20, displayHeight-20);


liner = createSprite(1900,  800, 50, 1900);
liner.shapeColor= "green"; 

linel = createSprite(-5, 800, 50, 1900);
linel.shapeColor= "green"; 

veggie =  createSprite(random(20, 1000) -10, 20, 20);
veggie.velocityY = 3;
veggie.velocityX = Math.round(random(-3, 3));
veggie.addImage("veggie",veggieImg);
veggie.scale = 0.4;

 veggie1 =  createSprite(random(20, 1000));
veggie1.velocityY = 3;
veggie1.velocityX = random(-3, 3);
veggie1.addImage("veggie1",tomatoImg);

 veggie2 =  createSprite(random(20, 1000));
veggie2.velocityY = 3;
veggie2.velocityX = random(-3, 3);
veggie2.addImage("veggie2",BroccoImg);
veggie2.scale = 0.4;

edges = createEdgeSprites();
veggie.bounceOff(edges[1]);
veggie.bounceOff(edges[3]);

veggie1.bounceOff(edges[3]);
veggie1.bounceOff(edges[1]);

veggie2.bounceOff(edges[1]);
veggie2.bounceOff(edges[3]);

 veggie3 =  createSprite(random(20, 1000));
veggie3.velocityY = 3;
veggie3.velocityX = random(-3, 3);
veggie3.addImage("veggie3",StrawbImg);

 veggie4 =  createSprite(random(20, 1000));
veggie4.velocityY = 3;
veggie4.velocityX = random(-3, 3);
veggie4.addImage("veggie4",PearssImg);

 veggie5 =  createSprite(random(20, 1000));
veggie5.velocityY = 3;
veggie5.velocityX = random(-3, 3);
veggie5.addImage("veggie",AAppleImg);

 veggie6 =  createSprite(random(20, 1000));
veggie6.velocityY = 3;
veggie6.velocityX = random(-3, 3);

 veggie7 =  createSprite(random(20, 1000));
veggie7.velocityY = 3;
veggie7.velocityX = random(-3, 3);

 veggie8 =  createSprite(random(20, 1000));
veggie8.velocityY = 3;
veggie8.velocityX = random(-3, 3);

 veggie9 =  createSprite(random(20, 1000));
veggie9.velocityY = 3;
veggie.velocityX = random(-3, 3);

 veggie10 =  createSprite(random(20, 1000));
veggie10.velocityY = 3;
veggie10.velocityX = random(-3, 3);

scope = createSprite(0,0, 20, 20);
scope.addImage("scope", img);



 }


function draw() {
 background("green");  
 createEdgeSprites();

 if (veggie.y>displayHeight) {
  veggie.y = -5;
 }
 
 if (veggie1.y>displayHeight) {
  veggie1.y = -5;
 }

 if (veggie2.y>displayHeight) {
  veggie2.y = -5;
 }

//  if (veggie3.y>displayHeight) {
//   veggie3.y = -5;
//  }

//  if (veggie4.y>displayHeight) {
//   veggie4.y = -5;
//  }

//  if (veggie5.y>displayHeight) {
//   veggie5.y = -5;
//  }

//  if (veggie6.y>displayHeight) {
//   veggie6.y = -5;
//  }

//  if (veggie7.y>displayHeight) {
//   veggie7.y = -5;
//  }

//  if (veggie8.y>displayHeight) {
//   veggie8.y = -5;
//  }

//  if (veggie9.y>displayHeight) {
//   veggie9.y = -5;
//  }

//  if (veggie10.y>displayHeight) {
//   veggie10.y = -5;
//  }

if (mousePressedOver(veggie)) {
 veggie.shapeColor="green";
}




scope.x = mouseX;
scope.y = mouseY;



veggie.bounceOff(linel)
veggie1.bounceOff(linel)
veggie2.bounceOff(linel)
// veggie3.bounceOff(linel)
// veggie4.bounceOff(linel)
// veggie5.bounceOff(linel)
// veggie6.bounceOff(linel)
// veggie7.bounceOff(linel)
// veggie8.bounceOff(linel)
// veggie9.bounceOff(linel)
// veggie10.bounceOff(linel)

veggie.bounceOff(liner)
veggie1.bounceOff(liner)
veggie2.bounceOff(liner)
// veggie3.bounceOff(liner)
// veggie4.bounceOff(liner)
// veggie5.bounceOff(liner)
// veggie6.bounceOff(liner)
// veggie7.bounceOff(liner)
// veggie8.bounceOff(liner)
// veggie9.bounceOff(liner)
// veggie10.bounceOff(liner)

veggie.bounceOff(veggie1);
veggie.bounceOff(veggie2);

veggie1.bounceOff(veggie2);




  drawSprites();
}
