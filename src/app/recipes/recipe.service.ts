import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Big Kahuna Burger',
      'This IS a tasty burger!',
      'https://www.skinnytaste.com/wp-content/uploads/2015/05/grilled-lean-teriyaki-burger-550x390.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Pineapple Slices', 2)
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
