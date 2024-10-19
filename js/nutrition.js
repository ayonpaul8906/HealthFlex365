// Meal plans data with Indian homemade food items
const mealPlans = {
    'fat-burn': {
      title: "Fat Burn Diet Plan 🏃‍♂",
      details: [
        { meal: "Breakfast", food: "Poha with Vegetables", calories: 200, benefits: "Low in fat, high in fiber.", drawbacks: "Moderate carbs.", image: "images/poha.png" },
        { meal: "Lunch", food: "Dal, Roti, and Mixed Vegetable Sabzi", calories: 400, benefits: "Balanced carbs, protein from dal.", drawbacks: "Moderate carbs.", image: "images/dal_roti.png" },
        { meal: "Dinner", food: "Cabbage Soup with Homemade Paneer", calories: 300, benefits: "Low calorie, rich in protein.", drawbacks: "Low fat.", image: "images/cabbage_soup.png" }
      ],
      totalCalories: 900
    },
    'muscle-build': {
      title: "Muscle Building Diet Plan 💪",
      details: [
        { meal: "Breakfast", food: "Egg Bhurji with Whole Wheat Toast", calories: 400, benefits: "High protein, healthy fats.", drawbacks: "Moderate carbs.", image: "images/egg_bhurji.png" },
        { meal: "Lunch", food: "Chicken Curry, Brown Rice, and Salad", calories: 700, benefits: "Protein-rich, healthy fats.", drawbacks: "Higher calorie intake.", image: "images/chicken_rice.png" },
        { meal: "Dinner", food: "Paneer Tikka with Whole Wheat Chapati", calories: 500, benefits: "Rich in protein and fiber.", drawbacks: "None.", image: "images/paneer_tikka.png" }
      ],
      totalCalories: 1600
    },
    'balanced': {
      title: "Balanced Diet Plan 🍽",
      details: [
        { meal: "Breakfast", food: "Upma with Vegetables", calories: 250, benefits: "Rich in fiber, balanced nutrients.", drawbacks: "Moderate carbs.", image: "images/upma.png" },
        { meal: "Lunch", food: "Rajma, Rice, and Cucumber Salad", calories: 600, benefits: "Good source of protein and carbs.", drawbacks: "High in carbs.", image: "images/rajma_rice.png" },
        { meal: "Dinner", food: "Dosa with Coconut Chutney", calories: 400, benefits: "Good source of protein, fiber.", drawbacks: "High in carbs.", image: "images/dosa.png" }
      ],
      totalCalories: 1250
    }
  };
  
  // Function to update meal plan based on selected goal
  document.getElementById('goalSelector').addEventListener('change', function() {
    const goal = this.value;
    const planDetailsDiv = document.getElementById('planDetails');
    
    if (goal && mealPlans[goal]) {
      const plan = mealPlans[goal];
      
      // Create plan details HTML with images
      let planHtml = `<h2>${plan.title}</h2>`;
      plan.details.forEach(meal => {
        planHtml += `
          <div class="plan-card">
            <img src="${meal.image}" alt="${meal.food}">
            <div>
              <h3>${meal.meal} <span class="symbol">🍽</span></h3>
              <p><strong>Food:</strong> ${meal.food}</p>
              <p><strong>Calories:</strong> ${meal.calories} kcal</p>
              <p><strong>Benefits:</strong> ${meal.benefits}</p>
              <p><strong>Drawbacks:</strong> ${meal.drawbacks}</p>
            </div>
          </div>
        `;
      });
      
      // Display total calories
      planHtml += `<h3>Total Calories: ${plan.totalCalories} kcal</h3>`;
      planDetailsDiv.innerHTML = planHtml;
      
    } else {
      planDetailsDiv.innerHTML = '<p>Please select a goal to see the meal plan.</p>';
    }
  });
  