$('body').click(function() {
  document.getElementById('bg-music').play()
})
const cards = document.querySelectorAll('.memory-card')
let flipedCard = false
let firstCard
let secondCard
let lockCard = false
let count = 0
function flipCard() {
  if (lockCard) return // chi dc phep mo 2 la bai 1 luc
  if (this === firstCard) return // ko cho phep bam vao 1 quan bai 2 lan
  // $(this).toggleClass('flip') // thêm class flip
  this.classList.add('flip')
  if (!flipedCard) {
    flipedCard = true
    firstCard = this
    return
  }
  secondCard = this
  checkMatch()
}
function checkMatch() {
  let match = firstCard.dataset.name === secondCard.dataset.name
  match ? disableCard() : undisableCard()
  
}
function disableCard() {
  //   firstCard.removeEventListener('click', flipCard)
  //   secondCard.removeEventListener('click', flipCard)
  lockCard = true
  setTimeout(() => {
    firstCard.classList.add('fadeOutDown')
    secondCard.classList.add('fadeOutDown')
    resetCard()
  }, 800)
  document.getElementById('correct').play()
  count++
  //console.log(count)
  if (count == 9) {
    $('.wrap').css('display','none')
    $('.win-img').css('display', 'block')
    $('.win-img').click(function() {
      window.location.href = 'index.html'
    })
    document.getElementById('win').play()
  }
}
;(function lose() {
  setTimeout(() => {
    $('.lose-img').css('display', 'block')
    $('.lose-img').click(function() {
      window.location.href = 'index.html'
    })
    document.getElementById('lose').play()
  },45000)
})()
function undisableCard() {
  lockCard = true
  document.getElementById('fail').play()
  setTimeout(() => {
    firstCard.classList.remove('flip')
    secondCard.classList.remove('flip')
    resetCard()
  }, 800)
}
function resetCard() {
  ;[flipedCard, lockCard] = [false, false][(firstCard, secondCard)] = [null, null]
}
;(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12)
    card.style.order = randomPos
  })
})()
cards.forEach(card => card.addEventListener('click', flipCard))
// timing
function progress(timeleft, timetotal, $element) {
  var progressBarWidth = (timeleft * $element.width()) / timetotal
  $element
    .find('div')
    .animate({ width: progressBarWidth }, 500)
    .html(Math.floor(timeleft / 60) + ':' + (timeleft % 60))
  if (timeleft > 0) {
    setTimeout(function() {
      progress(timeleft - 1, timetotal, $element)
    }, 1000)
  }
}
progress(45, 45, $('#progressBar'))
