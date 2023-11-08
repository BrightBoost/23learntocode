import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Recipe } from '../models/recipe.model'; 
import { Observable } from "rxjs";
import { map } from "rxjs/operators";


//ng generate service ./providers/RecipeService
@Injectable({
  providedIn: 'root'
})
export class RecipeServiceService {

  private recipeUrl = "http://localhost:8080/";
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  // get all the recipes
  public getAll(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.recipeUrl + "recipe").pipe(map(
      result => <Recipe[]>result
      )
    );
  }
  

  // add a recipe
  public addARecipe(recipe: Recipe) {
    return this.http.post<Recipe>(this.recipeUrl + "recipe", JSON.stringify(recipe), this.httpOptions);
  }
}
