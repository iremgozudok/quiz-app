const quizData = [
    {
        question: "What is the most used programming language in 2019?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "Who is the President of US?",
        a: "Florin Pop",
        b: "Donald Trump",
        c: "Ivan Saldano",
        d: "Mihai Andrei",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

const quiz = document.getElementById("quiz")
const question = document.getElementById("question")
const textA = document.getElementById("a_text")
const textB = document.getElementById("b_text")
const textC = document.getElementById("c_text")
const textD = document.getElementById("d_text")
const answerEl = document.querySelectorAll(".answer")
const btn = document.getElementById("submit")

let currentQuiz = 0
let answer = undefined
score = 0


loadQuiz() 

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz]

    question.innerText = currentQuizData.question
    textA.innerText = currentQuizData.a
    textB.innerText = currentQuizData.b
    textC.innerText = currentQuizData.c
    textD.innerText = currentQuizData.d

    
}

btn.addEventListener("click", () => {
    getAnswer()
    currentQuiz++
    if(currentQuiz < quizData.length){
        loadQuiz()
    } else {
        quiz.innerHTML = `<p style="padding: 1rem">Your score is ${score}/${quizData.length}.</p> 
        <button onclick=location.reload()>Reload</button>`
    }
    
    
})



function getAnswer() {
    answerEl.forEach((answer) => {
        if(answer.checked) {
            if(answer.id == quizData[currentQuiz].correct) {
                score++
                answer.checked = false
            }
        }
    })
}
