// Questions Array
let questions = [
    {
        question: "The div element is what exactly?",
        choices: ["A a container", "B a divider", "C a function", "D a page"],
        answer: "A a container"
    },
    {
        question: "What symbol represents a terminator?",
        choices: ["A a ';'", "B a '%'", "C a '&'", "D a '*'"],
        answer: "A a ';'"
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
    }]


    //variable declaration
    var startBtn = document.querySelector("#Start-btn");
    let time = 0;
    let clockLeft = 60;

    //start button function creation and rednering of the function
    function startQuiz() {
       startBtn.addEventListener("click", function () {
        if (time === 0) {
            time = setInterval(function () {
                clockLeft--;
                "currenttime".textContent = "Time: " + clockLeft;
            })
        }
       })
    }