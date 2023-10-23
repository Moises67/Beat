
function setup() {
  createCanvas(400,400);
  jugador = createSprite(205, 205, 10, 10);
  jugador.addAnimation("correr",correr);
  jugador.scale = 0.3
}

function draw() 
{
  background(30);
  drawSprites();
  if(keyDown(RIGHT_ARROW)){
    jugador.x += 4
    jugador.mirrorX(1)
  }
  if(keyDown(LEFT_ARROW)){
    jugador.x -= 4
    jugador.mirrorX(-1)
  }
  if(keyDown(DOWN_ARROW)){
    jugador.y += 4
  }
  if(keyDown(UP_ARROW)){
    jugador.y -= 4
  }
  if(keyDown(82)){
    jugador.x = 205
    jugador.y = 205
  }
}

function preload(){
  correr = loadAnimation("m1.gif","m2.gif","m3.gif");
}