const myQuestions = [
  {
    question: 'Who is the strongest ?',
    answers: {
      a: 'Đây là đáp án đúng 1',
      b: '----------',
      c: '----------',
      d: '----------'
    },
    correctAnswer: 'Đây là đáp án đúng 1'
  },
  {
    question: 'Who is the most handsome ?',
    answers: {
      a: '----------',
      b: '----------',
      c: '----------',
      d: 'Đây là đáp án đúng 2'
    },
    correctAnswer: 'Đây là đáp án đúng 2'
  },
  {
    question: 'Who is the richest ?',
    answers: {
      a: '----------',
      b: '----------',
      c: 'Đây là đáp án đúng 3',
      d: '----------'
    },
    correctAnswer: 'Đây là đáp án đúng 3'
  },
  {
    question: 'Who is friendly ?',
    answers: {
      a: '----------',
      b: 'Đây là đáp án đúng 4',
      c: '----------',
      d: '----------'
    },
    correctAnswer: 'Đây là đáp án đúng 4'
  }
]
let score = 0
let count = 1
let numberQuestion = 0
let mark
function reStart() {
  window.location.href = 'index.html'
}
const answer = document.querySelectorAll('.answer span')
document.getElementById('next').style.display = "block"
function resetColor() {
  for (let i = 0; i < answer.length; i++) {
    answer[i].style.backgroundColor = 'transparent'
  }
}
document.getElementById('next').style.display = "none"
function changeColor(self) {
  document.getElementById('next').style.display = "block"
  resetColor()
  self.style.backgroundColor = '#f1ff92'
  mark = self.id;
  let text = self.innerText
  if (text == myQuestions[numberQuestion].correctAnswer) {
    score += 1
  }

}

function nextQuestion() {
  document.getElementById('next').style.display = "none"
  resetColor()
  numberQuestion++
  if (numberQuestion <= 3) {
    document.getElementById('ques').innerHTML = myQuestions[numberQuestion].question
    document.getElementById('ans1').innerHTML = myQuestions[numberQuestion].answers.a
    document.getElementById('ans2').innerHTML = myQuestions[numberQuestion].answers.b
    document.getElementById('ans3').innerHTML = myQuestions[numberQuestion].answers.c
    document.getElementById('ans4').innerHTML = myQuestions[numberQuestion].answers.d
    if (numberQuestion == 3) {
      document.getElementById('next').innerHTML = 'Result'
    }
  } else {
    if (score == 4) {
      alert(' ban dc ' + score + 'diem')
      window.location.href = './winlose/win.html'
    } else {
      alert(' ban dc ' + score + 'diem')
      document.getElementById('next').style.display = "none"
      document.querySelector('.replay').style.display = "block"
      
    }
  }
}
