import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/10_minute_Recipe_for_a_Healthy_Garden_Salad_-_49859886512.jpg/1200px-10_minute_Recipe_for_a_Healthy_Garden_Salad_-_49859886512.jpg'),
    new Recipe('Cheese Pizza', 'A lovely cheese pizza, just for me!', 'https://kitchenatics.com/wp-content/uploads/2020/09/Cheese-pizza-1.jpg'),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
