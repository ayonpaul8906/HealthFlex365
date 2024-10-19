// Random Exercise Generator
function generateRandomExercise() {
    const exercises = [
        "Do 15 push-ups!",
        "Hold a plank for 30 seconds!",
        "Complete 20 jumping jacks!",
        "Run in place for 1 minute!",
        "Do 10 squats!"
    ];
    const randomIndex = Math.floor(Math.random() * exercises.length);
    document.getElementById("random-exercise-output").textContent = exercises[randomIndex];
}

// Placeholder function for Jumping Jack Game
function startJumpingJackGame() {
    alert("Jumping Jack Game coming soon!");
}

// Open Quiz
function openQuiz() {
    document.getElementById("quiz").style.display = "block";
    loadQuiz();
}

// Quiz Questions
const quizQuestions = [
    {
        question: "What is the primary benefit of cardio exercises?",
        options: [
            "Build muscle",
            "Improve endurance",
            "Increase flexibility",
            "None of the above"
        ],
        answer: "Improve endurance"
    },
    {
        question: "How often should you engage in cardio workouts?",
        options: [
            "Once a week",
            "Daily",
            "Every other month",
            "Never"
        ],
        answer: "Daily"
    },
    {
        question: "Which of the following is a form of cardio exercise?",
        options: [
            "Yoga",
            "Weight lifting",
            "Swimming",
            "Stretching"
        ],
        answer: "Swimming"
    }
];

// Load Quiz Questions
function loadQuiz() {
    const quizContainer = document.getElementById("quiz-container");
    quizContainer.innerHTML = "";
    quizQuestions.forEach((q, index) => {
        const questionElement = document.createElement("div");
        questionElement.className = "question";
        questionElement.innerHTML = `<p>${index + 1}. ${q.question}</p>`;
        q.options.forEach(option => {
            questionElement.innerHTML += `
                <input type="radio" name="question${index}" value="${option}" /> ${option}<br />
            `;
        });
        quizContainer.appendChild(questionElement);
    });
    document.getElementById("submit-quiz").style.display = "block";
}

// Submit Quiz
function submitQuiz() {
    let score = 0;
    quizQuestions.forEach((q, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption && selectedOption.value === q.answer) {
            score++;
        }
    });
    document.getElementById("quiz-result").textContent = `You scored ${score} out of ${quizQuestions.length}!`;
}
