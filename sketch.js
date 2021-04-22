function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();

hour = createSprite;
let h = hour();
text('Current hour:\n' + h, 5, 50);

minute = createSprite;
let m = minute();
text('Current minute: \n' + m, 5, 50);

seconds = createSprite;
let s = second();
text('Current second: \n' + s, 5, 50);
}