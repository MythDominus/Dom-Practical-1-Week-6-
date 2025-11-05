const theEnd = "It's all over now...";
let myFont1; 
let myFont2;

function setup() {
    createCanvas(600, 400);
    currentFont = myFont1;
}

function draw() {
    background(0);
    textAlign(CENTER, CENTER);
    textSize(50);
    fill(255);
    textFont(currentFont);
    text(theEnd, 15, 100, width, height / 2);
}

function preload() {
    myFont1 = loadFont('assets/SpecialElite-Regular.ttf');
    myFont2 = loadFont('assets/CabinSketch-Regular.ttf');
}

function mousePressed() {
    if (currentFont === myFont1) {
        currentFont = myFont2;
    } else {
        currentFont = myFont1;
    }
}