function check(){
    var score =0
var right_answer_1=document.getElementById("q1-a2")
var q1_answer_2=document.getElementById("q1-a1")
var q1_answer_3=document.getElementById("q1-a3")
var q1_answer_4=document.getElementById("q1-a4")

if(right_answer_1.checked== true){
score++
alert("Q1 answer is right")
}
else{
    alert("Q1 answer wrong")
}



var right_answer_2=document.getElementById("q2-a1")
var q2_answer_2=document.getElementById("q2-a2")
var q2_answer_3=document.getElementById("q2-a3")
var q2_answer_4=document.getElementById("q2-a4")

if(right_answer_2.checked== true){
score++
alert("Q2 answer is right")
}
else{
    alert("Q2 answer wrong")
}

var right_answer_3=document.getElementById("q3-a1")
var q3_answer_2=document.getElementById("q3-a2")
var q3_answer_3=document.getElementById("q3-a3")
var q3_answer_4=document.getElementById("q3-a4")

if(right_answer_3.checked== true){
score++
alert("Q3 answer is right")
}
else{
    alert("Q3 answer wrong")
}



alert("your score is"+score++ +"/3")







}