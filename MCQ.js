const obj = [
    {
    question:"Q1.What is capital of India?",
    a:"Kolkata",
    b:"Mumbai",
    c:"Chennai",
    d:"Delhi",
    ans:"Delhi"
},
{
    question:"Q2.What is the national animal of India?",
    a:"Tiger",
    b:"Lion",
    c:"Horse",
    d:"Fox",
    ans:"Tiger"
},
{
    question:"Q3.What is the full form of HTML?",
    a:"Hello To my Land",
    b:"Hey Text Markup Language",
    c:"HyperText Makeup Language",
    d:"Hypertext Markup Language",
    ans:"Hypertext Markup Language"
},
{
    question:"Q4.What is the full form of CSS?",
    a:"Cascading Style Sheep",
    b:"Cascading Style Sheets",
    c:"Cartoon Style Sheet",
    d:"Cascading Super Sheets",
    ans:"Cascading Style Sheets"
},
{
    question:"Q5.What is the full form of HTTP?",
    a:"Hypertext Transfer Product",
    b:"Hypertext Test protocol",
    c:"HyperText Transfer Protocol",
    d:"Hey Transfer Protocol",
    ans:"HyperText Transfer Protocol"
},
{
    question:"Q6.What is the capital of nepal?",
    a:"Sikkim",
    b:"Bhutan",
    c:"kathmandu",
    d:"Kolkata",
    ans:"kathmandu"
},
{
    question:"Q7.What is the output of '2+1'?",
    a:"5",
    b:"7",
    c:"4",
    d:"3",
    ans:"3"
},
{
    question:"Q8.What is the full form of NCC?",
    a:"National Cadet Corps",
    b:"National Credit Corps",
    c:"National Cadet Crops",
    d:"National Cradet Corps",
    ans:"National Cadet Corps"
},
{
    question:"Q9.Who is the CEO of Goggle?",
    a:"Subhajit maity",
    b:"virat kohli",
    c:"Nelson Mandela",
    d:"Sunder pichai",
    ans:"Sunder pichai"
},
{
    question:"Q10.Who is the founder of Infosys?",
    a:"Subhajit maity",
    b:"N. R. Narayana Murthy",
    c:"Sunder pichai",
    d:"Sachin Tendulkar",
    ans:"N. R. Narayana Murthy"
},

];
const question = document.querySelector("#question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");

const ans1 = document.querySelector("#ans1");
const ans2 = document.querySelector("#ans2");
const ans3 = document.querySelector("#ans3");
const ans4 = document.querySelector("#ans4");

const submit = document.querySelector("#submit");
const answers = document.querySelectorAll(".answer");
const showscore = document.querySelector("#showscore");
let questionCount=0;
let score=0;
const QuestionLoad = () => {
    const questionList = obj[questionCount];
    question.innerHTML = questionList.question;
    ans1.value=questionList.a;
    ans2.value=questionList.b;
    ans3.value=questionList.c;
    ans4.value=questionList.d;
    
    option1.innerHTML = questionList.a;
    option2.innerHTML = questionList.b;
    option3.innerHTML = questionList.c;
    option4.innerHTML = questionList.d;
}
QuestionLoad();
const getCheckAnswer = () => {
    let answer;
    answers.forEach((curAns)=>{
        if(curAns.checked){
            answer = curAns.value;
        }
    });
    return answer;
};
const deselectAll = () =>{
    answers.forEach((curAnsEle)=> curAnsEle.checked = false);
}
submit.addEventListener("click",()=>{
    const checkedAnswer = getCheckAnswer();
    if(checkedAnswer ===obj[questionCount].ans){
        score++;
    };
    questionCount++;
    deselectAll()
    if(questionCount<obj.length){
        QuestionLoad();
    }
    else{
        showscore.innerHTML=`
        <h3>You scored ${score}/${obj.length}.</h3>
        <button class="btn" onclick="location.reload()">play Again</button>
        `;
        showscore.classList.remove('scoreArea');
    }
});
