<script setup lang="ts">
import LoginSignupForm from "@/components/LoginSingupForm.vue";
import { ref } from "vue";

const loginData = ref({ email: "", password: "" });
</script>
<template>
  <LoginSignupForm type="login" :data="loginData" />
</template>
