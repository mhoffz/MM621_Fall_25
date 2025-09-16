let head_id = 0;
let eyes_id = 0;
let hairs_id = 0;
let mouths_id = 0;

let head1;
let head2;
let head3;
let head4;

let eyes1;
let eyes2;
let eyes3;
let eyes4;

let antennae;
let cap;
let hair;
let hat;

let mouth1;
let mouth2;
let mouth3;
let stache;

let bGround;


function preload() {
  bGround = loadImage("Background.png");

  head1 = loadImage("Head1.png");
  head2 = loadImage("Head2.png");
  head3 = loadImage("Head3.png");
  head4 = loadImage("Head4.png");

  eyes1 = loadImage("Eyes1.png");
  eyes2 = loadImage("Eyes2.png");
  eyes3 = loadImage("Eyes3.png");
  eyes4 = loadImage("Eyes4.png");

  antennae = loadImage("Antennae.png");
  cap = loadImage("Cap.png");
  hair = loadImage("Hair.png");
  hat = loadImage("Hat.png");
  
  mouth1 = loadImage("Mouth1.png");
  mouth2 = loadImage("Mouth2.png");
  mouth3 = loadImage("Mouth3.png");
  stache = loadImage("LastStache.png");


}

function setup() {
  createCanvas(500, 600);
  rectMode(CENTER);
  imageMode(CENTER);
}

function draw() {
  background(220);

  image(bGround, 250, 300);

  //heads!

  if (head_id == 0) {
    //option 1
    image(head1, 250, 350);
  } else if (head_id == 1) {
    //option 2
    image(head2, 250, 350);
  } else if (head_id == 2) {
    //option 3
   image(head3, 250, 350);
  } else if (head_id == 3) {
    //option 4
    image(head4, 250, 350);
  }

  //eyes!

  if (eyes_id == 0) {
    //option 1
    image(eyes1, 250, 350);
  } else if (eyes_id == 1) {
    //option 2
    image(eyes2, 250, 350);
  } else if (eyes_id == 2) {
    //option 3
   image(eyes3, 250, 350);
  } else if (eyes_id == 3) {
    //option 4
    image(eyes4, 250, 350);
  }

  //hairs!

  if (hairs_id == 0) {
    //option 1
    image(antennae, 250, 200);
  } else if (hairs_id == 1) {
    //option 2
    image(cap, 220, 250);
  } else if (hairs_id == 2) {
    //option 3
   image(hair, 250, 210);
  } else if (hairs_id == 3) {
    //option 4
    image(hat, 275, 175);
  }

  //mouths!

    if (mouths_id == 0) {
    //option 1
    image(mouth1, 250, 420);
  } else if (mouths_id == 1) {
    //option 2
    image(mouth2, 250, 420);
  } else if (mouths_id == 2) {
    //option 3
   image(mouth3, 250, 420);
  } else if (mouths_id == 3) {
    //option 4
    image(stache, 250, 420);
  }  

}

function keyPressed(){
  if (keyIsDown(UP_ARROW)) {
    head_id = int(random(4));
    eyes_id = int(random(4));
    hairs_id = int(random(4));
    mouths_id = int(random(4));
  }
}
