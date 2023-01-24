<script setup>
import { RouterLink, RouterView } from "vue-router";
import headerVue from "@/components/header.vue"
</script>

<template>

  <div :class="isDark ? 'dark' : ''"> <!--si isDark = true, Dark mode | si isDark = false, Light mode-->
    <headerVue></headerVue>

    <body class="bg-[#eee] dark:bg-[#333] duration-700">
      <!-- Rajouter une transition duration pour une transition de DarkMode à LightMode + douce -->

      <div class="absolute gap-3 flex top-[30px] left-[30px] items-center">
        <p class="relative text-lg dark:text-white duration-700">Dark Mode</p>
        <!-- Début Bouton Switch -->
        <label
          class="switch relative dark:border-transparent dark:hover:border-white border-2 rounded-full duration-700">
          <input type="checkbox" checked @click="isDark = !isDark">
          <span class="slider round bg-white before:bg-[#222] dark:before:bg-white"></span>
        </label>
        <!-- Fin Bouton Switch -->
      </div>

    </body>
    <RouterView />
  </div>
</template>

<style>

</style>

<script>
export default {
  data() {
    return {
      isDark: true,
    };
  },
  components: {

  },
};
</script>