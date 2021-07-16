let player;
let pimg;
let obsimg;
let obstacless = [];
let bullets = [];
let bullet;
let score = 0;
function preload() {
  pimg = loadImage("player.png");
  obsimg = loadImage("obsb7b7.jpg");
}

function setup() {
  createCanvas(1800, 900);
  console.log(windowWidth, windowHeight);
  player = new Player();
  bullet = new Bullet();
}

function keyPressed() {
  if (key === " ") {
    bullets.push(new Bullet());
  }
}

function draw() {
  background(0);

  if (keyIsDown(RIGHT_ARROW)) {
    player.moveRight();
  }
  if (keyIsDown(LEFT_ARROW)) {
    player.moveLeft();
  }

  if (random(1) < 0.01) {
    obstacless.push(new Obstacle());
  }

  for (let obs of obstacless) {
    obs.show();
    obs.move();
    if (player.collided(obs) === true) {
      console.log("GAME OVER");
      noLoop();
    }
    for (let bullet of bullets) {
      if (bullet.bulletcollided(obs) === true) {
        score++;
        obstacless = obstacless.filter((ele) => ele.x !== obs.x);
      }
    }
  }

  for (let bullet of bullets) {
    bullet.show();
    bullet.shoot();
  }
  player.show();
  player.move();
  stroke(255);
  textSize(50);
  noFill();
  text(score, 1750, 50);
}
