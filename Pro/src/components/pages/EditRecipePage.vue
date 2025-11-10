<script setup>
import RecipeForm from '../recipeForm/RecipeForm.vue';
import { ref, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const store = useStore();
const router = useRouter();
const detailData = ref();
const isLoading = ref(false);

onMounted(async () => {
    isLoading.value = true;
    const recipeId = router.currentRoute.value.params.id;
    await store.dispatch('recipe/getRecipeDetail', recipeId);
    detailData.value = store.state.recipe.recipeDetail;
    isLoading.value = false;
});
</script>
<template>
    <main>
        <div class="container-md my-5 py-5">
            <recipe-form v-if="detailData && !isLoading" :isEdit="true"></recipe-form>
        </div>
    </main>
</template>