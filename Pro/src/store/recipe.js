import axios from "axios";
import { buildDbUrl, firebaseConfig } from "./firebaseConfig";

export default {
  namespaced: true,
  state() {
    return {
      recipes: [],
      recipeDetail: {},
      searchTerm: "",
    };
  },
  getters: {
    filteredRecipes(state) {
      const term = state.searchTerm.trim().toLowerCase();
      if (!term) {
        return state.recipes;
      }

      return state.recipes.filter((recipe) => {
        const haystack = [
          recipe.name,
          recipe.category,
          recipe.username,
          ...(recipe.ingredients || []),
        ]
          .filter(Boolean)
          .map((item) => item.toString().toLowerCase());

        return haystack.some((value) => value.includes(term));
      });
    },
  },
  mutations: {
    setRecipeData(state, payload) {
      state.recipes = payload;
    },
    setRecipeDetail(state, payload) {
      state.recipeDetail = payload;
    },
    setNewRecipe(state, payload) {
      state.recipes.push(payload);
    },
    setSearchTerm(state, payload) {
      state.searchTerm = payload;
    },
  },
  actions: {
    async getRecipeData({ commit }) {
      if (!firebaseConfig.databaseURL) {
        console.warn("Firebase database URL is missing. Please set VITE_FIREBASE_DB_URL.");
        return;
      }

      try {
        const { data } = await axios.get(buildDbUrl("recipes"));
        const arr = [];
        for (let key in data || {}) {
          arr.push({ id: key, ...data[key] });
        }
        commit("setRecipeData", arr);
      } catch (error) {
        console.error("Error fetching recipe data:", error);
      }
    },
    async getRecipeDetail({ commit }, payload) {
      if (!firebaseConfig.databaseURL) {
        console.warn("Firebase database URL is missing. Please set VITE_FIREBASE_DB_URL.");
        return;
      }

      try {
        const { data } = await axios.get(buildDbUrl(`recipes/${payload}`));
        commit("setRecipeDetail", data);
      } catch (error) {
        console.error("Error fetching recipe detail:", error);
      }
    },
    async addNewRecipe({ commit, rootState }, payload) {
      if (!firebaseConfig.databaseURL) {
        console.warn("Firebase database URL is missing. Please set VITE_FIREBASE_DB_URL.");
        return;
      }

      const newData = {
        ...payload,
        username: rootState.auth.userLogin.username,
        userId: rootState.auth.userLogin.userId,
        likes: [],
        createdAt: Date.now(),
      };
      try {
        const { data } = await axios.post(
          `${buildDbUrl("recipes")}?auth=${rootState.auth.token}`,
          newData
        );
        commit("setNewRecipe", { id: data.name, ...newData });
      } catch (error) {
        console.error("Error adding new recipe:", error);
      }
    },
    async deleteRecipe({ commit, dispatch, rootState }, payload) {
      if (!firebaseConfig.databaseURL) {
        console.warn("Firebase database URL is missing. Please set VITE_FIREBASE_DB_URL.");
        return;
      }

      try {
        await axios.delete(
          `${buildDbUrl(`recipes/${payload}`)}?auth=${rootState.auth.token}`
        );
        await dispatch("getRecipeData");
      } catch (error) {
        console.error("Error deleting recipe:", error);
      }
    },
    async updateRecipe({ dispatch, rootState }, { id, newRecipe }) {
      if (!firebaseConfig.databaseURL) {
        console.warn("Firebase database URL is missing. Please set VITE_FIREBASE_DB_URL.");
        return;
      }

      try {
        const { data } = await axios.put(
          `${buildDbUrl(`recipes/${id}`)}?auth=${rootState.auth.token}`,
          newRecipe
        );
        await dispatch("getRecipeData");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
