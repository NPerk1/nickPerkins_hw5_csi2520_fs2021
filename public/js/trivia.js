function score(){

var question1 = document.quiz.question1.value;
var question2 = document.quiz.question2.value;
var question3 = document.quiz.question3.value;
var question4 = document.quiz.question4.value;
var question5 = document.quiz.question5.value;
var correct = 0;


 
if (question1 == "C") {
    correct++;
}
if (question2 == "B") {
    correct++
}
if (question3 == "D") {
    correct++
}
if (question4 == "B") {
    correct++
}
if (question5 == "A") {
    correct++
}

document.getElementById("submit").style.visibility = "visible";
document.getElementById("correct").innerHTML = "Correct answers: " + correct;
}