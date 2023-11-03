package com.hca.demo.repository;

import com.hca.demo.model.Recipe;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class RecipeRepository {
    private static List<Recipe> recipeList = new ArrayList<>();

    // add
    public void addRecipe(Recipe recipe) {
        recipeList.add(recipe);
    }

    // get all
    public List<Recipe> getRecipeList() {
        return recipeList;
    }

}
