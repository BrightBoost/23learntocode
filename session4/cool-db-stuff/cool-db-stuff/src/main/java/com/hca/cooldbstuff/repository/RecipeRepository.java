package com.hca.cooldbstuff.repository;

import com.hca.cooldbstuff.model.Recipe;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RecipeRepository extends CrudRepository<Recipe, Long> {
    List<Recipe> findAll();
    List<Recipe> findByDescriptionIsContaining(String description);

   // https://www.baeldung.com/spring-jpa-like-queries
}
