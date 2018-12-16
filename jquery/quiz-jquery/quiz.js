const myQuestions = [{
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

const reStart = () => {
    window.href.location = "index.html"
}
const answer = document.querySelectorAll('.answer span')


function resetColor() {
    for (let i = 0; i < answer.length; i++) {
        answer[i].style.backgroundColor = 'transparent'
    }
}
$('#next')[0].style.display = "none"

function changeColor(self) {
    $('#next')[0].style.display = "block"
    resetColor()
    self.style.backgroundColor = '#f1ff92'

    let text = self.innerText
    if (text == myQuestions[numberQuestion].correctAnswer) {
        score += 1
    }
}

function nextQuestion() {
    $('#next')[0].style.display = "none"
    resetColor()
    numberQuestion++
    if (numberQuestion <= 3) {
        $('#ques')[0].innerHTML = myQuestions[numberQuestion].question
        $('#ans1')[0].innerHTML = myQuestions[numberQuestion].answers.a
        $('#ans2')[0].innerHTML = myQuestions[numberQuestion].answers.b
        $('#ans3')[0].innerHTML = myQuestions[numberQuestion].answers.c
        $('#ans4')[0].innerHTML = myQuestions[numberQuestion].answers.d
        if (numberQuestion == 3) {
            $('#next')[0].innerHTML = 'Result'
        }
    } else {
        if (score == 4) {
            alert(' ban dc ' + score + 'diem')
            window.location.href = './winlose/win.html'
        } else {
            alert(' ban dc ' + score + 'diem')
            $('#next')[0].style.display = "none"
            document.querySelector('.replay').style.display = "block"

        }
    }
}