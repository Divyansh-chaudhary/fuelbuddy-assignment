<script setup lang="ts">
const props = defineProps<{
  loading?: boolean;
  type: "register" | "login";
  data: {
    email: string;
    password: string;
  };
  onSubmit: () => void;
}>();

const isLogin = props.type === "login";
const redirectLink = isLogin ? "/signup" : "/login";
</script>

<template>
  <div>
    <section class="bg-gray-50">
      <div
        class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
      >
        <div
          class="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0"
        >
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1
              class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl"
            >
              {{ isLogin ? "Sign in to your account" : "Register" }}
            </h1>
            <form class="space-y-4 md:space-y-6" @submit.prevent="onSubmit">
              <div>
                <label
                  htmlFor="email"
                  class="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your email
                </label>
                <input
                  v-model="props.data.email"
                  type="email"
                  name="email"
                  id="email"
                  class="bg-gray-50 text-gray-900 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  class="block mb-2 text-sm font-medium text-gray-900"
                >
                  Password
                </label>
                <input
                  v-model="props.data.password"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  required
                />
              </div>
              <button
                type="submit"
                class="bg-slate-950 w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                :disabled="loading"
              >
                {{ loading ? "Loading..." : isLogin ? "Sign in" : "Sign up" }}
              </button>
              <p class="text-sm font-light text-gray-500">
                {{
                  isLogin
                    ? "Don’t have an account yet? "
                    : "Already have an account? "
                }}
                <RouterLink
                  :to="redirectLink"
                  class="font-medium text-primary-600 hover:underline"
                >
                  {{ isLogin ? "Sign up" : "Sign in" }}
                </RouterLink>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
