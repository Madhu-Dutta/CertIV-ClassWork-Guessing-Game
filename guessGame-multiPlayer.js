//Selecting all the button elements
var guessBtn = document.getElementById("guess");
var resetBtn = document.getElementById('reset');
var newGame = document.getElementById('newGame');
//select image and text elements
var textMsg = document.getElementById('hintText');
var image = document.querySelector("img"); 

var guessCount = 1;
var userInput = "";
var turns = 100;
//players and attempts
var p1Button = document.getElementById("p1");
var p2Button = document.getElementById("p2");
var p3Button = document.getElementById("p3");
var p4Button = document.getElementById("p4");
var p5Button = document.getElementById("p5");
var numPlayer = 0;
//To stop program when winner found
var winner = false;
var luckyNumber = -1;

//Generate lucky Number 0-3
var genarateLuckyNum = function(){
    luckyNumber = Math.floor(Math.random()*100+1);
};


//Object player
var player1 = {
    name: "Player 1",
    numAttempts: 0,
    lastguess: [], 
    wins: 0
};
var player2 = {
    name: "Player 2",
    numAttempts: 0,
    lastguess: [], 
    wins: 0
};
var player3 = {
    name: "Player 3",
    numAttempts: 0,
    lastguess: [], 
    wins: 0
};
var player4 = {
    name: "Player 4",
    numAttempts: 0,
    lastguess: [], 
    wins: 0
};
var player5 = {
    name: "Player 5",
    numAttempts: 0,
    lastguess: [], 
    wins: 0
};
p1Button.onclick = function(){
    var p1Name = prompt("Enter Player1 Name________");
    player1['name'] = p1Name;
    p1Button.innerHTML = p1Name;    
}
p2Button.onclick = function(){
    p2Name = prompt("Enter Player2 name____");
    player2['name'] = p2Name;
    p2Button.innerHTML = p2Name;
 }
p3Button.onclick = function(){
    p3Name = prompt("Enter Player3 name____");
    player3['name'] = p3Name;
    p3Button.innerHTML = p3Name;
 }
p4Button.onclick = function(){
    p4Name = prompt("Enter Player4 name____");
    player4['name'] = p4Name;
    p4Button.innerHTML = p4Name;
}
p5Button.onclick = function(){
    p5Name = prompt("Enter Player5 name____");
    player5['name'] = p5Name;
    p5Button.innerHTML = p5Name;
}
guessBtn.addEventListener('click', play);

function hintFunc(){
    if(luckyNumber > -1){
        if((luckyNumber - 4) >= 0){
            if((luckyNumber + 4) < 101){
                alert("The number is between " + (luckyNumber - 4) + " and " + (luckyNumber + 4));
            }else {
                alert("The number is greater than " + (luckyNumber - 4));
            }
        }else{
            alert("The number is less than " + (luckyNumber + 4));
        } 
    }   
}

genarateLuckyNum();

function play(){
    winner = false;
    
    var p1Input = document.getElementById('inputNum1').value;
    var p2Input = document.getElementById('inputNum2').value;
    var p3Input = document.getElementById('inputNum3').value;
    var p4Input = document.getElementById('inputNum4').value;
    var p5Input = document.getElementById('inputNum5').value;
    //If value is not empty call guessCheck
    if(p1Input != ""){
        
        guessCheck(p1Input, player1);
        
        document.querySelector('.p1Name').textContent = player1['name'];
        document.querySelector('.p1guesses').textContent = player1['lastguess'] + ' , ';
        player1['numAttempts']++;

        document.querySelector('.attempts1').textContent = player1['numAttempts'];
        document.querySelector('.numWin1').textContent = player1['wins'];
    }
    
    if(p2Input != ""){
       
        guessCheck(p2Input, player2);
       
        document.querySelector('.p2Name').textContent = player2['name'];
        document.querySelector('.p2guesses').textContent = player2['lastguess'] + ' , ';
        player2['numAttempts']++;

        document.querySelector('.attempts2').textContent = player2['numAttempts'];
        document.querySelector('.numWin2').textContent = player2['wins'];
    }
    if(p3Input != ""){
        
        guessCheck(p3Input, player3);
        
        document.querySelector('.p3Name').textContent = player3['name'];
        document.querySelector('.p3guesses').textContent = player3['lastguess'] + ' , ';
        player3['numAttempts']++;

        document.querySelector('.attempts3').textContent = player3['numAttempts'];
        document.querySelector('.numWin3').textContent = player3['wins'];
    }
    if(p4Input != ""){
       
        guessCheck(p4Input, player4);
        
        document.querySelector('.p4Name').textContent = player4['name'];
        document.querySelector('.p4guesses').textContent = player4['lastguess'] + ' , ';
        player4['numAttempts']++;

        document.querySelector('.attempts4').textContent = player4['numAttempts'];
        document.querySelector('.numWin4').textContent = player4['wins'];
    }
    if(p5Input != ""){
        
        guessCheck(p5Input, player5);
        
        document.querySelector('.p5Name').textContent = player5['name'];
        document.querySelector('.p5guesses').textContent = player5['lastguess'] + ' , ';
        player5['numAttempts']++;

        document.querySelector('.attempts5').textContent = player5['numAttempts'];
        document.querySelector('.numWin5').textContent = player5['wins'];
    }
}

