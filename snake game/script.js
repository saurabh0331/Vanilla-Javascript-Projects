const grid = document.getElementsByClassName("grid")[0]
const blockposition = [0 , 700];
let blockcurrentpos = blockposition;




    const block = document.createElement("div");
    block.classList.add("block");
    block.style.left = blockcurrentpos[0] + "px";
    block.style.bottom =  blockcurrentpos[1] + "px";
    grid.appendChild(block)


    // draw a block 

function drawblock(){
    block.style.left = blockcurrentpos[0] + "px";
    block.style.bottom = blockcurrentpos[1] + "px"
}


// move the block

function moveblock(e){
    switch(e.key){
       case "ArrowRight" :
       
            blockcurrentpos[0] += 10;
            drawblock();
      
        break;

         case "ArrowLeft" :
            
                blockcurrentpos[0] -= 10;
                drawblock();
            
         break;

         case "ArrowUp" :
            
                blockcurrentpos[1] += 10;
                drawblock();
         
         break;

         case "ArrowDown" :
         
                blockcurrentpos[1] -= 10;
                drawblock();

            break;
            checkcollision();
    }
}


   const key = document.addEventListener("keydown" , moveblock)


// create a ball

const ball = document.createElement("div");
ball.classList.add("ball");
grid.appendChild(ball)


// Move ball at a random position

function xaxis(){
    return Math.floor(Math.random()*1590)
}

function yaxis(){
    return Math.floor(Math.random()*740)
}
console.log(xaxis() , yaxis())

setTimeout(() => {
    ball.style.left = xaxis() + "px";
    ball.style.bottom = yaxis() + "px"
}, 1000);



// CHECK COLLISIONS

function checkcollision(){
    if(blockcurrentpos[0] === ball.style.left && blockcurrentpos[1] === ball.style.bottom){
        block.classList.add("block1")

    }
}









