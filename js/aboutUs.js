
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


//Team Member Class
class TeamMember {
    constructor(attributes){
        this.name = attributes.name;
        this.position = attributes.position;
        this.bio = attributes.bio;
    }

    giveBio() { //Method
       alert(`${this.bio}`);
    }
    }


const Kerry = new TeamMember({name:"Kerry", position:"UX Developer", bio:"Kerry is from Atlanta Georgia & reps it hard. He’s a music aficionado that believes design can be accessible & elegant as nature."});
const Bhumi = new TeamMember({name:"Bhumi", position:"Team Lead", bio:"Lambda School Student FSW16"});
const Hannah = new TeamMember({name:"Hannah", position:"UI Developer", bio:"Hannah is a Biology & Chinese double major at GaTech. In her free time, she bakes for friends, grows herbs/veggies, & read fantasy novels."})
const Faye = new TeamMember({name:"Faye", position:"UI Developer", bio:"Illustrator, web developer, technical trainer. Terrible at keeping plants alive."})
const York = new TeamMember({name:"York", position:"Backend Developer", bio:"York is a front-end architect that works in New York!"})
const Tracy = new TeamMember({name:"Tracy", position:"Backend Developer", bio:"Tracy likes cherries!"})
const Ben = new TeamMember({name:"Ben", position:"UI Developer", bio:"A native texan that loves coffee!"})


//Team Member Bio Alerts

const kerryImg = document.querySelector(".teamMember1 img")
const fayeImg = document.querySelector(".teamMember2 img")
const yorkImg = document.querySelector(".teamMember3 img")
const hannahImg = document.querySelector(".teamMember4 img")
const tracyImg = document.querySelector(".teamMember5 img")
const bhumiImg = document.querySelector(".teamMember6 img")
const benImg = document.querySelector(".teamMember7 img")

kerryImg.addEventListener("dblclick", function(){
    Kerry.giveBio();
})

fayeImg.addEventListener("dblclick", function(){
    Faye.giveBio();
})

yorkImg.addEventListener("dblclick", function(){
    York.giveBio();
})

hannahImg.addEventListener("dblclick", function(){
    Hannah.giveBio();
})

tracyImg.addEventListener("dblclick", function(){
    Tracy.giveBio();
})

bhumiImg.addEventListener("dblclick", function(){
    Bhumi.giveBio();
})
benImg.addEventListener("dblclick", function(){
    Ben.giveBio();
})