// animate the menu

const animMenu = document.querySelectorAll('.tab')

console.log(animMenu)

TweenMax.fromTo(animMenu, 1, {x:50}, {x:0});

const filterButton = document.querySelector('.menu-button')

console.log(filterButton)
TweenMax.fromTo(filterButton, 1, {x:50}, {x:0});



// desktop menu - filter button

/* 

MENU IN
1. mouse over filter button
> opacity full, change color
2. click button
> color change
> display: grid;
> tween menu out in 2 parts, bg then tabs
> tabs clickable to sort articles (use existing component)

MENU OUT
1. click filter button again / click outside
> tabs animate out
> display: none
filter slides back and opacity is at .5
*/



// TABS

class TabLink {
    constructor(tabElement){
      this.original = tabElement;
      this.tabData = this.original.dataset.tab; 

      if(this.tabData === "all"){
        // If `all` is true, select all cards regardless of their data attribute values
        this.cards = document.querySelectorAll('.card');
      } else {
        // else if `all` is false, only select the cards with matching this.tabData values
        this.cards = document.querySelectorAll(`.card[data-tab='${this.tabData}']`);
      }
      this.cards = Array.from(this.cards).map( (fancyCard) => new TabCard(fancyCard));
      this.original.addEventListener('click', () => this.selectTab());
    }
  
    selectTab(){
      const tabsCollect = document.querySelectorAll(".tab");
      tabsCollect.forEach((a) => a.classList.remove('active-tab'))
      const cardsCollect = document.querySelectorAll('.card');
      cardsCollect.forEach((a) => a.style.display = "none")
      this.original.classList.add('active-tab');
      this.cards.forEach(card => card.selectCard());
    }
}
  
class TabCard {
    constructor(cardElement){
      this.cardElement = cardElement;
    }
  
    selectCard(){
      this.cardElement.style.display = "flex";
    }
  
}

let tabs = document.querySelectorAll('.tab');
tabs.forEach((oldTab) => new TabLink(oldTab));


// ---------- MODAL CONTENT

// Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}