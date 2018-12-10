const cards = document.querySelectorAll('.memory-card')
let flipedCard = false
let lockCard = false
let firstCard
let secondCard
function flipCard() {
  if (lockCard) return  // chi dc phep mo 2 la bai 1 luc
  if (this === firstCard) return  // ko cho phep bam vao 1 quan bai 2 lan
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
lockCard =true
setTimeout(()=> {
    firstCard.classList.add('fadeOutDown')
    secondCard.classList.add('fadeOutDown')
    resetCard()
}, 800)
}
function undisableCard() {
  lockCard = true
  setTimeout(() => {
    firstCard.classList.remove('flip')
    secondCard.classList.remove('flip')
    resetCard()
  }, 800)
}
function resetCard() {
  [flipedCard,lockCard] = [false,false]
  [firstCard,secondCard] = [null,null]
}
;(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12)
    card.style.order = randomPos
  })
})();
cards.forEach(card => card.addEventListener('click', flipCard))
