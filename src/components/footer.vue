<script setup>
import Github from './logo/github.vue';
import Linkedin from './logo/linkedin.vue'
import LogoMG from './logo/logo.vue'


</script>

<template>
    <footer class="bg-B-White dark:bg-[#0D1117] duration-700 pt-36">
        <div class="flex justify-center">
            <div class="bar-footer  w-2/3 h-[4px]"></div>
        </div>
        <div class="">
            <p class="mt-4 text-center titre tracking-widest 2xl:text-[44px] lg:text-[36px] dark:text-white duration-700">
                Maxime GOLFIER</p>
            <div class="flex justify-center gap-4 mr-4 mt-4 mb-4">
                <a class="res" href="https://www.linkedin.com/in/maxime-golfier-995ba1181/">
                    <Linkedin class="2xl:w-16 2xl:h-16 w-12 h-12" />
                </a>
                <a class="res" href="https://github.com/Golfier-Maxime">
                    <Github class="2xl:w-16 2xl:h-16 w-12 h-12" />
                </a>
            </div>
            <p class="text-center pb-4 2xl:text-[20px]  dark:text-white duration-700">© Maxime Golfier. 2023</p>
        </div>
    </footer>
</template>

<style>
.bar-footer {
    background-image: linear-gradient(90deg, #d946ef, #dc2626, #fb923c);
    border-radius: 2px;
}

.res:hover {
    scale: 1.2;
    transition: 0.3s;
}
</style>
