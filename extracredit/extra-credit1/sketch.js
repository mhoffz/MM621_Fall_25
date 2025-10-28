let bubbles = [];
let bubbleNum = 5;

function setup() {
  createCanvas(400, 400);

  for(let i = 0; i < bubbleNum; i++){
    let x = random(width);
    let y = random(height);

    bubbles[i] = new Bubble(x, y);
  }
}

function draw() {
  background(220);

  for(let i = 0; i < bubbleNum; i++){
    bubbles[i].show();
    bubbles[i].move();
  }
}

class Bubble {
  constructor(tempX, tempY){
    this.x = tempX;
    this.y = tempY;
    // store a persistent target so the bubble can move toward it across frames
    this.targetX = this.x;
    this.targetY = this.y;
    this.counter = 100;
  }

  move(){
    // every 100 frames pick a new random target
    // if (frameCount % 100 === 0){
    //   this.targetX = random(width);
    //   this.targetY = random(height);
    // }

    if (this.counter % 100 === 0){
      this.targetX = random(width);
      this.targetY = random(height);
    }
    this.counter += 1;

    // move toward target by 1 pixel per frame
    if (this.x < this.targetX){
      this.x += 1;
    } else if (this.x > this.targetX){
      this.x -= 1;
    }

    if (this.y < this.targetY){
      this.y += 1;
    } else if (this.y > this.targetY){
      this.y -= 1;
    }
  
  }


  //defining show function
  show(){
    fill(255);
    ellipse(this.x, this.y, 60);
  }
}