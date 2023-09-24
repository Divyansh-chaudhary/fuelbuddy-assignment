<script setup lang="ts">
import AvatarIcon from "@/components/AvatarIcon.vue";
import MoreIcon from "@/components/MoreIcon.vue";
import { firebaseApp } from "@/firebase";
import useStore from "@/stores/store";
import { getAuth, signOut } from "firebase/auth";
import { ref } from "vue";
import { useRouter } from "vue-router";

defineProps<{ primary?: boolean }>();

const store = useStore();

const router = useRouter();

const loading = ref(false);

const isDropdownVisible = ref(false);

function showDropdown() {
  isDropdownVisible.value = true;
}

function hideDropdown() {
  isDropdownVisible.value = false;
}

async function logout() {
  loading.value = true;
  const auth = getAuth(firebaseApp);

  signOut(auth)
    .then(() => {
      store.logoutUser();
      router.push("/login");
    })
    .catch((error: any) => {
      alert(error.message);
    })
    .finally(() => {
      loading.value = false;
    });
}
</script>

<template>
  <main class="flex items-center justify-center min-h-screen">
    <div
      class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow"
    >
      <div
        @mouseleave="hideDropdown"
        class="flex justify-end px-4 pt-4 relative w-fit ml-auto"
      >
        <button
          id="dropdownButton"
          data-dropdown-toggle="dropdown"
          class="inline-block text-gray-500 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg text-sm p-1.5"
          type="button"
          @mouseenter="showDropdown"
        >
          <span class="sr-only">Open dropdown</span>
          <MoreIcon />
        </button>
        <div
          id="dropdown"
          :class="{
            hidden: !isDropdownVisible,
            'z-10 absolute top-full text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44': true,
          }"
        >
          <ul class="py-2" aria-labelledby="dropdownButton">
            <li class="text-center">
              <button
                @click="logout"
                class="inline-block text-gray-500 hover:bg-gray-100 rounded-lg text-sm p-1.5"
              >
                {{ loading ? "Logging out..." : "Logout" }}
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div class="flex flex-col items-center pb-10">
        <AvatarIcon />
        <h5 class="my-1 text-xl font-medium text-gray-900">
          {{ store.user?.name }}
        </h5>
        <span class="text-sm text-gray-500">{{ store.user?.email }}</span>
      </div>
    </div>
  </main>
</template>
