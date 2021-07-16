class Bullet {
  constructor() {
    this.x = player.x + 25;
    this.y = player.y;
  }

  show() {
    stroke(255);
    rect(this.x, this.y, 2, 8);
  }
  shoot() {
    this.y -= 20;
  }
  bulletcollided(enemytokill) {
    let iscollided = collideRectRect(
      this.x,
      this.y,
      2,
      8,
      enemytokill.x,
      enemytokill.y,
      enemytokill.size,
      enemytokill.size
    );
    return iscollided;
  }
}
