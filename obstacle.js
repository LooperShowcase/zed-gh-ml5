class Obstacle {
  constructor() {
    this.size = 50;
    this.x = random(300, 1500);
    this.y = height - random(200, 700);
    this.velocity = random(1) > 0.5 ? -3 : 3;
  }
  show() {
    image(obsimg, this.x, this.y, this.size, this.size);
  }
  moveleft() {
    this.x -= 4;
  }

  moveright() {
    this.x += 4;
  }

  move() {
    this.x += this.velocity;
  }
}
