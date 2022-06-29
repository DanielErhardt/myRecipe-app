import mealsRecipes from './mealsRecipesData';
import cocktailsRecipes from './cocktailsRecipesData';

const recipesData = {
  meals: mealsRecipes,
  drinks: cocktailsRecipes,
};

const categoriesData = {
  meals: [
    { strCategory: 'Beef' },
    { strCategory: 'Breakfast' },
    { strCategory: 'Chicken' },
    { strCategory: 'Dessert' },
    { strCategory: 'Goat' },
  ],
  drinks: [
    { strCategory: 'Ordinary Drink' },
    { strCategory: 'Cocktail' },
    { strCategory: 'Shake' },
    { strCategory: 'Other/Unknown' },
    { strCategory: 'Cocoa' },
  ],
};

const mealsAreasData = {
  meals: [
    { strArea: 'American' },
    { strArea: 'British' },
    { strArea: 'Canadian' },
    { strArea: 'Chinese' },
    { strArea: 'Croatian' },
    { strArea: 'Dutch' },
    { strArea: 'Egyptian' },
    { strArea: 'French' },
    { strArea: 'Greek' },
    { strArea: 'Indian' },
    { strArea: 'Irish' },
    { strArea: 'Italian' },
    { strArea: 'Jamaican' },
    { strArea: 'Japanese' },
    { strArea: 'Kenyan' },
    { strArea: 'Malaysian' },
    { strArea: 'Mexican' },
    { strArea: 'Moroccan' },
    { strArea: 'Polish' },
    { strArea: 'Portuguese' },
    { strArea: 'Russian' },
    { strArea: 'Spanish' },
    { strArea: 'Thai' },
    { strArea: 'Tunisian' },
    { strArea: 'Turkish' },
    { strArea: 'Unknown' },
    { strArea: 'Vietnamese' },
  ],
};

module.exports = { recipesData, categoriesData, mealsAreasData };