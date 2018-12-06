
const cards = document.querySelectorAll('.memory-card');
cards = cards.concat(cards)
function flipCard(){
    $(this).toggleClass('flip')   // thêm class flip
//     this.classList.add('flip') 
}
cards.forEach(card => card.addEventListener('click',flipCard));

