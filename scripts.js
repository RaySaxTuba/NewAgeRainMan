/* Place your JavaScript in this file */
//var rukiaFlag = false;
var scare = new sound("Face.mp3");
var quotes = [
    "Cows go moo!\n",
    "Mah candy!\n",
    "The tuba is loud in the orchestra!\n",
    "Aye me boy! Me money me boy!\n",
    "Chummy is fummy!",
    "It's kitchen stove!"
    ];

function interChange(x) {
    x.classList.toggle("change");
}

document.getElementById("quotes").innerHTML = quotes[4];



var myGamePiece;
var superbomb;

function startGame() {
    myGameArea.start();
    myGamePiece = new component(30, 30, "red", 10, 120);
    superbomb = new component(100, 100, "gray", canvas.width/2, canvas.height/2);
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.canvas.style = "border:1px solid #000000;"
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
        window.addEventListener('keydown', function (e) {
            myGameArea.keys = (myGameArea.keys || []);
            myGameArea.keys[e.keyCode] = (e.type == "keydown");
        })
        window.addEventListener('keyup', function (e) {
            myGameArea.keys[e.keyCode] = (e.type == "keydown");            
        })
    }, 
    clear : function(){
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function component(width, height, color, x, y) {
    this.gamearea = myGameArea;
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.topSpeed = 1;    
    this.x = x;
    this.y = y;    
    this.update = function() {
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;        
    }
    this.leftColl = false;
    this.rightColl = false;
    this.topColl = false;
    this.bottomColl = false;

    this.collision = function(objectHit) {
        var myLeft = this.x;
        var myRight = this.x + this.width;
        var myTop = this.y;
        var myBottom = this.y + this.height;
        var objLeft = objectHit.x;
        var objRight = objectHit.x + objectHit.width;
        var objTop = objectHit.y;
        var objBottom = objectHit.y + objectHit.height;


    }
}

function updateGameArea() {
    myGameArea.clear();
    myGamePiece.speedX = 0;
    myGamePiece.speedY = 0;    
    if (myGameArea.keys && myGameArea.keys[37]) {
        myGamePiece.speedX = -1;
        }

    if (myGameArea.keys && myGameArea.keys[39]) {myGamePiece.speedX = 1; }
    if (myGameArea.keys
        &&
        myGameArea.keys[38]) 
        {myGamePiece.speedY = -1; }
    if (myGameArea.keys && myGameArea.keys[40]) {myGamePiece.speedY = 1; }
    myGamePiece.newPos();    
    myGamePiece.update();
}

function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function(){
    this.sound.play();
  }
  this.stop = function(){
    this.sound.pause();
  }
}

function wall(wallType) {
    //this.gamearea = myGameArea;

}