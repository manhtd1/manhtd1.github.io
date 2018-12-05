const cards = document.querySelectorAll('.memory-card');
function flipCard(){
   $(this).toggleClass('flip')
}
cards.forEach(card => card.addEventListener('click',flipCard));

