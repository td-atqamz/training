<script>
import { RouterLink } from 'vue-router';
import NavigationBar from './NavigationBar.vue';
export default {
    components: {
        NavigationBar
    }
}
</script>
<template>
    <header class="shadow-sm container-fluid bg-white py-3 border-bottom fixed-top">
        <div class="container-md d-flex justify-content-between align-items-center">
            <RouterLink to="/"><img src="@/assets/images/Logo.png" alt="Logo" /></RouterLink>
            <navigation-bar></navigation-bar>
        </div>
    </header>
</template>