class Player {
  constructor() {
    this.size = 50;
    this.x = this.size;
    this.y = height - this.size;
    this.velocityx = 0;
  }

  collided(obstacletocheck) {
    let iscolliding = collideRectRect(
      this.x,
      this.y,
      this.size - 5,
      this.size - 5,
      obstacletocheck.x,
      obstacletocheck.y,
      obstacletocheck.size,
      obstacletocheck.size
    );
    return iscolliding;
  }

  show() {
    image(pimg, this.x, this.y, this.size, this.size);
  }

  moveRight() {
    this.x += 9;
  }

  moveLeft() {
    this.x -= 9;
  }

  move() {
    this.x += this.velocityx;

    this.x = constrain(this.x, 0, width - this.size);

    if (this.x === width - this.size) {
      this.moveLeft();
    }

    if (this.x === 0) {
      this.moveRight();
    }
  }
}
