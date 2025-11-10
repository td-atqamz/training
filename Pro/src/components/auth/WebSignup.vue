<script setup>
import { reactive, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import BaseInput from "../ui/BaseInput.vue";
import BaseButton from "../ui/BaseButton.vue";
import SignupMenu from "../header/SignupMenu.vue";

const store = useStore();
const router = useRouter();
const signupData = reactive({
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
  confirmationPassword: "",
  isLogin: false,
  imageLink: "",
});
const passwordStatusDisplay = ref("none");
const confirmPasswordMatch = ref("none");
const confirmPasswordDontMatch = ref("none");
const imageFlag = ref(true);

const passwordCheck = () => {
  if (signupData.password.length < 8) {
    passwordStatusDisplay.value = "block";
  } else {
    passwordStatusDisplay.value = "none";
  }
};

const register = async () => {
  if (
    signupData.password !== signupData.confirmationPassword ||
    signupData.password.length < 8
  ) {
    signupData.confirmationPassword = "";
    signupData.password = "";
    confirmPasswordDontMatch.value = "none";
    passwordStatusDisplay.value = "none";
  } else {
    await store.dispatch("auth/getRegisterData", signupData);
    router.push("/");
  }
};

const confirmationPasswordCheck = () => {
  if (signupData.confirmationPassword === "") {
    confirmPasswordMatch.value = "none";
    confirmPasswordDontMatch.value = "none";
  } else if (signupData.confirmationPassword !== signupData.password) {
    confirmPasswordMatch.value = "none";
    confirmPasswordDontMatch.value = "block";
  } else {
    confirmPasswordMatch.value = "block";
    confirmPasswordDontMatch.value = "none";
  }
};

const checkImage = (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(file);

  reader.addEventListener("load", () => {
    signupData.imageLink = reader.result;
  });
};
</script>

<template>
  <div class="container-fluid py-5" style="background-color: #f5f5f5">
    <div style="background-color: #ffffff" class="p-5 m-auto signup-form">
      <div class="text-center">
        <img src="../../assets/images/Logo.png" alt="Logo" />
        <h2 class="mt-4">Create your account</h2>
        <p>Enter your details to use all the app features.</p>
      </div>
      <form class="mt-3" @submit.prevent="register">
        <div class="row">
          <div class="col-md-6">
            <base-input
              type="text"
              identity="firstname"
              placeholder="Ex: Jack"
              label="Firstname"
              v-model="signupData.firstname"
            ></base-input>
          </div>
          <div class="col-md-6">
            <base-input
              type="text"
              identity="lastname"
              placeholder="Ex: Daniel"
              label="Lastname"
              v-model="signupData.lastname"
            ></base-input>
          </div>
        </div>
        <div class="my-4">
          <base-input
            type="text"
            identity="username"
            placeholder="Your Username"
            label="Username"
            v-model="signupData.username"
          ></base-input>
        </div>
        <div class="my-4">
          <base-input
            type="email"
            identity="email"
            placeholder="Your Email"
            label="Email"
            v-model="signupData.email"
          ></base-input>
        </div>
        <div class="my-4">
          <base-input
            type="password"
            identity="password"
            placeholder="Your Password"
            label="Password"
            v-model="signupData.password"
            @keyInput="passwordCheck"
          ></base-input>
          <p
            class="text-danger mt-1 fw-medium"
            style="font-size: 11px"
            :style="{ display: passwordStatusDisplay }"
          >
            The password field must be at least 8 characters
          </p>
        </div>
        <div class="my-4">
          <base-input
            type="password"
            identity="confirmationPassword"
            placeholder="Same as password"
            label="Confirmation Password"
            v-model="signupData.confirmationPassword"
            @keyInput="confirmationPasswordCheck"
          ></base-input>
          <p
            class="text-danger mt-1 fw-medium"
            style="font-size: 11px"
            :style="{ display: confirmPasswordDontMatch }"
          >
            The password confirmation does not match
          </p>
          <p
            class="text-success mt-1 fw-medium"
            style="font-size: 11px"
            :style="{ display: confirmPasswordMatch }"
          >
            The password confirmation does match
          </p>
        </div>
        <div class="my-4">
          <base-input
            type="file"
            identity="recipeImage"
            label="Profile Image"
            :isImage="imageFlag"
            @input="checkImage"
          ></base-input>
          <div class="profile-image-preview mt-3">
            <div class="border p-1 mt-2 rounded-circle profile-image-frame">
              <img
                :src="signupData.imageLink"
                class="rounded-circle"
                width="140"
                height="140"
                style="object-fit: cover"
              />
            </div>
            <div class="text-center profile-image-icon">
              <i
                class="fa-solid fa-camera fs-5 p-2 rounded-circle bg-white"
              ></i>
            </div>
          </div>
        </div>
        <base-button class="login w-100 my-3">Register</base-button>
      </form>
      <div class="text-center mt-4">
        <p class="fw-semibold">
          Already have account?<span style="color: #4c4ddc">
            <RouterLink to="/login" class="text-decoration-none">
              Login</RouterLink
            >
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.profile-image-preview {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.profile-image-frame {
  width: fit-content;
}

.profile-image-icon {
  margin-top: -24px;
}
</style>
