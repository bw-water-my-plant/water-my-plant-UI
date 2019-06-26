// animate the menu

const animMenu = document.querySelectorAll('.tab')

console.log(animMenu)

TweenMax.fromTo(animMenu, 1, {x:20}, {x:0});
