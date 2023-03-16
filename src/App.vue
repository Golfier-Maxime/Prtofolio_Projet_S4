<script setup>
import { RouterLink, RouterView } from "vue-router";
import headerVue from "@/components/header.vue";
import footerVue from "@/components/footer.vue";
import LogoLight from '@/components/logo/lighttheme.vue'

let innerCursor = document.querySelector(".inner-cursor");
let outerCursor = document.querySelector(".outer-cursor");

document.addEventListener("mousemove", moveCursor);

function moveCursor(e) {
  let x = e.clientX;
  let y = e.clientY;
  innerCursor.style.left = `${x}px`;
  innerCursor.style.top = `${y}px`;
  outerCursor.style.left = `${x}px`;
  outerCursor.style.top = `${y}px`;
}

let links = Array.from(document.querySelectorAll("a"));

links.forEach((link) => {
  link.addEventListener("mouseover", () => {
    innerCursor.classList.add("grow");
  });
  link.addEventListener("mouseleave", () => {
    innerCursor.classList.remove("grow");
  });
})

</script>

<template>
  <div :class="isDark ? 'dark' : ''"> <!--si isDark = true, Dark mode | si isDark = false, Light mode-->

    <headerVue></headerVue>

    <div class="pt-[88px] bg-B-White dark:bg-[#0D1117] duration-700">
      <LogoLight class="ml-1 w-8 fixed" checked @click="isDark = !isDark"></LogoLight>

      <RouterView />

    </div>
    <footerVue></footerVue>

  </div>
</template>

<style></style>

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