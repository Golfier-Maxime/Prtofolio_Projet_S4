<script setup>
import { RouterLink, RouterView } from "vue-router";
import headerVue from "@/components/header.vue";
import footerVue from "@/components/footer.vue";
import LogoLight from '@/components/logo/lighttheme.vue'
</script>

<template>

  <div :class="isDark ? 'dark' : ''"> <!--si isDark = true, Dark mode | si isDark = false, Light mode-->
    <headerVue></headerVue>

    <body class="bg-B-White dark:bg-[#0D1117] duration-700">
      <LogoLight class="w-8" checked @click="isDark = !isDark"></LogoLight>

      <RouterView />

    </body>
    <footerVue></footerVue>

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