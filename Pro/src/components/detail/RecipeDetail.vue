<script setup>
import RecipeDescription from "./RecipeDescription.vue"
import RecipeIngredients from "./RecipeIngredients.vue";
import RecipeDirections from "./RecipeDirections.vue";
import { useStore } from "vuex";
import { onMounted } from "vue";
import { useRoute } from "vue-router";

const store = useStore();
const route = useRoute();

onMounted(async () => {
    try {
        await store.dispatch('recipe/getRecipeDetail', route.params.id);
    } catch (error) {
        console.error('Error fetching recipe detail:', error);
    }
});

</script>
<template>
    <div class="col-12 col-sm-8">
        <recipe-description></recipe-description>
        <recipe-ingredients></recipe-ingredients>
        <recipe-directions></recipe-directions>
    </div>
</template>
