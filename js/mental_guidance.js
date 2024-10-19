// Start the quiz by showing the quiz section
function startQuiz() {
    document.querySelector('.hero').classList.add('hidden');
    document.getElementById('quizSection').classList.remove('hidden');
}

// Restart the quiz by resetting the form
function restartQuiz() {
    document.getElementById('quizSection').classList.remove('hidden');
    document.getElementById('resultSection').classList.add('hidden');
    document.getElementById('healthForm').reset();
}

// Form submission and health guidance logic
document.getElementById('healthForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const age = parseInt(document.getElementById('age').value);
    const stressLevel = document.getElementById('stressLevel').value;
    const sleep = parseInt(document.getElementById('sleep').value);
    const exercise = document.getElementById('exercise').value;
    const screenTime = parseInt(document.getElementById('screenTime').value);
    const foodHabits = document.getElementById('foodHabits').value;

    // Validation for negative values and limits
    if (age < 0 || age >= 100 || sleep < 0 || sleep >= 24 || screenTime < 0 || screenTime >= 24) {
        alert("Please enter valid values: Age (0-99), Sleep (0-23 hours), Screen Time (0-23 hours).");
        return; // Stop further processing
    }

    let guidance = '<h3>Personalized Mental Health Advice:</h3>';

    // Sleep advice based on age and hours
    if (age < 30 && sleep < 7) {
        guidance += '<p><strong>Sleep Recommendation:</strong> Try to get at least 7-8 hours of sleep per night. Lack of sleep can affect cognitive function and stress management.</p>';
    } else if (age >= 30 && sleep < 6) {
        guidance += '<p><strong>Sleep Recommendation:</strong> You need more sleep to help your body recover and manage stress. Try relaxing bedtime routines to improve sleep quality.</p>';
    } else if (sleep >= 9) {
        guidance += '<p><strong>Sleep Recommendation:</strong> While long sleep is often good, excessive sleep may indicate fatigue or depression. Try to maintain a balanced sleep cycle of 7-8 hours.</p>';
    } else {
        guidance += '<p><strong>Sleep Recommendation:</strong> Your sleep is in a healthy range! Keep up the good sleep hygiene habits.</p>';
    }

    // Stress advice
    if (stressLevel === 'high') {
        guidance += '<p><strong>Stress Management:</strong> Since you often feel stressed, consider adopting meditation, yoga, or nature walks. Limiting screen time, especially before bed, can also help reduce stress.</p>';
    } else if (stressLevel === 'moderate') {
        guidance += '<p><strong>Stress Management:</strong> It’s good to manage moderate stress levels. Practice mindfulness or short breaks during the day to prevent burnout.</p>';
    } else {
        guidance += '<p><strong>Stress Management:</strong> Great! Your stress levels are manageable. Continue with whatever helps you stay relaxed and centered.</p>';
    }

    // Exercise advice
    if (exercise === 'none') {
        guidance += '<p><strong>Exercise Plan:</strong> Physical activity is critical for both mental and physical health. Start with light activities like walking, yoga, or home exercises.</p>';
    } else if (exercise === 'sometimes') {
        guidance += '<p><strong>Exercise Plan:</strong> You’re on the right track! Try to establish a consistent routine. 30-45 minutes of exercise, 4-5 days a week can improve mood and energy.</p>';
    } else {
        guidance += '<p><strong>Exercise Plan:</strong> Excellent! Consistent exercise helps reduce anxiety and boost your mood. Keep challenging yourself with new workouts.</p>';
    }

    // Screen time advice
    if (screenTime > 4) {
        guidance += '<p><strong>Screen Time:</strong> Too much screen time can affect your mental health. Try to limit screen time, especially before bed, to improve sleep quality.</p>';
    } else {
        guidance += '<p><strong>Screen Time:</strong> Good job! Maintaining low screen time can improve your mental well-being. Consider activities like reading or outdoor sports.</p>';
    }

    // Food habits advice
    if (foodHabits === 'junk') {
        guidance += '<p><strong>Dietary Advice:</strong> A balanced diet is essential. Consider incorporating more whole foods like fruits, vegetables, and lean proteins into your meals.</p>';
    } else if (foodHabits === 'low-calorie') {
        guidance += '<p><strong>Dietary Advice:</strong> While low-calorie diets can be beneficial, ensure you’re getting adequate nutrients. Focus on balanced meals for energy.</p>';
    } else {
        guidance += '<p><strong>Dietary Advice:</strong> Excellent! A balanced diet can enhance your mental health. Keep up with nutritious meals to support your well-being.</p>';
    }

    // Display the guidance
    document.getElementById('guidanceOutput').innerHTML = guidance;
    document.getElementById('quizSection').classList.add('hidden');
    document.getElementById('resultSection').classList.remove('hidden');
});
