package com.hca.demo.repository;

import com.hca.demo.model.Recipe;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class RecipeRepository {
    private static List<Recipe> recipeList = new ArrayList<>();
    private static long idCounter = 1;

    // add
    public void addRecipe(Recipe recipe) {
        recipe.setId(idCounter++);
        recipeList.add(recipe);
    }

    // get all
    public List<Recipe> getRecipeList() {
        return recipeList;
    }

    public Recipe getRecipeById(long id) {
        return recipeList.stream().filter(r -> r.getId() == id).findFirst().orElse(null);
    }

}
