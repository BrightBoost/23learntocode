import { Component } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { RecipeServiceService } from '../providers/recipe-service.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent {
  recipe: Recipe = new Recipe(0, "", "");

  constructor(private recipeService: RecipeServiceService) {

  }

  public onSubmit() {
    this.recipeService.addARecipe(this.recipe).subscribe(res => console.log(res));
  }

}
