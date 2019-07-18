import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  constructor(private slService: ShoppingListService) {}

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome!',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG/1536px-Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG',
      [
       new Ingredient('Meat', 1),
       new Ingredient('French Fries', 20)
    ]),

    new Recipe(
      'Big Fat Burger',
      'What else do I have to say?',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Cheddar-stuffed_burger.jpg/1546px-Cheddar-stuffed_burger.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ])
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

}
