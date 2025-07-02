const recipes = [
  {
    name: "Spaghetti Bolognese",
    ingredients: ["Spaghetti", "Tomatoes", "Ground Beef", "Onion", "Garlic"],
    instructions: "Cook pasta. Sauté onion and garlic. Add beef and tomatoes. Mix with pasta."
  },
  {
    name: "Chicken Salad",
    ingredients: ["Chicken", "Lettuce", "Tomatoes", "Cucumber", "Dressing"],
    instructions: "Grill chicken. Chop vegetables. Mix everything with dressing."
  },
  {
    name: "Pancakes",
    ingredients: ["Flour", "Milk", "Eggs", "Sugar", "Butter"],
    instructions: "Mix ingredients. Fry in a pan until golden brown."
  },
  {
    name: "Vegetable Stir Fry",
    ingredients: ["Broccoli", "Carrots", "Bell Peppers", "Soy Sauce", "Garlic"],
    instructions: "Stir-fry vegetables in a hot pan with garlic and soy sauce."
  },
  {
    name: "Beef Tacos",
    ingredients: ["Ground Beef", "Taco Shells", "Lettuce", "Cheese", "Tomato"],
    instructions: "Cook beef with spices. Fill taco shells with beef and toppings."
  },
  {
    name: "Tomato Soup",
    ingredients: ["Tomatoes", "Onion", "Garlic", "Cream", "Basil"],
    instructions: "Cook tomatoes with onion and garlic. Blend and simmer with cream and basil."
  },
  {
    name: "French Toast",
    ingredients: ["Bread", "Eggs", "Milk", "Cinnamon", "Maple Syrup"],
    instructions: "Dip bread in egg mixture. Fry until golden and serve with syrup."
  }  
];

const searchInput = document.getElementById("search");
const recipeList = document.getElementById("recipe-list");

function displayRecipes(filteredRecipes) {
  recipeList.innerHTML = "";
  filteredRecipes.forEach(recipe => {
    const recipeDiv = document.createElement("div");
    recipeDiv.classList.add("recipe");

    recipeDiv.innerHTML = `
      <h2>${recipe.name}</h2>
      <p><strong>Ingredients:</strong> ${recipe.ingredients.join(", ")}</p>
      <p><strong>Instructions:</strong> ${recipe.instructions}</p>
    `;

    recipeList.appendChild(recipeDiv);
  });
}

searchInput.addEventListener("input", () => {
  const searchText = searchInput.value.toLowerCase();
  const filtered = recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(searchText)
  );
  displayRecipes(filtered);
});

displayRecipes(recipes); // initial load

