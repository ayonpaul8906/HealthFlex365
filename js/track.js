// Define the questions and options
const questions = [
    { text: 'What is your primary fitness goal?', 
        options: ['Lose weight', 'Build muscle', 'Improve endurance', 'Increase flexibility', 'Maintain overall health'] },

    { text: 'How often do you currently exercise?', 
        options: ['Daily', 'Several times a week', 'Once a week', 'Rarely', 'Not currently exercising'] },

    { text: 'What type of exercise do you prefer?', 
        options: ['Cardio (e.g., running, cycling, swimming)', 'Strength training (e.g., weight lifting, resistance bands)', 'Flexibility and mobility (e.g., yoga, stretching)', 'Sports and recreational activities (e.g., basketball, tennis)', 'Group fitness classes (e.g., aerobics, spinning)'] },
    
    { text: 'Do you have any dietary restrictions or preferences?', 
        options: ['Vegetarian', 'Vegan', 'Gluten-free', 'Low-carb', 'No restrictions'] },
    
    { text: 'How many meals do you typically eat per day?', 
        options: ['Three main meals (breakfast, lunch, dinner)', 'Two main meals and snacks', 'Several small meals throughout the day', 'One main meal and snacks', 'Irregular eating patterns'] },

    { text: 'How many hours of sleep do you get on average per night?', 
        options: ['Less than 5 hours', '5-6 hours', '7-8 hours', '9-10 hours', 'More than 10 hours'] },

    { text: 'What is your preferred time for exercising?', 
        options: ['Morning', 'Afternoon', 'Evening', 'Late night', 'No specific preference'] },

    { text: 'How would you describe your current fitness level?', 
        options: ['Beginner', 'Intermediate', 'Advanced', 'Expert', 'Not sure'] },

    { text: 'Do you have any existing injuries or health conditions?', 
        options: ['Yes, and they affect my exercise routine', 'Yes, but they don’t affect my exercise routine', 'No', 'Not sure'] },
  
    { text: 'What motivates you the most to stay active?', 
        options: ['Achieving personal fitness goals', 'Seeing physical results (e.g., weight loss, muscle gain)', 'Social support or group activities', 'Enjoyment and fun in the activities', 'Mental well-being and stress relief'] }
];

let currentQuestionIndex = 0;

// Get elements from the DOM
const questionContainer = document.getElementById('question-container');
const optionsContainer = document.getElementById('options-container');
const continueBtn = document.getElementById('continue-btn');
const submitBtn = document.getElementById('submit-btn');

// Function to display the current question
function displayQuestion(index) {
    const question = questions[index];
    document.getElementById('question').textContent = question.text;
    optionsContainer.innerHTML = '';
    
    question.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option');
        button.onclick = (event) => handleOptionClick(event);
        optionsContainer.appendChild(button);
    });

    // Show or hide buttons based on the question index
    if (index < questions.length - 1) {
        continueBtn.style.display = 'block';
        submitBtn.style.display = 'none';
    } else {
        continueBtn.style.display = 'none';
        submitBtn.style.display = 'block';
    }
}

// Handle option click
function handleOptionClick(event) {
    const buttons = document.querySelectorAll('.option');
    buttons.forEach(button => button.classList.remove('selected'));
    event.target.classList.add('selected');
}

// Handle continue button click
function handleContinueClick() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion(currentQuestionIndex);
    }
}

// Handle submit button click
function handleSubmitClick() {
    alert('Thank you for your responses!');
    window.location.href = "index.html";
}

// Initialize the first question when the page loads
document.addEventListener('DOMContentLoaded', () => {
    displayQuestion(currentQuestionIndex);
    continueBtn.addEventListener('click', handleContinueClick);
    submitBtn.addEventListener('click', handleSubmitClick);
});
