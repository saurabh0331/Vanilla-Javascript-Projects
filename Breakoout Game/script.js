let grid = document.getElementsByClassName("grid")[0];
const score = document.getElementById("score")
let blockwidth = 150;
let blockheight = 35;
let totalwidth = 650;
let totalheight = 500;
let balldiameter = 40;
let timerid;
let scorecard = 0;

const userstart = [262,10];
let currentpoition = userstart;

class Block{
    constructor(Xaxis , Yaxis){
      this.bottomleft = [Xaxis , Yaxis],
      this.bottomright = [Xaxis + blockwidth , Yaxis],
      this.topleft = [Xaxis , Yaxis+blockheight],
      this.topright = [Xaxis + blockwidth , Yaxis + blockheight]
    }
}

let blocks = [
    new Block(10 , 450),
    new Block(170 , 450),
    new Block(330 , 450),
    new Block(490 , 450),
    new Block(10 , 400),
    new Block(170 , 400),
    new Block(330 , 400),
    new Block(490 , 400),
    new Block(10 , 350),
    new Block(170 , 350),
    new Block(330 , 350),
    new Block(490 , 350),
]


for(i=0 ; i<blocks.length ; i++){
const block = document.createElement("div");
block.classList.add("block");
block.style.left = blocks[i].bottomleft[0] + "px"
block.style.bottom = blocks[i].bottomleft[1] + "px"
grid.appendChild(block)
}


// Creating a User


const user = document.createElement("div");
user.classList.add("user");
grid.appendChild(user);
user.style.left = currentpoition[0] + "px";
user.style.bottom = currentpoition[1] + "px"


// Draw a user

function mousedraw(){
    user.style.left = currentpoition[0] + "px";
    user.style.bottom = currentpoition[1] + "px"
}




function moveuser(e){
    switch(e.key){
        
            case "ArrowLeft" :
                if(currentpoition[0] > 0){
                currentpoition[0] -= 10;
                mousedraw()
                break;
        }
       
              
            case "ArrowRight" :
                if(currentpoition[0] < totalwidth - blockwidth ){
                currentpoition[0] += 10;
                mousedraw();
                break;
            }
    }
}

const key = document.addEventListener("keydown" , moveuser)

// Draw a Ball

function balldraw(){
    ball.style.left = ballposition[0] + "px";
    ball.style.bottom = ballposition[1] + "px"
}

// Create a ball
const ballstart = [320 , 60];
let ballposition = ballstart;

const ball = document.createElement("div")
ball.classList.add("ball");
balldraw();
grid.appendChild(ball)



// Move a Ball
let xdirection = 2;
let ydirection = 2

function moveball(){
    ballposition[0] += xdirection;
    ballposition[1] += ydirection;
    balldraw()
    checkcollision()
    
}

 timerid = setInterval(moveball , 15)


//  Check for collisions

function checkcollision(){

//    check for blocks collisions
   for(i=0 ; i < blocks.length ; i++){
    if(
        (ballposition[0] > blocks[i].bottomleft[0] && ballposition[0] < blocks[i].bottomright[0])&&
        ((ballposition[1] + balldiameter) > blocks[i].bottomleft[1] && ballposition[1] < blocks[i].topleft[1])
    ){
        let allblocks = Array.from(document.querySelectorAll(".block"))
        allblocks[i].classList.remove("block");
        blocks.splice(i , 1);
        changedirection();
        scorecard++;
        score.innerHTML = scorecard;


    //    CHECK FOR WIN

        if(blocks.length === 0){
            score.innerHTML = "YOU WON ";
            clearInterval(timerid);
            document.removeEventListener("keydown" , moveuser)
        }
    }
   }


//    CHECK FOR USER COLLISIONS
     
if(
    (ballposition[0] > currentpoition[0] && ballposition[0] < currentpoition[0] + blockwidth) &&
    (ballposition[1] > currentpoition[1] && ballposition[1] < currentpoition[1] + blockheight)
)
{
    changedirection();
}



    if(
        ballposition[0] >= (totalwidth - balldiameter) || ballposition[1] >= (totalheight - balldiameter) ||
        ballposition[0] <= 0){
        changedirection()
    }

    if(ballposition[1] <= 0){
        clearInterval(timerid);
        score.innerHTML = "You Loose"
    }
}



// change the direction

function changedirection(){
   if(xdirection === 2 && ydirection === 2){
    xdirection = -2;
    return
   }

   if(xdirection === -2 && ydirection === 2){
      ydirection = -2;
      return
   }

   if(xdirection === -2 && ydirection === -2){
    xdirection = 2;
    return
   }

   if(xdirection === 2 && ydirection === -2)
      ydirection = 2;
    return
  
}



