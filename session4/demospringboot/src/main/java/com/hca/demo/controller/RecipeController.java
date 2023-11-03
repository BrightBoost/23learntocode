package com.hca.demo.controller;

import com.hca.demo.model.Recipe;
import com.hca.demo.repository.RecipeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

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

    @PostMapping("/recipe")
    public void addRecipe(@RequestBody Recipe recipe) {
        recipeRepository.addRecipe(recipe);
    }
}
