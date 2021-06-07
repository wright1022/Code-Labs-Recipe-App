import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'Big Kahuna Burger',
  //     'This IS a tasty burger!',
  //     'https://www.skinnytaste.com/wp-content/uploads/2015/05/grilled-lean-teriyaki-burger-550x390.jpg',
  //     [
  //       new Ingredient('Meat', 1),
  //       new Ingredient('Pineapple Slices', 2)
  //     ]),
  //   new Recipe(
  //     'Cheese Pizza',
  //     'A lovely cheese pizza, just for me!',
  //     'https://kitchenatics.com/wp-content/uploads/2020/09/Cheese-pizza-1.jpg',
  //     [
  //       new Ingredient('Dough', 1),
  //       new Ingredient('Cheese', 1),
  //       new Ingredient('Sauce', 1)
  //     ]),
  // ];

  private recipes: Recipe[] = [];

  constructor(private slService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number){
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}


