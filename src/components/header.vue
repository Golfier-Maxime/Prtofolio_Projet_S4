<script setup>
import { ref } from 'vue';
import LogoMG from './logo/logo.vue'
import LogoLight from '@/components/logo/lighttheme.vue'
const props = defineProps({
    user: { type: Object, default: () => { } }
})
const menuOpen = ref(false)
const switchMenu = () => {
    menuOpen.value = !menuOpen.value
}


</script>

<template>
    <div class="sticky  h-[6px] top-0 left-0  bg-topbar "></div>
    <header :class="menuOpen && ` `, !menuOpen && `backdrop-blur-sm dark:backdrop-blur-sm`"
        class="fixed  top-[6px] w-full bg-white   flex justify-between items-center max-w-screen px-9 lg:px-40 z-20 h-16 lg:h-[82px]  dark:bg-Dark-Blue bg-opacity-75  dark:bg-opacity-75 ">
        <router-link to="/" class="w-24 ">
            <LogoMG class="w-10 h-10" />

        </router-link>
        <nav class=" relative right-4 md:right-9 lg:right-40 ">
            <div class="flex  z-50 md:hidden w-8 h-3 flex-col justify-between"
                :class="menuOpen && `fixed right-10`, !menuOpen && `relative`" @click="switchMenu">
                <span class="w-full h-[2px] bg-topbar transition-all dark:bg-topbar"
                    :class="menuOpen && `rotate-45`"></span>
                <span class="h-[2px] bg-topbar self-end transition-all dark:bg-topbar"
                    :class="menuOpen && ` -rotate-45 absolute w-full`, !menuOpen && `w-2/3`"></span>
            </div>
            <ul class="fixed z-40 flex flex-col justify-center top-0 bottom-0 left-0 right-0 bg-white md:bg-transparent translate-x-full transition-all md:translate-x-0 md:flex-row md:relative gap-10 items-center dark:bg-Dark-Blue dark:lg:bg-transparent "
                :class="menuOpen && `translate-x-0 md:translate-x-0`">
                <li class="md:hidden">
                    <RouterLink @click="switchMenu" to="/"
                        class=" dark:text-white duration-700 2xl:text-[24px] lg:text-[18px]">Accueil
                    </RouterLink>
                </li>

                <li>
                    <RouterLink @click="switchMenu" to="/projets"
                        class="dark:text-white duration-700 btn_header 2xl:text-[24px] lg:text-[18px]">Projets
                    </RouterLink>
                </li>
                <li>
                    <RouterLink @click="switchMenu" to="/apropos"
                        class="dark:text-white duration-700 btn_header 2xl:text-[24px] lg:text-[18px]">À Propos
                    </RouterLink>
                </li>
                <li>
                    <RouterLink @click="switchMenu" to="/contact"
                        class="dark:text-white duration-700 btn_header 2xl:text-[24px] lg:text-[18px]">Contact
                    </RouterLink>
                </li>
            </ul>
        </nav>
    </header>
</template>

<style>
.btn_header {
    position: relative;
    -webkit-transition: all .4s ease-in-out;
    -moz-transition: all .4s ease-in-out;
    -o-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;
}


.btn_header:before,
.btn_header:after {
    width: 0;
    content: "";
    bottom: -10px;
    background-image: linear-gradient(90deg, #d946ef, #dc2626, #fb923c);
    height: 2px;
    position: absolute;
    -webkit-transition: width .4s ease;
    -moz-transition: width .4s ease;
    -o-transition: width .4s ease;
    transition: width .4s ease;
}

.btn_header:before {
    right: 0%;

}

.btn_header:after {
    left: 0%;
}

.btn_header:hover:before,
.btn_header:hover:after {
    width: 50%;
}

.bg-topbar {
    background-image: linear-gradient(90deg, #d946ef, #dc2626, #fb923c);
}

nav .chevron {
    transition: rotate .4s ease;
}

nav .liste_container:hover .chevron {
    rotate: 180deg;
}

nav .liste {
    visibility: hidden;
    opacity: 0;
    top: 0%;
    transition: .4s ease-in-out;
}

nav .liste_container:hover .liste {
    visibility: visible;
    opacity: 1;
    top: 100%;
    transition: .4s ease-in-out;
}
</style>

