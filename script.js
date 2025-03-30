let counter = 0;
let score = 0;
let start = false;
let correct = new Audio("sfx/correct.mp3");
let wrong = new Audio("sfx/wrong.mp3");

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
                correct.play();
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
                wrong.play();
                setTimeout(() => {
                    document.body.style.backgroundColor = "white";
                    counter++;
                    if (counter < 5) {
                        quiz(); 
                    } else {
                        setScore();
                    }
                }, 1600);
            }
        });

        buttons.push(b);
        questionContainer.appendChild(b);
    });
}

function startQuiz() {
    if (!start) {
        counter = 0;
        score = 0;
        let questionContainer = document.getElementById("questionContainer");
        questionContainer = document.createElement("div");
        questionContainer.id = "questionContainer";
        document.body.appendChild(questionContainer); 
        start = true;
        quiz();
        
    }
    else {
        alert("Quiz already started!");
    }
}

function quiz() {
    const questions = [
        { question: "What is the capital of France?", options: ["Berlin", "London", "Paris", "Madrid"], correctIndex: 2 },
        { question: "What is the largest planet in our solar system?", options: ["Saturn", "Earth", "Mars", "Jupiter"], correctIndex: 3 },
        { question: "What is the chemical symbol for gold?", options: ["Au", "Ag", "Pb", "Fe"], correctIndex: 0 },
        { question: "What is the smallest prime number?", options: ["2", "1", "3", "4"], correctIndex: 0 },
        { question: "What is the largest mammal in the world?", options: ["Blue Whale", "Elephant", "Giraffe", "Hippopotamus"], correctIndex: 0 },
        { question: "Which planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter", "Saturn"], correctIndex: 1 },
        { question: "What is the hardest natural substance on Earth?", options: ["Netherite", "Diamond", "Iron", "Platinum"], correctIndex: 1 },
        { question: "Who wrote the play 'Romeo and Juliet'?", options: ["J.K. Rowling", "Charles Dickens", "William Shakespeare", "Mark Twain"], correctIndex: 2 },
        { question: "What is the square root of 64?", options: ["3", "8", "7", "9"], correctIndex: 1 },
        { question: "Who painted the Mona Lisa?", options: ["Claude Monet", "Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci"], correctIndex: 3 },
        { question: "Which ocean is the largest?", options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"], correctIndex: 3 },
        { question: "What is the longest river in the world?", options: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"], correctIndex: 1 },
        { question: "Who developed the theory of relativity?", options: ["Isaac Newton", "Albert Einstein", "Nikola Tesla", "Marie Curie"], correctIndex: 1 },
        { question: "What is the capital of Japan?", options: ["Seoul", "Beijing", "Tokyo", "Hanoi"], correctIndex: 2 },
        { question: "What is the largest desert in the world?", options: ["Sahara Desert", "Gobi Desert", "Kalahari Desert", "Arctic Desert"], correctIndex: 3 },
        { question: "Which animal is known as the King of the Jungle?", options: ["Tiger", "Elephant", "Lion", "Giraffe"], correctIndex: 2 },
        { question: "Who painted the Starry Night?", options: ["Claude Monet", "Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci"], correctIndex: 1 },
        { question: "Which gas do plants absorb from the atmosphere for photosynthesis?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], correctIndex: 2 },
        { question: "What is the largest country by land area?", options: ["United States", "China", "Russia", "Canada"], correctIndex: 2 },
        { question: "What is the smallest country in the world?", options: ["Monaco", "San Marino", "Vatican City", "Nauru"], correctIndex: 2 },
        { question: "What is the hottest planet in our solar system?", options: ["Mercury", "Venus", "Earth", "Mars"], correctIndex: 1 },
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
    start = false; 
}

function resetQuiz() {
    counter = 0;
    score = 0;
    start = false
    closeScore();
    startQuiz();
}

function clearQuestion() {
    let questionContainer = document.getElementById("questionContainer");
    if (questionContainer) {
        questionContainer.innerHTML = '';
    }
}
