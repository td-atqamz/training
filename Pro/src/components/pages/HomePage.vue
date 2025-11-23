<script setup>
import RecipeList from '../recipe/RecipeList.vue'
import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const isLoading = ref(true);

const recipeList = computed(() => store.getters['recipe/filteredRecipes']);
const hasRecipes = computed(() => recipeList.value.length > 0);
const searchTerm = computed(() => store.state.recipe.searchTerm);

onMounted(async () => {
  try {
    if (!store.state.recipe.recipes.length) {
      await store.dispatch('recipe/getRecipeData');
    }
  }
  catch (error) {
    console.error('Error fetching recipe list:', error);
  }
  finally {
    isLoading.value = false;
  }
});
</script>
<template>
  <div class="container-md my-5 py-5">
    <div class="recipe__title text-center">
      <h2>All Recipe</h2>
      <p style="font-size: 15px">
        Find and share everyday cooking inspiration on
        All recipes. Discover recipes, cooks, videos, and
        how-tos based on the food you love and the friends
        you follow.
      </p>
    </div>
    <div v-if="isLoading" class="text-center py-5 text-secondary">
      Loading recipes...
    </div>
    <div v-else-if="hasRecipes">
      <recipe-list :recipes="recipeList"></recipe-list>
    </div>
    <div v-else class="text-center py-5 text-secondary">
      <p class="mb-1">No recipes found<span v-if="searchTerm"> for "{{ searchTerm }}"</span>.</p>
      <p class="mb-0">Try another keyword or add your own recipe.</p>
    </div>
  </div>
</template>
