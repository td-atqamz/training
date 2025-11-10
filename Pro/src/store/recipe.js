import axios from "axios";

export default {
  namespaced: true,
  state() {
    return {
      recipes: [],
      recipeDetail: {},
    };
  },
  getters: {},
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
  },
  actions: {
    async getRecipeData({ commit }) {
      try {
        const { data } = await axios.get(
          "https://vue-js-project-936b9-default-rtdb.firebaseio.com/recipes.json"
        );
        const arr = [];
        for (let key in data) {
          arr.push({ id: key, ...data[key] });
        }
        commit("setRecipeData", arr);
      } catch (error) {
        console.error("Error fetching recipe data:", error);
      }
    },
    async getRecipeDetail({ commit }, payload) {
      try {
        const { data } = await axios.get(
          `https://vue-js-project-936b9-default-rtdb.firebaseio.com/recipes/${payload}.json`
        );
        commit("setRecipeDetail", data);
      } catch (error) {
        console.error("Error fetching recipe detail:", error);
      }
    },
    async addNewRecipe({ commit, rootState }, payload) {
      const newData = {
        ...payload,
        username: rootState.auth.userLogin.username,
        userId: rootState.auth.userLogin.userId,
        likes: ["null"],
        createdAt: Date.now(),
      };
      try {
        const { data } = await axios.post(
          `https://vue-js-project-936b9-default-rtdb.firebaseio.com/recipes.json?auth=${rootState.auth.token}`,
          newData
        );
        commit("setNewRecipe", { id: data.name, ...newData });
      } catch (error) {
        console.error("Error adding new recipe:", error);
      }
    },
    async deleteRecipe({ commit, dispatch, rootState }, payload) {
      try {
        await axios.delete(
          `https://vue-js-project-936b9-default-rtdb.firebaseio.com/recipes/${payload}.json?auth=${rootState.auth.token}`
        );
        await dispatch("getRecipeData");
      } catch (error) {
        console.error("Error deleting recipe:", error);
      }
    },
    async updateRecipe({ dispatch, rootState }, { id, newRecipe }) {
      try {
        const { data } = await axios.put(
          `https://vue-js-project-936b9-default-rtdb.firebaseio.com/recipes/${id}.json?auth=${rootState.auth.token}`,
          newRecipe
        );
        await dispatch("getRecipeData");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
