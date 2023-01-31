<script setup>
import { ref } from 'vue';
const props = defineProps({
    user: { type: Object, default: () => { } }
})
const menuOpen = ref(false)
const switchMenu = () => {
    menuOpen.value = !menuOpen.value
}
</script>

<!-- <template>
    <div class="h-[6px] top-0 left-0  bg-topbar "></div>
    <div class="h-[50px] flex justify-between bg-white  dark:bg-[#161B22] ">
        <div class="">
            <p class="dark:text-white duration-700">Kakuhen</p>
        </div>
        <div class="flex gap-4">
            <p class="btn-header  dark:text-white duration-700">Accueil</p>
            <p class="dark:text-white duration-700">Projets</p>
            <p class="dark:text-white duration-700">A Propos</p>
            <p class="dark:text-white duration-700">Contact</p>
        </div>
    </div>
</template> -->

<template>
    <div class="h-[6px] top-0 left-0  bg-topbar "></div>
    <header
        class=" bg-white   flex justify-between items-center max-w-screen px-9 lg:px-40 z-20 h-16 lg:h-[82px] relative dark:bg-Dark-Blue">
        <router-link to="/" class="w-24">
            <p class="dark:text-white duration-700">Kakuhen</p>
        </router-link>
        <nav class="fixed right-4 md:right-9 lg:right-40 ">
            <div class="flex relative z-50 md:hidden w-8 h-3 flex-col justify-between" @click="switchMenu">
                <span class="w-full h-[2px] bg-Dark-Blue transition-all dark:bg-white"
                    :class="menuOpen && `rotate-45`"></span>
                <span class="h-[2px] bg-Dark-Blue self-end transition-all dark:bg-white"
                    :class="menuOpen && ` -rotate-45 absolute w-full`, !menuOpen && `w-2/3`"></span>
            </div>
            <ul class="fixed flex flex-col justify-center top-0 bottom-0 left-0 right-0 bg-white md:bg-transparent translate-x-full transition-all md:translate-x-0 md:flex-row md:relative gap-10 items-center dark:bg-Dark-Blue "
                :class="menuOpen && `translate-x-0 md:translate-x-0`">
                <li class="md:hidden">
                    <RouterLink @click="switchMenu" to="/" class="dark:text-white duration-700">Accueil</RouterLink>
                </li>
                <li>
                    <RouterLink @click="switchMenu" to="/create" class="dark:text-white duration-700">Projets
                    </RouterLink>
                </li>
                <li>
                    <RouterLink @click="switchMenu" to="/socials" class="dark:text-white duration-700">A Propos
                    </RouterLink>
                </li>
                <li>
                    <RouterLink @click="switchMenu" to="/collection" class="dark:text-white duration-700">Contact
                    </RouterLink>
                </li>
            </ul>
        </nav>
    </header>
</template>

<style>
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

<!-- <style>
.btn-header:hover {
    text-align: center;
    width: 100px;
    background: linear-gradient(97.16deg, #8F00FF 9.79%, #FFFFFF 236.98%);
    overflow: hidden;
}
</style> -->
