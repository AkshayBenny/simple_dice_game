

function roll() {
    
    
    var a = Math.floor(((Math.random() * 6) + 1));

    if (a === 1) {
         document.querySelector(".dice-left img").src = "dice1.png";
    } else if (a === 2) {
         document.querySelector(".dice-left img").src = "dice2.png";
    } else if (a === 3) {
         document.querySelector(".dice-left img").src = "dice3.png";
    } else if (a === 4) {
         document.querySelector(".dice-left img").src = "dice4.png";
    } else if (a === 5) {
         document.querySelector(".dice-left img").src = "dice5.png";
    } else {
         document.querySelector(".dice-left img").src = "dice6.png";
    }
  

    
    var b = Math.floor(((Math.random() * 6) + 1));
    
    

    if (b === 1) {
         document.querySelector(".dice-right img").src = "dice1.png";
    } else if (b === 2) {
         document.querySelector(".dice-right img").src = "dice2.png";
    } else if (b === 3) {
         document.querySelector(".dice-right img").src = "dice3.png";
    } else if (b === 4) {
         document.querySelector(".dice-right img").src = "dice4.png";
    } else if (b === 5) {
         document.querySelector(".dice-right img").src = "dice5.png";
    } else {
         document.querySelector(".dice-right img").src = "dice6.png";
    }





    
    if (a > b) {
        document.getElementById("result").innerText = "Player 1 Wins!";
    } else if (a < b) {
        document.getElementById("result").innerText = "Player 2 Wins!";
    } else {
        document.getElementById("result").innerText = "It's a Draw!!";
       
    }
    

}  
    






