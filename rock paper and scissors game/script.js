
let inputs = document.querySelectorAll("input")
let yourchoice = document.getElementsByClassName("y-choice")[0]
let computerchoice = document.getElementsByClassName("c-choice")[0]
let result = document.getElementsByClassName("all-result")[0]

let choices = ["Rock" , "Paper" , "Scissors"]


inputs.forEach(function(input){
     input.addEventListener("click" , function(e){
        let target = e.currentTarget;
         let value = target.value;
         yourchoice.innerHTML = value;
         
        let numbg = randomnumber();

        let compchoice = choices[numbg];

        computerchoice.innerHTML = compchoice;

        if(value === compchoice){
            result.innerHTML = " Match Drawn"
        }

        else if(value === "Rock" && compchoice === "Paper"){
            result.innerHTML = "You Lost"
        }

        else if(value === "Paper" && compchoice === "Scissors"){
            result.innerHTML = "You Lost"
        }

        else if(value === "Scissors" && compchoice === "Rock"){
            result.innerHTML = "You Lost"
        }

        else if(value === "Rock" && compchoice === "Scissors"){
            result.innerHTML = "You Won"
        }

        else if(value === "Paper" && compchoice === "Rock"){
            result.innerHTML = "You Won"
        }

        else if(value === "Scissors" && compchoice === "Paper"){
            result.innerHTML = "You Won"
        }


        
     })
})


function randomnumber(){
   return  Math.floor(Math.random()*choices.length)
}