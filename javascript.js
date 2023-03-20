//Get elements
var startScreen = document.querySelector("#start");
var startBtn = document.querySelector("#start-btn");
var infoBox = document.querySelector("info-box");
var exitBtn = document.querySelector(".quit");
var continueBtn = document.querySelector(".restart");
var quizBox = document.querySelector("quiz-box");
var endBox = document.querySelector("#quiz-end");
var submitBtn = document.querySelector("#save-score");
var initialsText = document.querySelector("#initials");
var existing = localStorage.getItem("results");
existing = existing ? existing.split(',') : [];
var queCount = 0;
var counter = 60;
var score = 0;

//If continue button pushed

continueBtn.onclick = ()=> {
    infoBox.classList.add("hide");
    startScreen.classList.remove("hide");
};

//If start button clicked

startBtn.onclick = () => { 
    function countdown() {
        counter--;
        if (counter=== 0){
            clearInterval(startCountdown)
            quizEnd()
        };
        let timeRem = document.querySelector("#time-rem");
        let timeTag = "<span>Time left: "+ counter +"</span>"
        timeRem.innerHTML = timeTag;

    };
    var startCountdown = setInterval(countdown, 1000);
    startScreen.classList.add("hide");
    quizBox.classList.remove("hide");
    showQuestions(queCount)

};

//Get questions and options from array

function showQuestions(index) {
    if (queCount>=10) {
        return;
    }

    const queText = document.querySelector(".que-text");
    const optionList = document.querySelector("#choices");
    let queTag = "<span>"+

}