const qdata = [
  {
    question: "What is Your Name?",
    a: "Usaman Ali",
    b: "Usama Riaz",
    c: "Nasir Mehmood",
    d: "Musharaf Ali",
    correct: "d",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
  },
  {
    question: "What does JS stand for?",
    a: "Json Object",
    b: "Jarves Script",
    c: "JavaScript",
    d: "None of the Above",
    correct: "c",
  },
  {
    question: "In which company are you doing internship?",
    a: "Farword Solution",
    b: "Xone Solution",
    c: "Tech Solution",
    d: "None of the above",
    correct: "b",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = qdata[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === qdata[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < qdata.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
            <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Total Score</h2>
                <h2>You answered ${score}/${qdata.length} questions correctly</h2>
                <button onclick="location.reload()">Restart</button>
            `;
    }
  }
});
