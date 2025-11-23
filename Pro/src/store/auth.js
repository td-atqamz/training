import axios from "axios";
import Cookies from "js-cookie";
import { buildDbUrl, firebaseConfig } from "./firebaseConfig";

export default {
  namespaced: true,
  state() {
    return {
      token: null,
      tokenExpirationDate: null,
      userLogin: {
        favorites: [],
      },
      isLogin: false,
    };
  },
  mutations: {
    setToken(state, { idToken, expiresIn }) {
      state.token = idToken;
      state.tokenExpirationDate = expiresIn;
      Cookies.set("tokenExpirationDate", expiresIn);
      Cookies.set("jwt", idToken);
    },
    setUserLogin(state, { userData, loginStatus }) {
      const sanitizedUser = {
        favorites: [],
        ...userData,
      };
      state.userLogin = sanitizedUser;
      state.isLogin = loginStatus;
    },
    setUserLogout(state) {
      state.userLogin = { favorites: [] };
      state.isLogin = false;
      state.token = null;
      state.tokenExpirationDate = null;
      Cookies.remove("tokenExpirationDate");
      Cookies.remove("jwt");
      Cookies.remove("UID");
    },
  },
  actions: {
    async getLoginData({ commit, dispatch }, payload) {
      if (!firebaseConfig.apiKey) {
        console.warn("Firebase API key is missing. Please set VITE_FIREBASE_API_KEY.");
        return;
      }

      const authURL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${firebaseConfig.apiKey}`;
      try {
        const { data } = await axios.post(authURL, {
          email: payload.email,
          password: payload.password,
          returnSecureToken: true,
        });
        commit("setToken", {
          idToken: data.idToken,
          expiresIn:
            new Date().getTime() + Number.parseInt(data.expiresIn) * 1000,
        });
        await dispatch("getUser", data.localId);
      } catch (error) {
        console.log(error);
      }
    },
    async getUser({ commit, state }, payload) {
      if (!firebaseConfig.databaseURL) {
        console.warn("Firebase database URL is missing. Please set VITE_FIREBASE_DB_URL.");
        return;
      }

      try {
        const endpoint = `${buildDbUrl("user")}?auth=${state.token}`;
        const { data } = await axios.get(endpoint);
        const userList = Object.values(data || {});
        const user = userList.find((person) => person.userId === payload);

        if (user) {
          Cookies.set("UID", user.userId);
          commit("setUserLogin", { userData: user, loginStatus: true });
        }
      } catch (error) {
        console.log(error);
      }
    },
    async getRegisterData({ commit, dispatch, state }, payload) {
      if (!firebaseConfig.apiKey) {
        console.warn("Firebase API key is missing. Please set VITE_FIREBASE_API_KEY.");
        return;
      }

      if (!firebaseConfig.databaseURL) {
        console.warn("Firebase database URL is missing. Please set VITE_FIREBASE_DB_URL.");
        return;
      }

      const authURL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${firebaseConfig.apiKey}`;
      try {
        const { data } = await axios.post(authURL, {
          email: payload.email,
          password: payload.password,
          returnSecureToken: true,
        });

        commit("setToken", {
          idToken: data.idToken,
          expiresIn: new Date().getTime() + Number.parseInt(data.expiresIn) * 1000,
        });

        const newUserData = {
          userId: data.localId,
          firstname: payload.firstname,
          lastname: payload.lastname,
          username: payload.username,
          email: payload.email,
          imageLink: payload.imageLink,
          favorites: [],
        };

        Cookies.set("UID", newUserData.userId);

        // Simpan user dengan key = userId
        await axios.put(
          `${buildDbUrl(`user/${newUserData.userId}`)}?auth=${state.token}`,
          newUserData
        );

        // Langsung commit ke state dan pastikan data segar
        commit("setUserLogin", { userData: newUserData, loginStatus: true });
        await dispatch("getUser", newUserData.userId);

      } catch (error) {
        console.log(error);
      }
    },
    async addNewUser({ commit, state }, payload) {
      if (!firebaseConfig.databaseURL) {
        console.warn("Firebase database URL is missing. Please set VITE_FIREBASE_DB_URL.");
        return;
      }

      try {
        await axios.post(
          `${buildDbUrl("user")}?auth=${state.token}`,
          payload
        );
        commit("setUserLogin", { userData: payload, loginStatus: true });
      } catch (error) {
        console.log(error);
      }
    },
    async toggleFavorite({ commit, state }, recipeId) {
      if (!state.token || !state.userLogin.userId) {
        return;
      }

      if (!firebaseConfig.databaseURL) {
        console.warn("Firebase database URL is missing. Please set VITE_FIREBASE_DB_URL.");
        return;
      }

      const currentFavorites = state.userLogin.favorites || [];
      const updatedFavorites = currentFavorites.includes(recipeId)
        ? currentFavorites.filter((id) => id !== recipeId)
        : [...currentFavorites, recipeId];

      const updatedUser = { ...state.userLogin, favorites: updatedFavorites };

      try {
        await axios.patch(
          `${buildDbUrl(`user/${state.userLogin.userId}`)}?auth=${state.token}`,
          { favorites: updatedFavorites }
        );
        commit("setUserLogin", { userData: updatedUser, loginStatus: true });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
