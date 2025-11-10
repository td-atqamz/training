<script>
import SearchMenu from './SearchMenu.vue';
import SignupMenu from './SignupMenu.vue';
import ProfileMenu from './ProfileMenu.vue';
import { computed, ref, watch } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();
    const menuComponent = ref('signup-menu');
    const components = {
      'search-menu': SearchMenu,
      'signup-menu': SignupMenu,
      'profile-menu': ProfileMenu
    };

    const getToken = computed(() => {
      return store.state.auth.token;
    });

    if (!getToken.value) {
      menuComponent.value = 'signup-menu';
    } else {
      menuComponent.value = 'profile-menu';
    }

    watch(getToken, (newValue, oldValue) => {
      menuComponent.value = newValue ? 'profile-menu' : 'signup-menu';
    });

    return {
      menuComponent,
      components
    };
  },
  components: {
    SearchMenu,
    SignupMenu,
    ProfileMenu
  }
}
</script>
<template>
  <div class="header__navbar row
    justify-content-between align-items-center" style="width: 450px">
    <search-menu></search-menu>
    <component :is="components[menuComponent]"></component>
  </div>
</template>