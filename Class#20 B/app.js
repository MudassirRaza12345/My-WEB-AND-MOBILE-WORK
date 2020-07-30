window.onload=function(){
    show(0)
}


var questions =[
    {
        id:1, //id:1 represent array index 0
        question:"Who i the inventor of javascript",
        answer:" Brendan Eich",
        options:[
            "Dennis Ritchie",
            "Brendan Eich",
            "Guido van Rossum",
       ]

    },

    {
        id:2, //id:2 represent array index 1
        question:"Who i the inventor of Apple?",
        answer:"Steve Jobs",
        options:[
            "Dennis Ritchie",
            "Steve Jobs",
            "Guido van Rossum",
       ]

    },
    {
        id:3,   //id:3 represent array index 2
        question:"Who i the inventor of C language?",
        answer:"Dennis Ritchie",
        options:[
            "Dennis Ritchie",
            "Steve Jobs",
            "Guido van Rossum",
       ]

    },

    {
        id:4,  //id:4 represent array index 3
        question:"Who i the inventor of Computer?",
        answer:"Charles babbage",
        options:[
            "Charles babbage",
            "Steve Jobs",
            "Guido van Rossum",
       ]

    }

]

var question_count =0;
function next(){
    question_count++
    console.log(question_count)
    show(question_count)
}

function show(e){
    var ques=document.getElementById("question")
    ques.innerHTML=`<h1> ${questions[e].question}</h1>
    <ul class="list">
                <li class="option">${questions[e].options[0]}</li>
                <li class="option">${questions[e].options[1]}</li>
                <li class="option">${questions[e].options[2]}</li>
                <li class="option">${questions[e].options[3]}</li>
            </ul>`
            Active()
        }


function Active(){
    let option1 =document.querySelectorAll("li.option")
    for(let i=0;i < option1.length;i++){
        option1[i].onclick=function(){
            for(let j=0 ;j < option1.length;j++){
                if(option1[j].classList.contains("active")){
                    option1[j].classList.remove("active")
                }
            }
             option1[i].classList.add("active")
        }
    }
}