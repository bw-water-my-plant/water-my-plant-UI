// animate the menu

const animMenu = document.querySelectorAll('.tab')

console.log(animMenu)

TweenMax.fromTo(animMenu, 1, {x:20}, {x:0});



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