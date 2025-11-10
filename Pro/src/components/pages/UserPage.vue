<script setup>
import UserMenu from "../user/UserMenu.vue"
import FavoriteRecipe from "../user/FavoriteRecipe.vue"
import PersonalInfo from "../user/PersonalInfo.vue"
import UserRecipe from "../user/UserRecipe.vue"
import { computed } from "vue"
import { useRoute } from "vue-router"

const route = useRoute()
const component = {
    "favorite-recipes": FavoriteRecipe,
    "personal-info": PersonalInfo,
    "user-recipe": UserRecipe
}

const getRoute = computed(() => {
    return route.params.component
})
</script>

<template>
    <div class="container-md my-5 py-5">
        <div class="row">
            <user-menu @changeComponent="$router.push($event)"></user-menu>
            <div class="col-lg-9">
                <component :is="component[getRoute]"></component>
            </div>
        </div>
    </div>
</template>