<script setup>
import Github from './logo/github.vue';
import Linkedin from './logo/linkedin.vue'
import LogoMG from './logo/logo.vue'


</script>

<template>
    <footer class="bg-white dark:bg-[#0D1117] duration-700 pt-4">
        <div class="flex justify-center">
            <div class="bar-footer  w-2/3 h-[4px]"></div>
        </div>
        <div class="">
            <p class="mt-4 text-center titre tracking-widest text-2xl  dark:text-white duration-700">Maxime GOLFIER</p>
            <div class="flex justify-center gap-4 mr-4 mt-4 mb-4">
                <a href="https://www.linkedin.com/in/maxime-golfier-995ba1181/">
                    <Linkedin class="w-10 h-10" />
                </a>
                <a href="https://github.com/Golfier-Maxime">
                    <Github class="w-10 h-10" />
                </a>
            </div>
            <p class="text-center pb-4  dark:text-white duration-700">© Maxime Golfier. 2023</p>
        </div>
    </footer>
</template>

<style>
.bar-footer {
    background-image: linear-gradient(90deg, #d946ef, #dc2626, #fb923c);
    border-radius: 2px;
}
</style>
