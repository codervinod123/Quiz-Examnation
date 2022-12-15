const questionsDB=[
    {
        question:"Que 1: What is the State Of Uttar Pradesh",
        a:"Lucknow",
        b:"Hyderabad",
        c:"Delhi",
        d:"Agra",
        ans:"ans1"
    },
    {
        question:"Que 1: What is the State Of Delhi",
        a:"Lucknow",
        b:"Gorkpur",
        c:"Delhi",
        d:"Nagpur",
        ans:"ans3"
    },
    {
        question:"Que 1: What is the State Of Bihar",
        a:"Lucknow",
        b:"Patna",
        c:"Delhi",
        d:"Bhagalpur",
        ans:"ans2"
    },
    {
        question:"Que 1: What is the sparrow",
        a:"Animal",
        b:"Bird",
        c:"Warm",
        d:"Bee",
        ans:"ans2"
    },
    {
        question:"Que 1: Who is our pM",
        a:"Modi",
        b:"Yogi",
        c:"Lalu",
        d:"Nitish",
        ans:"ans1"
    }
]

const questions=document.querySelector(".question");
const op1=document.getElementById("op1");
const op2=document.getElementById("op2");
const op3=document.getElementById("op3");
const op4=document.getElementById("op4");


const queCount=0;
const loadQuestion=()=>{
       const questionList=questionsDB[queCount];
       console.log(questionList.question);
       questions.innerHTML=questionList.question;
}

loadQuestion();