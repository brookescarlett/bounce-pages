class Particle{
  constructor(x, y, radius, direction, color){
    this.x = x
    this.y = y
    this.color = color
    if (this.color === 0){
      this.r = random(0, 50)
      this.g = random(0, 100)
      this.b = random(0, 255)
    } else if (this.color === 1){
      this.r = random(0, 50)
      this.g = random(0, 255)
      this.b = random(0, 255)
    } else if (this.color === 2){
      this.r = random(0, 50)
      this.g = random(0, 255)
      this.b = random(0, 100)
    }

    this.alpha = 255
    this.direction = random(0, 2 * PI)
    this.radius = radius
    this.xSpeed = random(-5, 5)
    this.ySpeed = random(-5, 5)
    this.acceleration = 2
    this.alphaDecrease = 5
  }

  show(){
    noStroke()
    fill(this.r, this.g, this.b, this.alpha)
    ellipse(this.x, this.y, this.radius)
  }

  update(){
    push()
    rotate(this.direction)
    this.x += this.xSpeed
    this.y += this.ySpeed
    pop()
    this.alpha -= this.alphaDecrease
    if (this.xSpeed > 4){
      this.xSpeed -= this.acceleration
    }
    if (this.ySpeed > 4){
      this.ySpeed -= this.acceleration
    }
  }
}
