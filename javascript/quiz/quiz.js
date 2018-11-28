const myQuestions = [
  {
    question: 'Who is the strongest ?',
    answers: {
      a: 'Đây là đáp án đúng',
      b: '----------',
      c: '----------',
      d: '----------'
    },
    correctAnswer: 'a'
  },
  {
    question: 'Who is the most handsome ?',
    answers: {
      a: '----------',
      b: '----------',
      c: "----------",
      d: 'Đây là đáp án đúng'
    },
    correctAnswer: 'd'
  },
  {
    question: 'Who is the richest ?',
    answers: {
      a: '----------',
      b: '----------',
      c: 'Đây là đáp án đúng',
      d: '----------'
    },
    correctAnswer: 'c'
  },
  {
    question: 'Who is friendly',
    answers: {
      a: '----------',
      b: 'Đây là đáp án đúng',
      c: '----------',
      d: '----------'
    },
    correctAnswer: 'b'
  }
]
var answer = document.querySelectorAll(".answer span");
let score = 0
let count = 1
let numberQuestion = 0

function start() {
  window.location.href = 'index.html'
}
function resetColor() {
	for (var i = 0; i < answer.length; i++) {
		answer[i].style.backgroundColor = "#cccccc";
	}
}
function changeColor(button) {
  resetColor()
  button.style.backgroundColor = '#f1ff92'
}
function correctAnswer(dapan){
  if (dapan == myQuestions[count-1].correctAnswer){
    score +=1
  }
}
function nextQuestion() {
  resetColor();
  numberQuestion++
  let lastScore = 0
  if (numberQuestion <= 4) {
    document.getElementById('ques').innerHTML = myQuestions[numberQuestion].question
    document.getElementById('ans1').innerHTML = myQuestions[numberQuestion].answers.a
    document.getElementById('ans2').innerHTML = myQuestions[numberQuestion].answers.b
    document.getElementById('ans3').innerHTML = myQuestions[numberQuestion].answers.c
    document.getElementById('ans4').innerHTML = myQuestions[numberQuestion].answers.d
    if (numberQuestion == 3){
      document.getElementById('next').innerHTML = "Result"
    } 
   } else {
    if (lastScore == myQuestions.length) {
			window.location.href = "/javascript/quiz/winlose/win.html";
		} else {
			window.location.href = "/javascript/quiz/winlose/lose.html";
		}

   }

  }
