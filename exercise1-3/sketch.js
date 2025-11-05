const welc = 'Welcome Player'
let myFont; 
let index;

function setup() {
    createCanvas(500, 400);
    frameRate(5);
}

function draw() {
    background(10, 75, 0);
    textAlign(CENTER, CENTER);
    textSize(60);
    fill(255);
    textFont(myFont);
    if(index < welc.length){
        index += 1
    } else {
        index = 0
    }
    text(welc.slice(0, index), width / 2, height / 2);
}

function preload() {
    myFont = loadFont('assets/Tiny5-Regular.ttf');
}
