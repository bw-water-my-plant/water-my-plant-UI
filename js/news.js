/* --------------------------------- ANIMATIONS ------------------------------------ */
// animate the menu

const animMenu = document.querySelectorAll('.tab')
console.log(animMenu)

// slides article nav buttons slightly to the side to let the user know the menu is slide-able 
TweenMax.fromTo(animMenu, 1, {x:50}, {x:0});



/* --------------------------------- MODAL CONTENT ------------------------------------ */

// collect modal articles and buttons
const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");

// The close (x) button in the corner
const span = document.getElementsByClassName("close")[0];

// Click button, turn on modal
btn.onclick = function() {
  modal.style.display = "block";
}

// Click (x), turn off modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


/* --------------------------------- FILTER TABS AND CARDS ------------------------------------ */

// collect the top intro blurb before the articles
const topBlurb = document.querySelector('.top-section p')
// console.log(topBlurb)

// test changing the text content
// topBlurb.textContent = "Blah"


// TABS

// class to construct fancy new linked tabs and cards from old elements
class TabLink {
    constructor(tabElement){
      this.original = tabElement; // collects the original, which is looking for all elements classed "tab"
      this.tabData = this.original.dataset.tab; // stores the data-key value for each tab passed in
      console.log(this.tabData) // making sure it works
      // this.intros = document.querySelector('.top-section') // stores the top intro divs
      // console.log("testing ", this.intros)

      if (this.tabData === "all"){
        // If `all` is true, select all cards regardless of their data attribute values
        this.cards = document.querySelectorAll('.card');
        // Select the matching intro blurb (a duplicate due to the way this function is structured)
        this.intros = document.querySelector(`.top-section[data-tab='${this.tabData}']`);
        console.log(this.intros)

      } else {
        // else if `all` is false, only select the cards with matching this.tabData values
        this.cards = document.querySelectorAll(`.card[data-tab='${this.tabData}']`);
        // select the matching intro blurb
        this.intros = document.querySelector(`.top-section[data-tab='${this.tabData}']`);
        console.log(this.intros)
      }
      // this is making an array from the cards collected in the above function bits, then pushing those into the next class constructor
      this.cards = Array.from(this.cards).map( (fancyCard) => new TabCard(fancyCard));

      // this is adding a listener telling the page to listen for clicks on the tabs, then run a function
      this.original.addEventListener('click', () => this.selectTab());
  
  }
  
    selectTab(){ // this is what happens EVERY TIME someone clicks on a tab
      // collects all elements classed "tab"
      const tabsCollect = document.querySelectorAll(".tab");
      const introsCollect = document.querySelectorAll(".top-section");

      // removes the active class from ALL tabs
      tabsCollect.forEach((a) => a.classList.remove('active-tab'))
      // removes the active class from ALL intros
      introsCollect.forEach((a) => a.classList.remove('active-intro'))

      // collects all cards classed "card"
      const cardsCollect = document.querySelectorAll('.card');

      // sets style for ALL cards to display: none
      cardsCollect.forEach((a) => a.style.display = "none")

      // adds active class to the CLICKED TAB ONLY
      this.original.classList.add('active-tab');
      // adds the active-intro class to the pre-selected div that's passed in (active-intro has display: flex)
      this.intros.classList.add('active-intro');
      
      // runs certain cards through a function to display them (it will only have caught SOME cards due to if/else statement earlier)
      this.cards.forEach(card => card.selectCard());
    }
}
  
class TabCard { // makes fancy new cards that react to tabs
  //
    constructor(cardElement){
      // stores the passed-in value
      this.cardElement = cardElement;
    }
    // the fanciness: sets display to flex on cards that are passed into it (preselected earlier)
    selectCard(){
      this.cardElement.style.display = "flex";
    }
  
}


let tabs = document.querySelectorAll('.tab');
tabs.forEach((oldTab) => new TabLink(oldTab));


// function changeBlurb (a) {
//   if ((a.innerText = "Garden Tips") && (a.classList.contains("active-tab"))) {
//     return topBlurb.textContent = "Wahoo"
//   } else if ((a.innerText = "News") && (a.classList.contains("active-tab"))) {
//     return topBlurb.textContent = "YAYYYY"
//   }

// }

// tabs.forEach(a => a.addEventListener('click', changeBlurb))