function guessCheck(pInput, player){

//validate userinput is a valid number
if(pInput == ""  || isNaN(pInput)){
    textMsg.innerHTML = "Please enter a valid number";
}
else{
    guessCount++;    
    player['lastguess'].push(pInput);
    player['lastguess'].sort(function(a, b){return a - b});
     //decrease num of guesses by 1 on each click
    turnsLeft = turns - player['numAttempts'] - 1;
    //if turns is not 0 or luckynumber matches userInput
    if (turnsLeft > 0) {
        if (winner == false) {
        if (pInput == luckyNumber) {
        //If both userInput and luckyNumber matches   
        let totalAttempts = player['numAttempts'] + 1;
        textMsg.innerHTML = ("Good job " + player['name'] + ' !!!!! ' + "\n" +luckyNumber+ " is correct!"+ "\n" + " Took " + totalAttempts + " guesses" );   
        player['wins']++;
        winner = true;

        textMsg.style.color = "green"; 
         image.getAttribute("src");
         image.setAttribute("src", "img/win.jpg"); 
         image.style.borderColor = "green";     
         document.getElementById('inputNum1').value = ""; 
         document.getElementById('inputNum2').value = ""; 
         document.getElementById('inputNum3').value = "";
         document.getElementById('inputNum4').value = "";  
         document.getElementById('inputNum5').value = "";  
         //Disables the button  
         guessBtn.disabled = true;
         resetBtn.style.border = "5px solid green";
         newGame.style.border = "5px solid green";
        }
        else if(pInput > luckyNumber || pInput < luckyNumber){
            textMsg.innerHTML = ("Nope! Incorrect! Try again, you have " +turnsLeft+ " tries left"); 
             image.getAttribute("src");
             image.setAttribute("src", "img/try.jpg");  
             image.style.borderColor = "red"; 
             document.getElementById('inputNum1').value = ""; 
             document.getElementById('inputNum2').value = ""; 
             document.getElementById('inputNum3').value = "";
             document.getElementById('inputNum4').value = "";  
             document.getElementById('inputNum5').value = ""; 
        }
    }
     } else {
         //Game over  
         textMsg.innerHTML = ("Sorry Game Over . The correct answer was " +luckyNumber); 
         image.getAttribute("src");
         image.setAttribute("src", "img/sorry.jpg");  
        document.getElementById('inputNum1').value = ""; 
        document.getElementById('inputNum2').value = ""; 
        document.getElementById('inputNum3').value = "";
        document.getElementById('inputNum4').value = "";  
        document.getElementById('inputNum5').value = ""; 
     }
   }   
}

function resetFunc(){
    location.reload(true);
}
document.getElementById("newGame").onclick = function(){
    textMsg.innerHTML = ("Enter a guess from 1-100. You get 100 attempts");
    genarateLuckyNum();
    image.getAttribute("src");
    image.setAttribute("src", "img/guess.jpg");  
    document.getElementById('inputNum1').value = ""; 
    document.getElementById('inputNum2').value = ""; 
    document.getElementById('inputNum3').value = "";
    document.getElementById('inputNum4').value = "";  
    document.getElementById('inputNum5').value = ""; 
    guessBtn.disabled = false;
    resetBtn.style.border = "none";
    image.style.borderColor = "#353535"; 
    
    document.querySelector('.p1guesses').textContent = "";
    document.querySelector('.p2guesses').textContent = "";
    document.querySelector('.p3guesses').textContent = "";
    document.querySelector('.p4guesses').textContent = "";
    document.querySelector('.p5guesses').textContent = "";
    document.querySelector('.attempts1').textContent = "";
    document.querySelector('.attempts2').textContent = "";
    document.querySelector('.attempts3').textContent = "";
    document.querySelector('.attempts4').textContent = "";
    document.querySelector('.attempts5').textContent = "";
    
    player1['numAttempts'] = 0;
    player1['lastguess'] = [];
    player2['numAttempts'] = 0;
    player2['lastguess'] = [];
    player3['numAttempts'] = 0;
    player3['lastguess'] = [];
    player4['numAttempts'] = 0;
    player4['lastguess'] = [];
    player5['numAttempts'] = 0;
    player5['lastguess'] = [];
    winner = false;
}
//Hint
document.getElementById("hint").addEventListener('click', hintFunc);
//To reset the game at any point
document.getElementById("reset").addEventListener('click', resetFunc);
// document.getElementById("reset").onclick 