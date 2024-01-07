let boxes = document.getElementsByClassName("box")
console.log(boxes)

let turn = "X"
Array.from(boxes).forEach(function(element){
   
       let boxtext = element.querySelector(".boxtext")
     element.addEventListener("click" , function(e){
        // let target = e.currentTarget
     if(boxtext.innerText === ""){
         boxtext.innerText = turn;
        turn =  changeturn();
        checkwin();
     }
     })

   })

  function checkwin(e){
    let boxtexts = document.getElementsByClassName("boxtext")
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [2,4,6],
        [0,4,8]
    ]
    wins.forEach(function(e){
      if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[1]].innerText === boxtexts[e[2]].innerText) && (boxtexts[e[0]].innerText !== "")){
       alert("you have won the game brother")
      }
      
    })
  }

function changeturn (){
    return turn === "X"? "0" : "X"
}