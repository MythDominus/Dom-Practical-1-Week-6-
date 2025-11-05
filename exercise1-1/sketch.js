const latin = 'Lorem ipsum dolor sit amet';
let myFont;

function setup() {
    createCanvas(600, 600);
}

function draw() {
    background(0, 0, 200);
    textSize(60);
    fill(255);
    textFont(myFont);
    textAlign(RIGHT, CENTER);
    text(latin, 275, 100, width / 2, height / 1);
}

function preload() {
    myFont = loadFont('assets/ComicRelief-Regular.ttf');
}