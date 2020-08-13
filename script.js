//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;
var heatherScore = 0;
var growScore = 0;
var checkmateScore = 0;
var lookalikeScore = 0;




//#TODO: Use the DOM to create variables for the first quiz question.
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

//# variables for second quiz question
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

//# variables for third quiz question
var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

//# variables for fourth quiz question
var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");

//# variables for fifth quiz question
var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var q5a3 = document.getElementById("q5a3");
var q5a4 = document.getElementById("q5a4");












//#TODO: Add Event Listeners to your answer choice variables.
q1a1.addEventListener("click", heather);
q1a2.addEventListener("click", checkmate);
q1a3.addEventListener("click", grow);
q1a4.addEventListener("click", lookalike);
q2a1.addEventListener("click", checkmate);
q2a2.addEventListener("click", heather);
q2a3.addEventListener("click", lookalike);
q2a4.addEventListener("click", grow);
q3a1.addEventListener("click", lookalike);
q3a2.addEventListener("click", checkmate);
q3a3.addEventListener("click", grow);
q3a4.addEventListener("click", heather);
q4a1.addEventListener("click", checkmate);
q4a2.addEventListener("click", heather);
q4a3.addEventListener("click", lookalike);
q4a4.addEventListener("click", grow);
q5a1.addEventListener("click", lookalike);
q5a2.addEventListener("click", grow);
q5a3.addEventListener("click", heather);
q5a4.addEventListener("click", checkmate);







//#TODO: Define quiz functions here


function updateResult(){
  if (heatherScore >= 2){
    
  }
  else if(growScore >=2){
    
  }
  else if(lookalikeScore>=2){
    
  }
  else if(checkmateScore>=2){
    
  }
  else{
    result.innerHTML = "You're giving me mixed vibes. Listen to his entire album!"
  }
}

function heather(){
  questionCount = questionCount + 1;
  heatherScore = heatherScore + 1;
  
  if (questionCount >= 5){
    updateResult();
  }
}

function checkmate(){
  questionCount = questionCount + 1;
  checkmateScore = checkmateScore + 1;
  
   if (questionCount >= 5){
    updateResult();
  }
}

function grow(){
  questionCount = questionCount + 1;
  growScore = growScore + 1;
  
   if (questionCount >= 5){
    updateResult();
  }
  
}

function lookalike(){
  questionCount = questionCount + 1;
  lookalikeScore = lookalikeScore + 1;
  
   if (questionCount >= 5){
    updateResult();
  }
  
}