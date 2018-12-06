
$('body').click(function(){
  document.getElementById('bg-music').play();
})
const cards = document.querySelectorAll('.memory-card')
let flipedCard = false
let firstCard
let secondCard
let lockCard = false
function flipCard() {
  if (lockCard) return
  if (this === firstCard) return
  // $(this).toggleClass('flip') // thêm class flip
  this.classList.add('flip')
  if (!flipedCard) {
    flipedCard = true
    firstCard = this
    return
  }
  flipedCard = false
  secondCard = this
  checkMatch()
}
function checkMatch() {
  let match = firstCard.dataset.name === secondCard.dataset.name
  match ? disableCard() : undisableCard()
  
}
function disableCard() {
  firstCard.removeEventListener('click', flipCard)
  secondCard.removeEventListener('click', flipCard)
// setTimeout(()=> {
//     firstCard.classList.add('fadeOutDown')
//     secondCard.classList.add('fadeOutDown')
// }, 800)
}
function undisableCard() {
  lockCard = true
  setTimeout(() => {
    firstCard.classList.remove('flip')
    secondCard.classList.remove('flip')
    lockCard = false
  }, 100)
}
;(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12)
    card.style.order = randomPos
  })
})();
cards.forEach(card => card.addEventListener('click', flipCard))

// day la progessbar
function start() {
  $('#xxx').css('display','none');
}

