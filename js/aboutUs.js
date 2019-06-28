
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

    sendURL() { //Method
        window.location.href = `${this.bio}`;
    }
    }


const Kerry = new TeamMember({name:"Kerry", position:"UX Developer", bio:"https://www.linkedin.com/in/kerry-mcphearson-9b361193/"});
const Bhumi = new TeamMember({name:"Bhumi", position:"Team Lead", bio:"https://github.com/bhumip214"});
const Hannah = new TeamMember({name:"Hannah", position:"UI Developer", bio:"https://github.com/HannahMarieWieser"})
const Faye = new TeamMember({name:"Faye", position:"UI Developer", bio:"https://www.linkedin.com/in/faye-skeen-1061273a/"})
const York = new TeamMember({name:"York", position:"Backend Developer", bio:"https://google.com/"})
const Tracy = new TeamMember({name:"Tracy", position:"Backend Developer", bio:"https://google.com/"})
const Ben = new TeamMember({name:"Ben", position:"UI Developer", bio:"https://www.linkedin.com/in/benjamin-allen-a4279a166/"})


//Team Member Bio Alerts

const kerryImg = document.querySelector(".teamMember1 img")
const fayeImg = document.querySelector(".teamMember2 img")
const yorkImg = document.querySelector(".teamMember3 img")
const hannahImg = document.querySelector(".teamMember4 img")
const tracyImg = document.querySelector(".teamMember5 img")
const bhumiImg = document.querySelector(".teamMember6 img")
const benImg = document.querySelector(".teamMember7 img")

kerryImg.addEventListener("dblclick", function(){
    Kerry.sendURL();
})

fayeImg.addEventListener("dblclick", function(){
    Faye.sendURL();
})

yorkImg.addEventListener("dblclick", function(){
    York.sendURL();
})

hannahImg.addEventListener("dblclick", function(){
    Hannah.sendURL();
})

tracyImg.addEventListener("dblclick", function(){
    Tracy.sendURL();
})

bhumiImg.addEventListener("dblclick", function(){
    Bhumi.sendURL();
})
benImg.addEventListener("dblclick", function(){
    Ben.sendURL();
})