const myQuestions = [
  {
    question: '1+1 = ?',
    answers: {
      a: '2',
      b: '3',
      c: '10',
      d: '11'
    },
    correctAnswer: '2'
  },
  {
    question: '8*10 = ?',
    answers: {
      a: '810',
      b: '108',
      c: '880',
      d: '80'
    },
    correctAnswer: '80'
  },
  {
    question: '100/2 = ?',
    answers: {
      a: '102',
      b: '120',
      c: '50',
      d: '201'
    },
    correctAnswer: '50'
  },
  {
    question: 'ai làm bài quiz này ?',
    answers: {
      a: 'chịu',
      b: 'Mạnh chứ ai',
      c: '1 người nào đấy',
      d: '1 nhóm người nào đấy'
    },
    correctAnswer: 'Mạnh chứ ai'
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
