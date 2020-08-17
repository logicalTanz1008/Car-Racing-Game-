var ball;
var database, position;
var gameState=0;
var playerCount, form, player, game1;
var allPlayers;
var car1, car2, car3, car4, cars;

function setup(){
    canvas=createCanvas(displayWidth-20, displayHeight-30);
    console.log(displayWidth);
    console.log(displayHeight);
    /* ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";*/

    //creating a database connection
    database=firebase.database();

    game1 = new Game();
    game1.getState();
    game1.start();
    //var nodes = database.ref('ball/position');
    //nodes.on("value");
}

/* function readPos(data){
    position=data.val();
    ball.x=position.x;
    ball.y=position.y; 
}*/

/*function showErr(){
    console.log("No Error");
}*/

function draw(){

    if (playerCount===4) {
        game1.update(1);
    }
    
    if (gameState===1) {
        clear();
        game1.play();
    }

   /* background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites(); */

}

/*function writePosition(x,y){
    database.ref('ball/position').set({
        x:position.x + x,
        y:position.y + y
    })

}*/
