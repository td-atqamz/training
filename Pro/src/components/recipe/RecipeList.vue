<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
const router = useRouter();

defineProps({
    recipes: {
        type: Array
    }
});

const favoriteIds = computed(() => store.state.auth.userLogin.favorites || []);
const isFavorited = (id) => favoriteIds.value.includes(id);
const toggleFavorite = async (recipeId) => {
    if (!store.state.auth.token) {
        router.push({ name: "login" });
        return;
    }

    await store.dispatch("auth/toggleFavorite", recipeId);
};
</script>

<template>
    <div class="recipe__list-recipe row">
        <div v-for="recipe in recipes" :key="recipe.id" class="col-12 col-lg-3 col-sm-4 position-relative"
            style="padding-top: 12px; padding-bottom: 12px">
            <RouterLink :to="'recipe/' + recipe.id" class="card text-decoration-none" style="height: 398px">
                <img v-bind:src="recipe.imageLink" class="card-img-top" alt="Food" height="240" width="285"
                    style="object-fit: cover" />
                <div class="card-body" style="color: #0a0a0a">
                    <p class="mb-0">{{ recipe.category }}</p>
                    <div class="h-50">
                        <h4 class="fs-5 mb-0">{{ recipe.name }}</h4>
                    </div>
                    <p>Recipe By {{ recipe.username }}</p>
                </div>
            </RouterLink>
            <button
                class="position-absolute text-secondary bg-light px-2 py-1 rounded-circle top-0 end-0 m-4 like-icon border-0"
                type="button" @click.stop="toggleFavorite(recipe.id)">
                <i :class="[isFavorited(recipe.id) ? 'fas' : 'far', 'fa-heart']"
                    :style="{ color: isFavorited(recipe.id) ? '#cb3a31' : 'inherit' }"></i>
            </button>
        </div>
    </div>
</template>
