
window.addEventListener('load', (event) => {
    alert('Welcome to the Fun Bus!');
})

//Our Core Values

const buildValue = document.querySelector(".buildValue .valueInfo")
const buildImage = document.querySelector(".buildValue img")

const learnValue = document.querySelector(".learnValue .valueInfo")
const learnImage = document.querySelector(".learnValue img")

const growValue = document.querySelector(".growValue .valueInfo")
const growImage = document.querySelector(".growValue img")



buildValue.addEventListener("mouseover", function(event){
    buildImage.style.transform = "scale(0.7)";

    setTimeout(function() {
        buildImage.style.transform = "scale(1)";
        }, 500);
})

learnValue.addEventListener("mouseover", function(event){
    learnImage.style.transform = "scale(0.7)";

    setTimeout(function() {
        learnImage.style.transform = "scale(1)";
        }, 500);
})

growValue.addEventListener("mouseover", function(event){
    growImage.style.transform = "scale(0.7)";

    setTimeout(function() {
        growImage.style.transform = "scale(1)";
        }, 500);
})

