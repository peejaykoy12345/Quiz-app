let counter = 0;
let score = 0;

function createQuestion(question, options, correctIndex) {
    let questionContainer = document.getElementById("questionContainer");
    questionContainer.innerHTML = ''; 

    let p = document.createElement("p");
    p.textContent = question;
    questionContainer.appendChild(p);

    let buttons = [];

    options.forEach((option, index) => {
        let b = document.createElement("button");
        b.classList.add("option");
        b.textContent = option;
        b.addEventListener("click", function () {
            let result = index === correctIndex ? "Correct!" : "Incorrect.";
            buttons.forEach(button => button.disabled = true);

            if (result === "Correct!") {
                document.body.style.backgroundColor = "green";
                setTimeout(() => {
                    document.body.style.backgroundColor = "white";
                    score++;
                    counter++;
                    if (counter < 5) {
                        quiz(); 
                    } else {
                        setScore();
                    }
                }, 1000);
            } else {
                document.body.style.backgroundColor = "red";
                setTimeout(() => {
                    document.body.style.backgroundColor = "white";
                    counter++;
                    if (counter < 5) {
                        quiz(); 
                    } else {
                        setScore();
                    }
                }, 1000);
            }
        });

        buttons.push(b);
        questionContainer.appendChild(b);
    });
}

function startQuiz() {
    counter = 0;
    score = 0;
    let questionContainer = document.getElementById("questionContainer");
    questionContainer = document.createElement("div");
    questionContainer.id = "questionContainer";
    document.body.appendChild(questionContainer); 
    quiz();
}

function quiz() {
    const questions = [
        { question: "What is the capital of France?", options: ["Paris", "London", "Berlin", "Madrid"], correctIndex: 0 },
        { question: "What is the largest planet in our solar system?", options: ["Jupiter", "Earth", "Mars", "Saturn"], correctIndex: 0 },
        { question: "What is the chemical symbol for gold?", options: ["Au", "Ag", "Pb", "Fe"], correctIndex: 0 },
        { question: "What is the smallest prime number?", options: ["2", "1", "3", "4"], correctIndex: 0 },
        { question: "What is the largest mammal in the world?", options: ["Blue Whale", "Elephant", "Giraffe", "Hippopotamus"], correctIndex: 0 },
    ];

    const randomIndex = Math.floor(Math.random() * questions.length);
    const { question, options, correctIndex } = questions[randomIndex];

    createQuestion(question, options, correctIndex);
}

function setScore() {
    let popup = document.getElementById("scorePopup");
    popup.style.display = "block";
    document.getElementById("score").textContent = score * 10; 
    clearQuestion(); 
}

function closeScore() {
    let popup = document.getElementById("scorePopup");
    popup.style.display = "none";
    clearQuestion(); 
}

function resetQuiz() {
    counter = 0;
    score = 0;
    closeScore();
    startQuiz();
}

function clearQuestion() {
    let questionContainer = document.getElementById("questionContainer");
    if (questionContainer) {
        questionContainer.innerHTML = '';
    }
}
