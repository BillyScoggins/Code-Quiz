//Get elements
var startScreen = document.querySelector("#start");
var startBtn = document.querySelector("#start-btn");
var infoBox = document.querySelector(".info-box");
var exitBtn = document.querySelector(".quit");
var continueBtn = document.querySelector(".restart-btn");
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

continueBtn.onclick = () => {
    console.log("Clicked");
        infoBox.classList.add("hide");
        startScreen.classList.remove("hide");
};

    // continueBtn.addEventListener("click", function () {
    //     infoBox.classList.add("hide");
    // startScreen.classList.remove("hide");
// })

//If start button clicked

startBtn.onclick = () => {
    function countdown() {
        counter--;
        if (counter === 0) {
            clearInterval(startCountdown)
            quizEnd()
        };
        let timeRem = document.querySelector("#time-rem");
        let timeTag = "<span>Time left: " + counter + "</span>"
        timeRem.innerHTML = timeTag;

    };
    var startCountdown = setInterval(countdown, 1000);
    startScreen.classList.add("hide");
    quizBox.classList.remove("hide");
    showQuestions(queCount)

};

//Get questions and options from array

function showQuestions(index) {
    if (queCount >= 10) {
        return;
    }

    const queText = document.querySelector(".que-text");
    const optionList = document.querySelector("#choices");
    let queTag = "<span>" + questions[index].numb + "." + questions[index].question + "</span>";
    let optionTag = '<div class="option">' + questions[index].options[0] + '<span></span></div>';
    + '<div class="option">' + questions[index].options[1] + '<span></span></div>';
    + '<div class="option">' + questions[index].options[2] + '<span></span></div>';
    + '<div class="option">' + questions[index].options[3] + '<span></span></div>';

    queText.innerHTML = queTag;
    optionList.innerHTML = optionTag;
    const option =  optionList.querySelectorAll(".option");
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)");


    }
}

    //Show next question when question is answered

    function optionSelected(answer) {
        if (queCount >= 5) {

        let userAns = answer.textContent;
        let correctAns = questions[queCount].answer;
        console.log("Answer is correct");
        const response = document.querySelector("#response");
        response.innerHTML = `<div id="${response}"><span>Correct!</span></div>`;
        setTimeout(nextQuestion, 500)
        score += 1;


    } else {
        console.log("Answer is wrong");
        const response = document.querySelector("#response");
        response.innerHTML = `<div id="${response}"><span>Wrong!</span</div>`;
        setTimeout(nextQuestion, 500)
        counter -= 5
    }


}

function nextQuestion() {
    queCount++;
    if (queCount == 10) {

        quizEnd()
    };
    showQuestions(queCount);
    const response = document.querySelector("#response");
    response.innerHTML = `<div id="${response}"><span></span></div>`;
}

//End quiz if questions completed or time runs out

function quizEnd() {
    quizBox.classList.add("hide");
    endBox.classList.remove("hide");
    const scoreText = document.querySelector(".score");
    let scoreTag = '<h3 class="score"> Your score was ' + score + ' out of 10!</h3>';
    scoreText.innerHTML = scoreTag;
}
//Submit initials

submitBtn.onclick = () => {
    let initials = initialsText.ariaValueMax;

    //Store initials and score

    var resultsDataObj = {
        initials: initials,
        score: score

    }

    localStorage.setItem((localStorage.length + 1), JSON.stringify(resultsDataObj));
    initials.Text.value = ""
    location.reload();
}




// if (condition) {
//     return something;
// } else if (condition) {
//     return something;
// } else  {
//     return something
// }
