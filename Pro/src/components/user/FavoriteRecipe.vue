<script setup>
import { computed, onMounted } from "vue";
import { RouterLink } from "vue-router";
import { useStore } from "vuex";

const store = useStore();

const favorites = computed(() => store.state.auth.userLogin.favorites || []);
const favoriteRecipes = computed(() => {
    const recipes = store.state.recipe.recipes;
    return recipes.filter((recipe) => favorites.value.includes(recipe.id));
});

onMounted(async () => {
    if (!store.state.recipe.recipes.length) {
        await store.dispatch("recipe/getRecipeData");
    }
});

const removeFavorite = async (recipeId) => {
    await store.dispatch("auth/toggleFavorite", recipeId);
};
</script>

<template>
    <ul class="list-group">
        <li class="list-group-item">
            <div class="mb-3 mb-sm-0">
                <p class="my-0 fs-4 fw-semibold">Favorite Recipe</p>
                <p class="my-0 text-secondary">Save the recipe that you loved here</p>
            </div>
        </li>
        <li class="list-group-item">
            <p class="mt-2 mb-4 fs-5 fw-semibold">Recipe</p>
            <div v-if="favoriteRecipes.length" class="row">
                <div class="col-md-6 col-12 my-2" v-for="recipe in favoriteRecipes" :key="recipe.id">
                    <div class="card h-100">
                        <img :src="recipe.imageLink" :alt="recipe.name" height="180" class="card-img-top"
                            style="object-fit: cover" />
                        <div class="card-body">
                            <p class="mb-0">{{ recipe.category }}</p>
                            <h4 class="fs-5 mb-1">{{ recipe.name }}</h4>
                            <p class="text-secondary mb-0">By {{ recipe.username }}</p>
                        </div>
                        <div class="card-footer d-flex justify-content-between">
                            <RouterLink :to="'/recipe/' + recipe.id" class="btn edit-btn px-3 py-2 rounded-pill">View
                                Recipe</RouterLink>
                            <button class="btn delete-btn px-3 py-2 rounded-pill" type="button"
                                @click="removeFavorite(recipe.id)">
                                Remove
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else class="text-center text-secondary py-4">
                <p class="mb-1">No favorites yet.</p>
                <p class="mb-0">Tap the heart on a recipe to save it here.</p>
            </div>
        </li>
    </ul>
</template>
