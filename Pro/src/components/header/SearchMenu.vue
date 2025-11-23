<script setup>
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
const router = useRouter();
const route = useRoute();
const isMobileSearchOpen = ref(false);

const searchValue = computed({
  get: () => store.state.recipe.searchTerm,
  set: (value) => store.commit("recipe/setSearchTerm", value),
});

const handleSearchNavigation = () => {
  if (route.name !== "homePage") {
    router.push({ name: "homePage" });
  }
};

const toggleMobileSearch = () => {
  isMobileSearchOpen.value = !isMobileSearchOpen.value;
  if (isMobileSearchOpen.value) {
    handleSearchNavigation();
  }
};
</script>

<template>
  <div class="col-sm-8 col-4 py-0">
    <div class="d-none d-sm-block">
      <div class="header__searchbar input-group align-items-center border rounded-pill">
        <span class="px-2"><i class="fa-solid fa-magnifying-glass"></i></span>
        <input
          type="text"
          class="form-control form-control-sm border-0 rounded-pill"
          placeholder="Search Recipe"
          v-model="searchValue"
          @input="handleSearchNavigation"
        />
      </div>
    </div>
    <div class="d-block d-sm-none border-end text-end px-3">
      <button class="btn border-0 bg-transparent p-0" type="button" @click="toggleMobileSearch">
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
    <div v-if="isMobileSearchOpen" class="mt-2 d-block d-sm-none">
      <div class="header__searchbar input-group align-items-center border rounded-pill">
        <span class="px-2"><i class="fa-solid fa-magnifying-glass"></i></span>
        <input
          type="text"
          class="form-control form-control-sm border-0 rounded-pill"
          placeholder="Search Recipe"
          v-model="searchValue"
          @input="handleSearchNavigation"
        />
      </div>
    </div>
  </div>
</template>
