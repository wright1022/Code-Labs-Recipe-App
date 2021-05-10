import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/10_minute_Recipe_for_a_Healthy_Garden_Salad_-_49859886512.jpg/1200px-10_minute_Recipe_for_a_Healthy_Garden_Salad_-_49859886512.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe(
      'Cheese Pizza',
      'A lovely cheese pizza, just for me!',
      'https://kitchenatics.com/wp-content/uploads/2020/09/Cheese-pizza-1.jpg',
      [
        new Ingredient('Dough', 1),
        new Ingredient('Cheese', 1),
        new Ingredient('Sauce', 1)
      ]),
  ];

  constructor(private slService: ShoppingListService) {

  }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
