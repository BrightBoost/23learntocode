package com.hca.demo.controller;

import com.hca.demo.model.Recipe;
import com.hca.demo.repository.RecipeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

@RestController
public class RecipeController {

    private RecipeRepository recipeRepository;

    @Autowired
    public RecipeController(RecipeRepository recipeRepository) {
        this.recipeRepository = recipeRepository;
    }

    @GetMapping("/recipe")
    public List<Recipe> getRecipe() {
        return recipeRepository.getRecipeList();
    }

    // requestbody is used to pass something in as json in th request body
    @PostMapping("/recipe")
    public void addRecipe(@RequestBody Recipe recipe) {
        recipeRepository.addRecipe(recipe);
    }

    // requestparam is to send in variable via query params like recipe?id=1
    @GetMapping("/recipeById")
    public Recipe getRecipeById1(@RequestParam long id) {
        return recipeRepository.getRecipeById(id);
    }

    // pathvariable is to send in variable via url like this recipe/1
    @GetMapping("/recipe/{id}")
    public Recipe getRecipeById2(@PathVariable long id) {
        return recipeRepository.getRecipeById(id);
    }
}
