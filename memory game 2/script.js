let cardarray = [
    {
        name : "image1",
        img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF9dc0EiYc0cDOOfWGzLm9bfk0H0ON8y0qHA&usqp=CAU"
    },
    {
        name : "image2",
        img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToA2n-TuWu6sz7QTu7i23Z8salgNEAf5ivmQ&usqp=CAU"
    },
    {
        name : "image3",
        img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5W2kQ_62bZG8acv9BCebTfQPpmWn3VWBEqg&usqp=CAU"
    },
    {
        name : "image4",
        img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCyWJeVk4wXKcXyvrhmFcWQ0BsqmMAzwb_Gg&usqp=CAU"
    },
    {
        name : "image5",
        img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkeD-9PLmywAWfCrKybHmerjJkiYMWRnizOg&usqp=CAU"
    },
    {
        name : "image6",
        img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ90OQrtuEA_WTZ89QNPWNwe3hGcjhzeNYtLg&usqp=CAU"
    },
    {
        name : "image1",
        img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF9dc0EiYc0cDOOfWGzLm9bfk0H0ON8y0qHA&usqp=CAU"
    },
    {
        name : "image2",
        img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToA2n-TuWu6sz7QTu7i23Z8salgNEAf5ivmQ&usqp=CAU"
    },
    {
        name : "image3",
        img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5W2kQ_62bZG8acv9BCebTfQPpmWn3VWBEqg&usqp=CAU"
    },
    {
        name : "image4",
        img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCyWJeVk4wXKcXyvrhmFcWQ0BsqmMAzwb_Gg&usqp=CAU"
    },
    {
        name : "image5",
        img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkeD-9PLmywAWfCrKybHmerjJkiYMWRnizOg&usqp=CAU"
    },
    {
        name : "image6",
        img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ90OQrtuEA_WTZ89QNPWNwe3hGcjhzeNYtLg&usqp=CAU"
    },

]

let cardchoosen = [];
let cardchoosenid = [];
let cardswon = [];
cardarray.sort(()=> 0.5 - Math.random())


let griddisplay = document.getElementById("grid")
function createboard(){
    for(i=0;i<cardarray.length ;i++){
        const card = document.createElement("img");
        card.setAttribute("src" , "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTib7QLx75kvFKsxH3lvPXNAunYwuD4s_CRCg&usqp=CAU");
        card.setAttribute("data-id", i)
        card.addEventListener("click", flipcard)
        griddisplay.appendChild(card);
    }
}

createboard()


function flipcard(){
   let cardid =  this.getAttribute("data-id")
   cardchoosen.push(cardarray[cardid].name)
   cardchoosenid.push(cardid)

   this.setAttribute("src" , cardarray[cardid].img);

   if(cardchoosen.length == 2){
    setTimeout(checkmatch , 500)
   }
   
}


function checkmatch(){

    let cards = document.querySelectorAll("img")

    
    let optiononeid = cardchoosenid[0];
    let optiontwoid = cardchoosenid[1];
    if(optiononeid == optiontwoid){
        alert("you have cliked the same image")
    }
  
    // if(optiononeid == optiontwoid){
    //    alert("you have clicked the same image")
    //     cards[optiononeid].setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTib7QLx75kvFKsxH3lvPXNAunYwuD4s_CRCg&usqp=CAU" )

    //     cards[optiontwoid].setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTib7QLx75kvFKsxH3lvPXNAunYwuD4s_CRCg&usqp=CAU" )
   
    // }

    if(cardchoosen[0] === cardchoosen[1]){
        alert("you have found the match")
       cards[optiononeid].setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFO01wq6g3jCAz0erO-pP93xXlsrPIrRWt6Q&usqp=CAU" )

       cards[optiontwoid].setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFO01wq6g3jCAz0erO-pP93xXlsrPIrRWt6Q&usqp=CAU" )

       cards[optiononeid].removeEventListener("click" , flipcard)
       cards[optiontwoid].removeEventListener("click" , flipcard)
       cardswon.push(cardchoosen)
       
    }
    else{
        cards[optiononeid].setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTib7QLx75kvFKsxH3lvPXNAunYwuD4s_CRCg&usqp=CAU" )

        cards[optiontwoid].setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTib7QLx75kvFKsxH3lvPXNAunYwuD4s_CRCg&usqp=CAU" )
       
    }
     cardchoosen = [];
     cardchoosenid = [];

     if(cardswon.length === cardarray.length/2){
        score.innerText = "congratulations you have found all the cards";
     }
    
     
}

let score = document.getElementById("score")
    


