// Questions Array
    let questions = [
    {
        question: "The div element is what exactly?",
        choices: ["A a container", "B a divider", "C a function", "D a page"],
        answer: "A a container"
    },
    {
        question: "What symbol represents a terminator?",
        choices: ["A a semicolon", "B a '%'", "C a '&'", "D a '*'"],
        answer: "A a semicolon."
    },
    {
        question: "I'm glad I have _______ to apply the functionality.",
        choices: ["A HTML", "B CSS", "C  Javascript", "D Java"],
        answer: "C Javascript"
    },
    {
        question: "What does the var command do?",
        choices: ["A  creates a document", "B creates a variable", "C creates a function", "creates parameters"],
        answer: "B creates a variable"
    }
    ];


    // variable declaration
    //buttons
    var homepageBtn = document.querySelector("#homepage-btn");
    var scoreSettingBtn = document.querySelector("#score-setting-btn");
    var buttonA = document.querySelector("#buttonA");
    var buttonB = document.querySelector("#buttonB");
    var buttonC = document.querySelector("#buttonC");
    var buttonD = document.querySelector("#buttonD");
    var leaderboardBtn = document.querySelector("#leaderboard-btn");
    var startBtn = document.querySelector("#start-btn");
    // container variables
    var homepageCard = document.getElementById("card-homepage");
    var quizCard = document.getElementById("card-quiz");
    var recapCard = document.getElementById("card-recap");
    var leaderboardCard = document.getElementById("card-leaderboard");
    // time variables
    let time = 0;
    let clockLeft = 60;
    // 



    //start button function creation and rednering of the function
    function startQuiz() {
       startBtn.addEventListener("click", function () {
        if (time === 0) {
            time = setInterval(function () {
                clockLeft--;
                clockLeft.textContent = "Time: " + clockLeft;
            })
        } else if (clockLeft = 0) {
           quizOver();
        }
       })
    }

 function quizOver() {

 }