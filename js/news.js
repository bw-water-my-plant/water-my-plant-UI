/* --------------------------------- ANIMATIONS ------------------------------------ */
// animate the menu
console.log(Date.now)
const animMenu = document.querySelectorAll('.tab')
console.log(animMenu)

// slides article nav buttons slightly to the side to let the user know the menu is slide-able 
TweenMax.fromTo(animMenu, 1, {x:50}, {x:0});



/* --------------------------------- MODAL CONTENT ------------------------------------ */


(function iife() { // an IIFE, which runs this function automatically and protects it from being accessed by other things
  
  "use strict"; // use strict does lots of things, such as preventing access to global vars unless explicitly defined
  
  function closestEl(el, selector) { // beginning of the function to be invoked
    
      var doc = el.document || el.ownerDocument; //collecting the document in two ways (seems redundant to me?)
      console.log("document ", el.document)
      console.log("ownerdoc ", el.ownerDocument)
      
      var matches = doc.querySelectorAll(selector); // collecting items in the doc variable just defined. these items will match whatever is passed in via the 'selector' parameter
      
      var i; // making 'i' exist as a variable
      
      while (el) { // a while loop. runs while a thing is true.
          i = matches.length - 1; // i = the length of the nodelist containing query matches
          while (i >= 0) { // while there are still items in nodelist remaining
              if (matches.item(i) === el) { // if item in nodelist at that index position is exactly equal to the element...
                  return el; // ...return that element? can you do bracket notation w parentheses?
              }
              i -= 1; // reduce the list of matches by one
          }
          el = el.parentElement; // take the element returned in the nested while loop and define the element as its parent element
      }
      return el; // return the parent element collected above. This parent element is used in the closeModal function below, where it can be set to display:none.
  }

  var modalBtns = document.querySelectorAll(".myBtn"); // collect all elements classed as modal buttons
  modalBtns.forEach(function addBtnClickEvent(btn) { // adds click events to all modal buttons
      btn.onclick = function showModal() { // when clicked, do function
          var modal = btn.getAttribute("data-modal"); // collect the data key for each button in 'modal'. happens once per button passed in
          document.getElementById(modal).style.display = "block"; // display elements that match value stored in 'modal'. This only opens ONE element because only one element will have the #id that matches modal. You need the data key value and ID name to exactly match for this to work.
      };
  });
  // collecting all the close buttons
  var closeBtns = document.querySelectorAll(".close");
  // run them all through forEach to add a close event to close window
  closeBtns.forEach(function addCloseClickEvent(btn) {
    // at click, run closeModal function
      btn.onclick = function closeModal() {
        // defines modal as the result of running closestEl with the button being pressed (btn) and the class "modal". in effect this matches the modal to close with the close button press.
          var modal = closestEl(btn, ".modal");
          modal.style.display = "none";
      };
  });
  
  window.onclick = function closeOnClick(event) { // turns off the modal if you click outside the modal content box anywhere in the window (aka on the modal dark background) 
      if (event.target.className === "modal") {
          event.target.style.display = "none";
      }
  };
}());


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




