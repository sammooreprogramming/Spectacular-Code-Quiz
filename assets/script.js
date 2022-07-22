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
    let homepageBtn = document.querySelector("#homepage-btn");
    let scoreSettingBtn = document.querySelector("#score-setting-btn");
    let buttonA = document.querySelector("#buttonA");
    let buttonB = document.querySelector("#buttonB");
    let buttonC = document.querySelector("#buttonC");
    let buttonD = document.querySelector("#buttonD");
    let leaderboardBtn = document.querySelector("#leaderboard-btn");
    let startBtn = document.querySelector("#start-btn");
    // container variables
    let homepageCard = document.getElementById("card-homepage");
    let quizCard = document.getElementById("card-quiz");
    let recapCard = document.getElementById("card-recap");
    let leaderboardCard = document.getElementById("card-leaderboard");
    // time variables
    let timerContainer = document.getElementById("timer-container");
    let time = 0;
    let clockLeft = 60;
    // other variables
    let correctAnswer;
    let wrongAnswer;





    //functions
    function showHomepage() {
        homepageCard.style.display = "block";
        quizCard.style.display = "none";
        recapCard.style.display = "none";
        leaderboardCard.style.display = "none";

    }

    function showQuiz() {
        homepageCard.style.display = "none";
        quizCard.style.display = "block";
        recapCard.style.display = "none";
        leaderboardCard.style.display = "none";
    }

    function showRecap() {
        homepageCard.style.display = "none";
        quizCard.style.display = "none";
        recapCard.style.display = "block";
        leaderboardCard.style.display = "none";
    }

    function showLeaderboard() {
        homepageCard.style.display = "none";
        quizCard.style.display = "none";
        recapCard.style.display = "none";
        leaderboardCard.style.display = "block";
    }

    showHomepage();
 
    // function createQuestionsAndAnswers() {
        
    // }



    function quizStart() {
    startBtn.onclick = function() {
        showQuiz();

    }
    }