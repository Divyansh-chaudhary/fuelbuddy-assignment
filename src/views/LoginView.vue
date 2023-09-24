<script setup lang="ts">
import LoginSignupForm from "@/components/LoginSingupForm.vue";
import { firebaseApp } from "@/firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { ref } from "vue";
import useStore from "@/stores/store";
import { useRouter } from "vue-router";

const props = withDefaults(
  defineProps<{
    showForgotPasswordLink?: boolean;
    rememberLogin?: boolean;
    showSignup?: boolean;
  }>(),
  {
    showForgotPasswordLink: false,
    rememberLogin: false,
    showSignup: true,
  }
);

const loginData = ref({ email: "divyansh@yopmail.com", password: "Test@123" });

const loading = ref(false);

const store = useStore();

const router = useRouter();

const onLogin = async () => {
  const auth = getAuth(firebaseApp);
  loading.value = true;
  signInWithEmailAndPassword(
    auth,
    loginData.value.email,
    loginData.value.password
  )
    .then((userCredential) => {
      const user = userCredential.user;
      store.setUserDetails({
        name: user.displayName,
        email: user.email,
        uid: user.uid,
      });
      router.push("/");
    })
    .catch((error) => {
      const errorMessage = error.message;
      if (errorMessage.includes("auth/invalid-login-credentials")) {
        alert("Invalid login credentials");
      } else {
        alert(errorMessage);
      }
    })
    .finally(() => {
      loading.value = false;
    });
};
</script>

<template>
  <LoginSignupForm
    type="login"
    :data="loginData"
    @submit="onLogin"
    :loading="loading"
    :showForgotPasswordLink="props.showForgotPasswordLink"
    :rememberLogin="rememberLogin"
    :showSignup="showSignup"
  />
</template>
