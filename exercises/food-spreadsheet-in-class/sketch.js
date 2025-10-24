let data;
let url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRYyBUvUfYEQHvRI4nffYpJ2CYB5cJsIN5Yt6bfk_NoM17PR2Cd3992o4DgiNG_yT_yi3hMr-T7OX0R/pub?gid=0&single=true&output=csv";

function preload() {
  data = loadTable(url, 'csv', 'header');
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(200, 238, 230);

  rectMode(CENTER);
  

  if (data){
    let numRows = data.getRowCount();
    
    let names = data.getColumn("Food");
    let cal = data.getColumn("Calories");
    let fat = data.getColumn("Fat (grams)")
    let sod = data.getColumn("Sodium (milligrams)");
    let prot = data.getColumn("Protein (grams)");

    for(let y = 0; y < numRows; y ++){
      fill(98, 50, 20);
      
      textAlign(LEFT);
      text(names[y], 7, height/5 -30 + (y*height/5));

      fill(255);

      c =new FoodBar(width/4 + 20, height/5 -32 + (y*height/5), cal[y]/5, 10, "calories");
      c.show();
      c.hover();

      f = new FoodBar(width/4 + 100, height/5 -32 + (y*height/5), fat[y], 10, "fat");
      f.show();
      f.hover();

      s = new FoodBar(width/4 + 180, height/5 -32 + (y*height/5), sod[y]/10, 10, "sodium");
      s.show();
      s.hover();


      p = new FoodBar(width/4 + 260, height/5 -32 + (y*height/5), prot[y], 10, "protein");
      p.show();
      p.hover();

      // rect(width/4 + 20, height/5 -32 + (y*height/5), cal[y]/5, 10);
      // rect(width/4 + 100, height/5 -32 + (y*height/5), fat[y], 10);
      // rect(width/4 + 180, height/5 -32 + (y*height/5), sod[y]/10, 10);
      // rect(width/4 + 260, height/5 -32 + (y*height/5), prot[y], 10);
    }

    fill(20, 50, 95);
    text("Calories", width/4 - 30, 10);
    text("Fat (g)", width/4 + 50, 10);
    text("Sodium (mg)", width/4 + 130, 10);
    text("Protein (g)", width/4 + 210, 10);
  }
}

class FoodBar{
  constructor(tempX, tempY, tempW, tempH, tempType){
    this.x = tempX;
    this.y = tempY;
    this.w = tempW;
    this.h = tempH;
    this.hovering = false;
    this.type = tempType;
  }

  //defining show function
  show(){
    rect(this.x, this.y, this.w, this.h);
  }

  //defining hover function
  //this actually just displays the rectangle's width haha
  hover(){
    textAlign(CENTER);
    
    //includes +5 width-limit adjustments to account for small rects
    if (mouseX <= (this.x + (this.w/2+5)) && mouseX >= (this.x - (this.w/2+5))){
      if (mouseY <= (this.y + this.h/2) && mouseY >= (this.y - this.h/2)){
        fill(0);
        
        //checking whether width needs multiplying to equal value
        if (this.type == "calories"){
          text(this.w*5, this.x, this.y - 10);
        } else if (this.type == "sodium"){
          text(this.w*10, this.x, this.y - 10);
        } else {
          text(this.w, this.x, this.y -10);
        }
        //reseting color so rectangles are white
        fill(255);
      }
    }

  }
  
}
