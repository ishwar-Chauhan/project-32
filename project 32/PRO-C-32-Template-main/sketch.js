const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    getBackgroundImg();
}

function setup(){
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
     if(backgroundImg)
     background(backgroundImg)
    Engine.update(engine);

    // write code to display time in correct format here
   getBackgroundImg();
    
}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")

    //change the data in JSON format
    var responseJSON = await response.json();

    // write code slice the datetime
    var date = responseJSON.datetime
    var hour = date.slice(11,13) 

    // add conditions to change the background images from sunrise to sunset
    if(hour>=04 && hour<=06){
       bg = "sunrise1.png"; 
    }else if(hour>=06 && hour<=08){
        bg = "sprites/sunrise2.png" 
    }else if(hour>=08 && hour<=10){
        bg = "sprites/sunrise3.png" 
    }else if(hour>=10 && hour<=12){
        bg = "sprites/sunrise4.png" 
    }else if(hour>=12 && hour<=14){
        bg = "sprites/sunrise5.png" 
    }else if(hour>=14 && hour<=16){
        bg = "sprites/sunrise6.png" 
    }else if(hour>=16 && hour<=18){
        bg = "sprites/sunset7.png" 
    }else if(hour>=18 && hour<=20){
        bg = "sprites/sunset8.png" 
    }else if(hour>=20 && hour<=23){
        bg = "sprites/sunset9.png" 
    }else if(hour>=23 && hour<=00){
        bg = "sprites/sunset10.png" 
    }else if(hour>=00 && hour<=03){
        bg = "sprites/sunset11.png" 
    }else{
        bg = "sprites/sunset12.png"
    }

   // load the image in backgroundImg variable here
    backgroundImg = loadImage(bg);
}
