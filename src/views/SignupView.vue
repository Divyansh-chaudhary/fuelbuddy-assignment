<script setup lang="ts">
import LoginSignupForm from "@/components/LoginSingupForm.vue";
import { firebaseApp } from "@/firebase";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { ref } from "vue";
import useStore from "@/stores/store";
import { useRouter } from "vue-router";

const store = useStore();

const router = useRouter();

const signupData = ref({
  email: "",
  password: "",
});

const loading = ref(false);

const onRegister = async () => {
  const auth = getAuth(firebaseApp);
  loading.value = true;
  createUserWithEmailAndPassword(
    auth,
    signupData.value.email,
    signupData.value.password
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
      alert(errorMessage);
    })
    .finally(() => {
      loading.value = false;
    });
};
</script>

<template>
  <LoginSignupForm
    type="register"
    :data="signupData"
    @submit="onRegister"
    :loading="loading"
  />
</template>
