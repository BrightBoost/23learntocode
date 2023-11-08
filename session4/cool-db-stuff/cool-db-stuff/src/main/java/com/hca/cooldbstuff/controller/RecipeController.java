package com.hca.cooldbstuff.controller;

import com.hca.cooldbstuff.model.Recipe;
import com.hca.cooldbstuff.repository.RecipeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class RecipeController {
    private RecipeRepository recipeRepository;

    @Autowired
    public RecipeController(RecipeRepository recipeRepository) {
        this.recipeRepository = recipeRepository;
    }

    @GetMapping("/recipe")
    public List<Recipe> getRecipe() {
        return recipeRepository.findAll();
    }

    @GetMapping("/recipeByDescription/{description}")
    public List<Recipe> getRecipeByDescription(@PathVariable String description) {
        return recipeRepository.findByDescriptionIsContaining(description);
    }

    // requestbody is used to pass something in as json in th request body
    @PostMapping("/recipe")
    public void addRecipe(@RequestBody Recipe recipe) {
        recipeRepository.save(recipe);
    }

    // requestparam is to send in variable via query params like recipe?id=1
    @GetMapping("/recipeById")
    public Recipe getRecipeById1(@RequestParam long id) {
        return recipeRepository.findById(id).orElse(null);
    }

    // pathvariable is to send in variable via url like this recipe/1
    @GetMapping("/recipe/{id}")
    public Recipe getRecipeById2(@PathVariable long id) {
        return recipeRepository.findById(id).orElse(null);
    }


    @DeleteMapping("/recipe/{id}")
    public void deleteRecipe(@PathVariable long id) {
        recipeRepository.deleteById(id);
    }

    @PutMapping("/recipe/{id}")
    public void updateRecipe(@PathVariable long id, @RequestBody Recipe recipe) {
        Recipe recipe1 = recipeRepository.findById(id).orElse(null);
        if(recipe1 != null) {
            recipe1.setDescription(recipe.getDescription());
            recipe1.setIngredients(recipe.getIngredients());
            recipeRepository.save(recipe1);
        }
    }
}
