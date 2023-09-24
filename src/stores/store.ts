import { ref } from "vue";
import { defineStore } from "pinia";

interface UserData {
  name: string | null;
  email: string | null;
  uid: string;
}

const useStore = defineStore("store", () => {
  const storeData = ref<null | UserData>(null);

  storeData.value =
    localStorage.getItem("user") === null
      ? null
      : JSON.parse(localStorage.getItem("user")!);

  function setUserDetails(user: UserData) {
    storeData.value = user;
    localStorage.setItem("user", JSON.stringify(user));
  }

  function logoutUser() {
    storeData.value = null;
    localStorage.clear();
  }

  return { user: storeData, setUserDetails, logoutUser };
});

export default useStore;
