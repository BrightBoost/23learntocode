package com.hca.demo.model;

import java.util.List;

public class Recipe {
    private String description;
    private List<String> ingredients;

    public Recipe(){

    }

    public Recipe(String description, List<String> ingredients) {
        this.description = description;
        this.ingredients = ingredients;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<String> getIngredients() {
        return ingredients;
    }

    public void setIngredients(List<String> ingredients) {
        this.ingredients = ingredients;
    }

    @Override
    public String toString() {
        return "Recipe{" +
                "description='" + description + '\'' +
                ", ingredients=" + ingredients +
                '}';
    }
}
