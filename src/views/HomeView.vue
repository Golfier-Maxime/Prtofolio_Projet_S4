<script setup>
import html5 from '@/components/logo/html5.vue'
import Css3 from '../components/logo/css3.vue';
import javas from '../components/logo/javas.vue';
import vue3 from '../components/logo/vue3.vue';
import tailwindcss from '../components/logo/tailwindcss.vue';
import firebasevue from '../components/logo/firebase.vue';
import wordpressvue from '../components/logo/wordpress.vue';
import figma from '../components/logo/figma.vue';
import adobe from '../components/logo/adobe.vue';
import davinci from '../components/logo/davinci.vue';
</script>

<template>
    <div>
        <h1 class="mt-4 text-center titre tracking-wider text-[60px]  dark:text-white duration-700">MAXIME GOLFIER</h1>
        <div>
            <img src="" alt="">
            <div class="flex justify-center">
                <h1 class=" dark:text-white ">Etudiant Web devellopement</h1>
            </div>
            <div class="flex justify-center mt-2">
                <img class="w-[300px] rounded-md " src="/images/maximegolfier.png" alt="">
            </div>
        </div>
        <div class="ml-4 mr-4">
            <div>
                <h2 class="mt-8 text-lg font-bold tracking-wider dark:text-white duration-700"> Qui suis-je ?</h2>
                <div class="bar-title h-1 mt-1 w-[120px]"></div>
            </div>
            <p class="mt-4  dark:text-white duration-700">Etudiant de 23 ans, actuellement en deuxième
                année en
                MMI (Métiers du Multimédia et de l’Internet) de Montbéliard.
            <p class="mt-4 dark:text-white duration-700">
                Passionné par le web et son
                fonctionnement, le
                métier de développeur
                web, m'interesse car je considere que ce sont dans ces domaines que l'on
                fasconne les
                techniques, les outils, et les medias de demain.</p>
            </p>

            <p class="mt-4 dark:text-white duration-700">
                Curieux, volontaire et motivé, j'essaye avec l'expérience qui est mienne d'éllaborer des sites
                web
                toujours plus
                innovants afin d'en apprendre plus sur les nouvelles technologie.
            </p>
            <p class="mt-4 dark:text-white duration-700">
                Malgré que mon expérience soit encore jeune dans le milieu du web mon intérêt pour ce domaine ne
                cesse de me motiver et
                de faire grandir mes ambitions. Si cette présentation n'a pas suffi à vous convaincre de
                travailler
                avec moi, vous
                pouvez en apprendre plus encore plus dans la page :
            <p class="dark:text-white duration-700">À propos</p>
            </p>
        </div>
        <div class="ml-4 mr-4">
            <div>
                <h2 class="mt-8 text-lg font-bold tracking-wider dark:text-white duration-700"> Mes Compétences</h2>
                <div class="bar-title h-1 mt-1 w-[170px]"></div>
            </div>
            <div class="mt-4 flex flex-col items-center dark:text-white duration-700">
                <h3 class="font-bold tracking-wider dark:text-white duration-700">Développement Web</h3>
                <div class=" mt-6 flex gap-1 items-center">
                    <div class="flex flex-col items-center">
                        <html5 class="w-16 h-16"></html5>
                        <p class="">HTML</p><svg class="mt-1 ml-2" width="164" height="9" viewBox="0 0 166 9"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="164.242" height="7.02148"
                                class="stroke-Dark-Blue dark:stroke-white"></rect>
                            <rect width="150.242" height="8.02148" class="fill-Dark-Blue dark:fill-white">
                            </rect>
                        </svg>
                    </div>

                </div>
                <div class=" mt-6 flex gap-1 items-center">
                    <div class="flex flex-col items-center">
                        <Css3 class="w-16 h-16"></Css3>
                        <p class="">CSS</p><svg class="mt-1 ml-2" width="164" height="9" viewBox="0 0 166 9" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="164.242" height="7.02148"
                                class="stroke-Dark-Blue dark:stroke-white"></rect>
                            <rect width="145.242" height="8.02148" class="fill-Dark-Blue dark:fill-white">
                            </rect>
                        </svg>
                    </div>

                </div>
                <div class=" mt-6 flex gap-1 items-center">
                    <div class="flex flex-col items-center">
                        <javas class="w-16 h-16"></javas>
                        <p class="">JavaScript</p><svg class="mt-1 ml-2" width="164" height="9" viewBox="0 0 166 9"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="164.242" height="7.02148"
                                class="stroke-Dark-Blue dark:stroke-white"></rect>
                            <rect width="100.242" height="8.02148" class="fill-Dark-Blue dark:fill-white">
                            </rect>
                        </svg>
                    </div>

                </div>
                <div class=" mt-6 flex gap-1 items-center">
                    <div class="flex flex-col items-center">
                        <vue3 class="w-16 h-16"></vue3>
                        <p class="">Vue3Js</p><svg class="mt-1 ml-2" width="164" height="9" viewBox="0 0 166 9"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="164.242" height="7.02148"
                                class="stroke-Dark-Blue dark:stroke-white"></rect>
                            <rect width="140.242" height="8.02148" class="fill-Dark-Blue dark:fill-white">
                            </rect>
                        </svg>
                    </div>

                </div>
                <div class=" mt-6 flex gap-1 items-center">
                    <div class="flex flex-col items-center">
                        <tailwindcss class="w-16 h-16"></tailwindcss>
                        <p class="">Tailwind Css</p><svg class="mt-1 ml-2" width="164" height="9" viewBox="0 0 166 9"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="164.242" height="7.02148"
                                class="stroke-Dark-Blue dark:stroke-white"></rect>
                            <rect width="130.242" height="8.02148" class="fill-Dark-Blue dark:fill-white">
                            </rect>
                        </svg>
                    </div>

                </div>
                <div class=" mt-6 flex gap-1 items-center">
                    <div class="flex flex-col items-center">
                        <firebasevue class="w-16 h-16"></firebasevue>
                        <p class="">Firebase / Supabase</p><svg class="mt-1 ml-2" width="164" height="9"
                            viewBox="0 0 166 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="164.242" height="7.02148"
                                class="stroke-Dark-Blue dark:stroke-white"></rect>
                            <rect width="90.242" height="8.02148" class="fill-Dark-Blue dark:fill-white">
                            </rect>
                        </svg>
                    </div>

                </div>
                <div class=" mt-6 flex gap-1 items-center">
                    <div class="flex flex-col items-center">
                        <wordpressvue class="w-16 h-16"></wordpressvue>
                        <p class="">Wordpress</p><svg class="mt-1 ml-2" width="164" height="9" viewBox="0 0 166 9"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="164.242" height="7.02148"
                                class="stroke-Dark-Blue dark:stroke-white"></rect>
                            <rect width="80.242" height="8.02148" class="fill-Dark-Blue dark:fill-white">
                            </rect>
                        </svg>
                    </div>
                </div>
            </div>
            <div class="mt-12 flex flex-col items-center dark:text-white duration-700">
                <h3 class="font-bold tracking-wider">Autres compétences</h3>
                <div class=" mt-6 flex gap-1 items-center">
                    <div class="flex flex-col items-center">
                        <figma class="w-16 h-16"></figma>
                        <p class="">Figma</p><svg class="mt-1 ml-2" width="164" height="9" viewBox="0 0 166 9"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="164.242" height="7.02148"
                                class="stroke-Dark-Blue dark:stroke-white"></rect>
                            <rect width="100.242" height="8.02148" class="fill-Dark-Blue dark:fill-white">
                            </rect>
                        </svg>
                    </div>
                </div>
                <div class=" mt-6 flex gap-1 items-center">
                    <div class="flex flex-col items-center">
                        <adobe class="w-16 h-16"></adobe>
                        <p class="">Suite Adobe</p><svg class="mt-1 ml-2" width="164" height="9" viewBox="0 0 166 9"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="164.242" height="7.02148"
                                class="stroke-Dark-Blue dark:stroke-white"></rect>
                            <rect width="70.242" height="8.02148" class="fill-Dark-Blue dark:fill-white">
                            </rect>
                        </svg>
                    </div>
                </div>
                <div class=" mt-6 flex gap-1 items-center">
                    <div class="flex flex-col items-center">
                        <davinci class="w-16 h-16"></davinci>
                        <p class="">Davinci Resolve</p><svg class="mt-1 ml-2" width="164" height="9" viewBox="0 0 166 9"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="164.242" height="7.02148"
                                class="stroke-Dark-Blue dark:stroke-white"></rect>
                            <rect width="50.242" height="8.02148" class="fill-Dark-Blue dark:fill-white">
                            </rect>
                        </svg>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<style>
.bar-title {
    background-image: linear-gradient(90deg, #d946ef, #dc2626, #fb923c);
    border-radius: 2px;
}
</style>