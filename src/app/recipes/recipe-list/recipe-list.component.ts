import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/10_minute_Recipe_for_a_Healthy_Garden_Salad_-_49859886512.jpg/1200px-10_minute_Recipe_for_a_Healthy_Garden_Salad_-_49859886512.jpg'),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/10_minute_Recipe_for_a_Healthy_Garden_Salad_-_49859886512.jpg/1200px-10_minute_Recipe_for_a_Healthy_Garden_Salad_-_49859886512.jpg'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
