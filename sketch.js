var background_1,backgroundImage;


function preload() {
    //load the images here
    backgroundImage = loadImage("garden.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    background_1 = createSprite(400,200,10,10);
    background_1.addImage(backgroundImage);

}

function draw() {

    background(255,255,255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}






